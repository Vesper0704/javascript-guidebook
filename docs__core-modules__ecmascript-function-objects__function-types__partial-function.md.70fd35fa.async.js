(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[151],{ggAn:function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"\u504f\u51fd\u6570"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u504f\u51fd\u6570"},t.a.createElement("span",{className:"icon icon-link"})),"\u504f\u51fd\u6570"),t.a.createElement("p",null,"\u7ef4\u57fa\u767e\u79d1\u4e2d\u5bf9\u504f\u51fd\u6570\uff08Partial\uff09\u7684\u5b9a\u4e49\u4e3a\uff1a"),t.a.createElement("blockquote",null,t.a.createElement("p",null,"In computer science, partial application(or partial function application) refers to the process of fixing a number of arguments to a function, producing another function of smaller arity.")),t.a.createElement("p",null,"\u7ffb\u8bd1\u6210\u4e2d\u6587\uff1a"),t.a.createElement("p",null,"\u5728\u8ba1\u7b97\u673a\u79d1\u5b66\u4e2d\uff0c\u5c40\u90e8\u5e94\u7528\u662f\u6307\u56fa\u5b9a\u4e00\u4e2a\u51fd\u6570\u7684\u4e00\u4e9b\u53c2\u6570\uff0c\u7136\u540e\u4ea7\u751f\u53e6\u4e00\u4e2a\u66f4\u5c0f\u5143\u7684\u51fd\u6570\u3002"),t.a.createElement("p",null,"\u4ec0\u4e48\u662f\u5143\uff1f\u5143\u662f\u6307\u51fd\u6570\u53c2\u6570\u7684\u4e2a\u6570\uff0c\u6bd4\u5982\u4e00\u4e2a\u5e26\u6709\u4e24\u4e2a\u53c2\u6570\u7684\u51fd\u6570\u88ab\u79f0\u4e3a\u4e8c\u5143\u51fd\u6570\u3002"),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(c.a,{code:"function add(a, b) {\n  return a + b;\n}\n\n// \u6267\u884c add \u51fd\u6570\uff0c\u4e00\u6b21\u4f20\u5165\u4e24\u4e2a\u53c2\u6570\u5373\u53ef\nadd(1, 2); // 3\n\n// \u5047\u8bbe\u6709\u4e00\u4e2a partial \u51fd\u6570\u53ef\u4ee5\u505a\u5230\u5c40\u90e8\u5e94\u7528\nvar addOne = partial(add, 1);\n\naddOne(2); // 3\n",lang:"js"}),t.a.createElement("p",null,"\u504f\u51fd\u6570\u4e0e\u67ef\u91cc\u5316\u5341\u5206\u76f8\u50cf\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u67ef\u91cc\u5316\uff1a\u5c06\u591a\u53c2\u6570\u51fd\u6570\u8f6c\u6362\u6210\u591a\u4e2a\u5355\u53c2\u6570\u51fd\u6570\uff0c\u4e5f\u5c31\u662f\u5c06\u4e00\u4e2a n \u5143\u51fd\u6570\u8f6c\u6362\u6210 n \u4e2a\u4e00\u5143\u51fd\u6570"),t.a.createElement("li",null,"\u504f\u51fd\u6570\uff1a\u5219\u662f\u56fa\u5b9a\u4e00\u4e2a\u51fd\u6570\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u53c2\u6570\uff0c\u4e5f\u5c31\u662f\u5c06\u4e00\u4e2a n \u5143\u51fd\u6570\u8f6c\u6362\u6210\u4e00\u4e2a n - x \u5143\u51fd\u6570")),t.a.createElement("h2",{id:"\u5b9e\u9645\u5e94\u7528"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5b9e\u9645\u5e94\u7528"},t.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u9645\u5e94\u7528"),t.a.createElement("p",null,t.a.createElement("code",null,"bind")," \u51fd\u6570\u53ef\u4ee5\u8ba9\u6211\u4eec\u4f20\u5165\u4e00\u4e2a\u6216\u591a\u4e2a\u9884\u8bbe\u7684\u53c2\u6570\uff0c\u4e4b\u540e\u8fd4\u56de\u4e00\u4e2a\u65b0\u51fd\u6570\uff0c\u5e76\u62e5\u6709\u6307\u5b9a\u7684 ",t.a.createElement("code",null,"this")," \u503c\u548c\u9884\u8bbe\u53c2\u6570\u3002\u5f53\u7ed1\u5b9a\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c\u8fd9\u4e9b\u53c2\u6570\u4f1a\u88ab\u63d2\u5165\u5230\u76ee\u6807\u51fd\u6570\u7684\u53c2\u6570\u5217\u8868\u7684\u5f00\u59cb\u4f4d\u7f6e\uff0c\u4f20\u9012\u7ed9\u7ed1\u5b9a\u51fd\u6570\u7684\u53c2\u6570\u8ddf\u5728\u5b83\u4eec\u540e\u9762\u3002"),t.a.createElement(c.a,{code:"function addition(x, y) {\n  return x + y;\n}\n\nconst plus5 = addition.bind(null, 5);\n\nplus5(10);\n// 15\n\nplus5(25);\n// 30\n",lang:"js"}),t.a.createElement("p",null,"\u6211\u4eec\u9884\u5148\u4f20\u5165\u53c2\u6570 ",t.a.createElement("code",null,"5"),"\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u51fd\u6570\u8d4b\u503c\u7ed9 ",t.a.createElement("code",null,"plus5"),"\uff0c\u6b64\u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u5269\u4f59\u7684\u53c2\u6570\u3002\u8c03\u7528 ",t.a.createElement("code",null,"plus5")," \u4f20\u5165\u5269\u4f59\u53c2\u6570 ",t.a.createElement("code",null,"10")," \u5f97\u5230\u6700\u7ec8\u7ed3\u679c ",t.a.createElement("code",null,"15"),"\uff0c\u53c8\u4f20\u5165\u53c2\u6570 ",t.a.createElement("code",null,"20")," \u5f97\u5230\u7ed3\u679c ",t.a.createElement("code",null,"30"),"\u3002\u504f\u51fd\u6570\u901a\u8fc7\u8bbe\u5b9a\u9884\u8bbe\u503c\uff0c\u5e2e\u52a9\u54e6\u6211\u4eec\u5b9e\u73b0\u4ee3\u7801\u4e0a\u7684\u590d\u7528\u3002"),t.a.createElement("h2",{id:"\u5b9e\u73b0\u504f\u51fd\u6570"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5b9e\u73b0\u504f\u51fd\u6570"},t.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u73b0\u504f\u51fd\u6570"),t.a.createElement("p",null,"\u5728 Underscore.js \u548c Lodash \u5747\u6709\u5b9e\u73b0 ",t.a.createElement("code",null,"partial")," \u504f\u51fd\u6570\uff0c\u8fd9\u91cc\u7a0d\u5fae\u5b9e\u73b0\u4e00\u4e0b\uff1a"),t.a.createElement(c.a,{code:"var _ = {};\n\nfunction partial(fn) {\n  var args = [].slice.call(arguments, 1);\n  return function() {\n    var position = 0,\n      leng = args.length;\n    for (var i = 0; i < len; i++) {\n      args[i] = args[i] === _ ? arguments[position++] : args[i];\n    }\n    while (position < arguments.length) args.push(arguments[position++]);\n    return fn.apply(this, args);\n  };\n}\n",lang:"js"}),t.a.createElement("hr",null),t.a.createElement("p",null,t.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("a",{href:"https://github.com/mqyqingfeng/Blog/issues/43",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd JavaScript \u4e13\u9898\u4e4b\u504f\u51fd\u6570",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),t.a.createElement("li",null,t.a.createElement("a",{href:"https://juejin.im/post/5ca862bce51d45534839ab96",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd \u51fd\u6570\u67ef\u91cc\u5316\u548c\u504f\u51fd\u6570\u5e94\u7528",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);