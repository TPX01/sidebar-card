/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const e=new WeakMap,t=t=>"function"==typeof t&&e.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,o=(e,t,n=null)=>{for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},s={},i={},r=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${r}--\x3e`,l=new RegExp(`${r}|${a}`);class c{constructor(e,t){this.parts=[],this.element=t;const n=[],o=[],s=document.createTreeWalker(t.content,133,null,!1);let i=0,a=-1,c=0;const{strings:h,values:{length:m}}=e;for(;c<m;){const e=s.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let o=0;for(let e=0;e<n;e++)d(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=h[c],n=p.exec(t)[2],o=n.toLowerCase()+"$lit$",s=e.getAttribute(o);e.removeAttribute(o);const i=s.split(l);this.parts.push({type:"attribute",index:a,name:n,strings:i}),c+=i.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),s.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(r)>=0){const o=e.parentNode,s=t.split(l),i=s.length-1;for(let t=0;t<i;t++){let n,i=s[t];if(""===i)n=u();else{const e=p.exec(i);null!==e&&d(e[2],"$lit$")&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),n=document.createTextNode(i)}o.insertBefore(n,e),this.parts.push({type:"node",index:++a})}""===s[i]?(o.insertBefore(u(),e),n.push(e)):e.data=s[i],c+=i}}else if(8===e.nodeType)if(e.data===r){const t=e.parentNode;null!==e.previousSibling&&a!==i||(a++,t.insertBefore(u(),e)),i=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(n.push(e),a--),c++}else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)this.parts.push({type:"node",index:-1}),c++}}else s.currentNode=o.pop()}for(const e of n)e.parentNode.removeChild(e)}}const d=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},h=e=>-1!==e.index,u=()=>document.createComment(""),p=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class m{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,s=document.createTreeWalker(e,133,null,!1);let i,r=0,a=0,l=s.nextNode();for(;r<o.length;)if(i=o[r],h(i)){for(;a<i.index;)a++,"TEMPLATE"===l.nodeName&&(t.push(l),s.currentNode=l.content),null===(l=s.nextNode())&&(s.currentNode=t.pop(),l=s.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const f=` ${r} `;class g{constructor(e,t,n,o){this.strings=e,this.values=t,this.type=n,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let o=0;o<e;o++){const e=this.strings[o],s=e.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===e.indexOf("--\x3e",s+1);const i=p.exec(e);t+=null===i?e+(n?f:a):e.substr(0,i.index)+i[1]+i[2]+"$lit$"+i[3]+r}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const y=e=>null===e||!("object"==typeof e||"function"==typeof e),_=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class S{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new v(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let o=0;o<t;o++){n+=e[o];const t=this.parts[o];if(void 0!==t){const e=t.value;if(y(e)||!_(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class v{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===s||y(e)&&e===this.value||(this.value=e,t(e)||(this.committer.dirty=!0))}commit(){for(;t(this.value);){const e=this.value;this.value=s,e(this)}this.value!==s&&this.committer.commit()}}class b{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s,e(this)}const e=this.__pendingValue;e!==s&&(y(e)?e!==this.value&&this.__commitText(e):e instanceof g?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):_(e)?this.__commitIterable(e):e===i?(this.value=i,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof m&&this.value.template===t)this.value.update(e.values);else{const n=new m(t,e.processor,this.options),o=n._clone();n.update(e.values),this.__commitNode(o),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,o=0;for(const s of e)n=t[o],void 0===n&&(n=new b(this.options),t.push(n),0===o?n.appendIntoPart(this):n.insertAfterPart(t[o-1])),n.setValue(s),n.commit(),o++;o<t.length&&(t.length=o,this.clear(n&&n.endNode))}clear(e=this.startNode){o(this.startNode.parentNode,e.nextSibling,this.endNode)}}class w{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s,e(this)}if(this.__pendingValue===s)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=s}}class x extends S{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new C(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class C extends v{}let k=!1;try{const e={get capture(){return k=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class M{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s,e(this)}if(this.__pendingValue===s)return;const e=this.__pendingValue,n=this.value,o=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),i=null!=e&&(null==n||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=N(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=s}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const N=e=>e&&(k?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;const P=new class{handleAttributeExpressions(e,t,n,o){const s=t[0];if("."===s){return new x(e,t.slice(1),n).parts}return"@"===s?[new M(e,t.slice(1),o.eventContext)]:"?"===s?[new w(e,t.slice(1),n)]:new S(e,t,n).parts}handleTextExpression(e){return new b(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function E(e){let t=A.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},A.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(r);return n=t.keyString.get(o),void 0===n&&(n=new c(e,e.getTemplateElement()),t.keyString.set(o,n)),t.stringsArray.set(e.strings,n),n}const A=new Map,T=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const q=(e,...t)=>new g(e,t,"html",P)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function R(e,t){const{element:{content:n},parts:o}=e,s=document.createTreeWalker(n,133,null,!1);let i=F(o),r=o[i],a=-1,l=0;const c=[];let d=null;for(;s.nextNode();){a++;const e=s.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(c.push(e),null===d&&(d=e)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,i=F(o,i),r=o[i]}c.forEach(e=>e.parentNode.removeChild(e))}const D=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,133,null,!1);for(;n.nextNode();)t++;return t},F=(e,t=-1)=>{for(let n=t+1;n<e.length;n++){const t=e[n];if(h(t))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const $=(e,t)=>`${e}--${t}`;let V=!0;void 0===window.ShadyCSS?V=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),V=!1);const H=e=>t=>{const n=$(t.type,e);let o=A.get(n);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},A.set(n,o));let s=o.stringsArray.get(t.strings);if(void 0!==s)return s;const i=t.strings.join(r);if(s=o.keyString.get(i),void 0===s){const n=t.getTemplateElement();V&&window.ShadyCSS.prepareTemplateDom(n,e),s=new c(t,n),o.keyString.set(i,s)}return o.stringsArray.set(t.strings,s),s},O=["html","svg"],Y=new Set,U=(e,t,n)=>{Y.add(e);const o=n?n.element:document.createElement("template"),s=t.querySelectorAll("style"),{length:i}=s;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(o,e);const r=document.createElement("style");for(let e=0;e<i;e++){const t=s[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{O.forEach(t=>{const n=A.get($(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),R(e,n)})})})(e);const a=o.content;n?function(e,t,n=null){const{element:{content:o},parts:s}=e;if(null==n)return void o.appendChild(t);const i=document.createTreeWalker(o,133,null,!1);let r=F(s),a=0,l=-1;for(;i.nextNode();){for(l++,i.currentNode===n&&(a=D(t),n.parentNode.insertBefore(t,n));-1!==r&&s[r].index===l;){if(a>0){for(;-1!==r;)s[r].index+=a,r=F(s,r);return}r=F(s,r)}}}(n,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(r,a.firstChild);const e=new Set;e.add(r),R(n,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const z={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},L=(e,t)=>t!==e&&(t==t||e==e),I={attribute:!0,type:String,converter:z,reflect:!1,hasChanged:L},W=Promise.resolve(!0);class j extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const o=this._attributeNameForProperty(n,t);void 0!==o&&(this._attributeToPropertyMap.set(o,n),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=I){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const o=this[e];this[n]=t,this._requestUpdate(e,o)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,n=L){return n(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,o=t.converter||z,s="function"==typeof o?o:o.fromAttribute;return s?s(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,o=t.converter;return(o&&o.toAttribute||z.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=32|this._updateState,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t,n=I){const o=this.constructor,s=o._attributeNameForProperty(e,n);if(void 0!==s){const e=o._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(s):this.setAttribute(s,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const n=this.constructor,o=n._attributeToPropertyMap.get(e);if(void 0!==o){const e=n._classProperties.get(o)||I;this._updateState=16|this._updateState,this[o]=n._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const o=this.constructor,s=o._classProperties.get(e)||I;o._valueHasChanged(this[e],t,s.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==s.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,s))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=4|this._updateState;const n=this._updatePromise;this._updatePromise=new Promise((n,o)=>{e=n,t=o});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return 32&this._updateState}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}j.finalized=!0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const B="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol();class Z{constructor(e,t){if(t!==J)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(B?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const G=(e,...t)=>{const n=t.reduce((t,n,o)=>t+(e=>{if(e instanceof Z)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[o+1],e[0]);return new Z(n,J)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const K=e=>e.flat?e.flat(1/0):function e(t,n=[]){for(let o=0,s=t.length;o<s;o++){const s=t[o];Array.isArray(s)?e(s,n):n.push(s)}return n}(e);class Q extends j{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){K(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?B?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof g&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}function X(){return document.querySelector("hc-main")?document.querySelector("hc-main").hass:document.querySelector("home-assistant")?document.querySelector("home-assistant").hass:void 0}function ee(e,t,n=null){if((e=new Event(e,{bubbles:!0,cancelable:!1,composed:!0})).detail=t||{},n)n.dispatchEvent(e);else{var o=function(){var e=document.querySelector("hc-main");return e=e?(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("hc-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-view"):(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=(e=document.querySelector("home-assistant"))&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root"))&&e.shadowRoot)&&e.querySelector("ha-app-layout #view"))&&e.firstElementChild}();o&&o.dispatchEvent(e)}}Q.finalized=!0,Q.render=(e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const s=n.scopeName,i=T.has(t),r=V&&11===t.nodeType&&!!t.host,a=r&&!Y.has(s),l=a?document.createDocumentFragment():t;if(((e,t,n)=>{let s=T.get(t);void 0===s&&(o(t,t.firstChild),T.set(t,s=new b(Object.assign({templateFactory:E},n))),s.appendInto(t)),s.setValue(e),s.commit()})(e,l,Object.assign({templateFactory:H(s)},n)),a){const e=T.get(l);T.delete(l);const n=e.value instanceof m?e.value.template:void 0;U(s,l,n),o(t,t.firstChild),t.appendChild(l),T.set(t,e)}!i&&r&&window.ShadyCSS.styleElement(t.host)};let te=function(){if(window.fully&&"function"==typeof fully.getDeviceId)return fully.getDeviceId();if(!localStorage["lovelace-player-device-id"]){const e=()=>Math.floor(1e5*(1+Math.random())).toString(16).substring(1);localStorage["lovelace-player-device-id"]=`${e()}${e()}-${e()}${e()}`}return localStorage["lovelace-player-device-id"]}();var ne={},oe=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,se="[^\\s]+",ie=/\[([^]*?)\]/gm,re=function(){};function ae(e,t){for(var n=[],o=0,s=e.length;o<s;o++)n.push(e[o].substr(0,t));return n}function le(e){return function(t,n,o){var s=o[e].indexOf(n.charAt(0).toUpperCase()+n.substr(1).toLowerCase());~s&&(t.month=s)}}function ce(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}var de=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],he=["January","February","March","April","May","June","July","August","September","October","November","December"],ue=ae(he,3),pe=ae(de,3);ne.i18n={dayNamesShort:pe,dayNames:de,monthNamesShort:ue,monthNames:he,amPm:["am","pm"],DoFn:function(e){return e+["th","st","nd","rd"][e%10>3?0:(e-e%10!=10)*e%10]}};var me={D:function(e){return e.getDate()},DD:function(e){return ce(e.getDate())},Do:function(e,t){return t.DoFn(e.getDate())},d:function(e){return e.getDay()},dd:function(e){return ce(e.getDay())},ddd:function(e,t){return t.dayNamesShort[e.getDay()]},dddd:function(e,t){return t.dayNames[e.getDay()]},M:function(e){return e.getMonth()+1},MM:function(e){return ce(e.getMonth()+1)},MMM:function(e,t){return t.monthNamesShort[e.getMonth()]},MMMM:function(e,t){return t.monthNames[e.getMonth()]},YY:function(e){return ce(String(e.getFullYear()),4).substr(2)},YYYY:function(e){return ce(e.getFullYear(),4)},h:function(e){return e.getHours()%12||12},hh:function(e){return ce(e.getHours()%12||12)},H:function(e){return e.getHours()},HH:function(e){return ce(e.getHours())},m:function(e){return e.getMinutes()},mm:function(e){return ce(e.getMinutes())},s:function(e){return e.getSeconds()},ss:function(e){return ce(e.getSeconds())},S:function(e){return Math.round(e.getMilliseconds()/100)},SS:function(e){return ce(Math.round(e.getMilliseconds()/10),2)},SSS:function(e){return ce(e.getMilliseconds(),3)},a:function(e,t){return e.getHours()<12?t.amPm[0]:t.amPm[1]},A:function(e,t){return e.getHours()<12?t.amPm[0].toUpperCase():t.amPm[1].toUpperCase()},ZZ:function(e){var t=e.getTimezoneOffset();return(t>0?"-":"+")+ce(100*Math.floor(Math.abs(t)/60)+Math.abs(t)%60,4)}},fe={D:["\\d\\d?",function(e,t){e.day=t}],Do:["\\d\\d?"+se,function(e,t){e.day=parseInt(t,10)}],M:["\\d\\d?",function(e,t){e.month=t-1}],YY:["\\d\\d?",function(e,t){var n=+(""+(new Date).getFullYear()).substr(0,2);e.year=""+(t>68?n-1:n)+t}],h:["\\d\\d?",function(e,t){e.hour=t}],m:["\\d\\d?",function(e,t){e.minute=t}],s:["\\d\\d?",function(e,t){e.second=t}],YYYY:["\\d{4}",function(e,t){e.year=t}],S:["\\d",function(e,t){e.millisecond=100*t}],SS:["\\d{2}",function(e,t){e.millisecond=10*t}],SSS:["\\d{3}",function(e,t){e.millisecond=t}],d:["\\d\\d?",re],ddd:[se,re],MMM:[se,le("monthNamesShort")],MMMM:[se,le("monthNames")],a:[se,function(e,t,n){var o=t.toLowerCase();o===n.amPm[0]?e.isPm=!1:o===n.amPm[1]&&(e.isPm=!0)}],ZZ:["[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",function(e,t){var n,o=(t+"").match(/([+-]|\d\d)/gi);o&&(n=60*o[1]+parseInt(o[2],10),e.timezoneOffset="+"===o[0]?n:-n)}]};fe.dd=fe.d,fe.dddd=fe.ddd,fe.DD=fe.D,fe.mm=fe.m,fe.hh=fe.H=fe.HH=fe.h,fe.MM=fe.M,fe.ss=fe.s,fe.A=fe.a,ne.masks={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"},ne.format=function(e,t,n){var o=n||ne.i18n;if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in fecha.format");t=ne.masks[t]||t||ne.masks.default;var s=[];return(t=(t=t.replace(ie,(function(e,t){return s.push(t),"@@@"}))).replace(oe,(function(t){return t in me?me[t](e,o):t.slice(1,t.length-1)}))).replace(/@@@/g,(function(){return s.shift()}))},ne.parse=function(e,t,n){var o=n||ne.i18n;if("string"!=typeof t)throw new Error("Invalid format in fecha.parse");if(t=ne.masks[t]||t,e.length>1e3)return null;var s={},i=[],r=[];t=t.replace(ie,(function(e,t){return r.push(t),"@@@"}));var a,l=(a=t,a.replace(/[|\\{()[^$+*?.-]/g,"\\$&")).replace(oe,(function(e){if(fe[e]){var t=fe[e];return i.push(t[1]),"("+t[0]+")"}return e}));l=l.replace(/@@@/g,(function(){return r.shift()}));var c=e.match(new RegExp(l,"i"));if(!c)return null;for(var d=1;d<c.length;d++)i[d-1](s,c[d],o);var h,u=new Date;return!0===s.isPm&&null!=s.hour&&12!=+s.hour?s.hour=+s.hour+12:!1===s.isPm&&12==+s.hour&&(s.hour=0),null!=s.timezoneOffset?(s.minute=+(s.minute||0)-+s.timezoneOffset,h=new Date(Date.UTC(s.year||u.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0))):h=new Date(s.year||u.getFullYear(),s.month||0,s.day||1,s.hour||0,s.minute||0,s.second||0,s.millisecond||0),h};(function(){try{(new Date).toLocaleDateString("i")}catch(e){return"RangeError"===e.name}})(),function(){try{(new Date).toLocaleString("i")}catch(e){return"RangeError"===e.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(e){return"RangeError"===e.name}}();var ge=["closed","locked","off"],ye=function(e,t,n,o){o=o||{},n=null==n?{}:n;var s=new Event(t,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return s.detail=n,e.dispatchEvent(s),s},_e=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root"))return e.shadowRoot},Se=function(e){ye(window,"haptic",e)};function ve(e,t){let n=25,o=!1;e.width&&("number"==typeof e.width?n=e.width:"object"==typeof e.width&&(n=e.desktop,o=!0));let s="\n    #customSidebarWrapper { \n      display:flex;\n      flex-direction:row;\n    }\n  ";return o?t<=e.breakpoints.mobile?s+="\n      #customSidebar {\n        display: none;\n      } \n      #contentContainer {\n        flex: 1;\n      }\n    ":t<=e.breakpoints.tablet?s+="\n        #customSidebar {\n          flex: 0 0 "+e.width.tablet+";\n        } \n        #contentContainer {\n          flex: 1;\n        }\n      ":s+="\n        #customSidebar {\n          flex: 0 0 "+e.width.desktop+";\n        } \n        #contentContainer {\n          flex: 1;\n        }\n      ":s+="\n      #customSidebar {\n        flex: 0 0 "+n+"%;\n      } \n      #contentContainer {\n        flex: 1;\n      }\n    ",s}function be(e,t){let n=_e();const o=document.body.clientWidth;e.shadowRoot.querySelector("#customSidebarStyle").textContent=ve(t,o);const s=n.querySelector("ch-header");t.hideTopMenu&&!0===t.hideTopMenu?t.showTopMenuOnMobile&&!0===t.showTopMenuOnMobile&&o<=t.breakpoints.mobile?console.log("Action: Show header!"):console.log("Action: Hide header!"):t.hideTopMenu&&!0===t.hideTopMenu&&console.log("Action: Hide header!"),s?console.log("Header found!"):console.log("Header not found!")}customElements.define("sidebar-card",class extends Q{constructor(){super(),this.templateLines=[],this.clock=!1,this.digitalClock=!1,this.digitalClockWithSeconds=!1}static get properties(){return{hass:{},config:{},active:{}}}render(){const e=this.config.sidebarMenu,t="title"in this.config&&this.config.title;this.clock=!!this.config.clock&&this.config.clock,this.digitalClock=!!this.config.digitalClock&&this.config.digitalClock,this.digitalClockWithSeconds=!!this.config.digitalClockWithSeconds&&this.config.digitalClockWithSeconds;const n="style"in this.config;return q`
      ${n?q`
        <style>
          ${this.config.style}
        </style>
      `:q``}
      <div class="sidebar-inner">
        ${this.digitalClock?q`<h1 class="digitalClock${t?" with-title":""}${this.digitalClockWithSeconds?" with-seconds":""}"></h1>`:q``}
        ${this.clock?q`
          <div class="clock">
            <div class="wrap">
              <span class="hour"></span>
              <span class="minute"></span>
              <span class="second"></span>
              <span class="dot"></span>
            </div>
          </div>
        `:q``}
        ${t?q`<h1>${t}</h1>`:q``}
        
        ${e&&e.length>0?q`
        <ul class="sidebarMenu">
          ${e.map(e=>q`<li @click="${e=>this._menuAction(e)}" class="${e.state&&"off"!=this.hass.states[e.state].state&&"unavailable"!=this.hass.states[e.state].state?"active":""}" data-type="${e.action}" data-path="${e.navigation_path?e.navigation_path:""}" data-menuitem="${JSON.stringify(e)}">
              ${e.name}
              ${e.icon?q`<ha-icon icon="${e.icon}" />`:q``}
            </li>`)}
        </ul>
        `:q``}

        ${this.config.template?q`
          <ul class="template">
            ${this.templateLines.map(e=>q`<li>${e}</li>`)}
          </ul>
        `:q``}
        
      </div>
    `}_runClock(){const e=new Date,t=e.getHours().toString(),n=(e.getHours()+11)%12+1,o=e.getMinutes(),s=e.getSeconds(),i=30*n,r=6*o,a=6*s;if(this.clock&&(this.shadowRoot.querySelector(".hour").style.transform=`rotate(${i}deg)`,this.shadowRoot.querySelector(".minute").style.transform=`rotate(${r}deg)`,this.shadowRoot.querySelector(".second").style.transform=`rotate(${a}deg)`),this.digitalClock){const e=o.toString();var l=t.length<2?"0"+t+":":t+":";if(this.digitalClockWithSeconds){l+=e.length<2?"0"+e+":":e+":";const t=s.toString();l+=t.length<2?"0"+t:t}else l+=e.length<2?"0"+e:e;this.shadowRoot.querySelector(".digitalClock").textContent=l}}firstUpdated(){var e;if(e=this,document.querySelector("hc-main")?document.querySelector("hc-main").provideHass(e):document.querySelector("home-assistant")&&document.querySelector("home-assistant").provideHass(e),_e().querySelectorAll("paper-tab").forEach(e=>{e.addEventListener("click",()=>{this._updateActiveMenu()})}),this.clock||this.digitalClock){const e=1e3,t=this;t._runClock(),setInterval((function(){t._runClock()}),e)}}_updateActiveMenu(){this.shadowRoot.querySelectorAll('ul.sidebarMenu li[data-type="navigate"]').forEach(e=>{e.classList.remove("active")});let e=this.shadowRoot.querySelector('ul.sidebarMenu li[data-path="'+document.location.pathname+'"]');e&&e.classList.add("active")}_menuAction(e){if(e.target.dataset&&e.target.dataset.menuitem){const t=JSON.parse(e.target.dataset.menuitem);this._customAction(t)}}_customAction(e){switch(e.action){case"more-info":(e.entity||e.camera_image)&&function(e,t=!1){const n=document.querySelector("hc-main")||document.querySelector("home-assistant");ee("hass-more-info",{entityId:e},n);const o=n._moreInfoEl;o.large=t}(e.entity?e.entity:e.camera_image);break;case"navigate":e.navigation_path&&function(e,t,n){void 0===n&&(n=!1),n?history.replaceState(null,"",t):history.pushState(null,"",t),ye(window,"location-changed",{replace:n})}(window,e.navigation_path);break;case"url":e.url_path&&window.open(e.url_path);break;case"toggle":e.entity&&(t=this.hass,n=e.entity,function(e,t,n){void 0===n&&(n=!0);var o,s=function(e){return e.substr(0,e.indexOf("."))}(t),i="group"===s?"homeassistant":s;switch(s){case"lock":o=n?"unlock":"lock";break;case"cover":o=n?"open_cover":"close_cover";break;default:o=n?"turn_on":"turn_off"}e.callService(i,o,{entity_id:t})}(t,n,ge.includes(t.states[n].state)),Se("success"));break;case"call-service":{if(!e.service)return void Se("failure");const[t,n]=e.service.split(".",2);this.hass.callService(t,n,e.service_data),Se("success")}}var t,n}setConfig(e){this.config=e,this.config.template&&function(e,t,n){e||(e=X().connection);let o={user:X().user.name,browser:te,hash:location.hash.substr(1)||" ",...n.variables},s=n.template,i=n.entity_ids;e.subscribeMessage(e=>{let n=e.result;n=n.replace(/_\([^)]*\)/g,e=>X().localize(e.substring(2,e.length-1))||e),t(n)},{type:"render_template",template:s,variables:o,entity_ids:i})}(null,e=>{var t=e.match(/<li>([^]*?)<\/li>/g).map((function(e){return e.replace(/<\/?li>/g,"")}));this.templateLines=t,this.requestUpdate()},{template:this.config.template,variables:{config:this.config},entity_ids:this.config.entity_ids})}getCardSize(){return 1}static get styles(){return G`
        :host {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          // --face-color: #FFF;
          // --face-border-color: #FFF;
          // --clock-hands-color: #000;
          // --clock-seconds-hand-color: #FF4B3E;
          // --clock-middle-background: #FFF;
          // --clock-middle-border: #000;
          // --sidebar-background: #FFF;
          // --sidebar-text-color: #000;
          background-color: var(--sidebar-background, #FFF);
        }
        .sidebar-inner {
          padding: 20px;
        }
        .sidebarMenu {
          list-style:none;
          margin: 20px 0;
          padding: 20px 0;
          border-top: 1px solid rgba(255,255,255,0.2);
          border-bottom: 1px solid rgba(255,255,255,0.2);
          color: var(--sidebar-text-color, #000);
        }
        .sidebarMenu li {
          padding: 10px 20px;
          border-radius: 12px;
          color:inherit;
          font-size:18px;
          line-height: 24px;
          font-weight:300;
          white-space: normal;
          display:block;
          cursor:pointer;
        }
        .sidebarMenu li ha-icon {
          float:right;
        }
        .sidebarMenu li.active ha-icon {
          color: rgb(247, 217, 89);
        }
        .sidebarMenu li.active {
          background-color: rgba(0,0,0,0.2);
        }
        h1 {
          margin-top:0;
          margin-bottom: 20px;
          font-size: 32px;
          line-height: 32px;
          font-weight: 200;
          color: var(--sidebar-text-color, #000);
        }
        h1.digitalClock {
          font-size:60px;
          line-height: 60px;
        }
        h1.digitalClock.with-seconds {
          font-size: 48px;
          line-height:48px;
        }
        h1.digitalClock.with-title {
          margin-bottom:0;
        }
        .template {
          margin: 0;
          padding: 0;
          list-style:none;
          color: var(--sidebar-text-color, #000);
        }
        
        .template li {
          display:block;
          color:inherit;
          font-size:18px;
          line-height: 24px;
          font-weight:300;
          white-space: normal;
        }

        .clock {
          margin:20px 0;
          position:relative;
          padding-top: calc(100% - 10px);
          width: calc(100% - 10px);
          border-radius: 100%;
          background: var(--face-color, #FFF);
          font-family: "Montserrat";
          border: 5px solid var(--face-border-color, #FFF);
          box-shadow: inset 2px 3px 8px 0 rgba(0, 0, 0, 0.1);
        }
        
        .clock .wrap {
          overflow: hidden;
          position: absolute;
          top:0;
          left:0;
          width: 100%;
          height: 100%;
          border-radius: 100%;
        }
        
        .clock .minute,
        .clock .hour {
          position: absolute;
          height: 28%;
          width: 6px;
          margin: auto;
          top: -27%;
          left: 0;
          bottom: 0;
          right: 0;
          background: var(--clock-hands-color, #000);
          transform-origin: bottom center;
          transform: rotate(0deg);
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
          z-index: 1;
        }
        
        .clock .minute {
          position: absolute;
          height: 41%;
          width: 4px;
          top: -38%;
          left: 0;
          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.4);
          transform: rotate(90deg);
        }
        
        .clock .second {
          position: absolute;
          top: -48%;
          height: 48%;
          width: 2px;
          margin: auto;
          left: 0;
          bottom: 0;
          right: 0;
          border-radius: 4px;
          background: var(--clock-seconds-hand-color, #FF4B3E);
          transform-origin: bottom center;
          transform: rotate(180deg);
          z-index: 1;
        }
        
        .clock .dot {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 12px;
          height: 12px;
          border-radius: 100px;
          background: var(--clock-middle-background, #FFF);
          border: 2px solid var(--clock-middle-border, #000);
          border-radius: 100px;
          margin: auto;
          z-index: 1;
        }
    `}}),async function(){let e=function(){var e=document.querySelector("home-assistant");if(e=(e=(e=(e=(e=(e=(e=(e=e&&e.shadowRoot)&&e.querySelector("home-assistant-main"))&&e.shadowRoot)&&e.querySelector("app-drawer-layout partial-panel-resolver"))&&e.shadowRoot||e)&&e.querySelector("ha-panel-lovelace"))&&e.shadowRoot)&&e.querySelector("hui-root")){var t=e.lovelace;return t.current_view=e.___curView,t}return null}();if(e.config.sidebar){const n=Object.assign({},e.config.sidebar);if(!n.width||n.width&&"number"==typeof n.width&&n.width>0||n.width&&"object"==typeof n.width){let e=_e();const o=e.querySelector("ch-header");n.hideTopMenu&&!0===n.hideTopMenu&&o&&(o.style.display="none"),n.breakpoints?n.breakpoints&&(n.breakpoints.mobile||(n.breakpoints.mobile=768),n.breakpoints.tablet||(n.breakpoints.tablet=1024)):n.breakpoints={tablet:1024,mobile:768};let s=e.querySelector("ha-app-layout"),i=ve(n,document.body.clientWidth),r=document.createElement("style");r.setAttribute("id","customSidebarStyle"),s.shadowRoot.appendChild(r),r.type="text/css",r.styleSheet?r.styleSheet.cssText=i:r.appendChild(document.createTextNode(i));let a=s.shadowRoot.querySelector("#contentContainer");var t=document.createElement("div");t.setAttribute("id","customSidebarWrapper"),a.parentNode.insertBefore(t,a);let l=document.createElement("div");l.setAttribute("id","customSidebar"),t.appendChild(l),t.appendChild(a),await async function(e,t){const n=document.createElement("sidebar-card");n.setConfig(t),n.hass=X(),e.appendChild(n)}(l,n),be(s,n),function(e,t){window.addEventListener("resize",(function(){be(e,t)}),!0)}(s,n)}else console.log("Error sidebar in width config!")}else console.log("No sidebar in config found!")}();
