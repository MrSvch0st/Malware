var WshShell = WScript.CreateObject("WScript.Shell");  
WshShell.AppActivate("1.js");  
WshShell.sendKeys("{a 1000}");  
WshShell.run("1.js");