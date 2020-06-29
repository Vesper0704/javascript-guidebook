(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[222],{iYsx:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u7ec4\u5408\u7ee7\u627f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7ec4\u5408\u7ee7\u627f"},l.a.createElement("span",{className:"icon icon-link"})),"\u7ec4\u5408\u7ee7\u627f"),l.a.createElement("p",null,l.a.createElement("strong",null,"\u7ec4\u5408\u7ee7\u627f\uff08Combination Inheritance\uff09"),"\uff08\u4e5f\u53eb\u4f2a\u7ecf\u5178\u7ee7\u627f\uff09\uff0c\u6307\u7684\u662f\u5c06\u539f\u578b\u94fe\u548c\u501f\u7528\u6784\u9020\u51fd\u6570\u7684\u6280\u672f\u7ec4\u5408\u5230\u4e00\u5757\uff0c\u4ece\u800c\u53d1\u6325\u4e8c\u8005\u4e4b\u957f\u7684\u4e00\u79cd\u7ee7\u627f\u6a21\u5f0f\u3002"),l.a.createElement("p",null,"\u5176\u80cc\u540e\u7684\u601d\u8def\u662f\u4f7f\u7528\u539f\u578b\u94fe\u5b9e\u73b0\u5bf9\u539f\u578b\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u7684\u7ee7\u627f\uff0c\u800c\u901a\u8fc7\u501f\u7528\u6784\u9020\u51fd\u6570\u6765\u5b9e\u73b0\u5bf9\u5b9e\u4f8b\u5c5e\u6027\u7684\u7ee7\u627f\u3002\u8fd9\u6837\uff0c\u65e2\u901a\u8fc7\u5728\u539f\u578b\u4e0a\u5b9a\u4e49\u65b9\u6cd5\u5b9e\u73b0\u4e86\u51fd\u6570\u590d\u7528\uff0c\u53c8\u80fd\u591f\u4fdd\u8bc1\u6bcf\u4e2a\u5b9e\u4f8b\u90fd\u6709\u5b83\u81ea\u5df1\u7684\u5c5e\u6027\u3002"),l.a.createElement("p",null,"\ud83c\udf30 ",l.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),l.a.createElement(c.a,{code:"function Parent(name){\n    this.name = name\n    this.attr = {\n        eye: 'blue',\n        hair: 'black',\n        skin: 'white'\n    }\n}\n\nParent.prototype.sayName = function(){\n    console.log(this.name)\n};\n\nfunction Children(name, age){\n    // \u7b2c\u4e8c\u6b21\u8c03\u7528Parent()\n    // Children.prototype \u53c8\u5f97\u5230\u4e86 name \u548c attr \u4e24\u4e2a\u5c5e\u6027\n    // \u5e76\u5bf9\u4e0a\u6b21\u5f97\u5230\u7684\u5c5e\u6027\u503c\u8fdb\u884c\u4e86\u8986\u76d6\n    Parent.call(this, name)\n    this.age = age\n}\n\n// \u7b2c\u4e00\u6b21\u8c03\u7528 Parent()\n// \u4f7f\u5f97\u5b50\u7c7b\u5b9e\u4f8b\u7684\u539f\u578b\u5bf9\u8c61\u6307\u5411\u7236\u7c7b\u5b9e\u4f8b\u5bf9\u8c61\n// Children.prototype \u5f97\u5230\u4e86 name \u548c attr \u4e24\u4e2a\u5c5e\u6027\nChildren.prototype = new Parent()\n\nChildren.prototype.constructor = Children\n\nChildren.prototype.sayAge = function(){\n    console.log(this.age)\n}\n\n// The first instance\nlet boy = new Children('Jothan', 3)\n\nboy.attr.height = 80\n\nconsole.log(boy.attr)    // { eye: 'blue', hair: 'black', skin: 'white', height: 80 }\n\nboy.sayName()    // 'Jothan'\n\nboy.sayAge()     // 3\n\n// The second instance\nlet girl = new Children('Irene', 1)\n\nconsole.log(girl.colors)    // { eye: 'blue', hair: 'black', skin: 'white' }\n\ngirl.sayName()    // 'Irene'\n\ngirl.sayAge()     // 1\n",lang:"js"}),l.a.createElement("p",null,"\u5b9e\u73b0\u6b65\u9aa4\u5206\u89e3\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7236\u7c7b\u6784\u9020\u51fd\u6570\u5b9a\u4e49\u81ea\u8eab\u5c5e\u6027\uff08 Parent \u6784\u9020\u51fd\u6570\u5b9a\u4e49\u4e86",l.a.createElement("code",null,"name")," \u548c ",l.a.createElement("code",null,"attr"),"\u3002 \uff09"),l.a.createElement("li",null,"\u7236\u7c7b\u539f\u578b\u4e0a\u5b9a\u4e49\u65b9\u6cd5\uff08Parent \u7684\u539f\u578b\u5b9a\u4e49\u4e86\u4e00\u4e2a\u65b9\u6cd5 ",l.a.createElement("code",null,"sayName()"),"\uff09"),l.a.createElement("li",null,"\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u8c03\u7528\u7236\u7c7b\u6784\u9020\u51fd\u6570\uff0c\u4f20\u5165\u53c2\u6570\uff0c\u7ee7\u627f\u7236\u7c7b\u6784\u9020\u51fd\u6570\u4e2d\u7684\u5c5e\u6027\uff0c\u968f\u540e\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u53c8\u81ea\u5b9a\u4e49\u81ea\u8eab\u7684\u5c5e\u6027\uff08Children \u6784\u9020\u51fd\u6570\u5728\u8c03\u7528 Parent \u6784\u9020\u51fd\u6570\u65f6\u4f20\u5165\u4e86 ",l.a.createElement("code",null,"name")," \u53c2\u6570\uff0c\u7d27\u63a5\u7740\u53c8\u5b9a\u4e49\u4e86\u5b83\u81ea\u5df1\u7684\u5c5e\u6027 ",l.a.createElement("code",null,"height"),"\u3002\uff09"),l.a.createElement("li",null,"\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u6307\u5411\u7236\u7c7b\u6784\u9020\u51fd\u6570\u751f\u6210\u7684\u5b9e\u4f8b\uff08\u5c06 Parent \u7684\u5b9e\u4f8b\u8d4b\u503c\u7ed9 Children \u7684\u539f\u578b\uff09"),l.a.createElement("li",null,"\u5728\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\u4e0a\u5b9a\u4e49\u65b9\u6cd5\uff08\u5728 Children \u7684\u539f\u578b\u4e0a\u5b9a\u4e49\u4e86\u65b9\u6cd5 ",l.a.createElement("code",null,"sayAge()"),"\uff09"),l.a.createElement("li",null,"\u8fd9\u6837\u4e00\u6765\uff0c\u5c31\u53ef\u4ee5\u8ba9\u4e24\u4e2a\u4e0d\u540c\u7684\u5b50\u7c7b\u5b9e\u4f8b\u5bf9\u8c61\u65e2\u5206\u522b\u62e5\u6709\u81ea\u5df1\u5c5e\u6027\uff0c\u53c8\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u65b9\u6cd5")),l.a.createElement("h2",{id:"\u7f3a\u9677"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7f3a\u9677"},l.a.createElement("span",{className:"icon icon-link"})),"\u7f3a\u9677"),l.a.createElement("p",null,"\u65e0\u8bba\u4ec0\u4e48\u60c5\u51b5\u4e0b\uff0c",l.a.createElement("strong",null,"\u90fd\u4f1a\u8c03\u7528\u4e24\u6b21\u7236\u7c7b\u6784\u9020\u51fd\u6570"),"\uff1a\u7b2c\u4e00\u6b21\u662f\u5728",l.a.createElement("strong",null,"\u521b\u5efa\u5b50\u7c7b\u578b\u539f\u578b"),"\u7684\u65f6\u5019\uff0c\u53e6\u4e00\u6b21\u662f\u5728",l.a.createElement("strong",null,"\u5b50\u7c7b\u578b\u6784\u9020\u51fd\u6570\u5185\u90e8"),"\u3002\u5b50\u7c7b\u578b\u5bf9\u8c61\u6700\u7ec8\u4f1a\u5305\u542b\u7236\u7c7b\u578b\u5bf9\u8c61\u7684\u5168\u90e8\u5b9e\u4f8b\u5c5e\u6027\uff0c\u4f46\u4e0d\u5f97\u4e0d\u5728\u8c03\u7528\u5b50\u7c7b\u578b\u6784\u9020\u51fd\u6570\u65f6\u91cd\u5199\u8fd9\u4e9b\u5c5e\u6027\u3002"),l.a.createElement("h2",{id:"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7ec4\u5408\u7ee7\u627f\u4f18\u5316"},l.a.createElement("span",{className:"icon icon-link"})),"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316"),l.a.createElement("p",null,"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316\u793a\u4f8b\u4e00\uff1a"),l.a.createElement(c.a,{code:"// Before\nChildren.prototype = new Parent()\n\n// After\nChildren.prototype = Parent.prototype\n",lang:"js"}),l.a.createElement("p",null,"\u8fd9\u79cd\u4f18\u5316\u65b9\u5f0f\u7684\u7f3a\u70b9\u662f\uff0c\u5b50\u7c7b\u5b9e\u4f8b\u5bf9\u8c61\u7684\u6784\u9020\u51fd\u6570\u65e0\u6cd5\u533a\u5206\u662f\u5b50\u7c7b\u6784\u9020\u51fd\u6570\u8fd8\u662f\u7236\u7c7b\u6784\u9020\u51fd\u6570\u3002"),l.a.createElement("p",null,"\ud83d\udccc ",l.a.createElement("strong",null,"\u5b8c\u7f8e\u5199\u6cd5\uff1a\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f")),l.a.createElement("p",null,"\u7ec4\u5408\u7ee7\u627f\u4f18\u5316\u793a\u4f8b\u4e8c\uff1a\u901a\u8fc7\u4e2d\u95f4\u5bf9\u8c61\uff0c\u7ee7\u627f\u7236\u7c7b\u539f\u578b\u5bf9\u8c61\uff0c\u5b9e\u73b0\u5b50\u7c7b\u4e0e\u7236\u7c7b\u7684\u9694\u79bb"),l.a.createElement(c.a,{code:"function Parent(){\n    this.name = 'Parent'\n    this.num = [0, 1, 2]\n}\n\nfunction Child(){\n    Parent.call(this)\n    thi.type = 'Child'\n}\n\nChild.prototype = Object.create(Parent.prototype)\n\nChild.prototype.constructor = Child\n",lang:"js"})))}}}]);