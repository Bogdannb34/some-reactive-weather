(this["webpackJsonpreactive-weather"]=this["webpackJsonpreactive-weather"]||[]).push([[0],{30:function(e,a,t){e.exports=t(50)},50:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(22),s=t.n(r),l=(t(35),t(7)),o=t(1),m=t(23),i=function(){var e=Object(o.f)();return c.a.createElement("div",{style:{width:400}},c.a.createElement(m.ReactSearchAutocomplete,{items:[{id:0,name:"Paris",country:"fr"},{id:1,name:"Guangzhou",country:"guangdong"},{id:2,name:"Toronto",country:"on"},{id:5,name:"Mykonos",country:"gr"},{id:6,name:"Milan",country:"it"},{id:7,name:"Madrid",country:"es"},{id:8,name:"Stockholm",country:"se"}],onSelect:function(a){e.push("/city/".concat(a.name,",").concat(a.country))}}))},d=t(18),u=t.n(d),b=t(27),p=t(19),E="JXghxk1gBBHqi4OqKOb8P",h="MysHXGMgQhVT52EEO1IPv42NTn5NF2uzXPUnwi9x",v=function(){var e=Object(o.g)(),a=e.city,t=e.country,r=Object(n.useState)(),s=Object(p.a)(r,2),l=s[0],m=s[1],i=function(){var e=Object(b.a)(u.a.mark((function e(a,t){var n,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.aerisapi.com/conditions/summary/".concat(a,",").concat(t,"?format=json&client_id=").concat(E,"&client_secret=").concat(h),e.next=3,fetch(n);case 3:return c=e.sent,e.next=6,c.json();case 6:r=e.sent,Object.entries(r.response[0].periods[0]).forEach((function(e){var a=Object(p.a)(e,2),t=a[0],n=a[1];"feelslike"===t&&m(n)}));case 8:case"end":return e.stop()}}),e)})));return function(a,t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i(a,t)}),[a,t]),c.a.createElement("div",{className:"container d-flex justify-content-center align-items-center",style:{height:"75vh"}},l&&c.a.createElement("div",{className:"card text-center h-50 shadow bg-body rounded",style:{width:"20rem",zIndex:"-1"}},c.a.createElement("div",{className:"card-header"},c.a.createElement("h5",{className:"card-title text-info text-uppercase"},a)),c.a.createElement("h5",{className:"text-danger mt-1"},"Temperature"),c.a.createElement("div",{className:"card-body d-flex justify-content-around align-items-center flex-wrap"},c.a.createElement("h3",{className:"text-info border border-info rounded shadow bg-body p-1"},c.a.createElement("span",{className:"text-info"},"\u2304"),l.minC," \u2103"),c.a.createElement("h3",{className:"text-danger border border-danger rounded shadow bg-body p-1"},c.a.createElement("span",null,"\u2303"),l.maxC," \u2103"),c.a.createElement("h3",{className:"text-success border border-success rounded shadow bg-body p-1"},c.a.createElement("span",null,"\u2242\xa0"),l.avgC," \u2103"))))},g=function(){return c.a.createElement(l.a,null,c.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light"},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navy","aria-controls":"navy","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navy"},c.a.createElement("a",{className:"navbar-brand text-danger",href:"/"},c.a.createElement("em",null,c.a.createElement("span",{className:"text-success"},"R"),"eactive ",c.a.createElement("span",{className:"text-success"},"W"),"eather")),c.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/city/bucharest,ro"},"Bucharest")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/city/budapest,hu"},"Budapest")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{className:"nav-link",to:"/city/warsaw,pl"},"Warsaw"))),c.a.createElement("form",{className:"d-flex",role:"search"},c.a.createElement(i,null))))),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/city/:city,:country",component:v})))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.4b0f2b83.chunk.js.map