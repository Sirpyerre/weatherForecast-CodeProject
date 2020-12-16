(this["webpackJsonpweather-forecast"]=this["webpackJsonpweather-forecast"]||[]).push([[0],{128:function(e,t,a){},140:function(e,t,a){},141:function(e,t,a){},262:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),r=a.n(c),s=a(31),i=a.n(s),u=(a(140),a(270)),j=a(266),o=a(267),d=(a(141),a(268)),l=a(269);var h=function(e){var t=e.getData,a=e.getForecast;return Object(n.jsx)("div",{className:"filter",children:Object(n.jsx)(d.a,{name:"filter-location",onFinish:function(e){t(e.location),setTimeout((function(){a(e.location)}),900)},children:Object(n.jsx)(d.a.Item,{name:"location",label:"Your city",children:Object(n.jsx)(l.a,{})})})})},b=a(53),m=a.n(b),O=a(79),f=a(44),x=a(68),p=function(e,t,a){var s=r.a.createContext();return{Context:s,Provider:function(r){var i=r.children,u=Object(c.useReducer)(e,a),j=Object(x.a)(u,2),o=j[0],d=j[1],l={};for(var h in t)l[h]=t[h](d);return Object(n.jsx)(s.Provider,{value:Object(f.a)({state:o},l),children:i})}}},v=a(126),w="b829551248311c33c67e8704b2c80a98",g={baseURL:"https://api.openweathermap.org/data/2.5/"},y=a.n(v).a.create(g),N=p((function(e,t){switch(t.type){case"set_weather":return Object(f.a)(Object(f.a)({},e),{},{data:t.payload});case"set_forecast":return Object(f.a)(Object(f.a)({},e),{},{forecast:t.payload});default:return e}}),{getWeatherData:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y({method:"get",url:"weather?q=".concat(a,"&appid=").concat(w)});case 2:n=t.sent,e({type:"set_weather",payload:n.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getForecast:function(e){return function(){var t=Object(O.a)(m.a.mark((function t(a){var n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y({method:"get",url:"forecast?q=".concat(a,"&appid=").concat(w)});case 2:n=t.sent,console.log("response Forecast",n.data),e({type:"set_forecast",payload:n.data});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},{data:{},forecast:{}}),F=N.Provider,C=N.Context,k=a(23),D=function(e){switch(e.name){case"Thunderstorm":return Object(n.jsx)(k.f,{});case"Drizzle":return Object(n.jsx)(k.c,{});case"Rain":return Object(n.jsx)(k.g,{});case"Snow":return Object(n.jsx)(k.d,{});case"Mist":case"Fog":return Object(n.jsx)(k.b,{});case"Smoke":return Object(n.jsx)(k.h,{});case"Haze":case"Dust":case"Sand":case"Ash":case"Squall":case"Tornado":return Object(n.jsx)(k.g,{});case"Clouds":return Object(n.jsx)(k.a,{});default:return Object(n.jsx)(k.e,{})}},S=function(e){var t=e.name,a=e.value,c=e.className;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("p",{children:t}),Object(n.jsx)("span",{className:c,children:a})]})},T=function(e){var t=e.humidity,a=e.wind;return Object(n.jsxs)("div",{className:"humidity-wind",children:[Object(n.jsx)("div",{className:"humidity",children:Object(n.jsx)(S,{name:"Humidity",value:"".concat(t," %"),className:"humidity-percent"})}),Object(n.jsx)("div",{className:"wind",children:Object(n.jsx)(S,{name:"Wind speed",value:"".concat(a," km/j"),className:"wind-speed"})})]})},M=function(e){var t=e.weather,a=e.main,c=e.wind,r=t[0]?t[0].main:"Clear";return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"weatherCont",children:[Object(n.jsx)(D,{name:r}),Object(n.jsx)("p",{children:r})]}),Object(n.jsx)(T,{humidity:a.humidity,wind:c.speed})]})},_=a(127),P=a.n(_),Y=a(128),H=a.n(Y),I=function(e){var t=e.list,a=Object(c.useRef)(null),r=Object(c.useState)(null),s=Object(x.a)(r,2)[1],i={type:"line"},u=[],j=[];return t.filter((function(e){return e.dt_txt.includes("18:00:00")})).map((function(e){return u.push(e.main.temp),j.push(e.main.temp),0})),i.data={labels:u,datasets:[{label:"Temp",data:j}]},Object(c.useEffect)((function(){if(a&&a.current){var e=new P.a(a.current,i);s(e)}}),[i,a]),Object(n.jsx)("div",{className:H.a.graphContainer,children:Object(n.jsx)("canvas",{id:"my-chart",ref:a})})},R=function(e){var t=e.weather,a=e.main.humidity,c=t[0]?t[0].main:"Clear";return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:"weatherItem",children:[Object(n.jsx)(D,{name:c}),Object(n.jsx)("p",{children:c}),Object(n.jsx)("div",{className:"humidity",children:Object(n.jsx)(S,{name:"Humidity",value:"".concat(a," %"),className:"humidity-percent"})})]})})},q=a(78),z=a.n(q),L=function(e){var t=e.list;return Object(n.jsx)("div",{className:"forecast",children:t.filter((function(e){return e.dt_txt.includes("18:00:00")})).map((function(e,t){var a=z.a.unix(e.dt).format("MMMM Do YYYY");return 0===t&&(a="Today"),Object(n.jsxs)("div",{className:"forecast-daily",children:[a,Object(n.jsx)(R,{main:e.main,weather:e.weather})]},e.dt)}))})};var W=function(){var e=Object(c.useContext)(C),t=e.state,a=e.getWeatherData,r=e.getForecast;return console.log("state",t),Object(n.jsx)(u.a,{children:Object(n.jsxs)(j.a,{children:[Object(n.jsxs)(o.a,{span:6,children:[Object(n.jsx)(h,{getData:a,getForecast:r}),Object.keys(t.data).length>0?Object(n.jsx)(M,{weather:t.data.weather,wind:t.data.wind,main:t.data.main}):null]}),Object(n.jsx)(o.a,{span:18,children:Object(n.jsx)("div",{className:"site-layout-background",style:{padding:24,minHeight:380},children:Object.keys(t.forecast).length>0?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(I,{list:t.forecast.list}),Object(n.jsx)(L,{list:t.forecast.list})]}):null})})]})})},B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,271)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(F,{children:Object(n.jsx)(W,{})})}),document.getElementById("root")),B()}},[[262,1,2]]]);
//# sourceMappingURL=main.e4b7cf7a.chunk.js.map