(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),l=n(4),u=n.n(l),b=(n(13),n(14),n(0)),h=function(t){var e=t.good;return Object(b.jsx)("li",{"data-cy":"Good",children:e})},j=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t[t.None=0]="None",t[t.Alphabet=1]="Alphabet",t[t.Length=2]="Length"}(s||(s={}));var d=function(){var t=Object(a.useState)(s.None),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),l=Object(r.a)(o,2),d=l[0],g=l[1],p=function(t,e){var n=e.sortType,c=e.isReversed,o=Object(i.a)(t);return n&&o.sort((function(t,e){switch(n){case s.Alphabet:return t.localeCompare(e);case s.Length:return t.length-e.length;default:return 0}})),c&&(o=o.reverse()),o}(j,{sortType:n,isReversed:d}),f=d||!!n;return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:u()("button","is-info",{"is-light":n!==s.Alphabet}),onClick:function(){return c(s.Alphabet)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-success",{"is-light":n!==s.Length}),onClick:function(){return c(s.Length)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:u()("button","is-warning",{"is-light":!d}),onClick:function(){return g(!d)},children:"Reverse"}),f&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(s.None),g(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:Object(b.jsx)("ul",{children:p.map((function(t){return Object(b.jsx)(h,{good:t},t)}))})})]})};o.a.render(Object(b.jsx)(d,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.148b6641.chunk.js.map