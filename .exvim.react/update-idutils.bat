@echo off
set DEST=.\.exvim.react
set TOOLS=D:\exVim\vimfiles\tools\
set EXCLUDE_FOLDERS=node_modules
set TMP=%DEST%\_ID
set TARGET=%DEST%\ID
call %TOOLS%\shell\batch\update-idutils.bat
