"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[914],{18:function(e,t,n){n.d(t,{Eb:function(){return a},Hu:function(){return c},IT:function(){return r},TP:function(){return s},gH:function(){return o}});var i=n(243);i.Z.defaults.baseURL="".concat("https://api.themoviedb.org/"),i.Z.defaults.params={api_key:"e6e5040957b423292e46b69ab1c4061a"};var r=function(){return i.Z.get("/3/trending/movie/day")},s=function(e){return i.Z.get("3/movie/".concat(e,"?"))},a=function(e){return i.Z.get("3/movie/".concat(e,"/credits?"))},c=function(e){return i.Z.get("3/movie/".concat(e,"/reviews?"))},o=function(e){return i.Z.get("3/search/movie?&query=".concat(e))}},914:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var i=n(439),r=n(161),s=n(791),a=n(689),c=n(87),o=n(18),l="MovieDetails_button__uXZxd",u="MovieDetails_movieInfo__4EKMk",d="MovieDetails_posterWrapper__RTGm3",f="MovieDetails_infoWrapper__4SlYR",h="MovieDetails_additionInf__ISzu7",v=n(184),_=function(){var e,t,n=(0,s.useState)({}),_=(0,i.Z)(n,2),x=_[0],m=_[1],p=(0,a.UO)("").movieId,j=(0,a.TH)(),g=(0,s.useRef)(null!==(e=null===(t=j.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),b=x.poster_path,w=x.title,Z=x.genres,k=x.overview,M=x.release_date,U=x.vote_average;return(0,s.useEffect)((function(){(0,o.TP)(p).then((function(e){var t=e.data;return m(t)}))}),[p]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c.rU,{to:g.current,className:l,children:"\u041d\u0430\u0437\u0430\u0434"}),w&&(0,v.jsxs)("div",{className:u,children:[(0,v.jsx)("div",{className:d,children:(0,v.jsx)("img",{src:b?"https://image.tmdb.org/t/p/w500"+b:"https://place-hold.it/350x500/ffffff/000/e3e3e3&text=no_photo",alt:w})}),(0,v.jsxs)("div",{className:f,children:[(0,v.jsxs)("h2",{children:[w," (",M?M.slice(0,4):"no date",")"]}),(0,v.jsxs)("p",{children:["User Score: ",(10*U).toFixed(0),"%"]}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:k}),(0,v.jsx)("h4",{children:"Genres"}),(0,v.jsx)("p",{children:Z.map((function(e){return e.name})).join(" ")})]})]}),(0,v.jsxs)("div",{className:h,children:[(0,v.jsx)("p",{children:"Additional information"}),(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(c.rU,{to:"cast",children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(c.rU,{to:"reviews",children:"Reviews"})})]})]}),(0,v.jsx)(s.Suspense,{fallback:(0,v.jsx)(r.a,{}),children:(0,v.jsx)(a.j3,{})})]})}}}]);
//# sourceMappingURL=914.9f6a8b0b.chunk.js.map