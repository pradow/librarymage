(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[264],{5081:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/card",function(){return r(6662)}])},6662:function(e,n,r){"use strict";r.r(n);var a=r(8520),t=r.n(a),c=r(5893),s=r(7294),i=r(1163);function u(e,n,r,a,t,c,s){try{var i=e[c](s),u=i.value}catch(o){return void r(o)}i.done?n(u):Promise.resolve(u).then(a,t)}n.default=function(){var e,n=(0,i.useRouter)(),r=(0,s.useState)([]),a=r[0],o=r[1],d=(0,s.useState)(!0),l=d[0],h=d[1],f=(0,s.useState)(""),v=f[0],m=f[1],p=(e=t().mark((function e(r){var a,c;return t().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(r);case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,o(c),h(!1),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),alert("error try again later"),n.push("/");case 16:case"end":return e.stop()}}),e,null,[[0,11]])})),function(){var n=this,r=arguments;return new Promise((function(a,t){var c=e.apply(n,r);function s(e){u(c,a,t,s,i,"next",e)}function i(e){u(c,a,t,s,i,"throw",e)}s(void 0)}))});return(0,s.useEffect)((function(){m(n.query.id)})),(0,s.useEffect)((function(){if(v){var e="https://api.magicthegathering.io/v1/cards/".concat(v);p(e)}}),[v]),l?(0,c.jsx)("h3",{className:"search-loader",children:"Loading..."}):(0,c.jsx)("div",{className:"card-container",children:(0,c.jsxs)("div",{className:"grid",children:[(0,c.jsx)("div",{className:"title-col",children:(0,c.jsx)("div",{className:"card-name",children:a.card.name})}),(0,c.jsxs)("div",{className:"card-col",children:[(0,c.jsx)("div",{className:"card-image",children:(0,c.jsx)("img",{src:a.card.imageUrl,alt:"{fetchedData.card.name}"})}),(0,c.jsxs)("div",{children:[(0,c.jsx)("h5",{children:"legalities"}),a.card.legalities.map((function(e){return(0,c.jsxs)("div",{children:[e.format,": ",e.legality]},e.format)})),(0,c.jsx)("h5",{children:"printings"}),a.card.printings.map((function(e){return(0,c.jsxs)("span",{children:[e," "]},e)}))]})]})]})})}},1163:function(e,n,r){e.exports=r(387)}},function(e){e.O(0,[774,888,179],(function(){return n=5081,e(e.s=n);var n}));var n=e.O();_N_E=n}]);