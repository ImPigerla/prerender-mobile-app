# prerender-mobile-app

这是一个开箱即用的移动开发web应用，基于Vue + Vue-router + scss等框架，可以自行增删配置，自由与灵活。

包含功能有：
- px2vw-loader自行将px转化为vw或者rem单位
- 支持热重载/热更新
- 支持scss变量或者mixins全局访问
- 支持预渲染

## 关于`px2vw-loader`

更多了解，查看[https://github.com/ImPigerla/px2vw-loader](https://github.com/ImPigerla/px2vw-loader)

## 如何开始

```js
npm install

// 开发模式
npm run dev

// 生产模式
npm run build
```

## 2种转化配置

### 1. 默认模式

即 px -> vw，内容会根据屏幕视窗缩放，webpack配置如下

```js

// 备注: '...' 表示其他配置信息
...
{
    test: /\.scss$/,
    ...,
    use: [
        ...,
        'css-loader',
        '@pigerla/px2vw-loader',  // 1. 配置选项
        ...
    ]
},
{
    test: /\.css$/,
    ...,
    use: [
        ...,
        'css-loader',
        '@pigerla/px2vw-loader',  // 2. 配置选项
        ...
    ]
}, 
{
    test: /\.vue$/,
    ...,
    loader: [
        'vue-loader', 
        '@pigerla/px2vw-loader/inline-style-loader.js' // 3. 配置选项
    ]
}
...
```

### 2. 转化为rem模式

即 px -> rem，内容会根据html的font-size进行缩放，webpack配置如下

```js

// 备注: '...' 表示其他配置信息
...
{
    test: /\.scss$/,
    ...,
    use: [
        ...,
        'css-loader',
        {
            loader: '@pigerla/px2vw-loader',
            options: {
                multiple: 10,
                outputUnit: 'rem'
            }
        },  // 1. 配置选项
        ...
    ]
},
{
    test: /\.css$/,
    ...,
    use: [
        ...,
        'css-loader',
        {
            loader: '@pigerla/px2vw-loader',
            options: {
                multiple: 10,
                outputUnit: 'rem'
            }
        },  // 2. 配置选项
        ...
    ]
}, 
{
    test: /\.vue$/,
    ...,
    loader: [
        'vue-loader', 
        {
            loader: '@pigerla/px2vw-loader/inline-style-loader.js',
            options: {
                multiple: 10,
                outputUnit: 'rem'
            }
        } // 3. 配置选项
    ]
}
...
```

webpack入口文件，如此项目的`index.js`文件，引入及时计算html的font-size值

```js
import './flexible'
```

### 2.1 最大宽度限制

基于第2小点，为了更好的用户体验，而不是随着屏幕越大越放大，最好限制最大宽度限制，增加css样式如下

```css
body {
    ...
    max-width: 10rem;
    margin: 0 auto;
}
```


