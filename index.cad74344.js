!function(){function t(t){return t&&t.__esModule?t.default:t}var e={};function r(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,a){var i=t.apply(e,n);function c(t){r(i,o,a,c,u,"next",t)}function u(t){r(i,o,a,c,u,"throw",t)}c(void 0)}))}};var n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")};var o={};function a(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t,e,r){e&&a(t.prototype,e);r&&a(t,r);return t};var i={},c=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new N(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw a;return q()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=E(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?y:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",d={};function v(){}function g(){}function m(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,x=b&&b(b(O([])));x&&x!==r&&n.call(x,a)&&(w=x);var L=m.prototype=v.prototype=Object.create(w);function _(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){s.value=t,i(s)}),(function(t){return r("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:q}}function q(){return{value:e,done:!0}}return g.prototype=m,u(L,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},_(k.prototype),u(k.prototype,i,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new k(s(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(L),u(L,c,"Generator"),u(L,a,(function(){return this})),u(L,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(j),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(i);try{regeneratorRuntime=c}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var u=function(){"use strict";function r(e){var o=e.baseURL,a=e.token,i=void 0===a?"":a;t(n)(this,r),this.baseURL=o,this.token=i}return t(o)(r,[{key:"fetch",value:function(r){var n=r.api,o=void 0===n?"":n,a=r.query,c=void 0===a?{}:a,u=this;return t(e)(t(i).mark((function e(){var r,n;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=new URLSearchParams(c),n="".concat(u.baseURL).concat(o,"/?").concat(r),t.next=4,axios.get(n);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),e)})))()}}]),r}();function s(t){document.querySelectorAll(t).forEach((function(t){t.addEventListener("click",(function(t){return t.preventDefault()}))}))}function l(t){return f.apply(this,arguments)}function f(){return(f=t(e)(t(i).mark((function e(r){var n,o,a,c,u,s,l,f,h,p,y;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.query,o=r.page,a=void 0===o?1:o,c=r.per_page,u=void 0===c?40:c,s=r.safesearch,l=void 0!==s&&s,f=r.image_type,h=void 0===f?"photo":f,p=r.orientation,y=void 0===p?"horizontal":p,t.next=3,v.fetch({query:{key:v.token,image_type:h,orientation:y,safesearch:l,q:n,page:a,per_page:u}});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),e)})))).apply(this,arguments)}var h=function(){"use strict";function r(){t(n)(this,r),this.form=void 0}return t(o)(r,[{key:"init",value:function(t){this.form=document.querySelector(t),this.searchInput=this.form.input,this.form.addEventListener("submit",this.onSubmit.bind(this))}},{key:"search",value:function(r){var n=this;return t(e)(t(i).mark((function e(){var o,a,c,u;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,""===(o=n.searchInput.value.trim())&&(o=r),t.next=5,l({query:o});case 5:if(a=t.sent,0!==(c=a.data).hits.length){t.next=10;break}return Notiflix.Notify.info("Sorry, there are no images matching your search query. Please try again."),t.abrupt("return");case 10:Notiflix.Notify.success("Hooray! We found ".concat(c.totalHits," images.")),y.query=o,y.page=1,d.reach_end=!1,d.isGalleryEnded=!1,c.totalHits>40&&(d.page+=1),u=m.createImageList(c.hits),m.gallery.innerHTML=u,s(".gallery__link"),m.initGalleryBox(),t.next=26;break;case 22:t.prev=22,t.t0=t.catch(0),Notiflix.Notify.failure("Oops! Something went wrong"),console.error(t.t0);case 26:case"end":return t.stop()}}),e,null,[[0,22]])})))()}},{key:"onSubmit",value:function(t){t.preventDefault(),this.search()}}]),r}(),p=function(){"use strict";function r(){t(n)(this,r)}return t(o)(r,[{key:"init",value:function(t){this.gallerySelector=t,this.gallery=document.querySelector(this.gallerySelector),this.galleryLightBox=new SimpleLightbox("".concat(this.gallerySelector," a"),{captionsData:"alt",captionDelay:250})}},{key:"initGalleryBox",value:function(){this.galleryLightBox=new SimpleLightbox("".concat(this.gallerySelector," a"),{captionsData:"alt",captionDelay:250})}},{key:"add",value:function(){var r=this;return t(e)(t(i).mark((function e(){var n,o,a;return t(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l({query:y.query,page:y.page});case 3:if(n=t.sent,o=n.data,d.isGalleryEnded){t.next=15;break}if(!(o.totalHits<=40*(y.page-1)+o.hits.length&&d.reach_end)){t.next=10;break}return o.totalHits>=40&&Notiflix.Notify.info("We're sorry, but you've reached the end of search results."),d.isGalleryEnded=!0,t.abrupt("return");case 10:a=r.createImageList(o.hits),r.gallery.insertAdjacentHTML("beforeend",a),s(".gallery__link"),r.galleryLightBox.refresh(),y.page+=1;case 15:t.next=21;break;case 17:t.prev=17,t.t0=t.catch(0),Notiflix.Notify.failure("Oops! Something went wrong"),console.error(t.t0);case 21:case"end":return t.stop()}}),e,null,[[0,17]])})))()}},{key:"createImageList",value:function(t){return t.map((function(t){return'\n            <a href="'.concat(t.webformatURL,'" class="gallery__link flex-container-item">\n                <img src="').concat(t.webformatURL,'" alt="').concat(t.tags,'" loading="lazy" data-source="').concat(t.largeImageURL,'" />\n            </a>\n        ')})).join("\n")}}]),r}(),y={page:1,query:""},d={reach_end:!1,isGalleryEnded:!1},v=new u({baseURL:"https://pixabay.com/api",token:"35790595-0862ce34bbcdea66fb3b3d261"}),g=new h,m=new p;window.addEventListener("load",(function(){g.init("#search-form"),m.init(".gallery"),g.search("cats"),window.addEventListener("scroll",_.throttle((function(){window.scrollY+innerHeight>=m.gallery.scrollHeight?(m.add(y.query,y.page),d.reach_end=!0):d.reach_end=!1}),500))}))}();
//# sourceMappingURL=index.cad74344.js.map
