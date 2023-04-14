# assets-retry-vite-plugin

静态资源重试vite-plugin

## Usage

```javascript
// vite.config.js
const AssetsRetryWebpackPlugin = require('assets-retry-vite-plugin');
plugins: [
    createHtmlPlugin(),
    assetsRetryVitePlugin({
        domain: ['https://a.test.cn/', 'http://localhost:8080/'], // 测试cdn域名
    }),
];
```

## Requirements

- node >=12.22.0
- vite >=2.7.6

## 版本日志
