function createState(e,t,o){var i={path:e,hash:t,title:o};return i}function getState(){var e=window.location.pathname,t=window.location.search.slice(1),o=window.location.hash.substring(1),i=document.title,n=createState(e,o,i);return debug&&(console.log("indexPath: "+e),console.log("hash: "+o),console.log("indexTitle: "+i)),n}function createPath(e,t){var o=e.split("/"),i=o.length,n=e+t+"/";return n}function loadState(e){var t=e.path,o=e.title;debug&&(console.log("itemPath = "+t),console.log("itemTitle = "+o)),""!==t&&history.pushState("",o,t),document.title=o}function resetState(){document.location.hash="",history.pushState("",indexTitle,indexPath),document.title=indexTitle}function setScroll(e){var t=e.parent();e.hasClass("box-has-content")?(t.addClass("allow-scroll"),debug&&console.log("hello there")):t.removeClass("allow-scroll")}function loadSlideBgs(){function e(e){var t,o=e.data("srcFull"),i=e.data("srcFullSl");return t="undefined"!=typeof o?o:e.attr("src"),"undefined"!=typeof i&&mobile&&(t=i),t}function t(t){function o(){t.removeClass("loading").css("background-image","url("+n+")").addClass("has-bg"),t.is("img")&&i.attr("src","images/blank.gif")}var i=t.is("img")?t:t.children("img"),n,s=new Image,a=!1;t.hasClass("has-bg")||(n=e(i),"undefined"!=typeof n&&(t.addClass("loading"),s.onload=o(),s.src=n))}var o={slide:".slide"};$(".box-active").find(o.slide).each(function(){t($(this))})}function initSlides(e){function t(){function t(){var e,t;c&&(w=new Promise(function(o){window.onYouTubeIframeAPIReady=o,e=document.createElement("script"),e.src="https://www.youtube.com/iframe_api",t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(e,t)})),u&&(e=document.createElement("script"),e.src="https://player.vimeo.com/api/player.js",t=document.getElementsByTagName("script")[0],t.parentNode.insertBefore(e,t))}function o(e){var t=e.attr("id");console.log("Pause video: "+t),e.is("video")?e.get(0).pause():e.hasClass("video-yt")?f[t].pauseVideo():e.hasClass("video-vimeo")&&f[t].pause()}function i(e){var t=$(e.target);o(t)}function n(t){var o=t.attr("id");t.hasClass("video-yt")?(e.debug&&console.log("Adding YT Player "+o),f[o]=new YT.Player(o)):t.hasClass("video-vimeo")&&(e.debug&&console.log("Adding Vimeo Player "+o),f[o]=new Vimeo.Player(t.get(0))),t.on("pauseVideo",i)}var s=b.find("video"),a=b.find(".video-yt"),l=b.find(".video-vimeo"),r=s.length>0,c=a.length>0,u=l.length>0,f={};s.on("pauseVideo",i),t(),b.each(function(){var t=$(this),o=t.closest(e.container),i=b.index(t),n=t.find(e.slide),s=t.find("video, .video-yt, .video-vimeo"),a=n.length,l=t.find(".slide-active"),r=t.hasClass("auto-loop")||o.hasClass("auto-loop"),c=o.find(".controls"),u=c.find(".prev"),f=c.find(".next"),g=c.find(".close"),v=t.find(".pager"),h=v.find("a");x[i]={slides:n,videos:s,slideCount:a,slideActive:l.length>0?l:n.eq(0),pos:l.length>0?n.index(l):0,controls:{el:c,prev:u,next:f,close:g},pager:{el:v,a:h}},r&&a>1&&setInterval(function(){d(t,"next")},e.slideInterval)}),e.debug&&console.log(x),(c||u)&&document.addEventListener("lazybeforeunveil",function(t){var o=t.target,i=$(o),s=i.is("video"),a=i.hasClass("video-yt"),l=i.hasClass("video-vimeo"),d,r,c,u=i.closest(e.slideBox),f=b.index(u),g=x[f];(a||l)&&(d=o.cloneNode(!0),r=o.parentNode,d.src=o.getAttribute("data-src"),d.classList.remove("lazyload","lazyloading"),d.classList.add("lazyloaded"),r.insertBefore(d,o),o.remove(),c=$(d),x[f].videos=u.find("video, .video-yt, .video-vimeo"),a?w.then(function(e){n(c)}):n(l?c:c))})}function o(){C=$(".box-active")}function i(e){e.addClass("box-active"),o(),loadSlideBgs()}function n(e){return $slideActive=e.find(".slide-active"),$slideActive}function s(t){function o(){r=n.pos+A.prev,c=n.pos+A.next,n.prevSlide=r>=0?s.eq(r):s.eq(a),n.nextSlide=c<=a?s.eq(c):s.eq(0)}var t="undefined"!=typeof t?t:b.index(C),i="undefined"!=typeof t?b.eq(t):C,n=x[t],s=n.slides,a=n.slideCount-1,l=i.find(".slide-active"),d=l.length>0,r,c;n.pos=d?s.index(l):0,o(),e.debug&&console.log("slideIndex after load {\n\tactive : \t"+n.pos+"\t\t #"+l.attr("id")+"\n\tprev : \t\t"+r+"\t\t #"+n.prevSlide.attr("id")+"\n\tnext : \t\t"+c+"\t\t #"+n.nextSlide.attr("id")+"\n}"),x[t]=n}function a(e){var t=b.eq(e),o=x[e],i=o.controls.el,n=o.controls.prev,s=o.controls.next,a=o.pager.el,l=o.pager.a;l.removeClass("active").eq(o.pos).addClass("active"),0===o.prevSlide.length?n.addClass("disabled"):n.removeClass("disabled"),0===o.nextSlide.length?s.addClass("disabled"):s.removeClass("disabled")}function l(t){e.debug&&console.log("loadSlide : "+t.attr("id"));var o=t.closest(e.slideBox),i=b.index(o),n=x[i],l=t.attr("id"),d=createPath(S.path,l),r=o.find(".list-item-title").text(),c=createState(d,r);n.slides.removeClass("slide-prev slide-next").not(t).removeClass("slide-active"),n.videos.trigger("pauseVideo"),t.hasClass("slide-active")?t.removeClass("slide-active"):(t.addClass("slide-active"),$(document).trigger("slideChanged"),s(i),e.setPath&&loadState(c),n.prevSlide.addClass("slide-prev"),n.nextSlide.addClass("slide-next")),a(i),setScroll(o)}function d(t,o){var o="undefined"!=typeof o?o:"";t.each(function(){function t(){var t=s.slideCount-1,i=""!==o?c+A[o]:a.index($slide),l;return i>t&&(i=0),i<0&&(i=t),i!==c?(c=i,x[n].pos=c,l=a.eq(i)):l=!1,e.debug,l}var i=$(this),n=b.index(i),s=x[n],a=s.slides,d=s.slideActive,r=i.hasClass("box-zoomed")||i.hasClass("slide-box-carousel"),c=s.pos,u;e.debug&&console.log("\nboxIndex: "+n+", "+s.slideCount+"slides,\ndir : "+o+", allowChange: "+r),r&&(u=t(),u&&l(u))})}function r(t){var o=y.length>0,i,n,s;return"object"==typeof t?(t.preventDefault(),i=$(t.target),n=i.closest(e.slideBox),!n.length>0&&(s=i.closest(e.container),n=s.find(e.slideBox))):n=o?y:C,e.debug,n}function c(e){var t=r(e);d(t,"prev")}function u(e){var t=r(e);d(t,"next")}function f(e){x[e].controls.prev.toggleClass("widget-hide"),x[e].controls.next.toggleClass("widget-hide"),x[e].controls.close.toggleClass("widget-hide")}function g(t){var o,n,s;"undefined"!=typeof t?($(document).trigger("zoomIn"),e.debug&&console.log("Zoom In"),o=t.closest(e.slideBox),n=b.index(o),s=x[n],i(o),o.addClass("box-zoomed"),y=o,s.slides.addClass("slide-detail"),$.scrollLock(!0),t.hasClass("slide-active")||l(t),f(n)):y.length>0&&(e.debug&&console.log("Zoom Out"),o=y,$(document).trigger("zoomOut"),n=b.index(o),s=x[n],o.removeClass("box-zoomed"),y=$(),s.slides.removeClass("slide-active slide-prev slide-next slide-detail"),s.videos.trigger("pauseVideo"),$.scrollLock(!1),f(n),e.setPath&&loadState(S))}function v(t){var o=t.find(e.slide).eq(0);i(t),g(o)}function h(){""!==hash&&(e.debug&&console.log("hash: "+hash),v($("#"+hash)))}function m(){b.on("slideBoxChange",function(t){var o=$(t.target);e.debug&&console.log("slideBoxChange event triggered"),i(o),s()}),z.on("toggleZoom",function(e){var t=$(e.target);g(t)}),$(document).on("slideChanged",function(){e.debug&&console.log("slideChanged event triggered")}),e.slideBoxClick?$(document).on("click",".slide-box:not(.box-zoomed)",function(t){e.debug&&console.log("\nslide-box clicked"),v($(this))}):$(document).on("click",".slide:not(.slide-active)",function(t){t.stopPropagation(),e.debug&&console.log("\nslide clicked"),g($(this))}),$(document).on("click",".slide-active:not(.slide-carousel)",function(t){var o=$(this),i=o.data("archiveUrl");t.stopPropagation(),e.debug&&console.log("\nactive slide clicked:"+o),g()}).on("click",".widget.prev",c).on("click",".widget.next",u).on("swiperight",c).on("swipeleft",u).on("click",".close",function(e){e.preventDefault(),g()}).on("click",".number",function(t){var o=$(this),i=o.closest(e.slideBox),n=b.index(i),s=x[n].slides,a=x[n].pager.a.index(o),d=s.eq(a);t.preventDefault(),e.debug&&console.log("number clicked "+parseInt(a+1)),d.hasClass("slide-active")||l(d)}).on("keyup",function(e){switch(e.keyCode){case 27:g();break;case 37:c();break;case 39:u()}})}var p={container:".slide-box",slideBox:".slide-box",slide:".slide",slideBoxClick:!1,setPath:!1,wrapSlides:!1,loopSlides:!1,slideInterval:5e3,debug:debug},e="object"==typeof e?e:p,b=$(e.slideBox),C=$(),y=$(),x=[],z=b.find(e.slide),w,S=getState(),A={prev:-1,next:1};e.debug&&console.log(e),b.length>0&&(t(),m(),o(),loadSlideBgs())}$.scrollLock=function e(){function t(){n||(n=$("body")),s=n.css("overflow"),n.css("overflow","hidden"),i=!0}function o(){n.css("overflow",s),i=!1}var i=!1,n,s;return function e(n){arguments.length?n?t():o():i?o():t()}}();var slideBoxCm={};!function(e,t){var o=t(e,e.document);e.lazySizes=o,"object"==typeof module&&module.exports&&(module.exports=o)}(window,function e(t,o){"use strict";if(o.getElementsByClassName){var i,n=o.documentElement,s=t.Date,a=t.HTMLPictureElement,l="addEventListener",d="getAttribute",r=t[l],c=t.setTimeout,u=t.requestAnimationFrame||c,f=t.requestIdleCallback,g=/^picture$/i,v=["load","error","lazyincluded","_lazyloaded"],h={},m=Array.prototype.forEach,p=function(e,t){return h[t]||(h[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),h[t].test(e[d]("class")||"")&&h[t]},b=function(e,t){p(e,t)||e.setAttribute("class",(e[d]("class")||"").trim()+" "+t)},C=function(e,t){var o;(o=p(e,t))&&e.setAttribute("class",(e[d]("class")||"").replace(o," "))},y=function(e,t,o){var i=o?l:"removeEventListener";o&&y(e,t),v.forEach(function(o){e[i](o,t)})},x=function(e,t,i,n,s){var a=o.createEvent("CustomEvent");return a.initCustomEvent(t,!n,!s,i||{}),e.dispatchEvent(a),a},z=function(e,o){var n;!a&&(n=t.picturefill||i.pf)?n({reevaluate:!0,elements:[e]}):o&&o.src&&(e.src=o.src)},w=function(e,t){return(getComputedStyle(e,null)||{})[t]},S=function(e,t,o){for(o=o||e.offsetWidth;o<i.minSize&&t&&!e._lazysizesWidth;)o=t.offsetWidth,t=t.parentNode;return o},A=function(){var e,t,i=[],n=[],s=i,a=function(){var o=s;for(s=i.length?n:i,e=!0,t=!1;o.length;)o.shift()();e=!1},l=function(i,n){e&&!n?i.apply(this,arguments):(s.push(i),t||(t=!0,(o.hidden?c:u)(a)))};return l._lsFlush=a,l}(),B=function(e,t){return t?function(){A(e)}:function(){var t=this,o=arguments;A(function(){e.apply(t,o)})}},k=function(e){var t,o=0,i=125,n=666,a=n,l=function(){t=!1,o=s.now(),e()},d=f?function(){f(l,{timeout:a}),a!==n&&(a=n)}:B(function(){c(l)},!0);return function(e){var n;(e=e===!0)&&(a=44),t||(t=!0,n=i-(s.now()-o),n<0&&(n=0),e||n<9&&f?d():c(d,n))}},E=function(e){var t,o,i=99,n=function(){t=null,e()},a=function(){var e=s.now()-o;e<i?c(a,i-e):(f||n)(n)};return function(){o=s.now(),t||(t=c(a,i))}},N=function(){var e,a,u,f,v,h,S,N,M,_,I,T,q,L,W,F=/^img$/i,R=/^iframe$/i,D="onscroll"in t&&!/glebot/.test(navigator.userAgent),O=0,V=0,j=0,H=-1,Y=function(e){j--,e&&e.target&&y(e.target,Y),(!e||j<0||!e.target)&&(j=0)},Z=function(e,t){var i,s=e,a="hidden"==w(o.body,"visibility")||"hidden"!=w(e,"visibility");for(M-=t,T+=t,_-=t,I+=t;a&&(s=s.offsetParent)&&s!=o.body&&s!=n;)a=(w(s,"opacity")||1)>0,a&&"visible"!=w(s,"overflow")&&(i=s.getBoundingClientRect(),a=I>i.left&&_<i.right&&T>i.top-1&&M<i.bottom+1);return a},U=function(){var t,s,l,r,c,f,g,h,m;if((v=i.loadMode)&&j<8&&(t=e.length)){s=0,H++,null==L&&("expand"in i||(i.expand=n.clientHeight>500&&n.clientWidth>500?500:370),q=i.expand,L=q*i.expFactor),V<L&&j<1&&H>2&&v>2&&!o.hidden?(V=L,H=0):V=v>1&&H>1&&j<6?q:O;for(;s<t;s++)if(e[s]&&!e[s]._lazyRace)if(D)if((h=e[s][d]("data-expand"))&&(f=1*h)||(f=V),m!==f&&(S=innerWidth+f*W,N=innerHeight+f,g=f*-1,m=f),l=e[s].getBoundingClientRect(),(T=l.bottom)>=g&&(M=l.top)<=N&&(I=l.right)>=g*W&&(_=l.left)<=S&&(T||I||_||M)&&(u&&j<3&&!h&&(v<3||H<4)||Z(e[s],f))){if(oe(e[s]),c=!0,j>9)break}else!c&&u&&!r&&j<4&&H<4&&v>2&&(a[0]||i.preloadAfterLoad)&&(a[0]||!h&&(T||I||_||M||"auto"!=e[s][d](i.sizesAttr)))&&(r=a[0]||e[s]);else oe(e[s]);r&&!c&&oe(r)}},G=k(U),J=function(e){b(e.target,i.loadedClass),C(e.target,i.loadingClass),y(e.target,Q)},K=B(J),Q=function(e){K({target:e.target})},X=function(e,t){try{e.contentWindow.location.replace(t)}catch(o){e.src=t}},ee=function(e){var t,o,n=e[d](i.srcsetAttr);(t=i.customMedia[e[d]("data-media")||e[d]("media")])&&e.setAttribute("media",t),n&&e.setAttribute("srcset",n),t&&(o=e.parentNode,o.insertBefore(e.cloneNode(),e),o.removeChild(e))},te=B(function(e,t,o,n,s){var a,l,r,u,v,h;(v=x(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(o?b(e,i.autosizesClass):e.setAttribute("sizes",n)),l=e[d](i.srcsetAttr),a=e[d](i.srcAttr),s&&(r=e.parentNode,u=r&&g.test(r.nodeName||"")),h=t.firesLoad||"src"in e&&(l||a||u),v={target:e},h&&(y(e,Y,!0),clearTimeout(f),f=c(Y,2500),b(e,i.loadingClass),y(e,Q,!0)),u&&m.call(r.getElementsByTagName("source"),ee),l?e.setAttribute("srcset",l):a&&!u&&(R.test(e.nodeName)?X(e,a):e.src=a),(l||u)&&z(e,{src:a})),e._lazyRace&&delete e._lazyRace,C(e,i.lazyClass),A(function(){(!h||e.complete&&e.naturalWidth>1)&&(h?Y(v):j--,J(v))},!0)}),oe=function(e){var t,o=F.test(e.nodeName),n=o&&(e[d](i.sizesAttr)||e[d]("sizes")),s="auto"==n;(!s&&u||!o||!e.src&&!e.srcset||e.complete||p(e,i.errorClass))&&(t=x(e,"lazyunveilread").detail,s&&P.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,j++,te(e,t,s,n,o))},ie=function(){if(!u){if(s.now()-h<999)return void c(ie,999);var e=E(function(){i.loadMode=3,G()});u=!0,i.loadMode=3,G(),r("scroll",function(){3==i.loadMode&&(i.loadMode=2),e()},!0)}};return{_:function(){h=s.now(),e=o.getElementsByClassName(i.lazyClass),a=o.getElementsByClassName(i.lazyClass+" "+i.preloadClass),W=i.hFac,r("scroll",G,!0),r("resize",G,!0),t.MutationObserver?new MutationObserver(G).observe(n,{childList:!0,subtree:!0,attributes:!0}):(n[l]("DOMNodeInserted",G,!0),n[l]("DOMAttrModified",G,!0),setInterval(G,999)),r("hashchange",G,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(e){o[l](e,G,!0)}),/d$|^c/.test(o.readyState)?ie():(r("load",ie),o[l]("DOMContentLoaded",G),c(ie,2e4)),e.length?(U(),A._lsFlush()):G()},checkElems:G,unveil:oe}}(),P=function(){var e,t=B(function(e,t,o,i){var n,s,a;if(e._lazysizesWidth=i,i+="px",e.setAttribute("sizes",i),g.test(t.nodeName||""))for(n=t.getElementsByTagName("source"),s=0,a=n.length;s<a;s++)n[s].setAttribute("sizes",i);o.detail.dataAttr||z(e,o.detail)}),n=function(e,o,i){var n,s=e.parentNode;s&&(i=S(e,s,i),n=x(e,"lazybeforesizes",{width:i,dataAttr:!!o}),n.defaultPrevented||(i=n.detail.width,i&&i!==e._lazysizesWidth&&t(e,s,n,i)))},s=function(){var t,o=e.length;if(o)for(t=0;t<o;t++)n(e[t])},a=E(s);return{_:function(){e=o.getElementsByClassName(i.autosizesClass),r("resize",a)},checkElems:a,updateElem:n}}(),M=function(){M.i||(M.i=!0,P._(),N._())};return function(){var e,o={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2};i=t.lazySizesConfig||t.lazysizesConfig||{};for(e in o)e in i||(i[e]=o[e]);t.lazySizesConfig=i,c(function(){i.init&&M()})}(),{cfg:i,autoSizer:P,loader:N,init:M,uP:z,aC:b,rC:C,hC:p,fire:x,gW:S,rAF:A}}});var debug=!0,mobile=!1;$(function(){initSlides()});
//# sourceMappingURL=./slidebox-min.js.map