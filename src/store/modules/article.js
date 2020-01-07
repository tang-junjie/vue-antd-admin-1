const article = {
    state: {
        posts: [],
        draft: '',
        editCursor: -1,
        draftCopy: '',
    },
    mutations: {
        SET_POSTS: (state, posts) => {
            state.posts = posts
        },
        SET_DRAFT: (state, draft) => {
            state.draft = draft
        },
        APPEND_POST: (state, post) => {
            state.posts === null ? state.posts.push(post) : state.posts.unshift(post)
        },
        DELETE_POST: (state, index) => {
            state.posts.splice(index, 1)
        },
        DELETE_DRAFT: (state) => {
            state.draft = {}
        },
        UPDATE_DRAFT: (state, draft) => {
            state.draft = draft
        },
        REPLACE_POST: (state, post) => {
            state.posts.splice(state.editCursor, 1, post)
        },
        SAVE_POSTS_TO_LOCAL: (state) => {
            localStorage.setItem('posts', JSON.stringify(state.posts))
        },
        SAVE_DRAFT_TO_LOCAL: (state) => {
            localStorage.setItem('draft', JSON.stringify(state.draft))
        },
        SET_CURSOR: (state, index) => {
            state.editCursor = index
        },
        COPY_DRAFT: (state) => {
            state.draftCopy = state.draft
        }
    },
    actions: {
        initArticle: ({commit}, {posts = [], draft= ''}) => {
            posts === null ? posts = ["<p align=\"center\">\n  <a href=\"https://www.antdv.com/\">\n    <img width=\"200\" src=\"https://qn.antdv.com/logo.png\">\n  </a>\n</p>\n\n<h1 align=\"center\">\n  <a href=\"https://www.antdv.com/\" target=\"_blank\">Ant Design Vue</a>\n</h1>\n\n<div align=\"center\">\n\nAn enterprise-class UI components based on Ant Design and Vue.\n\n[![Travis branch](https://travis-ci.org/vueComponent/ant-design-vue.svg?branch=master)](https://travis-ci.org/vueComponent/ant-design-vue) [![codecov](https://img.shields.io/codecov/c/github/vueComponent/ant-design-vue/master.svg?style=flat-square)](https://codecov.io/gh/vueComponent/ant-design-vue) [![npm package](https://img.shields.io/npm/v/ant-design-vue.svg?style=flat-square)](https://www.npmjs.org/package/ant-design-vue) [![NPM downloads](http://img.shields.io/npm/dm/ant-design-vue.svg?style=flat-square)](http://www.npmtrends.com/ant-design-vue) [![Join the chat at https://gitter.im/vueComponent/ant-design-english](https://badges.gitter.im/vueComponent/ant-design-english.svg?style=flat-square)](https://gitter.im/vueComponent/ant-design-english?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) (English) [![Join the chat at https://gitter.im/vueComponent/ant-design-vue](https://img.shields.io/gitter/room/vueComponent/ant-design-vue.svg?style=flat-square)](https://gitter.im/vueComponent/ant-design-vue?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)（中文） [![backers](https://opencollective.com/ant-design-vue/backers/badge.svg)](#backers) [![sponsors](https://opencollective.com/ant-design-vue/sponsors/badge.svg)](#sponsors) [![extension-for-VSCode](https://img.shields.io/badge/extension%20for-VSCode-blue.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=ant-design-vue.vscode-ant-design-vue-helper)\n\n</div>\n\n[![](https://cdn-images-1.medium.com/max/2000/1*NIlj0-TdLMbo_hzSBP8tmg.png)](https://www.antdv.com/)\n\nEnglish | [简体中文](./README-zh_CN.md)\n\n<p align=\"center\">\n  <b>Special thanks to the generous sponsorship by:</b>\n</p>\n<table>\n  <tbody>\n    <tr>\n      <td align=\"center\" valign=\"middle\">\n        <a href=\"https://tipe.io/?ref=ant-design-vue\" target=\"_blank\">\n          <img width=\"120px\" src=\"https://user-images.githubusercontent.com/1016365/34124854-48fafa06-e3e9-11e7-8c04-251055feebee.png\">\n        </a>\n      </td>\n    </tr>\n  </tbody>\n</table>\n\n## Features\n\n- An enterprise-class UI design system for desktop applications.\n- A set of high-quality Vue components out of the box.\n- Shared [Ant Design of React](https://ant.design/docs/spec/introduce) design resources.\n\n## Using npm or yarn\n\n**We recommend using npm or yarn to install**，it not only makes development easier，but also allow you to take advantage of the rich ecosystem of Javascript packages and tooling.\n\n```bash\n$ npm install ant-design-vue --save\n```\n\n```bash\n$ yarn add ant-design-vue\n```\n\nIf you are in a bad network environment，you can try other registries and tools like [cnpm](https://github.com/cnpm/cnpm).\n\n## Links\n\n- [Home page](https://www.antdv.com/)\n- [Vue](https://vuejs.org/)\n- [Ant Design Of React](http://ant.design/)\n\n## Ecosystem\n\n| Project | Description |\n| --- | --- |\n| [vue-ref](https://github.com/vueComponent/vue-ref) | You can use the callback to get a reference like react |\n| [ant-design-vue-helper](https://marketplace.visualstudio.com/items?itemName=ant-design-vue.vscode-ant-design-vue-helper) | A vscode extension for ant-design-vue |\n| [vue-cli-plugin-ant-design](https://github.com/vueComponent/vue-cli-plugin-ant-design) | Vue-cli 3 plugin to add ant-design-vue |\n| [vue-dash-event](https://github.com/vueComponent/vue-dash-event) | The library function, implemented in the DOM template, can use the custom event of the ant-design-vue component (camelCase) |\n\n## Donation\n\nant-design-vue is an MIT-licensed open source project. In order to achieve better and sustainable development of the project, we expect to gain more [backers](https://github.com/vueComponent/ant-design-vue/blob/master/BACKERS.md). You can support us in any of the following ways:\n\n- [Patreon](https://www.patreon.com/tangjinzhou)\n- [opencollective](https://opencollective.com/ant-design-vue)\n- [paypal](https://www.paypal.me/tangjinzhou)\n- [支付宝或微信](https://qn.antdv.com/alipay-and-wechat.png)\n\n## Backers\n\nSupport us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/ant-design-vue#backer)]\n\n<a href=\"https://github.com/limichange\" target=\"_blank\"><img width=\"64\" style=\"border-radius: 50%;\" src=\"https://avatars0.githubusercontent.com/u/1947344?s=400&v=4\" title=\"limichange donation total 24$ by qq from 2018.9\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/0/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/0/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/1/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/1/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/2/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/2/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/3/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/3/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/4/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/4/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/5/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/5/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/6/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/6/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/7/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/7/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/8/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/8/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/9/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/9/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/backer/10/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/backer/10/avatar.svg\"></a>\n\n## Sponsors\n\nBecome a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/ant-design-vue#sponsor)]\n\n<a href=\"https://opencollective.com/ant-design-vue/sponsor/0/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/0/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/sponsor/1/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/1/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/sponsor/2/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/2/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/sponsor/3/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/3/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/sponsor/4/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/4/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/sponsor/5/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/5/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/sponsor/6/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/6/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/sponsor/7/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/7/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/sponsor/8/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/8/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/sponsor/9/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/9/avatar.svg\"></a> <a href=\"https://opencollective.com/ant-design-vue/sponsor/10/website\" target=\"_blank\"><img src=\"https://opencollective.com/ant-design-vue/sponsor/10/avatar.svg\"></a>\n\n[![Let's fund issues in this repository](https://issuehunt.io/static/embed/issuehunt-button-v1.svg)](https://issuehunt.io/repos/104172832)", "# mavonEditor\n\n![npm](https://nodei.co/npm/mavon-editor.png?downloads=true&downloadRank=true&stars=true)\n\n> 基于Vue的markdown编辑器\n\n### [English Documents](./README-EN.md)\n[Demo for jsfiddle](https://jsfiddle.net/CHENXCHEN/qf7gLw3a/3/)\n\n## example (图片展示)\n\n### PC\n\n![PC](./img/cn/cn-common.png)\n\n![PC](./img/cn/cn-image.gif)\n\n> [查看更多图片点击这里...](./doc/cn/images.md)\n\n### Install mavon-editor (安装)\n\n```\n$ npm install mavon-editor --save\n```\n\n### Use (如何引入)\n\n`index.js`:\n```javascript\n    // 全局注册\n    // import with ES6\n    import Vue from 'vue'\n    import mavonEditor from 'mavon-editor'\n    import 'mavon-editor/dist/css/index.css'\n    // use\n    Vue.use(mavonEditor)\n    new Vue({\n        'el': '#main',\n        data() {\n            return { value: '' }\n        }\n    })\n```\n`index.html`\n```html\n<div id=\"main\">\n    <mavon-editor v-model=\"value\"/>\n</div>\n```\n### 如何在nuxt.js 中使用\n> 首先在工程目录plugins 下新建 vue-mavon-editor.js\n``` javascrpt \nimport Vue from 'vue';\nimport mavonEditor from 'mavon-editor';\nimport 'mavon-editor/dist/css/index.css';\n\nVue.use(mavonEditor);\n```\n> 然后在nuxt.config.js 中添加plugins配置\n``` javascript\n  plugins: [\n  ...\n    { src: '@/plugins/vue-mavon-editor', srr: false }\n  ],\n```\n> 最后一步在页面或者组件中引入\n```vue\n<template>\n  <div class=\"mavonEditor\">\n    <no-ssr>\n      <mavon-editor :toolbars=\"markdownOption\" v-model=\"handbook\"/>\n    </no-ssr>\n  </div>\n</template>\n<script>\nexport default {\n  data() {\n    return {\n      markdownOption: {\n        bold: true, // 粗体\n        ... // 更多配置\n      },\n      handbook: \"#### how to use mavonEditor in nuxt.js\"\n    };\n  }\n};\n</script>\n\n<style scoped>\n.mavonEditor {\n  width: 100%;\n  height: 100%;\n}\n</style>\n\n```\n\n\n> [更多引入方式点击这里...](./doc/cn/use.md)\n\n> [如何获取并设置markdown-it对象...](./doc/cn/markdown.md)\n\n## API 文档\n\n### props\n\n| name 名称      | type 类型 | default 默认值 | describe 描述                          |\n| ------------ | :-----: | :---------: | ---------------------------------------- |\n| value        | String  |             | 初始值                                     |\n| language     | String  |     zh-CN      | 语言选择，暂支持 zh-CN: 中文简体 ， en: 英文 ， fr: 法语， pt-BR: 葡萄牙语， ru: 俄语， de: 德语， ja: 日语 |\n| fontSize     | String  |     15px      | 编辑区域文字大小 |\n| scrollStyle  | Boolean |    true     | 开启滚动条样式(暂时仅支持chrome)              |\n| boxShadow     | Boolean  |     true     | 开启边框阴影                |\n| boxShadowStyle | String | 0 2px 12px 0 rgba(0, 0, 0, 0.1) | 边框阴影样式 |\n| transition | Boolean | true | 是否开启过渡动画 |\n| toolbarsBackground | String | #ffffff | 工具栏背景颜色 |\n| previewBackground | String | #fbfbfb | 预览框背景颜色 |\n| subfield     | Boolean |    true     | true： 双栏(编辑预览同屏)， false： 单栏(编辑预览分屏)    |\n| defaultOpen | String |         | edit： 默认展示编辑区域 ， preview： 默认展示预览区域  , 其他 = edit |\n| placeholder | String |    开始编辑...     |  输入框为空时默认提示文本  |\n| editable     | Boolean |    true     | 是否允许编辑     |\n| codeStyle | String |    code-github     | markdown样式： 默认github, [可选配色方案](./src/lib/core/hljs/lang.hljs.css.js)   |\n| toolbarsFlag | Boolean |    true     | 工具栏是否显示                |\n| navigation | Boolean |    false    |  默认展示目录  |\n| shortCut | Boolean |    true    |  是否启用快捷键  |\n| autofocus | Boolean |    true    |  自动聚焦到文本框  |\n| ishljs       | Boolean |     true     |  代码高亮 |\n| imageFilter | function |     null     |  图片过滤函数，参数为一个`File Object`，要求返回一个`Boolean`, `true`表示文件合法，`false`表示文件不合法 |\n| imageClick | function |     null     |  图片点击事件，默认为预览，可覆盖 |\n| tabSize     | Number  |     \\t     | tab转化为几个空格，默认为\\t                      |\n| toolbars     | Object  |     如下例     | 工具栏                      |\n\n```javascript\n /*\n    默认工具栏按钮全部开启, 传入自定义对象\n    例如: {\n         bold: true, // 粗体\n         italic: true,// 斜体\n         header: true,// 标题\n    }\n    此时, 仅仅显示此三个功能键\n */\ntoolbars: {\n      bold: true, // 粗体\n      italic: true, // 斜体\n      header: true, // 标题\n      underline: true, // 下划线\n      strikethrough: true, // 中划线\n      mark: true, // 标记\n      superscript: true, // 上角标\n      subscript: true, // 下角标\n      quote: true, // 引用\n      ol: true, // 有序列表\n      ul: true, // 无序列表\n      link: true, // 链接\n      imagelink: true, // 图片链接\n      code: true, // code\n      table: true, // 表格\n      fullscreen: true, // 全屏编辑\n      readmodel: true, // 沉浸式阅读\n      htmlcode: true, // 展示html源码\n      help: true, // 帮助\n      /* 1.3.5 */\n      undo: true, // 上一步\n      redo: true, // 下一步\n      trash: true, // 清空\n      save: true, // 保存（触发events中的save事件）\n      /* 1.4.2 */\n      navigation: true, // 导航目录\n      /* 2.1.8 */\n      alignleft: true, // 左对齐\n      aligncenter: true, // 居中\n      alignright: true, // 右对齐\n      /* 2.2.1 */\n      subfield: true, // 单双栏模式\n      preview: true, // 预览\n  }\n```\n\n### events 事件绑定\n\n| name 方法名         |            params 参数            | describe 描述                              |\n| ---------------- | :-----------------------------: | ---------------------------------------- |\n| change           |  String: value , String: render  | 编辑区发生变化的回调事件(render: value 经过markdown解析后的结果) |\n| save             |  String: value , String: render  | ctrl + s 的回调事件(保存按键,同样触发该回调)             |\n| fullScreen       | Boolean: status , String: value | 切换全屏编辑的回调事件(boolean: 全屏开启状态)             |\n| readModel        | Boolean: status , String: value | 切换沉浸式阅读的回调事件(boolean: 阅读开启状态)            |\n| htmlCode         | Boolean: status , String: value | 查看html源码的回调事件(boolean: 源码开启状态)           |\n| subfieldToggle   | Boolean: status , String: value | 切换单双栏编辑的回调事件(boolean: 双栏开启状态)            |\n| previewToggle   | Boolean: status , String: value | 切换预览编辑的回调事件(boolean: 预览开启状态)            |\n| helpToggle       | Boolean: status , String: value | 查看帮助的回调事件(boolean: 帮助开启状态)               |\n| navigationToggle | Boolean: status , String: value | 切换导航目录的回调事件(boolean: 导航开启状态)             |\n| imgAdd           | String: filename, File: imgfile | 图片文件添加回调事件(filename: 写在md中的文件名, File: File Object) |\n| imgDel           |        String: filename         | 图片文件删除回调事件(filename: 写在md中的文件名)          |\n\n#### 代码高亮\n\n> 如不需要hightlight代码高亮显示，你应该设置ishljs为false\n\n开启代码高亮props\n```javascript\n    // ishljs默认为true\n    <mavon-editor :ishljs = \"true\"></mavon-editor>\n```\n\n为优化插件体积，从**v2.4.2**起以下文件将默认使用`cdnjs`外链:\n + `highlight.js`\n + `github-markdown-css`\n + `katex`(**v2.4.7**)\n\n代码高亮`highlight.js`中的语言解析文件和代码高亮样式将在使用时按需加载.\n`github-markdown-css`和`katex`仅会在`mounted`时加载\n\n**Notice**:\n[可选配色方案](./src/lib/core/hljs/lang.hljs.css.js) 和 [支持的语言](./src/lib/core/hljs/lang.hljs.js) 是从 [highlight.js/9.12.0](https://github.com/isagalaev/highlight.js/tree/master/src) 导出的\n\n> [不使用cdn，本地按需加载点击这里...](./doc/cn/no-cnd.md)\n\n#### 图片上传\n\n```javascript\n<template>\n    <mavon-editor ref=md @imgAdd=\"$imgAdd\" @imgDel=\"$imgDel\"></mavon-editor>\n</template>\nexports default {\n    methods: {\n        // 绑定@imgAdd event\n        $imgAdd(pos, $file){\n            // 第一步.将图片上传到服务器.\n           var formdata = new FormData();\n           formdata.append('image', $file);\n           axios({\n               url: 'server url',\n               method: 'post',\n               data: formdata,\n               headers: { 'Content-Type': 'multipart/form-data' },\n           }).then((url) => {\n               // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)\n               /**\n               * $vm 指为mavonEditor实例，可以通过如下两种方式获取\n               * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`\n               * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`\n               */\n               $vm.$img2Url(pos, url);\n           })\n        }\n    }\n}\n```\n> [图片上传详情点击这里...](./doc/cn/upload-images.md)\n\n### 注\n\n- **默认大小样式为 min-height: 300px , min-width: 300px 可自行覆盖**\n- **基础z-index: 1500**\n- **仅用作展示可以设置props: toolbarsFlag: false , subfield: false, defaultOpen: \"preview\"**\n\n\n### 快捷键\n\n| key       | keycode  |            功能            |\n| ---------------- | :----------------: | :-----------------------------: |\n| F8           | 119 |  开启/关闭导航  |\n| F9           | 120   |  预览/编辑切换  |\n| F10     | 121   | 开启/关闭全屏 |\n| F11      | 122   | 开启/关闭阅读模式 |\n| F12       | 123   | 单栏/双栏切换 |\n| TAB  | 9  | 缩进 |\n| CTRL + S    | 17 + 83 | 触发保存 |\n| CTRL + D    | 17 + 68 | 删除选中行 |\n| CTRL + Z    | 17 + 90 | 上一步 |\n| CTRL + Y    | 17 + 89 | 下一步 |\n| CTRL + BreakSpace    | 17 + 8 | 清空编辑 |\n| CTRL + B       | 17 + 66 | **加粗** |\n| CTRL + I | 17 + 73 | *斜体* |\n| CTRL + H       | 17 + 72 | # 标题 |\n| CTRL + 1       | 17 + 97 or 49 | # 标题 |\n| CTRL + 2       | 17 + 98 or 50 | ## 标题 |\n| CTRL + 3       | 17 + 99 or 51 | ### 标题 |\n| CTRL + 4       | 17 + 100 or 52 | #### 标题 |\n| CTRL + 5       | 17 + 101 or 53 | ##### 标题 |\n| CTRL + 6       | 17 + 102 or 54 | ###### 标题 |\n| CTRL + U    | 17 + 85 | ++下划线++ |\n| CTRL + M    | 17 + 77 | ==标记== |\n| CTRL + Q    | 17 + 81 | > 引用 |\n| CTRL + O    | 17 + 79 | 1. 有序列表 |\n| CTRL + L    | 17 + 76 | [链接]() |\n| CTRL + ALT + S    | 17 + 18 + 83 | ^上角标^ |\n| CTRL + ALT + U    | 17 + 18 + 85 | - 无序列表 |\n| CTRL + ALT + C    | 17 + 18 + 67 | ``` 代码块 |\n| CTRL + ALT + L    | 17 + 18 + 76 | ![图片链接]() |\n| CTRL + ALT + T    | 17 + 18 + 84 | 表格 |\n| CTRL + SHIFT + S    | 17 + 16 + 83 | ~下角标~ |\n| CTRL + SHIFT + D    | 17 + 16 + 68 | ~~中划线~~ |\n| CTRL + SHIFT + C    | 17 + 16 + 67 | 居中 |\n| CTRL + SHIFT + L    | 17 + 16 + 76 | 居左 |\n| CTRL + SHIFT + R    | 17 + 16 + 82 | 居右 |\n| SHIFT + TAB    | 16 + 9 | 取消缩进 |\n\n\n## Dependencies (依赖)\n\n- [markdown-it](https://github.com/markdown-it/markdown-it)\n\n- [auto-textarea](https://github.com/hinesboy/auto-textarea)\n\n\n## Markdown 语法拓展\n\n- [emoji](https://github.com/markdown-it/markdown-it-emoji)\n- [subscript](https://github.com/markdown-it/markdown-it-sub)\n- [superscript](https://github.com/markdown-it/markdown-it-sup)\n- [container](https://github.com/markdown-it/markdown-it-container)\n- [definition list](https://github.com/markdown-it/markdown-it-deflist)\n- [abbreviation](https://github.com/markdown-it/markdown-it-abbr)\n- [footnote](https://github.com/markdown-it/markdown-it-footnote)\n- [insert](https://github.com/markdown-it/markdown-it-ins)\n- [mark](https://github.com/markdown-it/markdown-it-mark)\n- [todo list](https://gith... (10595 total length)"] : undefined;
            draft === null ? draft = '' : undefined;
            commit('SET_POSTS', posts);
            commit('SET_DRAFT', draft)
        },
        beforeEdit:({commit,state}, index) => {
            commit('SET_CURSOR', index);
            commit('COPY_DRAFT');
            commit('SET_DRAFT', state.posts[state.editCursor])
        },
        updatePosts: ({commit}, {action='new', post='', index=0}) => {
            switch (action) {
                case "new":
                    commit('APPEND_POST', post);
                    break;
                case "delete":
                    commit('DELETE_POST', index);
                    break;
                case "update":
                    commit('REPLACE_POST', post);
                    break;
            }
            commit('SAVE_POSTS_TO_LOCAL')
        },
        updateDraft: ({commit}, {action, draft}) => {
            if (action === 'update') {
                commit('UPDATE_DRAFT', draft)
            } else {
                commit('DELETE_DRAFT')
            }
            commit('SAVE_DRAFT_TO_LOCAL')
        }
    }
}
export default article
