#!/bin/bash 
mkdir /ui
echo cloning amexio.github.io
cd /ui/ && git clone https://deepali-arvind:magic%2312@github.com/meta-magic/amexio.github.io.git -b v4.1 
echo download gulp
cd amexio.github.io/ && npm install gulp && npm install --save del && gulp build  

echo build  amexio-ng-extensions.tgz  and copying to dir
cd dist && npm pack && mv amexio-ng-extensions-4.1.3.tgz amexio-ng-extensions.tgz && cp amexio-ng-extensions.tgz /var/www/html/desireplatform/amexio-builds/ 
echo clone ui- services
cd /ui/ && git clone https://deepali-arvind:magic%2312@github.com/meta-magic/dna-ms-ui.git && git clone https://deepali-arvind:magic%2312@github.com/meta-magic/codepipeline-ms-ui.git && git clone https://deepali-arvind:magic%2312@github.com/meta-magic/auth-ms-ui.git && git clone https://deepali-arvind:magic%2312@github.com/meta-magic/user-ms-ui.git && git clone https://deepali-arvind:magic%2312@github.com/meta-magic/project-ms-ui.git && git clone https://deepali-arvind:magic%2312@github.com/meta-magic/platform-commons.git 

echo building platform-commons 
cd /ui/ && cd platform-commons/ && rm -rf node_modules && rm -rf package.json &&  mv package_build.json  package.json && npm i && npm run build:dist 
echo building dna-ms-ui
cd /ui/dna-ms-ui/  && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json && npm i  && npm run build:dist  
echo building codepipeline-ms-ui
cd /ui/codepipeline-ms-ui/ && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json && npm i && npm run build:dist   
echo auth-ms-ui
cd /ui/auth-ms-ui/  && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json && npm i && npm run build:dist 
echo building user-ms-ui 
cd /ui/user-ms-ui/  && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json &&  npm i &&  npm run build:dist  
echo building project-ms-ui
cd /ui/project-ms-ui/  && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json && npm i && npm run build:dist  
echo building desire3duishell
 echo clone desire3duishell
cd /ui/ && git clone https://deepali-arvind:magic%2312@github.com/meta-magic/desire3duishell.git 
echo building desire3duishell

cd /ui/desire3duishell/ && cp -rf ui/dna-ms-ui/assests/* assets/S && rm -rf node_modules && rm -rf package.json && mv package_build.json package.json && npm i && ng build --prod 
