(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{301:function(module,exports,__webpack_require__){__webpack_require__(302),__webpack_require__(449),__webpack_require__(450),__webpack_require__(677),__webpack_require__(689),__webpack_require__(692),__webpack_require__(696),module.exports=__webpack_require__(711)},367:function(module,exports){},450:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(238)},711:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(238).configure)([__webpack_require__(712),__webpack_require__(716)],module,!1)}).call(this,__webpack_require__(68)(module))},712:function(module,exports,__webpack_require__){var map={"./welcome.stories.tsx":713};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=712},713:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"toStorybook",(function(){return toStorybook}));__webpack_require__(42);var react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(36),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(198),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(300);__webpack_exports__.default={parameters:function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({storySource:{source:'\n      \n      // @ts-nocheck\n      // @ts-ignore\n      var __STORY__ = "import React from \'react\';\\nimport { linkTo } from \'@storybook/addon-links\';\\nimport { Welcome } from \'@storybook/react/demo\';\\n\\nexport default { title: \'Welcome\' };\\n\\nexport const toStorybook = () => <Welcome showApp={linkTo(\'Demo/Demo\')} />;\\n";\n      // @ts-ignore\n      var __LOCATIONS_MAP__ = {"toStorybook":{"startLoc":{"col":27,"line":7},"endLoc":{"col":74,"line":7},"startBody":{"col":27,"line":7},"endBody":{"col":74,"line":7}}};\n    \nimport React from \'react\';\nimport { linkTo } from \'@storybook/addon-links\';\nimport { Welcome } from \'@storybook/react/demo\';\n\nexport default {parameters: {"storySource":{"source":"import React from \'react\';\\nimport { linkTo } from \'@storybook/addon-links\';\\nimport { Welcome } from \'@storybook/react/demo\';\\n\\nexport default { title: \'Welcome\' };\\n\\nexport const toStorybook = () => <Welcome showApp={linkTo(\'Demo/Demo\')} />;\\n","locationsMap":{"to-storybook":{"startLoc":{"col":27,"line":7},"endLoc":{"col":74,"line":7},"startBody":{"col":27,"line":7},"endBody":{"col":74,"line":7}}}},}, title: \'Welcome\' };\n\nexport const toStorybook = () => <Welcome showApp={linkTo(\'Demo/Demo\')} />;\n',locationsMap:{"to-storybook":{startLoc:{col:27,line:15},endLoc:{col:74,line:15},startBody:{col:27,line:15},endBody:{col:74,line:15}}}}},"storySource",{source:"import React from 'react';\nimport { linkTo } from '@storybook/addon-links';\nimport { Welcome } from '@storybook/react/demo';\n\nexport default { title: 'Welcome' };\n\nexport const toStorybook = () => <Welcome showApp={linkTo('Demo/Demo')} />;\n",locationsMap:{"to-storybook":{startLoc:{col:27,line:7},endLoc:{col:74,line:7},startBody:{col:27,line:7},endBody:{col:74,line:7}}}}),title:"Welcome"};var toStorybook=function toStorybook(){return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__.linkTo)("Demo/Demo")})};toStorybook.displayName="toStorybook"},716:function(module,exports,__webpack_require__){var map={"./components/MyButton.stories.tsx":718};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=716},718:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Normal",(function(){return MyButton_stories_Normal}));__webpack_require__(42);var react=__webpack_require__(36),react_default=__webpack_require__.n(react),MyButton_MyButton=function MyButton(){return react_default.a.createElement("button",null,"MyButton")};MyButton_MyButton.displayName="MyButton";try{MyButton_MyButton.displayName="MyButton",MyButton_MyButton.__docgenInfo={description:"",displayName:"MyButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/MyButton.tsx#MyButton"]={docgenInfo:MyButton_MyButton.__docgenInfo,name:"MyButton",path:"src/components/MyButton.tsx#MyButton"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={parameters:function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({storySource:{source:'\n      \n      // @ts-nocheck\n      // @ts-ignore\n      var __STORY__ = "import { MyButton } from \'./MyButton\';\\nimport React from \'react\';\\n\\nexport default {\\n  title: \'components/MyButton\',\\n};\\n\\nexport const Normal = () => {\\n  return <MyButton />;\\n};\\n";\n      // @ts-ignore\n      var __LOCATIONS_MAP__ = {"Normal":{"startLoc":{"col":22,"line":8},"endLoc":{"col":1,"line":10},"startBody":{"col":22,"line":8},"endBody":{"col":1,"line":10}}};\n    \nimport { MyButton } from \'./MyButton\';\nimport React from \'react\';\n\nexport default {parameters: {"storySource":{"source":"import { MyButton } from \'./MyButton\';\\nimport React from \'react\';\\n\\nexport default {\\n  title: \'components/MyButton\',\\n};\\n\\nexport const Normal = () => {\\n  return <MyButton />;\\n};\\n","locationsMap":{"normal":{"startLoc":{"col":22,"line":8},"endLoc":{"col":1,"line":10},"startBody":{"col":22,"line":8},"endBody":{"col":1,"line":10}}}},},\n  title: \'components/MyButton\',\n};\n\nexport const Normal = () => {\n  return <MyButton />;\n};\n',locationsMap:{normal:{startLoc:{col:22,line:16},endLoc:{col:1,line:18},startBody:{col:22,line:16},endBody:{col:1,line:18}}}}},"storySource",{source:"import { MyButton } from './MyButton';\nimport React from 'react';\n\nexport default {\n  title: 'components/MyButton',\n};\n\nexport const Normal = () => {\n  return <MyButton />;\n};\n",locationsMap:{normal:{startLoc:{col:22,line:8},endLoc:{col:1,line:10},startBody:{col:22,line:8},endBody:{col:1,line:10}}}}),title:"components/MyButton"};var MyButton_stories_Normal=function Normal(){return react_default.a.createElement(MyButton_MyButton,null)};MyButton_stories_Normal.displayName="Normal"}},[[301,1,2]]]);
//# sourceMappingURL=main.981036aef619c59f7c59.bundle.js.map