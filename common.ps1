if (-not (Test-Path variable:WinVer)) {
	Write-Error "WinVer is not defined."
    exit
}

$winutil_config_name = "win" + $WinVer + "util_config.json"
$ooshutup_config_name = "ooshutup" + $WinVer + ".cfg"


function Download-File($filename) {
	$ConfigUrl = "https://moj0.github.io/$filename"
	$FilePath = Join-Path $env:TEMP $filename
	
	# Make sure parent folder exists
	$parentDir = Split-Path $FilePath -Parent
    New-Item -ItemType Directory -Path $parentDir -Force | Out-Null

	Invoke-WebRequest $ConfigUrl -OutFile $FilePath
	
	return $FilePath;
}


function Download-Config-File($configFile) {
	return Download-File("win_configs/$configFile");
}


function Refresh-Path {
    $env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") +
                ";" +
                [System.Environment]::GetEnvironmentVariable("Path","User")
}


function Win-Util {
	$ConfigFile = Download-Config-File($winutil_config_name)
	
	$tempScript = Join-Path $env:TEMP "winutil.ps1"
	Invoke-WebRequest `
		-Uri "https://christitus.com/win" `
		-OutFile $tempScript

	$proc = Start-Process powershell.exe `
		-Verb RunAs `
		-ArgumentList "-ExecutionPolicy Bypass -File `"$tempScript`" -Config `"$ConfigFile`" -NoUI" `
		-Wait `
		-PassThru

	Write-Host "Winutil completed."
}


function Execute-OOShutUp10 {
    <#
    .SYNOPSIS
        Downloads and runs OO Shutup 10 with my custom config
    #>
    try {
		$ConfigFile = Download-Config-File($ooshutup_config_name)
	
		Write-Host "Downloading OO Shutup 10 ..."
        $OOSU_filepath = Join-Path $env:temp "\OOSU10.exe"
        Invoke-WebRequest -Uri "https://dl5.oo-software.com/files/ooshutup10/OOSU10.exe" -OutFile $OOSU_filepath

        Write-Host "Executing OO Shutup 10 with config $ConfigFile"
        Start-Process $OOSU_filepath $ConfigFile
        Write-Host "Successfully applied OO Shutup 10 config!" -ForegroundColor Green
    } catch {
        Write-Host "Error Downloading and Running OO Shutup 10" -ForegroundColor Red
	}
}


function Install-Scoop {
	Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

	if (-not (Get-Command scoop -ErrorAction SilentlyContinue)) {
		Invoke-Expression "& {$(Invoke-RestMethod get.scoop.sh)} -RunAsAdmin"
	}
	else {
		Write-Host "Scoop is already installed."
	}
}


function Install-Tools {
	scoop install main/git

    scoop bucket add nerd-fonts
	scoop bucket add extras
	scoop bucket add games

	scoop install clink
	scoop install firacode
	scoop install ffmpeg

	scoop install main/go
	scoop install main/python
	scoop install main/rust
	scoop install main/7zip
	scoop install main/dotnet-sdk

	scoop install extras/mpv
	scoop install extras/godot-mono
	scoop install extras/blender
	scoop install extras/brave
	scoop install extras/audacity
	scoop install extras/foobar2000
	scoop install extras/paint.net
	scoop install extras/notepadplusplus
	scoop install extras/obs-studio
	scoop install extras/ds4windows

	scoop install games/epic-games-launcher
}

function Configure-Clink {
    clink config prompt use pure
    clink set clink.logo none
	clink autorun install -- quiet
}


function Configure-Registry {
    $clinkBat = "cls & $env:USERPROFILE\scoop\apps\clink\current\clink.bat inject --autorun quiet"

    New-ItemProperty `
        -Path "HKCU:\Software\Microsoft\Command Processor" `
        -Name "AutoRun" `
        -Value "$clinkBat" `
        -PropertyType String `
        -Force
		
	New-ItemProperty `
		-Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" `
		-Name "BingSearchEnabled" `
		-Value 0 `
		-PropertyType DWord `
		-Force
}


function Add-PowerToys-Keybindings {
	$KeybindParentFolder = Join-Path $env:LocalAppData "Microsoft\PowerToys\Keyboard Manager"
	$KeybindingConfig = Download-Config-File("powertoys_keybindings.json")

	# NOTE: The file has to be named `default.json` (thanks Microsoft)
	Move-Item -Force -Path $KeybindingConfig -Destination (Join-Path $KeybindParentFolder "default.json")
}


function Add-FilePilot-Config {
	$FilePilotFolder = Join-Path $env:LocalAppData (Join-Path "Voidstar" "FilePilot")
	
	$FilePilotConfig = Download-Config-File("FPilot-Config.json")
	$FilePilotUserData = Download-Config-File("FPilot-UserData.json")

	Move-Item -Force -Path $FilePilotConfig -Destination $FilePilotFolder
	Move-Item -Force -Path $FilePilotUserData -Destination $FilePilotFolder
}

function Install-DMZ-White {
	$DMZFilePath = Download-File("dmz_white.zip")
	
	Expand-Archive $DMZFilePath -DestinationPath (Join-Path $env:TEMP "DMZWhite")
	
	$InstallPath = Join-Path $env:TEMP "DMZWhite/Install.inf"
	
	Start-Process -FilePath "$env:SystemRoot\System32\InfDefaultInstall.exe" `
		-ArgumentList $InstallPath `
		-Verb RunAs
}


function Install-FilePilot {
	winget install -e --id Voidstar.FilePilot
	Refresh-Path
	
	Start-Process -Wait "FPilot"
	
	Add-FilePilot-Config
}

# Yoinked from: https://github.com/psygreg/autoresolvedeb/blob/main/autoresolvedeb.sh
function Install-DaVinci-Resolve{
	$product = "DaVinci Resolve"
	$referid = "dfd43085ef224766b06b579ce8a6d097"
	$siteUrl = "https://www.blackmagicdesign.com/api/support/latest-stable-version/davinci-resolve/windows"
	$userAgent = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.75 Safari/537.36"

	# Get release information
	$releaseInfoRoot = Invoke-RestMethod -Uri $siteUrl -Method Get -Headers @{
		"User-Agent" = $userAgent
	}
	$releaseInfo = $releaseInfoRoot.windows

	# Extract version information
	$downloadId = $releaseInfo.downloadId
	$releaseNum = $releaseInfo.releaseNum
	$major = $releaseInfo.major
	$minor = $releaseInfo.minor
	$pkgver = "$major.$minor.$releaseNum"

	if ($releaseNum -eq 0) {
		$filever = "$major.$minor"
	} else {
		$filever = $pkgver
	}

	$archiveName = "DaVinci_Resolve_${filever}_Windows"
	$archiveRunName = "DaVinci_Resolve_${filever}_Windows"

	# Registration request
	$reqJson = @{
		firstname = "Arch"
		lastname  = "Linux"
		email     = "someone@archlinux.org"
		phone     = "202-555-0194"
		country   = "us"
		street    = "Bowery 146"
		state     = "New York"
		city      = "AUR"
		product   = $product
	} | ConvertTo-Json -Compress

	# Request the actual download URL
	$siteUrl = "https://www.blackmagicdesign.com/api/register/us/download/$downloadId"

	$response = Invoke-WebRequest `
		-UseBasicParsing `
		-Uri $siteUrl `
		-Method Post `
		-Headers @{
			"Host"            = "www.blackmagicdesign.com"
			"Accept"          = "application/json, text/plain, */*"
			"Origin"          = "https://www.blackmagicdesign.com"
			"User-Agent"      = $userAgent
			"Referer"         = "https://www.blackmagicdesign.com/support/download/$referid/Windows"
			"Accept-Language" = "en-US,en;q=0.9"
		} `
		-ContentType "application/json;charset=UTF-8" `
		-Body $reqJson


	$srcUrl = $response.Content

	# Set the progress preference for the next Invoke-WebRequest to not print number of bytes written
	$oldProgressPreference = $ProgressPreference
	$ProgressPreference = 'SilentlyContinue'

	Write-Host "downloading from $srcUrl"
	Write-Host "..............................."

	$archivePath = Join-Path $env:temp $archiveName

	# Download the archive
	Invoke-WebRequest `
		-Uri $srcUrl `
		-OutFile "$archivePath.zip"

	$ProgressPreference = $oldProgressPreference
	Write-Host "Downloaded $archivePath.zip"

	# Unzip the archive
	7z x "$archivePath.zip" "-o$archivePath" -y

	# Run installer
	Start-Process -FilePath "$archivePath\$archiveName.exe" -Wait

	# Cleanup
	Remove-Item "$archivePath.zip"
	Remove-Item "$archivePath" -Recurse
}

function Add-Godot-Exe-Env-Variable {
	$godotKey = "GODOT4"
	$userprofile = [Environment]::ExpandEnvironmentVariables("%USERPROFILE%")  # We need to expand this env variable, otherwise VSCode launch won't work
	$godotExeEnv = $userprofile + "\scoop\apps\godot-mono\current\godot-mono.exe"

	[System.Environment]::SetEnvironmentVariable($godotKey, $godotExeEnv, 'User')
	Write-Host "Added environment variable $godotKey : $godotExeEnv"
}


Write-Host "Performing setup for Windows " $WinVer

Win-Util
Execute-OOShutUp10
Refresh-Path
Install-Scoop
Install-Tools
Configure-Clink
Configure-Registry
Add-PowerToys-Keybindings
Install-DMZ-White
Install-FilePilot
Install-DaVinci-Resolve
Add-Godot-Exe-Env-Variable

Write-Host "Setup successful!" -ForegroundColor Green