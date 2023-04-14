# assets-retry-vite-plugin

静态资源重试vite-plugin

<img width="827" alt="screenshot 2022-06-18 at 00 47 39" src="https://user-images.githubusercontent.com/37169906/174351359-72ae0089-51c4-41d6-a910-43f68a1dcb8e.png">

## Installation

### Install with npm
```bash
$ npm install assets-retry-vite-plugin --registry=https://verdaccio.qn76.cn/
```

### Install with yarn
```bash
$ yarn add assets-retry-vite-plugin --registry=https://verdaccio.qn76.cn/
```

## Usage

```javascript
// vite.config.js
const AssetsRetryWebpackPlugin = require('assets-retry-vite-plugin');
plugins: [
    createHtmlPlugin(),
    assetsRetryVitePlugin({
        domain: ['https://a.qn76.cn/', 'http://localhost:8080/'], // 测试cdn域名
    }),
];
```

## Requirements

- node >=12.22.0
- vite >=2.7.6

## 版本日志
