# webpack(webpack@4)

```
npm info webpack version
```

### 运行 webpack(babel-loader)

```

./node_modules/.bin/webpack
```

或者

```
npx webpack
```

### 生成 html

```
yarn add html-webpack-plugin --dev
```

### 生成 css (开发：用 JS 生成 style)

```
yarn add css-loader --dev
yarn add style-loader --dev
```

- css-loader 会把 css 加载到 js 中

- style-loader 会把 css 加上 style 标签，并且放到 header 中

### webpack-dev-server

```
yarn add webpack-dev-server --dev
```

- webpack-dev-server 会把文件转义为可运行的 js 文件直接放到内存中，而不放到硬盘上。(加快访问速度)

### mini-css-extract-plugin(生产：把 CSS 抽成文件)

```
yarn add mini-css-extract-plugin --dev
```

### 获取 webpack 帮助文档

```
npx webpack --help
```

### loader 与 plugin

- plugin(插件): 扩展 webpack 功能，n 个 css 文件合并为一个文件
- loader(加载器): 加载 webpack 文件，一对一的文件对应关系
