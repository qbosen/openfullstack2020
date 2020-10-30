```
npm config set registry https://registry.npm.taobao.org
npm config get registry
sudo npm install -g n
sudo n stable
sudo npm install npm@latest -g
```

## install json server
```
sudo npm install -g json-server
npx json-server --port 3001 --watch db.json

// develop dependency
npm install json-server --save-dev
// add to package.json
"server": "json-server -p3001 --watch db.json"
```