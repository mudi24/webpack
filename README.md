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

### sass-loader 和 dart-sass(node-sass 已过时)

```
yarn add sass-loader dart-sass --dev
```

- 在 base 中添加配置让 webpack 使用 dart-sass

```
{
  test: /\.scss$/i,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        implementation: require('dart-sass')
      }
    }
  ]
}
```

### less-loader

```
yarn add less-loader less --dev
```

### stylus-loader

```
yarn add stylus-loader stylus --dev
```

### file-loader(引入图片)

```
yarn add file-loader -dev
```

### 懒加载

- 用 import() 引入懒加载的文件，然后用 promise 进行后续操作
- 关键字 import 可以像调用函数一样来动态的导入模块。以这种方式调用，将返回一个 promise。(MDN)

```
const promise = import('./lazy')
  promise.then((module) => {
    const fn = module.default
    fn()
  }, () => {})
```

### 使用 gh-pages 来存放 dist 目录的文件

```
yarn build
```

```
git branch gh-pages
```

```
git checkout gh-pages
```

```
rm -rf *.html *.js *.css *.png
删除其他文件(只保留dist, node-modules, .gitignore)
```

```
mv dist/* ./
```

```
rm -rf dist
```

### 完整脚本

```
yarn build &&
git branch gh-pages &&
git checkout gh-pages &&
rm -rf *.html *.js *.css *.png &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push &&
git checkout -      // 回到上一个分支
```
