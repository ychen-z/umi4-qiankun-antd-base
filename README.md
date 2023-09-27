# README

`@umijs/max` 模板项目，更多功能参考 [Umi Max 简介](https://umijs.org/docs/max/introduce)

## 关于 tailwindcss 配置

Umi 的稳定版本是 3.5.20 ，其（@umijs/bundler-webpack）使用的 PostCSS 版本为 7.0.32 ，而 Tailwind 依赖 PostCSS 的版本为 8.x.x 。因此，我们需要安装兼容 PostCSS 7 的 Tailwind 版本。

```
yarn add \
 tailwindcss@npm:@tailwindcss/postcss7-compat \
 @tailwindcss/postcss7-compat \
 autoprefixer@^9
```

修改 Umi 配置完成相关依赖的安装后，我们需要修改 Umi 配置文件（.umirc 或 config/config.ts）的 extraPostCSSPlugins 选项。

```
import { defineConfig } from "umi";

export default defineConfig({
  // ...
  extraPostCSSPlugins: [require("tailwindcss"), require("autoprefixer")],
  // ...
});
```

默认情况下，tailwindcss 会识别根目录下的 tailwind.config.js 配置文件。如果我们想指定配置文件的读取路径，可设置 config 属性。

```
import { defineConfig } from "umi";

export default defineConfig({
  // ...
  extraPostCSSPlugins: [
    require("tailwindcss")({ config: "[custom_path]/tailwind.config.js" }),
    require("autoprefixer"),
  ],
  // ...
});
```

参考文档：https://zhuanlan.zhihu.com/p/489410215

- 微前端接入：
- 1、https://github.com/blueju/umi-qiankun/tree/runtime-dynamic-register-sub-app
- 2、https://qiankun.umijs.org/zh/guide/#%E4%BB%80%E4%B9%88%E6%98%AF%E5%BE%AE%E5%89%8D%E7%AB%AF
- 3、https://github.com/umijs/plugins/tree/master/packages/plugin-qiankun
