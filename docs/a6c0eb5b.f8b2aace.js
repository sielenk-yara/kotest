(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{123:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(159)),i={id:"genops",title:"Generator Operations",slug:"generator-operations.html"},l={unversionedId:"proptest/genops",id:"proptest/genops",isDocsHomePage:!1,title:"Generator Operations",description:"Next",source:"@site/docs/proptest/genops.md",slug:"/proptest/generator-operations.html",permalink:"/docs/proptest/generator-operations.html",editUrl:"https://github.com/kotest/kotest/blob/master/documentation/docs/proptest/genops.md",version:"current",sidebar:"proptest",previous:{title:"Generators List",permalink:"/docs/proptest/property-test-generators-list.html"},next:{title:"Configuration",permalink:"/docs/proptest/property-test-config.html"}},c=[{value:"Next",id:"next",children:[]},{value:"Filter",id:"filter",children:[]},{value:"Map",id:"map",children:[]},{value:"FlatMap",id:"flatmap",children:[]},{value:"Merging",id:"merging",children:[]},{value:"Bind",id:"bind",children:[]}],p={rightToc:c};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"next"},"Next"),Object(o.b)("p",null,"If you want to use an Arb to just return a value (even outside of a property test), then you can call next on it."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"val arbA: Arb<A> = ...\nval a = arbA.next() // use Random.Default\nval a2 = arbA.next(rs) // pass in Random\n")),Object(o.b)("h2",{id:"filter"},"Filter"),Object(o.b)("p",null,"If you have an arb and you want to create a new arb that provides a subset of values, you can call filter on the source arb.\nFor example, one way of generating even numbers is to take the integer arb, and filter out odd values. Viz:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"val evens = Arb.int().filter { it.value % 2 == 0 }\nval odds = Arb.int().filter { it.value % 2 == 1 }\n")),Object(o.b)("h2",{id:"map"},"Map"),Object(o.b)("p",null,"If you have an arb and you want to transform the value generated, you can use map."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"val integerStrings: Arb<String> = Arb.int().map { it.toString() }\n")),Object(o.b)("h2",{id:"flatmap"},"FlatMap"),Object(o.b)("p",null,"If you have an arb whose emission or edge cases depends on the emission of the previous arbitraries, you can use flatMap."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'val dependentArbs: Arb<String> = Arb.of("foo", "bar").flatMap { prefix ->\n   Arb.int(1..10).map { integer ->\n      "${prefix}-${integer}"\n   }\n}\n')),Object(o.b)("h2",{id:"merging"},"Merging"),Object(o.b)("p",null,"Two generators can be merged together, so that elements 0, 2, 4, ... are taken from the first generator, and elements 1, 3, 5, ... are taken from the second generator."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"val merged = arbA.merge(arbB)\n")),Object(o.b)("p",null,"So with the following example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),'val a = arbitrary { "a" }\nval b = arbitrary { "b" }\nval ab = a.merge(b)\nab.take(10).forEach { println(it) }\n')),Object(o.b)("p",null,"Would ouput ",Object(o.b)("inlineCode",{parentName:"p"},"ababababab")),Object(o.b)("h2",{id:"bind"},"Bind"),Object(o.b)("p",null,"Bind is useful if you want to apply multiple arbitraries. We can take a look at how we might construct values for a data class using bind."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-kotlin"}),"data class Person(val name: String, val age: Int)\n\nval personArb: Arb<Person> = Arb.bind(\n   Arb.string(),\n   Arb.int()\n) { name, age -> Person(name, age) }\n")))}b.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return n?a.a.createElement(m,l(l({ref:t},p),{},{components:n})):a.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);