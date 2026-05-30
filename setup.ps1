function Invocation {
	irm -Uri https://moj0.github.io/setup.ps1 | iex
}

function Test{
	Write-Output "foo"
}

function Win-Util {
	$ConfigUrl = "https://moj0.github.io/winutil_config.json"
	$ConfigFile = Join-Path $env:TEMP "winutil.json"

	Invoke-WebRequest $ConfigUrl -OutFile $ConfigFile

	& ([ScriptBlock]::Create((irm "https://christitus.com/win"))) `
		-Config $ConfigFile `
		-NoUI
}

function Install-Scoop {
	Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
	Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression
}

function Install-Tools {
    scoop install clink
}

function Configure-Clink {
    clink config prompt use pure
    clink set clink.logo none
}

function Configure-Registry {
    $clinkBat = "$env:USERPROFILE\scoop\apps\clink\current\clink.bat"

    New-ItemProperty `
        -Path "HKCU:\Software\Microsoft\Command Processor" `
        -Name "AutoRun" `
        -Value "`"$clinkBat`"" `
        -PropertyType String `
        -Force
		
	New-ItemProperty `
		-Path "HKCU:\Software\Microsoft\Windows\CurrentVersion\Search" `
		-Name "BingSearchEnabled" `
		-Value 0 `
		-PropertyType DWord `
		-Force
}

Test
# Win-Util
# Install-Scoop
# Install-Tools
# Configure-Clink
# Configure-Registry
