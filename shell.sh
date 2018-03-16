#!/bin/bash 
mkdir $1/ui
mkdir $1/ui/logs
echo cloning amexio.github.io
cd $1/ui/ && git clone  https://$3:$4@github.com/meta-magic/amexio.github.io.git -b $2 >> $1/ui/logs/amexio.log
echo download gulp
cd amexio.github.io/ && npm install gulp && npm install --save del && gulp build  >> $1/ui/logs/amexio.log


echo build  amexio-ng-extensions.tgz  and copying to dir
cd dist && npm pack && mv amexio-ng-extensions-4.1.0.tgz amexio-ng-extensions.tgz && cp amexio-ng-extensions.tgz /var/www/html/desireplatform/amexio-builds/   >> $1/ui/logs/amexio.log
echo clone ui- services
cd $1/ui/ && git clone  https://$3:$4@github.com/meta-magic/dna-ms-ui.git && git clone  https://$3:$4@github.com/meta-magic/codepipeline-ms-ui.git && git clone  https://$3:$4@github.com/meta-magic/auth-ms-ui.git && git clone  https://$3:$4@github.com/meta-magic/user-ms-ui.git && git clone  https://$3:$4@github.com/meta-magic/project-ms-ui.git && git clone  https://$3:$4@github.com/meta-magic/platform-commons.git  >> $1/ui/logs/ui.log
 echo building platform-commons 
cd $1/ui/ && cd platform-commons/ && rm -rf node_modules && rm -rf package.json &&  mv package_build.json  package.json && npm i && npm run build:dist  >> $1/ui/logs/platform.log
echo building dna-ms-ui
cd $1/ui/dna-ms-ui/  && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json && npm i  && npm run build:dist  >> $1/ui/logs/dnaui.log
echo building codepipeline-ms-ui
cd $1/ui/codepipeline-ms-ui/ && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json && npm i && npm run build:dist   >> $1/ui/logs/codeui.log
echo auth-ms-ui
cd $1/ui/auth-ms-ui/  && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json && npm i && npm run build:dist  >> $1/ui/logs/authui.log
echo building user-ms-ui 
cd $1/ui/user-ms-ui/  && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json &&  npm i &&  npm run build:dist  >> $1/ui/logs/userui.log
echo building project-ms-ui
cd $1/ui/project-ms-ui/  && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json && npm i && npm run build:dist  >> $1/ui/logs/prjui.log
echo building desire3duishell
 echo clone desire3duishell
cd $1/ui/ && git clone  https://$3:$4@github.com/meta-magic/desire3duishell.git  >> $1/ui/logs/ui.log
echo building desire3duishell

cd $1/ui/desire3duishell/  && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json && npm i && ng build --prod >> $1/ui/logs/desireui.log

 









