import { defineConfig } from 'vite'

// 多页面（MPA）构建：每个工具一个 HTML 入口，保持现有的 /ico、/manbo、/ranking
// 这种无扩展名链接不变（nginx 那边用 try_files 做扩展名映射）。
//
// 输出目录仍然是 build/，这样 EdgeOne 上按旧路径部署的那份不受影响。
export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: true,
    // 静态资源放 assets/ 下，和原来的目录习惯一致
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        index: 'index.html',
        ico: 'ico.html',
        manbo: 'manbo.html',
        ranking: 'ranking.html',
        notfound: '404.html',
      },
    },
  },
})
