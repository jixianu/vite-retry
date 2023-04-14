const { readFileSync } = require('fs');
const UglifyJS = require('uglify-js');

const AssetsRetryVitePlugin = options => {
    if (!(Array.isArray(options.domain) && options.domain.length === 2)) {
        throw new Error('[AssetsRetryVitePlugin] 参数 [domain] 必须是长度为 [2] 的数组！');
    }
    const optionsReal = Object.assign(
        {
            domain: [],
            reportDomain: 'https://baidu.com',
            maxRetryCount: 1,
        },
        options,
    );

    let systemCode = 0;

    options.reportDomain = 'https://baidu.com';
    return {
        name: 'assets-retry-vite-plugin',
        // enforce: 'pre',
        transformIndexHtml(html) {
            let scriptStr = readFileSync(require.resolve('./init.js')).toString();
            scriptStr = scriptStr.replace('this.options.reportDomain', options.reportDomain);
            scriptStr = scriptStr.replace('this.systemCode', systemCode);
            scriptStr = scriptStr.replace('this.options.domain', JSON.stringify(options.domain));

            scriptStr = UglifyJS.minify(scriptStr, {
                compress: {
                    drop_console: true,
                },
            }).code;
            let assetsRetryJs = readFileSync(require.resolve('./assets-retry.umd.js')).toString();

            const scriptsString = `<script>${assetsRetryJs}</script><script>${scriptStr}</script>`;
            html = html.replace('<head>', `<head>${scriptsString}`);
            return html;
        },
    };
};

module.exports = AssetsRetryVitePlugin;
