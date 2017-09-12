@ECHO Zipping
    del /Q project.zip
    rmdir testproject /s /q
 
    mkdir testproject
    mkdir testproject/hooks
    copy config.xml testproject\config.xml
    copy .DS_Store "testproject/.DS_Store"
    copy icon.png "testproject/icon.png"
    copy package.json "testproject/package.json"

    xcopy /y /e hooks testproject\hooks\
    xcopy /y /e platforms testproject\platforms\
    xcopy /y /e www testproject\www\
    xcopy /y /e plugins testproject\plugins\

"c:\Program Files\7-Zip\7z.exe" a project.zip testproject
c:\curl\bin\curl -u origamiv@gmail.com:9030404 -X PUT -F file=@project.zip http://build.phonegap.com/api/v1/apps/2563816
c:\curl\bin\curl -u origamiv@gmail.com:9030404 -X POST -d '' https://build.phonegap.com/api/v1/apps/2563816/build

timeout 10
del /Q *.apk
c:\curl\bin\curl -u origamiv@gmail.com:9030404 -o medit.apk https://build.phonegap.com/apps/2563816/download/android