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

function DisableBingSearch-Registry {
	New-ItemProperty `
		-Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" `
		-Name "BingSearchEnabled" `
		-Value 0 `
		-PropertyType DWord `
		-Force
}


Write-Host "Performing debloat for Windows " $WinVer

Win-Util
Execute-OOShutUp10
Refresh-Path
DisableBingSearch-Registry

Write-Host "Debloat successful!" -ForegroundColor Green