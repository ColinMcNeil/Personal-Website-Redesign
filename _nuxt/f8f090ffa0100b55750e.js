(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{148:function(l,t,n){var a=n(164);"string"==typeof a&&(a=[[l.i,a,""]]),a.locals&&(l.exports=a.locals);(0,n(42).default)("17f4fbbe",a,!0,{})},163:function(l,t,n){"use strict";var a=n(148);n.n(a).a},164:function(l,t,n){(t=l.exports=n(41)(!1)).push([l.i,"@import url(https://fonts.googleapis.com/css?family=Poiret+One);",""]),t.push([l.i,"#title[data-v-6d81039b]{height:350px;top:50%;left:50%;position:absolute;width:90%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);transition:all .9s ease-in-out}#owl[data-v-6d81039b]{transition:all .5s ease-in-out;-webkit-transform:translate(35%);transform:translate(35%)}#title:hover #owl[data-v-6d81039b]{-webkit-transform:translate(484px);transform:translate(484px)}#tap[data-v-6d81039b]{top:80%;left:50%;background-color:#fff;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);position:absolute;font-family:Poiret One;font-size:2em}#myname[data-v-6d81039b]{display:none}.ready[data-v-6d81039b]{cursor:pointer;transition:all .3s ease-in-out}.ready:hover #owl[data-v-6d81039b]{fill:#41974d}#loadingText[data-v-6d81039b]{font-family:Wire One;font-size:4em;position:fixed;top:50%;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.fade-enter-active[data-v-6d81039b],.fade-leave-active[data-v-6d81039b]{transition:opacity .5s}.fade-enter[data-v-6d81039b],.fade-leave-to[data-v-6d81039b]{opacity:0}.fade-slow-enter-active[data-v-6d81039b],.fade-slow-leave-active[data-v-6d81039b]{transition:opacity .9s}.fade-slow-enter[data-v-6d81039b],.fade-slow-leave-to[data-v-6d81039b]{opacity:0}",""])},168:function(l,t,n){"use strict";n.r(t);n(161);var a={name:"Title",data:function(){return{ready:!1,loading:!1,loaded:!1,help:!1}},mounted:function(){var l=this,t=this.$refs.owlSVG;Snap(t);var n=Snap.select("#myname");this.owl=Snap.select("#owl"),this.namePoints=n.node.getAttribute("d"),this.owlPoints=this.owl.node.getAttribute("d"),this.helper=setTimeout(function(){l.help=!0},2e3)},methods:{toOwl:function(){this.ready=!1,this.animating&&this.owl.stop(),this.owl.animate({d:this.owlPoints},1200,mina.linear())},toName:function(){var l=this;this.animating&&this.owl.stop(),setTimeout(function(){l.ready=!0},300),this.owl.animate({d:this.namePoints},1200,mina.linear())},hover:function(){var l=this;this.animating=!0,this.toName(),clearTimeout(this.helper),this.helper=setTimeout(function(){l.help=!0},2e3)},unHover:function(){this.animating=!0,this.toOwl()},clicked:function(){this.ready&&(this.loading=!0,setTimeout(this.$router.push("menu"),1e3))}}},e=(n(163),n(15)),i=Object(e.a)(a,function(){var l=this,t=l.$createElement,n=l._self._c||t;return n("div",{attrs:{id:"title"}},[n("transition",{attrs:{name:"fade"}},[l.loading||l.loaded?l._e():n("svg",{ref:"owlSVG",class:{ready:l.ready,loading:l.loading},attrs:{id:"owlSVG",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px","enable-background":"new 0 0 500 500","xml:space":"preserve",viewBox:"0 0 1857.5234 500.99999",width:"100%"},on:{mouseover:l.hover,mouseleave:l.unHover,click:l.clicked}},[n("path",{ref:"owl",attrs:{id:"owl",fill:"#58595B",d:"M355.421,148.998l-12.256-20.899l-1.808-22.582l-0.91-26.88l-0.004-0.119l-15.487-40.993l-0.007-0.574\n              l-0.477-0.007l-28.645-20.461l-25.666-4.954l-0.565-0.108l-16.089,1.84l-33.979,5.51L187.35,57.842l-8.261,41.309l4.537,27.219\n              l-0.015,0.029l0.001,0.003l-20.732,38.758l-0.468,0.273l0.266,0.417l-6.718,35.75l-0.16,0.093l0.068,0.389l-4.104,21.863v47.792\n              l-8.241,32.051l9.977,21.445l7.666-22.571l3.813,45.762l13.132,34.125l5.484-19.958l-0.397,37.434l8.971,16.359l1.053-11.792v41.749\n              l-0.331,0.179l0.409,0.587l14.072,37.524l6.726-8.165l9.744,7.528l12.188-2.926l1.344-8.068h9.016l6.988,11.183l16.908-9.662v-6.929\n              l10.417,5.887l3.24-62.499l21.79-39.947l4.548-20.787l1.847-0.791v24.437l15.888-22.839l0.035-0.049l9.425-25.256l8.096,19.997\n              l7.159-58.732l13.658-51.447l0.025-54.976L355.421,148.998z M224.178,482.437l-9.663-7.467l-18.869-27.015l71.061,18.406\n              l-20.008,5.203h-10.54l-1.39,8.331L224.178,482.437z M229.895,426.523l-35.234,19.041v-55.337L229.895,426.523z M184.641,399.665\n              l0.446-41.891l46.005,25.229l-38.667,4.92l0.772,0.797l-2.038,22.829L184.641,399.665z M153.2,224.081l3.38-18.036l5.754,32.058\n              l-9.131,29.043L153.2,224.081z M163.266,235.145l-5.873-32.715l19.776-11.507L163.266,235.145z M160.831,299.183l-5.965,17.564\n              l8.801-77.457l27.551,14.972l-30.431,44.812L160.831,299.183z M181.237,95.74l7.238-36.183l10.451,9.648L181.237,95.74z\n              M232.352,31.302l-10.969-11.376l32.323-5.242l12.218-1.397L232.352,31.302z M312.76,59.531l10.786-19.175l0.4,39.549L312.76,59.531\n              z M303.307,123.196l15.626-19.096l0.029-0.037l5.816-19.108l16.582,42.518L303.307,123.196z M350.925,188.388v-19.752l14.053,12.401\n              v49.955l-14.014-41.626l0.366-1.104L350.925,188.388z M330.882,181.172l18.562,8.633l-12.162,128.132l-18.192-118.25l-0.021-0.138\n              L330.882,181.172z M254.731,396.816l24.06,73.93l-8.778-4.961l-37.994-39.138L254.731,396.816z M242.911,298.099l-10.121,84.196\n              l-47.236-25.903L242.911,298.099z M192.414,255.061l50.396,41.091l-58.108,59.056l-0.064,0.066l-22.231-56.022L192.414,255.061z\n              M191.437,252.743L163.938,237.8l20.929-66.567L191.437,252.743z M191.624,159.061l-5.617-6.409v-0.082l-0.209-0.156l-0.361-0.412\n              l-20.186,11.775l18.874-35.284L191.624,159.061z M217.171,129.773l-27.212,16.471l-4.647-18.952L217.171,129.773z M295.619,37.951\n              l27.4,0.41l-9.057,16.1L295.619,37.951z M302.396,155.314l46.088,12.024l-17.817,12.018L302.396,155.314z M317.477,200.159\n              l-12.462,84.947l-10.075-83.312L317.477,200.159z M193.224,253.866l21.05-30.996l27.925,70.931L193.224,253.866z M217.34,81.43\n              l3.838,6.824l0.037,0.063l8.91,4.457v5.6L199.874,98.9l-17.111-0.389L217.34,81.43z M200.714,68.9l6.121-15.493l3.618,24.518\n              l-1.612,0.487l6.882,2.213l-33.818,16.706l18.898-28.349L200.714,68.9z M311.242,59.206l-13.827,13.828l-3.722-26.467l19.91,8.533\n              l-1.863,3.313L311.242,59.206z M274.622,150.143l26.431-24.594l-2.174,27.479L274.622,150.143z M295.074,200.323l2.317-11.973\n              l0.124,0.094l0.015-0.167l18.342,10.537L295.074,200.323z M200.383,185.004l-3.385-10.156l6.892-13.511l11.605,4.402l-1.709,19.265\n              H200.383z M215.187,185.479l1.48-16.684l9.665,29.312L215.187,185.479z M218.615,130.582l-2.98,33.597l-0.007,0.075l-11.292-4.287\n              l0.053-0.362l-10.82,1.352l-3.249-13.249L218.615,130.582z M202.285,161.315l-5.826,11.425l-2.545-10.378L202.285,161.315z\n              M195.588,175.231l0.396,1.607l0.097-0.194l3.266,9.798h14.771l13.084,14.827l-34.392,50.647l-6.688-82.996L195.588,175.231z\n              M275.627,195.12l-18.86,27.908l-12.718-30.017l21.037,9.016L275.627,195.12z M245.274,177.715l3.433-25.734l22.758,17.002\n              L245.274,177.715z M217.952,165.277l29.32-13.408l-3.445,25.817L217.952,165.277z M243.628,179.185l-1.458,10.925l-22.415-22.373\n              L243.628,179.185z M262.222,199.234l-18.747-8.034l1.444-10.82L262.222,199.234z M272.714,149.954h-23.736l0.065-0.475l-0.796,0.362\n              l-26.755-19.986l36.021-1.716l0.273-0.014l36.204-10.395l6.854,6.047L272.714,149.954z M241.556,191.529l-13.054,8.568\n              l-10.614-32.195L241.556,191.529z M228.626,201.735l13.737-9.015l13.135,31.003l-39.763-3.006L228.626,201.735z M272.959,172.348\n              l4.456,19.88l-11.259,7.376L272.959,172.348z M273.64,168.813l-0.163-0.728l-0.442,0.273l-22.714-16.967l22.619-0.001l25.826,3.067\n              l-2.476,31.275L273.64,168.813z M254.816,89.89l2.188,17.502v17.95l-5.078-6.415l-0.994-10.16L254.816,89.89z M290.321,68.375\n              h-12.98l15.002-21.083l3.598,25.578L290.321,68.375z M258.443,126.454v-18.728l28.866-21.432l6.025,30.127L258.443,126.454z\n              M287.21,84.476l-7.735,2.578h-9.814l-2.028-7.301l7.953-9.146l0.043,0.175l0.689-0.97h13.5l5.453,4.364l-5.312,1.139L287.21,84.476\n              z M276.267,67.407l-5.758-23.03l20.974,1.646L276.267,67.407z M247.313,60.081l-2.622,13.109l2.771,14.755l3.767,10.061\n              l-19.665,0.342v-5.585l8.792-4.626l-2.974-10.163l-8.707-5.562l-16.831,5.093l-3.826-25.939L247.313,60.081z M248.62,60.88\n              l5.581,4.835l-2.69,12.78l2.734,7.061l-2.188,10.571l-3.202-8.526l-2.699-14.401L248.62,60.88z M217.067,46.035l6.951-6.059\n              l21.485,18.241l-36.313-7.868L217.067,46.035z M228.458,73.979l7.696,4.916l2.493,8.516l-7.811,4.11l-8.584-4.292l-4.129-7.343\n              l-4.454-1.432L228.458,73.979z M246.755,150.523l-29.671,13.572l2.973-33.516L246.755,150.523z M295.974,188.111l-2.323,12.001\n              l-13.55-7.354L295.974,188.111z M278.759,191.65l-4.637-20.683l21.198,15.837L278.759,191.65z M308.799,98.345l-14.218,16.975\n              l-6.048-30.245l2.56-8.533l6.17-1.321l14.16-14.163l2.968,21.626L308.799,98.345z M293.335,44.85l-0.356-0.152l-23.01-1.805\n              l-0.509-0.04l-14.247,5.624l10.554-10.554h27.673l14.787,13.309L293.335,44.85z M238.477,40.661l-0.049-0.038l-14.637-2.361\n              l-7.484,6.549l-9.263,5.072l-0.751-0.163l0.124,0.838l-5.833,14.761V53.842l9.299-12.622l22.136-8.191l0.053,0.054l0.191-0.102\n              l12.547,4.759l2.194,9.51L238.477,40.661z M251.374,99.441l-1.893,9.25l0.921,9.432l-46.805-17.85L251.374,99.441z M250.791,119.81\n              l5.5,6.947l-36.611,1.744l-0.477-0.355l-0.17,0.333l-33.465-2.609l14.613-25.361L250.791,119.81z M186.006,167.114v-12.282\n              l6.359,7.259l2.718,11.076L186.006,167.114z M244.067,294.618l-28.534-72.476l40.596,3.069l14.255,33.649L244.067,294.618z\n              M278.456,193.5l15.059,8.175l10.62,89.462l0.314,3.814l-32.627-36.382l-14.39-33.962L278.456,193.5z M298.847,171.661l0.771-0.269\n              l-0.706-0.574l1.229-15.535l12.725,10.821v0.679l0.567-0.197l15.592,13.259l-31.329,6.35L298.847,171.661z M323.919,82.842\n              l-6.25,20.53l-15.838,19.359l-6.66-5.876l14.867-17.752l0.027-0.034l5.778-16.178l0.02-0.054l-2.685-19.558L323.919,82.842z\n              M264.797,36.859l-15.496,15.496l19.073-7.528l-13.419,38.584l-1.95-5.037l2.776-13.19l-5.034-4.362l0.059,0.013l-3.116-2.653\n              l-0.001,0.005l-21.249-18.04l11.399,1.838l11.471,8.863l-3.273-14.18l-12.095-4.587l34.681-18.611L264.797,36.859z M253.912,395.518\n              l-22.904,30.086l-35.547-36.616l37.776-4.808L253.912,395.518z M255.346,394.058l-0.098-0.296l-0.455,0.6l-20.644-11.321\n              l10.284-85.563l64.096,52.262L255.346,394.058z M244.855,295.965l26.182-35.565l36.83,86.942L244.855,295.965z M349.488,168.396\n              v19.844l-17.414-8.1L349.488,168.396z M300.318,153.06l2.256-28.498l39.45,4.431l12.073,20.565l0.158,0.451L300.318,153.06z\n              M267.267,465.021l-71.374-18.488l35.043-18.938L267.267,465.021z M268.851,467.289v6.398l-14.984,8.561l-5.948-9.517\n              L268.851,467.289z M313.568,369.307v-22.032l-3.273,1.402l-4.296-52.404l0.061-0.416l-0.131-0.432l-0.349-4.269l12.753-86.93\n              l18.378,119.462l-9.924,26.618L313.568,369.307z M364.946,235.407l-13.613,51.27l-0.012,0.048l-6.503,53.326l-6.635-16.395\n              l12.42-130.858L364.946,235.407z M353.087,168.625l8.501,2.459l2.529,7.275L353.087,168.625z M325.455,82.733l0.016-0.051\n              l-0.061-0.108l-0.412-40.869l14.016,37.1l0.909,26.794l1.432,17.904L325.455,82.733z M294.5,36.497l1.64-18.024l25.808,18.434\n              L294.5,36.497z M266.445,35.689l3.715-22.696l23.52,4.54L266.445,35.689z M157.593,200.651l6.195-33.046l13.617,21.517\n              L157.593,200.651z M161.514,245.508l-8.542,75.181l-7.926-17.04l8.129-31.614L161.514,245.508z M308.514,351.624l-4.09,18.812\n              l-21.474,39.368l-26.689-14.638L308.514,351.624z"}}),l._v(" "),n("path",{ref:"myname",attrs:{id:"myname",transform:"translate(484.64288,-30.576492)",d:"m 1372.8806,257.82649 -105.25,0 -34.5,-34.5 0,-172.749998 70.25,70.249998 0,100.5 33,0 36.5,36.5 z m -137,-36.5 64.75,0 0,-99.25 -64.75,-64.999998 0,164.249998 z m 33,34 97.5,0 -31,-31.25 -97.75,0 31.25,31.25 z m -94.9922,-33 34,33.75 -105.25,0 -36.5,-36.5 35.75,0 0,-133.249998 -35.75,-35.75 105.25,0 36.5,36.5 -35.75,0 0,133.249998 1.75,2 z m -70.25,-137.999998 97.75,0 -31.25,-31 -97.5,0 31,31 z m 65.75,133.249998 0,-130.499998 -64.75,0 0,65.749998 64.75,64.75 z m -64.75,-61 0,63 62.75,0 -62.75,-63 z m 96.75,96.75 -31.25,-31 -97.5,0 31,31 97.75,0 z m -196.5508,-33.75 36.5,36.5 -105.25001,0 -34.5,-34.75 0,-170.749998 103.25001,0 36.5,36.5 -69.50001,0 0,47.999998 33.00001,0 36.5,36.5 -69.50001,0 0,48 33.00001,0 z m -67.50001,-135.249998 97.50001,0 -31,-31 -97.75001,0 31.25,31 z m -2,2 -31,-31.25 0,165.249998 31,31 0,-164.999998 z m 2.75,0.75 0,132.499998 31,0 0,-132.499998 -31,0 z m 33.75,50.749998 0,31 63.00001,0 -31,-31 -32.00001,0 z m 63.00001,115.5 -31,-31 -65.75001,0 0,31 96.75001,0 z M 876.73993,87.076492 l 0,172.499998 -75,-69.5 -26.25,0 0,69.5 -36.5,-36.5 0,-172.499998 101.25,101.249998 0,-101.249998 36.5,36.5 z m -135,-30 0,164.999998 31,31 0,-164.999998 -31,-31 z m 132.25,31 -31,-31 0,97.499998 31,31 0,-97.499998 z m -2,99.499998 -96.5,-96.749998 0,96.749998 96.5,0 z m 2,2.5 -68.25,0 68.25,63.5 0,-63.5 z m -195.55078,30.25 35.75,35.75 -105.25,0 -34.5,-34.75 0,-170.749998 103.25,0 36.5,36.5 -35.75,0 0,133.249998 z m -68.25,-135.999998 97.5,0 -31,-31 -97.75,0 31.25,31 z m -33,-29.25 0,165.249998 31,31 0,-164.999998 -31,-31.25 z m 33.75,32 0,65.749998 64.75,64.75 0,-130.499998 -64.75,0 z m 0,69.499998 0,96.75 96.75,0 -96.75,-96.75 z m -61.34766,101.25 -50.5,-50.5 0,50.5 -50.75,-50.5 0,50.5 -36.5,-36.5 0,-170.749998 103.25,0 34.5,34.5 0,172.749998 z m -4.5,-173.499998 -31,-31 -97.75,0 31.25,31 97.5,0 z m -130.5,-29.25 0,165.249998 31,31 0,-164.999998 -31,-31.25 z m 81.75,32 -48,0 0,116.249998 48,48 0,-164.249998 z m 50.75,0 -48.25,0 0.25,116.249998 48,48 0,-164.249998 z m -235.29297,0 0,172.499998 -75,-69.5 -26.25,0 0,69.5 -36.5,-36.5 0,-172.499998 101.25,101.249998 0,-101.249998 36.5,36.5 z m -135,-30 0,164.999998 31,31 0,-164.999998 -31,-31 z m 132.25,31 -31,-31 0,97.499998 31,31 0,-97.499998 z m -2,99.499998 -96.5,-96.749998 0,96.749998 96.5,0 z m 2,2.5 -68.25,0 68.25,63.5 0,-63.5 z m -194.24218,32.25 34,33.75 -105.250005,0 -36.4999996,-36.5 35.7499996,0 0,-133.249998 -35.7499996,-35.75 105.2500046,0 36.5,36.5 -35.75,0 0,133.249998 1.75,2 z M 44.556335,84.326492 l 97.750005,0 -31.25,-31 -97.500005,0 31,31 z m 65.750005,133.249998 0,-130.499998 -64.750005,0 0,65.749998 64.750005,64.75 z m -64.750005,-61 0,63 62.750005,0 -62.750005,-63 z m 96.750005,96.75 -31.25,-31 -97.500005,0 31,31 97.750005,0 z m -160.050786,4.5 -105.250004,0 -34.5,-34.5 0,-172.749998 70.250004,70.249998 0,100.5 33,0 36.5,36.5 z m -137.000004,-36.5 64.750004,0 0,-99.25 -64.750004,-64.999998 0,164.249998 z m 33,34 97.500004,0 -31,-31.25 -97.750004,0 31.25,31.25 z m -60.59765,-170.249998 0,170.999998 -103.25,0 -34.5,-34.75 0,-170.749998 103.25,0 34.5,34.5 z m -102,-0.75 97.5,0 -31,-31 -97.75,0 31.25,31 z m -2,2 -1.75,-2 -29.25,-29.25 0,165.249998 31,31 0,-164.999998 z m 101.5,0.75 -97,0 97,96.749998 0,-96.749998 z m 0,100.499998 -98.75,-98.499998 0,164.249998 98.75,0 0,-65.75 z m -195.80078,32.75 35.75,35.75 -105.25,0 -34.5,-34.75 0,-170.749998 103.25,0 36.5,36.5 -35.75,0 0,133.249998 z m -68.25,-135.999998 97.5,0 -31,-31 -97.75,0 31.25,31 z m -33,-29.25 0,165.249998 31,31 0,-164.999998 -31,-31.25 z m 33.75,32 0,65.749998 64.75,64.75 0,-130.499998 -64.75,0 z m 0,69.499998 0,96.75 96.75,0 -96.75,-96.75 z"}})])]),l._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:l.help,expression:"help"}],attrs:{id:"tap"}},[l._v("Click the owl.")])]),l._v(" "),n("transition",{attrs:{name:"fade"}},[l.loading?n("h1",{attrs:{id:"loadingText"}},[l._v("loading.")]):l._e()])],1)},[],!1,null,"6d81039b",null);i.options.__file="index.vue";t.default=i.exports}}]);