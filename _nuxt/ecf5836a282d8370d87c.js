(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,r){var content=r(161);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(30).default)("07894e74",content,!0,{sourceMap:!1})},151:function(e,t,r){var content=r(163);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(30).default)("3010f432",content,!0,{sourceMap:!1})},160:function(e,t,r){"use strict";var o=r(150);r.n(o).a},161:function(e,t,r){(e.exports=r(29)(!1)).push([e.i,"#projects[data-v-62e77502]{font-family:Inconsolata;position:absolute;text-align:center;overflow-y:auto;overflow-x:hidden;max-width:100%}#projects[data-v-62e77502],.project[data-v-62e77502]{display:flex;flex-direction:column}.project[data-v-62e77502]{position:relative;margin-bottom:10%;min-width:300px}.openSource[data-v-62e77502]{flex-basis:100%}.split[data-v-62e77502]{width:100%;border:.1px solid #000}.desc[data-v-62e77502]{padding:.2em}.meta[data-v-62e77502]{display:flex;justify-content:space-around}.icon[data-v-62e77502]{cursor:default}@media only screen and (max-width:600px){#projects[data-v-62e77502]{width:100%;top:300px}}",""])},162:function(e,t,r){"use strict";var o=r(151);r.n(o).a},163:function(e,t,r){(e.exports=r(29)(!1)).push([e.i,".project .titleBar{padding:.5em;font-size:.7em}.project h2{font-family:Poiret One;margin-bottom:5px;font-size:2em}.project a{text-decoration:none}",""])},176:function(e,t,r){"use strict";r.r(t);r(67),r(31),r(46),r(45);var o=r(5);r(155).polyfill(),r(156);var n=function(a,b){var e=Date.parse(a.updated_at);return Date.parse(b.updated_at)-e},c=["squaredlabs.uconn.edu","illustration-webform","tech-workorder-form"],l=["weatherapp","helectron","sqleton","Minimal-Notes"],d=["weatherapp","Minimal-Notes","tplink-cloud-api","Epiboard","Android-Messages-Sleek","rplace","helectron"],v=[{name:"Geographic Survey App",description:"A complex senior-design project to deploy geographic surveys to volunteer scientists",displayURL:"https://i.imgur.com/gyBMLBS.png"}],m={name:"Projects",data:function(){return{hardCodedProjects:v,projects:[]}},mounted:function(){var e=Object(o.a)(regeneratorRuntime.mark(function e(){var t,r,o,v,m,h;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.github.com/users/colinmcneil/repos",t="https://api.github.com/orgs/squaredlabs/repos",e.next=4,fetch("https://api.github.com/users/colinmcneil/repos");case 4:return r=e.sent,e.next=7,r.json();case 7:return o=e.sent,e.next=10,fetch(t);case 10:return v=e.sent,e.next=13,v.json();case 13:m=(m=e.sent).filter(function(e){return c.includes(e.name)}),h=o.concat(m).sort(n).map(function(e){return e.displayURL=e.url.replace("api.github.com/repos","github.com"),l.includes(e.name)&&(e.hacktoberfest=!0),d.includes(e.name)&&(e.merged=!0),e}),this.projects=h;case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},h=(r(160),r(162),r(14)),component=Object(h.a)(m,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{attrs:{id:"projects"}},[r("h1",[e._v("Projects")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.projects==[],expression:"projects==[]"}]},[e._v("Loading...")]),e._v(" "),r("no-ssr",[r("VMinTileGrid",[r("h2",[e._v("General")]),e._v(" "),r("hr",{staticClass:"split"}),e._v(" "),e._l(e.hardCodedProjects,function(t){return r("VMinTile",{key:t.name,staticClass:"project",attrs:{title:t.name}},[r("h4",{staticClass:"desc"},[e._v(e._s(""==t.description?"No description":t.description))]),e._v(" "),r("div",{staticClass:"meta",style:{borderColor:e.$store.state.theme.secondaryColor,color:e.$store.state.theme.secondaryColor}},[r("a",{attrs:{href:t.displayURL,target:"_blank",rel:"noopener"}},[e._v("URL\n          ")])])])}),e._v(" "),r("div",{staticClass:"openSource"},[r("h2",[e._v("Open Source")]),e._v(" "),r("hr",{staticClass:"split"})]),e._v(" "),r("VMinTile",{staticClass:"project",attrs:{title:"Open Source Legend"}},[r("div",{staticClass:"icon",attrs:{title:"Hacktoberfest PR"}},[e._v("\n          🎃 Hacktoberfest PR\n        ")]),e._v(" "),r("div",{staticClass:"icon",attrs:{title:"Open Source Fork"}},[e._v("\n          👐 Open Source Fork\n        ")]),e._v(" "),r("div",{staticClass:"icon",attrs:{title:"Merged PR"}},[e._v("\n          🔥 Merged PR\n        ")])]),e._v(" "),e._l(e.projects,function(t){return r("VMinTile",{key:t.name,staticClass:"project",attrs:{title:t.name}},[r("h4",{staticClass:"desc"},[e._v(e._s(t.description))]),e._v(" "),r("div",{staticClass:"meta",style:{borderColor:e.$store.state.theme.secondaryColor,color:e.$store.state.theme.secondaryColor}},[r("div",[e._v(e._s(t.size+" ")+" lines")]),e._v(" "),r("div",[r("a",{attrs:{href:t.displayURL,target:"_blank",rel:"noopener"}},[e._v("URL")])]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.hacktoberfest,expression:"project.hacktoberfest"}],staticClass:"icon",attrs:{title:"Hacktoberfest PR"}},[e._v("🎃")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.fork,expression:"project.fork"}],staticClass:"icon",attrs:{title:"Open Source Fork"}},[e._v("👐")]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.merged,expression:"project.merged"}],staticClass:"icon",attrs:{title:"Merged PR"}},[e._v("🔥")])])])})],2)],1)],1)])},[],!1,null,"62e77502",null);t.default=component.exports}}]);