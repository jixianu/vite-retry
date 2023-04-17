import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import assetsRetryVitePlugin from 'assets-retry-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
    base: 'https://a.an.cn/',
    build: {
        minify: false,
        // modulePreload: false,
        // modulePreload: {
        //     polyfill: false,
        //     resolveDependencies: (filename, deps, { hostId, hostType }) => {
        //         console.log(deps, hostId, hostType, '=====hostId, hostType');
        //         return deps;
        //     },
        // },
    },
    // optimizeDeps: {
    //     exclude: ['src'],
    // },
    plugins: [
        vue(),
        assetsRetryVitePlugin({
            domain: ['https://a.an.cn/', 'http://localhost:3000/'], // 测试cdn域名
        }),
    ],
});
