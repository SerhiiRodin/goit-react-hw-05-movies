"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[900],{18:function(t,e,n){n.d(e,{Eb:function(){return i},Hu:function(){return o},IT:function(){return a},TP:function(){return c},gH:function(){return u}});var r=n(243);r.Z.defaults.baseURL="".concat("https://api.themoviedb.org/"),r.Z.defaults.params={api_key:"e6e5040957b423292e46b69ab1c4061a"};var a=function(){return r.Z.get("/3/trending/movie/day")},c=function(t){return r.Z.get("3/movie/".concat(t,"?"))},i=function(t){return r.Z.get("3/movie/".concat(t,"/credits?"))},o=function(t){return r.Z.get("3/movie/".concat(t,"/reviews?"))},u=function(t){return r.Z.get("3/search/movie?&query=".concat(t))}},900:function(t,e,n){n.r(e),n.d(e,{default:function(){return s}});var r=n(439),a=n(18),c=n(791),i=n(689),o="Cast_card__WlXfx",u="Cast_profileWrapper__ZV4nJ",f=n(184),s=function(){var t=(0,c.useState)({}),e=(0,r.Z)(t,2),n=e[0],s=e[1],d=(0,i.UO)("").movieId;return(0,c.useEffect)((function(){(0,a.Eb)(d).then((function(t){var e=t.data.cast;s(e)}))}),[d]),(0,f.jsx)(f.Fragment,{children:n.length>0&&n.map((function(t){var e=t.name,n=t.profile_path,r=t.id;return(0,f.jsxs)("div",{className:o,children:[(0,f.jsx)("div",{className:u,children:(0,f.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w500"+n:"https://place-hold.it/200x300/ffffff/000/e3e3e3&text=no_photo",alt:e})}),(0,f.jsx)("p",{children:e})]},r)}))})}}}]);
//# sourceMappingURL=900.b64facca.chunk.js.map