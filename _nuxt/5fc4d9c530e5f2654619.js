(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,s){var r=s(160);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,s(30).default)("1ebc8328",r,!0,{})},151:function(e,t,s){var r=s(162);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,s(30).default)("86ed53b6",r,!0,{})},159:function(e,t,s){"use strict";var r=s(150);s.n(r).a},160:function(e,t,s){(e.exports=s(29)(!1)).push([e.i,"#projects[data-v-e676b39a]{font-family:Inconsolata;position:absolute;text-align:center;overflow-y:auto;overflow-x:hidden;max-width:100%}#projects[data-v-e676b39a],.project[data-v-e676b39a]{display:flex;flex-direction:column}.project[data-v-e676b39a]{position:relative;margin-bottom:10%;min-width:300px}.openSource[data-v-e676b39a]{flex-basis:100%}.split[data-v-e676b39a]{width:100%;border:.1px solid #000}.desc[data-v-e676b39a]{padding:.2em}.meta[data-v-e676b39a]{display:flex;justify-content:space-around}.icon[data-v-e676b39a]{cursor:default}@media only screen and (max-width:600px){#projects[data-v-e676b39a]{width:100%;top:300px}}",""])},161:function(e,t,s){"use strict";var r=s(151);s.n(r).a},162:function(e,t,s){(e.exports=s(29)(!1)).push([e.i,".project .titleBar{padding:.5em;font-size:.7em}.project h2{font-family:Poiret One;margin-bottom:5px;font-size:2em}.project a{text-decoration:none}",""])},168:function(e,t,s){"use strict";s.r(t);s(64),s(23),s(63),s(44);var r=s(5),a=s.n(r);s(154).polyfill(),s(155);var o=function(e,t){var s=Date.parse(e.updated_at);return Date.parse(t.updated_at)-s},i=["squaredlabs.uconn.edu","illustration-webform","tech-workorder-form"],n=["weatherapp","helectron","sqleton","Minimal-Notes"],c=["weatherapp","Minimal-Notes","tplink-cloud-api","Epiboard","Android-Messages-Sleek","rplace","helectron"],l=[{name:"Geographic Survey App",description:"A complex senior-design project to deploy geographic surveys to volunteer scientists",displayURL:"https://i.imgur.com/gyBMLBS.png"}],p={name:"Projects",data:function(){return{hardCodedProjects:l,projects:[]}},mounted:function(){var e=a()(regeneratorRuntime.mark(function e(){var t,s,r,a,l,p;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.github.com/users/colinmcneil/repos",t="https://api.github.com/orgs/squaredlabs/repos",e.next=4,fetch("https://api.github.com/users/colinmcneil/repos");case 4:return s=e.sent,e.next=7,s.json();case 7:return r=e.sent,e.next=10,fetch(t);case 10:return a=e.sent,e.next=13,a.json();case 13:l=(l=e.sent).filter(function(e){return i.includes(e.name)}),p=r.concat(l).sort(o).map(function(e){return e.displayURL=e.url.replace("api.github.com/repos","github.com"),n.includes(e.name)&&(e.hacktoberfest=!0),c.includes(e.name)&&(e.merged=!0),e}),this.projects=p;case 17:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},d=(s(159),s(161),s(13)),u=Object(d.a)(p,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{attrs:{id:"projects"}},[s("h1",[e._v("Projects")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.projects==[],expression:"projects==[]"}]},[e._v("Loading...")]),e._v(" "),s("VMinTileGrid",[s("h2",[e._v("General")]),e._v(" "),s("hr",{staticClass:"split"}),e._v(" "),e._l(e.hardCodedProjects,function(t){return s("VMinTile",{key:t.name,staticClass:"project",attrs:{title:t.name}},[s("h4",{staticClass:"desc"},[e._v(e._s(""==t.description?"No description":t.description))]),e._v(" "),s("div",{staticClass:"meta",style:{borderColor:e.$store.state.theme.secondaryColor,color:e.$store.state.theme.secondaryColor}},[s("a",{attrs:{href:t.displayURL,target:"_blank",rel:"noopener"}},[e._v("URL\n          ")])])])}),e._v(" "),s("div",{staticClass:"openSource"},[s("h2",[e._v("Open Source")]),e._v(" "),s("hr",{staticClass:"split"})]),e._v(" "),s("VMinTile",{staticClass:"project",attrs:{title:"Open Source Legend"}},[s("div",{staticClass:"icon",attrs:{title:"Hacktoberfest PR"}},[e._v("\n          🎃 Hacktoberfest PR\n        ")]),e._v(" "),s("div",{staticClass:"icon",attrs:{title:"Open Source Fork"}},[e._v("\n          👐 Open Source Fork\n        ")]),e._v(" "),s("div",{staticClass:"icon",attrs:{title:"Merged PR"}},[e._v("\n          🔥 Merged PR\n        ")])]),e._v(" "),e._l(e.projects,function(t){return s("VMinTile",{key:t.name,staticClass:"project",attrs:{title:t.name}},[s("h4",{staticClass:"desc"},[e._v(e._s(t.description))]),e._v(" "),s("div",{staticClass:"meta",style:{borderColor:e.$store.state.theme.secondaryColor,color:e.$store.state.theme.secondaryColor}},[s("div",[e._v(e._s(t.size+" ")+" lines")]),e._v(" "),s("div",[s("a",{attrs:{href:t.displayURL,target:"_blank",rel:"noopener"}},[e._v("URL")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.hacktoberfest,expression:"project.hacktoberfest"}],staticClass:"icon",attrs:{title:"Hacktoberfest PR"}},[e._v("🎃")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.fork,expression:"project.fork"}],staticClass:"icon",attrs:{title:"Open Source Fork"}},[e._v("👐")]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.merged,expression:"project.merged"}],staticClass:"icon",attrs:{title:"Merged PR"}},[e._v("🔥")])])])})],2)],1)])},[],!1,null,"e676b39a",null);u.options.__file="projects.vue";t.default=u.exports}}]);