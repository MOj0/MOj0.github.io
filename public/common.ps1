if (-not (Test-Path variable:WinVer)) {
	Write-Error "WinVer is not defined."
    exit
}

$winutil_config_name = "win" + $WinVer + "util_config.json!"
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
    scoop bucket add nerd-fonts
	scoop bucket add extras

	scoop install clink
	scoop install firacode
	scoop install ffmpeg
	scoop install extras/mpv
	scoop install extras/godot-mono
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


function Prompt-Install-FilePilot {
	$inputValue = Read-Host "Install FilePilot now? (y/n)"

	if ($inputValue -eq "y") {
		winget install -e --id Voidstar.FilePilot
		Refresh-Path
		
		Start-Process -Wait "FPilot"
		
		Add-FilePilot-Config
	}
}

function Add-Godot-Exe-Env-Variable {
	$godotKey = "GODOT4"
	$godotExeEnv = '%USERPROFILE%\scoop\apps\godot-mono\current\godot-mono.exe'

	[System.Environment]::SetEnvironmentVariable($godotKey, $godotExeEnv, 'User')

	Write-Host "Added environment variable $godotKey : $godotExeEnv"
}


Win-Util
Execute-OOShutUp10
Refresh-Path
Install-Scoop
Install-Tools
Configure-Clink
Configure-Registry
Add-PowerToys-Keybindings
Install-DMZ-White
Prompt-Install-FilePilot
Add-Godot-Exe-Env-Variable

Write-Host "Setup successful!" -ForegroundColor Green