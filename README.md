# ReactSSR

基于 React 的服务端渲染框架

## 操作步骤

1. 进入 node_server 目录

```
npm install
or
yarn install
```

下载依赖

```
node app.js
```

可以看到 server is running on 4001 就说明成功

2. 在根目录下

```
npm install
or
yarn install
```

下载依赖

```
npm run dev:build:server
or
yarn dev:build:server
```

先打包 server 文件, 否则 nodemon 会识别不到入口文件

```
yarn dev
or
npm run dev
```

看到 server is running on 3001 就说明成功, 然后打开 [http://localhost:3001/](http://localhost:3001/) 就可以看到页面啦
