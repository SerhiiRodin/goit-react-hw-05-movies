"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[457],{18:function(e,t,n){n.d(t,{Eb:function(){return c},Hu:function(){return o},IT:function(){return i},TP:function(){return u},gH:function(){return a}});var r=n(243);r.Z.defaults.baseURL="".concat("https://api.themoviedb.org/"),r.Z.defaults.params={api_key:"e6e5040957b423292e46b69ab1c4061a"};var i=function(){return r.Z.get("/3/trending/movie/day")},u=function(e){return r.Z.get("3/movie/".concat(e,"?"))},c=function(e){return r.Z.get("3/movie/".concat(e,"/credits?"))},o=function(e){return r.Z.get("3/movie/".concat(e,"/reviews?"))},a=function(e){return r.Z.get("3/search/movie?&query=".concat(e))}},457:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var r=n(439),i=n(18),u=n(791),c=n(689),o="Reviews_author__CqYAZ",a="Reviews_text__EqLvx",s=n(184),f=function(){var e=(0,u.useState)({}),t=(0,r.Z)(e,2),n=t[0],f=t[1],v=(0,c.UO)("").movieId;return(0,u.useEffect)((function(){(0,i.Hu)(v).then((function(e){var t=e.data.results;f(t)}))}),[v]),(0,s.jsxs)("ul",{children:[n.length>0&&n.map((function(e){var t=e.id,n=e.author,r=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsx)("p",{className:o,children:n}),(0,s.jsx)("p",{children:r})]},t)})),0===n.length&&(0,s.jsx)("p",{className:a,children:"We don`t have any reviews fro this movie."})]})}}}]);
//# sourceMappingURL=457.29bb68ee.chunk.js.map