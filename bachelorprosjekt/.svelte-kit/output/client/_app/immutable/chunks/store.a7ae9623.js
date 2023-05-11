import{w as Fl}from"./index.98f42e13.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let r=n.charCodeAt(s);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Vl=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const r=n[t++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=n[t++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=n[t++],o=n[t++],a=n[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Oa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<n.length;r+=3){const i=n[r],o=r+1<n.length,a=o?n[r+1]:0,c=r+2<n.length,u=c?n[r+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,g=u&63;c||(g=64,o||(d=64)),s.push(t[l],t[h],t[d],t[g])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ra(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<n.length;){const i=t[n.charAt(r++)],a=r<n.length?t[n.charAt(r)]:0;++r;const u=r<n.length?t[n.charAt(r)]:64;++r;const h=r<n.length?t[n.charAt(r)]:64;if(++r,i==null||a==null||u==null||h==null)throw new Bl;const d=i<<2|a>>4;if(s.push(d),u!==64){const g=a<<4&240|u>>2;if(s.push(g),h!==64){const w=u<<6&192|h;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $l=function(n){const e=Ra(n);return Oa.encodeByteArray(e,!0)},Xn=function(n){return $l(n).replace(/\./g,"")},Ma=function(n){try{return Oa.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ql=()=>jl().__FIREBASE_DEFAULTS__,Kl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Hl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ma(n[1]);return e&&JSON.parse(e)},Zr=()=>{try{return ql()||Kl()||Hl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},La=n=>{var e,t;return(t=(e=Zr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zl=n=>{const e=La(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Gl=()=>{var n;return(n=Zr())===null||n===void 0?void 0:n.config},Pa=n=>{var e;return(e=Zr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",r=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Xn(JSON.stringify(t)),Xn(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function te(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(te())}function Yl(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zl(){const n=te();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function eh(){try{return typeof indexedDB=="object"}catch{return!1}}function th(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="FirebaseError";class ke extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=nh,Object.setPrototypeOf(this,ke.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?sh(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new ke(r,a,s)}}function sh(n,e){return n.replace(rh,(t,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const rh=/\{\$([^}]+)}/g;function ih(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Yn(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const r of t){if(!s.includes(r))return!1;const i=n[r],o=e[r];if(ho(i)&&ho(o)){if(!Yn(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!t.includes(r))return!1;return!0}function ho(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Vt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[r,i]=s.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function Bt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function oh(n,e){const t=new ah(n,e);return t.subscribe.bind(t)}class ah{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let r;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ch(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:s},r.next===void 0&&(r.next=rr),r.error===void 0&&(r.error=rr),r.complete===void 0&&(r.complete=rr);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ch(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function rr(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(n){return n&&n._delegate?n._delegate:n}class Ze{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Wl;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hh(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ze){return this.instances.has(e)}getOptions(e=ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,t){var s;const r=this.normalizeInstanceIdentifier(t),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const r of s)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lh(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ze){return this.component?this.component.multipleInstances?e:ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lh(n){return n===ze?void 0:n}function hh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new uh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(N||(N={}));const fh={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},ph=N.INFO,gh={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},mh=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),r=gh[e];if(r)console[r](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ei{constructor(e){this.name=e,this._logLevel=ph,this._logHandler=mh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in N))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?fh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...e),this._logHandler(this,N.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...e),this._logHandler(this,N.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,N.INFO,...e),this._logHandler(this,N.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,N.WARN,...e),this._logHandler(this,N.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...e),this._logHandler(this,N.ERROR,...e)}}const yh=(n,e)=>e.some(t=>n instanceof t);let fo,po;function vh(){return fo||(fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function wh(){return po||(po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const xa=new WeakMap,Er=new WeakMap,Ua=new WeakMap,ir=new WeakMap,ti=new WeakMap;function Ih(n){const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(Le(n.result)),r()},o=()=>{s(n.error),r()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&xa.set(t,n)}).catch(()=>{}),ti.set(e,n),e}function Eh(n){if(Er.has(n))return;const e=new Promise((t,s)=>{const r=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),r()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});Er.set(n,e)}let Tr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Er.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ua.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Le(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Th(n){Tr=n(Tr)}function _h(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(or(this),e,...t);return Ua.set(s,e.sort?e.sort():[e]),Le(s)}:wh().includes(n)?function(...e){return n.apply(or(this),e),Le(xa.get(this))}:function(...e){return Le(n.apply(or(this),e))}}function bh(n){return typeof n=="function"?_h(n):(n instanceof IDBTransaction&&Eh(n),yh(n,vh())?new Proxy(n,Tr):n)}function Le(n){if(n instanceof IDBRequest)return Ih(n);if(ir.has(n))return ir.get(n);const e=bh(n);return e!==n&&(ir.set(n,e),ti.set(e,n)),e}const or=n=>ti.get(n);function Sh(n,e,{blocked:t,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(n,e),a=Le(o);return s&&o.addEventListener("upgradeneeded",c=>{s(Le(o.result),c.oldVersion,c.newVersion,Le(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Ah=["get","getKey","getAll","getAllKeys","count"],kh=["put","add","delete","clear"],ar=new Map;function go(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ar.get(e))return ar.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,r=kh.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Ah.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let u=c.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),r&&c.done]))[0]};return ar.set(e,i),i}Th(n=>({...n,get:(e,t,s)=>go(e,t)||n.get(e,t,s),has:(e,t)=>!!go(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dh(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Dh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _r="@firebase/app",mo="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new ei("@firebase/app"),Nh="@firebase/app-compat",Rh="@firebase/analytics-compat",Oh="@firebase/analytics",Mh="@firebase/app-check-compat",Lh="@firebase/app-check",Ph="@firebase/auth",xh="@firebase/auth-compat",Uh="@firebase/database",Fh="@firebase/database-compat",Vh="@firebase/functions",Bh="@firebase/functions-compat",$h="@firebase/installations",jh="@firebase/installations-compat",qh="@firebase/messaging",Kh="@firebase/messaging-compat",Hh="@firebase/performance",zh="@firebase/performance-compat",Gh="@firebase/remote-config",Wh="@firebase/remote-config-compat",Qh="@firebase/storage",Xh="@firebase/storage-compat",Yh="@firebase/firestore",Jh="@firebase/firestore-compat",Zh="firebase",ed="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="[DEFAULT]",td={[_r]:"fire-core",[Nh]:"fire-core-compat",[Oh]:"fire-analytics",[Rh]:"fire-analytics-compat",[Lh]:"fire-app-check",[Mh]:"fire-app-check-compat",[Ph]:"fire-auth",[xh]:"fire-auth-compat",[Uh]:"fire-rtdb",[Fh]:"fire-rtdb-compat",[Vh]:"fire-fn",[Bh]:"fire-fn-compat",[$h]:"fire-iid",[jh]:"fire-iid-compat",[qh]:"fire-fcm",[Kh]:"fire-fcm-compat",[Hh]:"fire-perf",[zh]:"fire-perf-compat",[Gh]:"fire-rc",[Wh]:"fire-rc-compat",[Qh]:"fire-gcs",[Xh]:"fire-gcs-compat",[Yh]:"fire-fst",[Jh]:"fire-fst-compat","fire-js":"fire-js",[Zh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt=new Map,Sr=new Map;function nd(n,e){try{n.container.addComponent(e)}catch(t){et.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function wt(n){const e=n.name;if(Sr.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;Sr.set(e,n);for(const t of tt.values())nd(t,n);return!0}function ni(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pe=new dn("app","Firebase",sd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=ed;function Ar(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:br,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw Pe.create("bad-app-name",{appName:String(r)});if(t||(t=Gl()),!t)throw Pe.create("no-options");const i=tt.get(r);if(i){if(Yn(t,i.options)&&Yn(s,i.config))return i;throw Pe.create("duplicate-app",{appName:r})}const o=new dh(r);for(const c of Sr.values())o.addComponent(c);const a=new rd(t,s,o);return tt.set(r,a),a}function si(n=br){const e=tt.get(n);if(!e&&n===br)return Ar();if(!e)throw Pe.create("no-app",{appName:n});return e}function id(){return Array.from(tt.values())}async function od(n){const e=n.name;tt.has(e)&&(tt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function xe(n,e,t){var s;let r=(s=td[n])!==null&&s!==void 0?s:n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(a.join(" "));return}wt(new Ze(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="firebase-heartbeat-database",cd=1,Xt="firebase-heartbeat-store";let cr=null;function Fa(){return cr||(cr=Sh(ad,cd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Xt)}}}).catch(n=>{throw Pe.create("idb-open",{originalErrorMessage:n.message})})),cr}async function ud(n){try{return(await Fa()).transaction(Xt).objectStore(Xt).get(Va(n))}catch(e){if(e instanceof ke)et.warn(e.message);else{const t=Pe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(t.message)}}}async function yo(n,e){try{const s=(await Fa()).transaction(Xt,"readwrite");return await s.objectStore(Xt).put(e,Va(n)),s.done}catch(t){if(t instanceof ke)et.warn(t.message);else{const s=Pe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});et.warn(s.message)}}}function Va(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ld=1024,hd=30*24*60*60*1e3;class dd{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pd(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=vo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const i=new Date(r.date).valueOf();return Date.now()-i<=hd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=vo(),{heartbeatsToSend:t,unsentEntries:s}=fd(this._heartbeatsCache.heartbeats),r=Xn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function vo(){return new Date().toISOString().substring(0,10)}function fd(n,e=ld){const t=[];let s=n.slice();for(const r of n){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),wo(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),wo(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class pd{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return eh()?th().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ud(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return yo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return yo(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function wo(n){return Xn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n){wt(new Ze("platform-logger",e=>new Ch(e),"PRIVATE")),wt(new Ze("heartbeat",e=>new dd(e),"PRIVATE")),xe(_r,mo,n),xe(_r,mo,"esm2017"),xe("fire-js","")}gd("");var md="firebase",yd="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xe(md,yd,"app");var vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},y,ri=ri||{},_=vd||self;function Jn(){}function vs(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function gn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function wd(n){return Object.prototype.hasOwnProperty.call(n,ur)&&n[ur]||(n[ur]=++Id)}var ur="closure_uid_"+(1e9*Math.random()>>>0),Id=0;function Ed(n,e,t){return n.call.apply(n.bind,arguments)}function Td(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function Z(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Z=Ed:Z=Td,Z.apply(null,arguments)}function Pn(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function W(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function $e(){this.s=this.s,this.o=this.o}var _d=0;$e.prototype.s=!1;$e.prototype.na=function(){!this.s&&(this.s=!0,this.M(),_d!=0)&&wd(this)};$e.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ba=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ii(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Io(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(vs(s)){const r=n.length||0,i=s.length||0;n.length=r+i;for(let o=0;o<i;o++)n[r+o]=s[o]}else n.push(s)}}function ee(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ee.prototype.h=function(){this.defaultPrevented=!0};var bd=function(){if(!_.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{_.addEventListener("test",Jn,e),_.removeEventListener("test",Jn,e)}catch{}return n}();function Zn(n){return/^[\s\xa0]*$/.test(n)}var Eo=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function lr(n,e){return n<e?-1:n>e?1:0}function ws(){var n=_.navigator;return n&&(n=n.userAgent)?n:""}function de(n){return ws().indexOf(n)!=-1}function oi(n){return oi[" "](n),n}oi[" "]=Jn;function Sd(n){var e=Cd;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var Ad=de("Opera"),It=de("Trident")||de("MSIE"),$a=de("Edge"),kr=$a||It,ja=de("Gecko")&&!(ws().toLowerCase().indexOf("webkit")!=-1&&!de("Edge"))&&!(de("Trident")||de("MSIE"))&&!de("Edge"),kd=ws().toLowerCase().indexOf("webkit")!=-1&&!de("Edge");function qa(){var n=_.document;return n?n.documentMode:void 0}var es;e:{var hr="",dr=function(){var n=ws();if(ja)return/rv:([^\);]+)(\)|;)/.exec(n);if($a)return/Edge\/([\d\.]+)/.exec(n);if(It)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(kd)return/WebKit\/(\S+)/.exec(n);if(Ad)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(dr&&(hr=dr?dr[1]:""),It){var fr=qa();if(fr!=null&&fr>parseFloat(hr)){es=String(fr);break e}}es=hr}var Cd={};function Dd(){return Sd(function(){let n=0;const e=Eo(String(es)).split("."),t=Eo("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=lr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||lr(r[2].length==0,i[2].length==0)||lr(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var Cr;if(_.document&&It){var To=qa();Cr=To||parseInt(es,10)||void 0}else Cr=void 0;var Nd=Cr;function Yt(n,e){if(ee.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(ja){e:{try{oi(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Rd[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Yt.X.h.call(this)}}W(Yt,ee);var Rd={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var mn="closure_listenable_"+(1e6*Math.random()|0),Od=0;function Md(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=r,this.key=++Od,this.ba=this.ea=!1}function Is(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function ai(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Ka(n){const e={};for(const t in n)e[t]=n[t];return e}const _o="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ha(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<_o.length;i++)t=_o[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Es(n){this.src=n,this.g={},this.h=0}Es.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Nr(n,e,s,r);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new Md(e,this.src,i,!!s,r),e.ea=t,n.push(e)),e};function Dr(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=Ba(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(Is(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Nr(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==s)return r}return-1}var ci="closure_lm_"+(1e6*Math.random()|0),pr={};function za(n,e,t,s,r){if(s&&s.once)return Wa(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)za(n,e[i],t,s,r);return null}return t=hi(t),n&&n[mn]?n.N(e,t,gn(s)?!!s.capture:!!s,r):Ga(n,e,t,!1,s,r)}function Ga(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=gn(r)?!!r.capture:!!r,a=li(n);if(a||(n[ci]=a=new Es(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=Ld(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)bd||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(Xa(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Ld(){function n(t){return e.call(n.src,n.listener,t)}const e=Pd;return n}function Wa(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Wa(n,e[i],t,s,r);return null}return t=hi(t),n&&n[mn]?n.O(e,t,gn(s)?!!s.capture:!!s,r):Ga(n,e,t,!0,s,r)}function Qa(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Qa(n,e[i],t,s,r);else s=gn(s)?!!s.capture:!!s,t=hi(t),n&&n[mn]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Nr(i,t,s,r),-1<t&&(Is(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=li(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Nr(e,t,s,r)),(t=-1<n?e[n]:null)&&ui(t))}function ui(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[mn])Dr(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Xa(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=li(e))?(Dr(t,n),t.h==0&&(t.src=null,e[ci]=null)):Is(n)}}}function Xa(n){return n in pr?pr[n]:pr[n]="on"+n}function Pd(n,e){if(n.ba)n=!0;else{e=new Yt(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&ui(n),n=t.call(s,e)}return n}function li(n){return n=n[ci],n instanceof Es?n:null}var gr="__closure_events_fn_"+(1e9*Math.random()>>>0);function hi(n){return typeof n=="function"?n:(n[gr]||(n[gr]=function(e){return n.handleEvent(e)}),n[gr])}function K(){$e.call(this),this.i=new Es(this),this.P=this,this.I=null}W(K,$e);K.prototype[mn]=!0;K.prototype.removeEventListener=function(n,e,t,s){Qa(this,n,e,t,s)};function z(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new ee(e,n);else if(e instanceof ee)e.target=e.target||n;else{var r=e;e=new ee(s,n),Ha(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=xn(o,s,!0,e)&&r}if(o=e.g=n,r=xn(o,s,!0,e)&&r,r=xn(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=xn(o,s,!1,e)&&r}K.prototype.M=function(){if(K.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)Is(t[s]);delete n.g[e],n.h--}}this.I=null};K.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};K.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function xn(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Dr(n.i,o),r=a.call(c,s)!==!1&&r}}return r&&!s.defaultPrevented}var di=_.JSON.stringify;function xd(){var n=Za;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Ud{constructor(){this.h=this.g=null}add(e,t){const s=Ya.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var Ya=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Fd,n=>n.reset());class Fd{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Vd(n){_.setTimeout(()=>{throw n},0)}function Ja(n,e){Rr||Bd(),Or||(Rr(),Or=!0),Za.add(n,e)}var Rr;function Bd(){var n=_.Promise.resolve(void 0);Rr=function(){n.then($d)}}var Or=!1,Za=new Ud;function $d(){for(var n;n=xd();){try{n.h.call(n.g)}catch(t){Vd(t)}var e=Ya;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}Or=!1}function Ts(n,e){K.call(this),this.h=n||1,this.g=e||_,this.j=Z(this.lb,this),this.l=Date.now()}W(Ts,K);y=Ts.prototype;y.ca=!1;y.R=null;y.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),z(this,"tick"),this.ca&&(fi(this),this.start()))}};y.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function fi(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}y.M=function(){Ts.X.M.call(this),fi(this),delete this.g};function pi(n,e,t){if(typeof n=="function")t&&(n=Z(n,t));else if(n&&typeof n.handleEvent=="function")n=Z(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:_.setTimeout(n,e||0)}function ec(n){n.g=pi(()=>{n.g=null,n.i&&(n.i=!1,ec(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class jd extends $e{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ec(this)}M(){super.M(),this.g&&(_.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Jt(n){$e.call(this),this.h=n,this.g={}}W(Jt,$e);var bo=[];function tc(n,e,t,s){Array.isArray(t)||(t&&(bo[0]=t.toString()),t=bo);for(var r=0;r<t.length;r++){var i=za(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function nc(n){ai(n.g,function(e,t){this.g.hasOwnProperty(t)&&ui(e)},n),n.g={}}Jt.prototype.M=function(){Jt.X.M.call(this),nc(this)};Jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _s(){this.g=!0}_s.prototype.Aa=function(){this.g=!1};function qd(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function Kd(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function ht(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+zd(n,t)+(s?" "+s:"")})}function Hd(n,e){n.info(function(){return"TIMEOUT: "+e})}_s.prototype.info=function(){};function zd(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return di(t)}catch{return e}}var it={},So=null;function bs(){return So=So||new K}it.Pa="serverreachability";function sc(n){ee.call(this,it.Pa,n)}W(sc,ee);function Zt(n){const e=bs();z(e,new sc(e))}it.STAT_EVENT="statevent";function rc(n,e){ee.call(this,it.STAT_EVENT,n),this.stat=e}W(rc,ee);function se(n){const e=bs();z(e,new rc(e,n))}it.Qa="timingevent";function ic(n,e){ee.call(this,it.Qa,n),this.size=e}W(ic,ee);function yn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return _.setTimeout(function(){n()},e)}var Ss={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},oc={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function gi(){}gi.prototype.h=null;function Ao(n){return n.h||(n.h=n.i())}function ac(){}var vn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function mi(){ee.call(this,"d")}W(mi,ee);function yi(){ee.call(this,"c")}W(yi,ee);var Mr;function As(){}W(As,gi);As.prototype.g=function(){return new XMLHttpRequest};As.prototype.i=function(){return{}};Mr=new As;function wn(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new Jt(this),this.O=Gd,n=kr?125:void 0,this.T=new Ts(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new cc}function cc(){this.i=null,this.g="",this.h=!1}var Gd=45e3,Lr={},ts={};y=wn.prototype;y.setTimeout=function(n){this.O=n};function Pr(n,e,t){n.K=1,n.v=Cs(Te(e)),n.s=t,n.P=!0,uc(n,null)}function uc(n,e){n.F=Date.now(),In(n),n.A=Te(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),yc(t.i,"t",s),n.C=0,t=n.l.H,n.h=new cc,n.g=Fc(n.l,t?e:null,!n.s),0<n.N&&(n.L=new jd(Z(n.La,n,n.g),n.N)),tc(n.S,n.g,"readystatechange",n.ib),e=n.H?Ka(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Zt(),qd(n.j,n.u,n.A,n.m,n.U,n.s)}y.ib=function(n){n=n.target;const e=this.L;e&&ve(n)==3?e.l():this.La(n)};y.La=function(n){try{if(n==this.g)e:{const l=ve(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||kr||this.g&&(this.h.h||this.g.fa()||No(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Zt(3):Zt(2)),ks(this);var t=this.g.aa();this.Y=t;t:if(lc(this)){var s=No(this.g);n="";var r=s.length,i=ve(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ge(this),Ht(this);var o="";break t}this.h.i=new _.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,Kd(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zn(a)){var u=a;break t}}u=null}if(t=u)ht(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xr(this,t);else{this.i=!1,this.o=3,se(12),Ge(this),Ht(this);break e}}this.P?(hc(this,l,o),kr&&this.i&&l==3&&(tc(this.S,this.T,"tick",this.hb),this.T.start())):(ht(this.j,this.m,o,null),xr(this,o)),l==4&&Ge(this),this.i&&!this.I&&(l==4?Lc(this.l,this):(this.i=!1,In(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,se(12)):(this.o=0,se(13)),Ge(this),Ht(this)}}}catch{}finally{}};function lc(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function hc(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=Wd(n,t),r==ts){e==4&&(n.o=4,se(14),s=!1),ht(n.j,n.m,null,"[Incomplete Response]");break}else if(r==Lr){n.o=4,se(15),ht(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else ht(n.j,n.m,r,null),xr(n,r);lc(n)&&r!=ts&&r!=Lr&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,se(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),bi(e),e.K=!0,se(11))):(ht(n.j,n.m,t,"[Invalid Chunked Response]"),Ge(n),Ht(n))}y.hb=function(){if(this.g){var n=ve(this.g),e=this.g.fa();this.C<e.length&&(ks(this),hc(this,n,e),this.i&&n!=4&&In(this))}};function Wd(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?ts:(t=Number(e.substring(t,s)),isNaN(t)?Lr:(s+=1,s+t>e.length?ts:(e=e.substr(s,t),n.C=s+t,e)))}y.cancel=function(){this.I=!0,Ge(this)};function In(n){n.V=Date.now()+n.O,dc(n,n.O)}function dc(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=yn(Z(n.gb,n),e)}function ks(n){n.B&&(_.clearTimeout(n.B),n.B=null)}y.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(Hd(this.j,this.A),this.K!=2&&(Zt(),se(17)),Ge(this),this.o=2,Ht(this)):dc(this,this.V-n)};function Ht(n){n.l.G==0||n.I||Lc(n.l,n)}function Ge(n){ks(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,fi(n.T),nc(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function xr(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Ur(t.h,n))){if(!n.J&&Ur(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)rs(t),Rs(t);else break e;_i(t),se(18)}}else t.Ba=r[1],0<t.Ba-t.T&&37500>r[2]&&t.L&&t.A==0&&!t.v&&(t.v=yn(Z(t.cb,t),6e3));if(1>=Ic(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else We(t,11)}else if((n.J||t.g==n)&&rs(t),!Zn(e))for(r=t.Fa.g.parse(e),e=0;e<r.length;e++){let u=r[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const g=n.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(vi(i,i.h),i.h=null))}if(s.D){const A=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.za=A,L(s.F,s.D,A))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=Uc(s,s.H?s.ka:null,s.V),o.J){Ec(s.h,o);var a=o,c=s.J;c&&a.setTimeout(c),a.B&&(ks(a),In(a)),s.g=o}else Oc(s);0<t.i.length&&Os(t)}else u[0]!="stop"&&u[0]!="close"||We(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?We(t,7):Ti(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}Zt(4)}catch{}}function Qd(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(vs(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function Xd(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(vs(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function fc(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(vs(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Xd(n),s=Qd(n),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}var pc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Yd(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function Xe(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof Xe){this.h=e!==void 0?e:n.h,ns(this,n.j),this.s=n.s,this.g=n.g,ss(this,n.m),this.l=n.l,e=n.i;var t=new en;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),ko(this,t),this.o=n.o}else n&&(t=String(n).match(pc))?(this.h=!!e,ns(this,t[1]||"",!0),this.s=$t(t[2]||""),this.g=$t(t[3]||"",!0),ss(this,t[4]),this.l=$t(t[5]||"",!0),ko(this,t[6]||"",!0),this.o=$t(t[7]||"")):(this.h=!!e,this.i=new en(null,this.h))}Xe.prototype.toString=function(){var n=[],e=this.j;e&&n.push(jt(e,Co,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(jt(e,Co,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(jt(t,t.charAt(0)=="/"?ef:Zd,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",jt(t,nf)),n.join("")};function Te(n){return new Xe(n)}function ns(n,e,t){n.j=t?$t(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ss(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function ko(n,e,t){e instanceof en?(n.i=e,sf(n.i,n.h)):(t||(e=jt(e,tf)),n.i=new en(e,n.h))}function L(n,e,t){n.i.set(e,t)}function Cs(n){return L(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function $t(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function jt(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Jd),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Jd(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Co=/[#\/\?@]/g,Zd=/[#\?:]/g,ef=/[#\?]/g,tf=/[#\?@]/g,nf=/#/g;function en(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function je(n){n.g||(n.g=new Map,n.h=0,n.i&&Yd(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}y=en.prototype;y.add=function(n,e){je(this),this.i=null,n=Dt(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function gc(n,e){je(n),e=Dt(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function mc(n,e){return je(n),e=Dt(n,e),n.g.has(e)}y.forEach=function(n,e){je(this),this.g.forEach(function(t,s){t.forEach(function(r){n.call(e,r,s,this)},this)},this)};y.oa=function(){je(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const r=n[s];for(let i=0;i<r.length;i++)t.push(e[s])}return t};y.W=function(n){je(this);let e=[];if(typeof n=="string")mc(this,n)&&(e=e.concat(this.g.get(Dt(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};y.set=function(n,e){return je(this),this.i=null,n=Dt(this,n),mc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};y.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function yc(n,e,t){gc(n,e),0<t.length&&(n.i=null,n.g.set(Dt(n,e),ii(t)),n.h+=t.length)}y.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),n.push(r)}}return this.i=n.join("&")};function Dt(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function sf(n,e){e&&!n.j&&(je(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(gc(this,s),yc(this,r,t))},n)),n.j=e}var rf=class{constructor(e,t){this.h=e,this.g=t}};function vc(n){this.l=n||of,_.PerformanceNavigationTiming?(n=_.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(_.g&&_.g.Ga&&_.g.Ga()&&_.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var of=10;function wc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Ic(n){return n.h?1:n.g?n.g.size:0}function Ur(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function vi(n,e){n.g?n.g.add(e):n.h=e}function Ec(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}vc.prototype.cancel=function(){if(this.i=Tc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Tc(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return ii(n.i)}function wi(){}wi.prototype.stringify=function(n){return _.JSON.stringify(n,void 0)};wi.prototype.parse=function(n){return _.JSON.parse(n,void 0)};function af(){this.g=new wi}function cf(n,e,t){const s=t||"";try{fc(n,function(r,i){let o=r;gn(r)&&(o=di(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function uf(n,e){const t=new _s;if(_.Image){const s=new Image;s.onload=Pn(Un,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Pn(Un,t,s,"TestLoadImage: error",!1,e),s.onabort=Pn(Un,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Pn(Un,t,s,"TestLoadImage: timeout",!1,e),_.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Un(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function En(n){this.l=n.ac||null,this.j=n.jb||!1}W(En,gi);En.prototype.g=function(){return new Ds(this.l,this.j)};En.prototype.i=function(n){return function(){return n}}({});function Ds(n,e){K.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Ii,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}W(Ds,K);var Ii=0;y=Ds.prototype;y.open=function(n,e){if(this.readyState!=Ii)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,tn(this)};y.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||_).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};y.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Tn(this)),this.readyState=Ii};y.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,tn(this)),this.g&&(this.readyState=3,tn(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof _.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;_c(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function _c(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}y.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Tn(this):tn(this),this.readyState==3&&_c(this)}};y.Va=function(n){this.g&&(this.response=this.responseText=n,Tn(this))};y.Ua=function(n){this.g&&(this.response=n,Tn(this))};y.ga=function(){this.g&&Tn(this)};function Tn(n){n.readyState=4,n.l=null,n.j=null,n.A=null,tn(n)}y.setRequestHeader=function(n,e){this.v.append(n,e)};y.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};y.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function tn(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Ds.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var lf=_.JSON.parse;function P(n){K.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=bc,this.K=this.L=!1}W(P,K);var bc="",hf=/^https?$/i,df=["POST","PUT"];y=P.prototype;y.Ka=function(n){this.L=n};y.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Mr.g(),this.C=this.u?Ao(this.u):Ao(Mr),this.g.onreadystatechange=Z(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){Do(this,i);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)t.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())t.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),r=_.FormData&&n instanceof _.FormData,!(0<=Ba(df,e))||s||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{kc(this),0<this.B&&((this.K=ff(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Z(this.qa,this)):this.A=pi(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Do(this,i)}};function ff(n){return It&&Dd()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}y.qa=function(){typeof ri<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,z(this,"timeout"),this.abort(8))};function Do(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,Sc(n),Ns(n)}function Sc(n){n.D||(n.D=!0,z(n,"complete"),z(n,"error"))}y.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,z(this,"complete"),z(this,"abort"),Ns(this))};y.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ns(this,!0)),P.X.M.call(this)};y.Ha=function(){this.s||(this.F||this.v||this.l?Ac(this):this.fb())};y.fb=function(){Ac(this)};function Ac(n){if(n.h&&typeof ri<"u"&&(!n.C[1]||ve(n)!=4||n.aa()!=2)){if(n.v&&ve(n)==4)pi(n.Ha,0,n);else if(z(n,"readystatechange"),ve(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(pc)[1]||null;if(!r&&_.self&&_.self.location){var i=_.self.location.protocol;r=i.substr(0,i.length-1)}s=!hf.test(r?r.toLowerCase():"")}t=s}if(t)z(n,"complete"),z(n,"success");else{n.m=6;try{var o=2<ve(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",Sc(n)}}finally{Ns(n)}}}}function Ns(n,e){if(n.g){kc(n);const t=n.g,s=n.C[0]?Jn:null;n.g=null,n.C=null,e||z(n,"ready");try{t.onreadystatechange=s}catch{}}}function kc(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(_.clearTimeout(n.A),n.A=null)}function ve(n){return n.g?n.g.readyState:0}y.aa=function(){try{return 2<ve(this)?this.g.status:-1}catch{return-1}};y.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};y.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),lf(e)}};function No(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case bc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}y.Ea=function(){return this.m};y.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Cc(n){let e="";return ai(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Ei(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=Cc(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):L(n,e,t))}function Ft(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Dc(n){this.Ca=0,this.i=[],this.j=new _s,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ft("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ft("baseRetryDelayMs",5e3,n),this.bb=Ft("retryDelaySeedMs",1e4,n),this.$a=Ft("forwardChannelMaxRetries",2,n),this.ta=Ft("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new vc(n&&n.concurrentRequestLimit),this.Fa=new af,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}y=Dc.prototype;y.ma=8;y.G=1;function Ti(n){if(Nc(n),n.G==3){var e=n.U++,t=Te(n.F);L(t,"SID",n.I),L(t,"RID",e),L(t,"TYPE","terminate"),_n(n,t),e=new wn(n,n.j,e,void 0),e.K=2,e.v=Cs(Te(t)),t=!1,_.navigator&&_.navigator.sendBeacon&&(t=_.navigator.sendBeacon(e.v.toString(),"")),!t&&_.Image&&(new Image().src=e.v,t=!0),t||(e.g=Fc(e.l,null),e.g.da(e.v)),e.F=Date.now(),In(e)}xc(n)}function Rs(n){n.g&&(bi(n),n.g.cancel(),n.g=null)}function Nc(n){Rs(n),n.u&&(_.clearTimeout(n.u),n.u=null),rs(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&_.clearTimeout(n.m),n.m=null)}function Os(n){wc(n.h)||n.m||(n.m=!0,Ja(n.Ja,n),n.C=0)}function pf(n,e){return Ic(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=yn(Z(n.Ja,n,e),Pc(n,n.C)),n.C++,!0)}y.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const r=new wn(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=Ka(i),Ha(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Rc(this,r,e),t=Te(this.F),L(t,"RID",n),L(t,"CVER",22),this.D&&L(t,"X-HTTP-Session-Id",this.D),_n(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(Cc(i)))+"&"+e:this.o&&Ei(t,this.o,i)),vi(this.h,r),this.Ya&&L(t,"TYPE","init"),this.O?(L(t,"$req",e),L(t,"SID","null"),r.Z=!0,Pr(r,t,null)):Pr(r,t,e),this.G=2}}else this.G==3&&(n?Ro(this,n):this.i.length==0||wc(this.h)||Ro(this))};function Ro(n,e){var t;e?t=e.m:t=n.U++;const s=Te(n.F);L(s,"SID",n.I),L(s,"RID",t),L(s,"AID",n.T),_n(n,s),n.o&&n.s&&Ei(s,n.o,n.s),t=new wn(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Rc(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),vi(n.h,t),Pr(t,s,e)}function _n(n,e){n.ia&&ai(n.ia,function(t,s){L(e,s,t)}),n.l&&fc({},function(t,s){L(e,s,t)})}function Rc(n,e,t){t=Math.min(n.i.length,t);var s=n.l?Z(n.l.Ra,n.l,n):null;e:{var r=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=r[c].h;const l=r[c].g;if(u-=i,0>u)i=Math.max(0,r[c].h-100),a=!1;else try{cf(l,o,"req"+u+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function Oc(n){n.g||n.u||(n.Z=1,Ja(n.Ia,n),n.A=0)}function _i(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=yn(Z(n.Ia,n),Pc(n,n.A)),n.A++,!0)}y.Ia=function(){if(this.u=null,Mc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=yn(Z(this.eb,this),n)}};y.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,se(10),Rs(this),Mc(this))};function bi(n){n.B!=null&&(_.clearTimeout(n.B),n.B=null)}function Mc(n){n.g=new wn(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Te(n.sa);L(e,"RID","rpc"),L(e,"SID",n.I),L(e,"CI",n.L?"0":"1"),L(e,"AID",n.T),L(e,"TYPE","xmlhttp"),_n(n,e),n.o&&n.s&&Ei(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Cs(Te(e)),t.s=null,t.P=!0,uc(t,n)}y.cb=function(){this.v!=null&&(this.v=null,Rs(this),_i(this),se(19))};function rs(n){n.v!=null&&(_.clearTimeout(n.v),n.v=null)}function Lc(n,e){var t=null;if(n.g==e){rs(n),bi(n),n.g=null;var s=2}else if(Ur(n.h,e))t=e.D,Ec(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=bs(),z(s,new ic(s,t)),Os(n)}else Oc(n);else if(r=e.o,r==3||r==0&&0<n.pa||!(s==1&&pf(n,e)||s==2&&_i(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),r){case 1:We(n,5);break;case 4:We(n,10);break;case 3:We(n,6);break;default:We(n,2)}}}function Pc(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function We(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=Z(n.kb,n);t||(t=new Xe("//www.google.com/images/cleardot.gif"),_.location&&_.location.protocol=="http"||ns(t,"https"),Cs(t)),uf(t.toString(),s)}else se(2);n.G=0,n.l&&n.l.va(e),xc(n),Nc(n)}y.kb=function(n){n?(this.j.info("Successfully pinged google.com"),se(2)):(this.j.info("Failed to ping google.com"),se(1))};function xc(n){if(n.G=0,n.la=[],n.l){const e=Tc(n.h);(e.length!=0||n.i.length!=0)&&(Io(n.la,e),Io(n.la,n.i),n.h.i.length=0,ii(n.i),n.i.length=0),n.l.ua()}}function Uc(n,e,t){var s=t instanceof Xe?Te(t):new Xe(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),ss(s,s.m);else{var r=_.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new Xe(null,void 0);s&&ns(i,s),e&&(i.g=e),r&&ss(i,r),t&&(i.l=t),s=i}return t=n.D,e=n.za,t&&e&&L(s,t,e),L(s,"VER",n.ma),_n(n,s),s}function Fc(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new P(new En({jb:!0})):new P(n.ra),e.Ka(n.H),e}function Vc(){}y=Vc.prototype;y.xa=function(){};y.wa=function(){};y.va=function(){};y.ua=function(){};y.Ra=function(){};function is(){if(It&&!(10<=Number(Nd)))throw Error("Environmental error: no available transport.")}is.prototype.g=function(n,e){return new ae(n,e)};function ae(n,e){K.call(this),this.g=new Dc(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Zn(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zn(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Nt(this)}W(ae,K);ae.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;se(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Uc(n,null,n.V),Os(n)};ae.prototype.close=function(){Ti(this.g)};ae.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=di(n),n=t);e.i.push(new rf(e.ab++,n)),e.G==3&&Os(e)};ae.prototype.M=function(){this.g.l=null,delete this.j,Ti(this.g),delete this.g,ae.X.M.call(this)};function Bc(n){mi.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}W(Bc,mi);function $c(){yi.call(this),this.status=1}W($c,yi);function Nt(n){this.g=n}W(Nt,Vc);Nt.prototype.xa=function(){z(this.g,"a")};Nt.prototype.wa=function(n){z(this.g,new Bc(n))};Nt.prototype.va=function(n){z(this.g,new $c)};Nt.prototype.ua=function(){z(this.g,"b")};is.prototype.createWebChannel=is.prototype.g;ae.prototype.send=ae.prototype.u;ae.prototype.open=ae.prototype.m;ae.prototype.close=ae.prototype.close;Ss.NO_ERROR=0;Ss.TIMEOUT=8;Ss.HTTP_ERROR=6;oc.COMPLETE="complete";ac.EventType=vn;vn.OPEN="a";vn.CLOSE="b";vn.ERROR="c";vn.MESSAGE="d";K.prototype.listen=K.prototype.N;P.prototype.listenOnce=P.prototype.O;P.prototype.getLastError=P.prototype.Oa;P.prototype.getLastErrorCode=P.prototype.Ea;P.prototype.getStatus=P.prototype.aa;P.prototype.getResponseJson=P.prototype.Sa;P.prototype.getResponseText=P.prototype.fa;P.prototype.send=P.prototype.da;P.prototype.setWithCredentials=P.prototype.Ka;var gf=function(){return new is},mf=function(){return bs()},mr=Ss,yf=oc,vf=it,Oo={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},wf=En,Fn=ac,If=P;const Mo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}X.UNAUTHENTICATED=new X(null),X.GOOGLE_CREDENTIALS=new X("google-credentials-uid"),X.FIRST_PARTY=new X("first-party-uid"),X.MOCK_USER=new X("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rt="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt=new ei("@firebase/firestore");function Lo(){return nt.logLevel}function v(n,...e){if(nt.logLevel<=N.DEBUG){const t=e.map(Si);nt.debug(`Firestore (${Rt}): ${n}`,...t)}}function _e(n,...e){if(nt.logLevel<=N.ERROR){const t=e.map(Si);nt.error(`Firestore (${Rt}): ${n}`,...t)}}function Fr(n,...e){if(nt.logLevel<=N.WARN){const t=e.map(Si);nt.warn(`Firestore (${Rt}): ${n}`,...t)}}function Si(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(n="Unexpected state"){const e=`FIRESTORE (${Rt}) INTERNAL ASSERTION FAILED: `+n;throw _e(e),new Error(e)}function O(n,e){n||T()}function S(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class m extends ke{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ef{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(X.UNAUTHENTICATED))}shutdown(){}}class Tf{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class _f{constructor(e){this.t=e,this.currentUser=X.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let i=new Ee;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Ee,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await r(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Ee)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(O(typeof s.accessToken=="string"),new jc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return O(e===null||typeof e=="string"),new X(e)}}class bf{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r,this.type="FirstParty",this.user=X.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(O(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Sf{constructor(e,t,s,r){this.h=e,this.l=t,this.m=s,this.g=r}getToken(){return Promise.resolve(new bf(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(X.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Af{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kf{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.A;return this.A=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.T.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.T.getImmediate({optional:!0});i?r(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(O(typeof t.token=="string"),this.A=t.token,new Af(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=Cf(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function R(n,e){return n<e?-1:n>e?1:0}function Et(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new m(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new m(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new m(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new m(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return B.fromMillis(Date.now())}static fromDate(e){return B.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new B(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new B(0,0))}static max(){return new b(new B(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t,s){t===void 0?t=0:t>e.length&&T(),s===void 0?s=e.length-t:s>e.length-t&&T(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return nn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class M extends nn{construct(e,t,s){return new M(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new m(f.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new M(t)}static emptyPath(){return new M([])}}const Df=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class J extends nn{construct(e,t,s){return new J(e,t,s)}static isValidIdentifier(e){return Df.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),J.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new J(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new m(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new m(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new m(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new m(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new J(t)}static emptyPath(){return new J([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(M.fromString(e))}static fromName(e){return new I(M.fromString(e).popFirst(5))}static empty(){return new I(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return M.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new M(e.slice()))}}function Nf(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=b.fromTimestamp(s===1e9?new B(t+1,0):new B(t,s));return new Fe(r,I.empty(),e)}function Rf(n){return new Fe(n.readTime,n.key,-1)}class Fe{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Fe(b.min(),I.empty(),-1)}static max(){return new Fe(b.max(),I.empty(),-1)}}function Of(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:R(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mf="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Lf{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==Mf)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,s)=>{t(e)})}static reject(e){return new p((t,s)=>{s(e)})}static waitFor(e){return new p((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},c=>s(c))}),o=!0,i===r&&t()})}static or(e){let t=p.resolve(!1);for(const s of e)t=t.next(r=>r?p.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new p((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,t){return new p((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}function Sn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ai.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t,s,r,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class sn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new sn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ot(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Kc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(n){return n==null}function os(n){return n===0&&1/n==-1/0}function xf(n){return typeof n=="number"&&Number.isInteger(n)&&!os(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw r instanceof DOMException?new Uf("Invalid base64 string: "+r):r}}(e);return new ne(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ne.EMPTY_BYTE_STRING=new ne("");const Ff=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ve(n){if(O(!!n),typeof n=="string"){let e=0;const t=Ff.exec(n);if(O(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:U(n.seconds),nanos:U(n.nanos)}}function U(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Tt(n){return typeof n=="string"?ne.fromBase64String(n):ne.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function zc(n){const e=n.mapValue.fields.__previous_value__;return Hc(e)?zc(e):e}function rn(n){const e=Ve(n.mapValue.fields.__local_write_time__.timestampValue);return new B(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function st(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Hc(n)?4:Vf(n)?9007199254740991:10:T()}function me(n,e){if(n===e)return!0;const t=st(n);if(t!==st(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return rn(n).isEqual(rn(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ve(s.timestampValue),o=Ve(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return Tt(s.bytesValue).isEqual(Tt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return U(s.geoPointValue.latitude)===U(r.geoPointValue.latitude)&&U(s.geoPointValue.longitude)===U(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return U(s.integerValue)===U(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=U(s.doubleValue),o=U(r.doubleValue);return i===o?os(i)===os(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Et(n.arrayValue.values||[],e.arrayValue.values||[],me);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(Po(i)!==Po(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!me(i[a],o[a])))return!1;return!0}(n,e);default:return T()}}function on(n,e){return(n.values||[]).find(t=>me(t,e))!==void 0}function _t(n,e){if(n===e)return 0;const t=st(n),s=st(e);if(t!==s)return R(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return R(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=U(r.integerValue||r.doubleValue),a=U(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return xo(n.timestampValue,e.timestampValue);case 4:return xo(rn(n),rn(e));case 5:return R(n.stringValue,e.stringValue);case 6:return function(r,i){const o=Tt(r),a=Tt(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=R(o[c],a[c]);if(u!==0)return u}return R(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=R(U(r.latitude),U(i.latitude));return o!==0?o:R(U(r.longitude),U(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=_t(o[c],a[c]);if(u)return u}return R(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Vn.mapValue&&i===Vn.mapValue)return 0;if(r===Vn.mapValue)return 1;if(i===Vn.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=R(a[l],u[l]);if(h!==0)return h;const d=_t(o[a[l]],c[u[l]]);if(d!==0)return d}return R(a.length,u.length)}(n.mapValue,e.mapValue);default:throw T()}}function xo(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return R(n,e);const t=Ve(n),s=Ve(e),r=R(t.seconds,s.seconds);return r!==0?r:R(t.nanos,s.nanos)}function bt(n){return Vr(n)}function Vr(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=Ve(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?Tt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Vr(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Vr(s.fields[a])}`;return i+"}"}(n.mapValue):T();var e,t}function Uo(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Br(n){return!!n&&"integerValue"in n}function ki(n){return!!n&&"arrayValue"in n}function Fo(n){return!!n&&"nullValue"in n}function Vo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function jn(n){return!!n&&"mapValue"in n}function zt(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ot(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=zt(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=zt(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Vf(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t){this.position=e,this.inclusive=t}}function Bo(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=I.comparator(I.fromName(o.referenceValue),t.key):s=_t(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function $o(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!me(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{}class F extends Gc{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new $f(e,t,s):t==="array-contains"?new Kf(e,s):t==="in"?new Hf(e,s):t==="not-in"?new zf(e,s):t==="array-contains-any"?new Gf(e,s):new F(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new jf(e,s):new qf(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(_t(t,this.value)):t!==null&&st(this.value)===st(t)&&this.matchesComparison(_t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ue extends Gc{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new ue(e,t)}matches(e){return Wc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(t=>t.isInequality());return e!==null?e.field:null}dt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Wc(n){return n.op==="and"}function Qc(n){return Bf(n)&&Wc(n)}function Bf(n){for(const e of n.filters)if(e instanceof ue)return!1;return!0}function $r(n){if(n instanceof F)return n.field.canonicalString()+n.op.toString()+bt(n.value);if(Qc(n))return n.filters.map(e=>$r(e)).join(",");{const e=n.filters.map(t=>$r(t)).join(",");return`${n.op}(${e})`}}function Xc(n,e){return n instanceof F?function(t,s){return s instanceof F&&t.op===s.op&&t.field.isEqual(s.field)&&me(t.value,s.value)}(n,e):n instanceof ue?function(t,s){return s instanceof ue&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((r,i,o)=>r&&Xc(i,s.filters[o]),!0):!1}(n,e):void T()}function Yc(n){return n instanceof F?function(e){return`${e.field.canonicalString()} ${e.op} ${bt(e.value)}`}(n):n instanceof ue?function(e){return e.op.toString()+" {"+e.getFilters().map(Yc).join(" ,")+"}"}(n):"Filter"}class $f extends F{constructor(e,t,s){super(e,t,s),this.key=I.fromName(s.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.matchesComparison(t)}}class jf extends F{constructor(e,t){super(e,"in",t),this.keys=Jc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class qf extends F{constructor(e,t){super(e,"not-in",t),this.keys=Jc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Jc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>I.fromName(s.referenceValue))}class Kf extends F{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ki(t)&&on(t.arrayValue,this.value)}}class Hf extends F{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&on(this.value.arrayValue,t)}}class zf extends F{constructor(e,t){super(e,"not-in",t)}matches(e){if(on(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!on(this.value.arrayValue,t)}}class Gf extends F{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ki(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>on(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t="asc"){this.field=e,this.dir=t}}function Wf(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){this.comparator=e,this.root=t||H.EMPTY}insert(e,t){return new j(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,H.BLACK,null,null))}remove(e){return new j(this.comparator,this.root.remove(e,this.comparator).copy(null,null,H.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bn(this.root,e,this.comparator,!0)}}class Bn{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class H{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s??H.RED,this.left=r??H.EMPTY,this.right=i??H.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new H(e??this.key,t??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return H.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return H.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}H.EMPTY=null,H.RED=!0,H.BLACK=!1;H.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(n,e,t,s,r){return this}insert(n,e,t){return new H(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.comparator=e,this.data=new j(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new jo(this.data.getIterator())}getIteratorFrom(e){return new jo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof $)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new $(this.comparator);return t.data=e,t}}class jo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.fields=e,e.sort(J.comparator)}static empty(){return new oe([])}unionWith(e){let t=new $(J.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new oe(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Et(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e){this.value=e}static empty(){return new ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!jn(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zt(t)}setAll(e){let t=J.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=zt(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());jn(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return me(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];jn(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){ot(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ie(zt(this.value))}}function Zc(n){const e=[];return ot(n.fields,(t,s)=>{const r=new J([t]);if(jn(s)){const i=Zc(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new oe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Y(e,0,b.min(),b.min(),b.min(),ie.empty(),0)}static newFoundDocument(e,t,s,r){return new Y(e,1,t,b.min(),s,r,0)}static newNoDocument(e,t){return new Y(e,2,t,b.min(),b.min(),ie.empty(),0)}static newUnknownDocument(e,t){return new Y(e,3,t,b.min(),b.min(),ie.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Y&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Y(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this._t=null}}function qo(n,e=null,t=[],s=[],r=null,i=null,o=null){return new Qf(n,e,t,s,r,i,o)}function Ci(n){const e=S(n);if(e._t===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>$r(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Ms(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>bt(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>bt(s)).join(",")),e._t=t}return e._t}function Di(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Wf(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Xc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$o(n.startAt,e.startAt)&&$o(n.endAt,e.endAt)}function jr(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Xf(n,e,t,s,r,i,o,a){return new Ot(n,e,t,s,r,i,o,a)}function Ni(n){return new Ot(n)}function Ko(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ri(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Ls(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function eu(n){return n.collectionGroup!==null}function gt(n){const e=S(n);if(e.wt===null){e.wt=[];const t=Ls(e),s=Ri(e);if(t!==null&&s===null)t.isKeyField()||e.wt.push(new pt(t)),e.wt.push(new pt(J.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.wt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new pt(J.keyField(),i))}}}return e.wt}function be(n){const e=S(n);if(!e.gt)if(e.limitType==="F")e.gt=qo(e.path,e.collectionGroup,gt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of gt(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new pt(i.field,o))}const s=e.endAt?new as(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new as(e.startAt.position,e.startAt.inclusive):null;e.gt=qo(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e.gt}function qr(n,e){e.getFirstInequalityField(),Ls(n);const t=n.filters.concat([e]);return new Ot(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function cs(n,e,t){return new Ot(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ps(n,e){return Di(be(n),be(e))&&n.limitType===e.limitType}function tu(n){return`${Ci(be(n))}|lt:${n.limitType}`}function Kr(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>Yc(s)).join(", ")}]`),Ms(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>bt(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>bt(s)).join(",")),`Target(${t})`}(be(n))}; limitType=${n.limitType})`}function xs(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):I.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of gt(t))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=Bo(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,gt(t),s)||t.endAt&&!function(r,i,o){const a=Bo(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,gt(t),s))}(n,e)}function Yf(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function nu(n){return(e,t)=>{let s=!1;for(const r of gt(n)){const i=Jf(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Jf(n,e,t){const s=n.field.isKeyField()?I.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),c=o.data.field(r);return a!==null&&c!==null?_t(a,c):T()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(n,e){if(n.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:os(e)?"-0":e}}function ru(n){return{integerValue:""+n}}function Zf(n,e){return xf(e)?ru(e):su(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this._=void 0}}function ep(n,e,t){return n instanceof us?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof an?ou(n,e):n instanceof cn?au(n,e):function(s,r){const i=iu(s,r),o=Ho(i)+Ho(s.It);return Br(i)&&Br(s.It)?ru(o):su(s.Tt,o)}(n,e)}function tp(n,e,t){return n instanceof an?ou(n,e):n instanceof cn?au(n,e):t}function iu(n,e){return n instanceof ls?Br(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class us extends Us{}class an extends Us{constructor(e){super(),this.elements=e}}function ou(n,e){const t=cu(e);for(const s of n.elements)t.some(r=>me(r,s))||t.push(s);return{arrayValue:{values:t}}}class cn extends Us{constructor(e){super(),this.elements=e}}function au(n,e){let t=cu(e);for(const s of n.elements)t=t.filter(r=>!me(r,s));return{arrayValue:{values:t}}}class ls extends Us{constructor(e,t){super(),this.Tt=e,this.It=t}}function Ho(n){return U(n.integerValue||n.doubleValue)}function cu(n){return ki(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function np(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof an&&s instanceof an||t instanceof cn&&s instanceof cn?Et(t.elements,s.elements,me):t instanceof ls&&s instanceof ls?me(t.It,s.It):t instanceof us&&s instanceof us}(n.transform,e.transform)}class sp{constructor(e,t){this.version=e,this.transformResults=t}}class ce{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ce}static exists(e){return new ce(void 0,e)}static updateTime(e){return new ce(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function qn(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Fs{}function uu(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Oi(n.key,ce.none()):new An(n.key,n.data,ce.none());{const t=n.data,s=ie.empty();let r=new $(J.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new qe(n.key,s,new oe(r.toArray()),ce.none())}}function rp(n,e,t){n instanceof An?function(s,r,i){const o=s.value.clone(),a=Go(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof qe?function(s,r,i){if(!qn(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Go(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(lu(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Gt(n,e,t,s){return n instanceof An?function(r,i,o,a){if(!qn(r.precondition,i))return o;const c=r.value.clone(),u=Wo(r.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof qe?function(r,i,o,a){if(!qn(r.precondition,i))return o;const c=Wo(r.fieldTransforms,a,i),u=i.data;return u.setAll(lu(r)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(n,e,t,s):function(r,i,o){return qn(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function ip(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=iu(s.transform,r||null);i!=null&&(t===null&&(t=ie.empty()),t.set(s.field,i))}return t||null}function zo(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&Et(t,s,(r,i)=>np(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class An extends Fs{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class qe extends Fs{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function lu(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function Go(n,e,t){const s=new Map;O(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,tp(o,a,t[r]))}return s}function Wo(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,ep(i,o,e))}return s}class Oi extends Fs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class op extends Fs{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x,C;function cp(n){switch(n){default:return T();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function hu(n){if(n===void 0)return _e("GRPC error has no .code"),f.UNKNOWN;switch(n){case x.OK:return f.OK;case x.CANCELLED:return f.CANCELLED;case x.UNKNOWN:return f.UNKNOWN;case x.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case x.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case x.INTERNAL:return f.INTERNAL;case x.UNAVAILABLE:return f.UNAVAILABLE;case x.UNAUTHENTICATED:return f.UNAUTHENTICATED;case x.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case x.NOT_FOUND:return f.NOT_FOUND;case x.ALREADY_EXISTS:return f.ALREADY_EXISTS;case x.PERMISSION_DENIED:return f.PERMISSION_DENIED;case x.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case x.ABORTED:return f.ABORTED;case x.OUT_OF_RANGE:return f.OUT_OF_RANGE;case x.UNIMPLEMENTED:return f.UNIMPLEMENTED;case x.DATA_LOSS:return f.DATA_LOSS;default:return T()}}(C=x||(x={}))[C.OK=0]="OK",C[C.CANCELLED=1]="CANCELLED",C[C.UNKNOWN=2]="UNKNOWN",C[C.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",C[C.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",C[C.NOT_FOUND=5]="NOT_FOUND",C[C.ALREADY_EXISTS=6]="ALREADY_EXISTS",C[C.PERMISSION_DENIED=7]="PERMISSION_DENIED",C[C.UNAUTHENTICATED=16]="UNAUTHENTICATED",C[C.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",C[C.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",C[C.ABORTED=10]="ABORTED",C[C.OUT_OF_RANGE=11]="OUT_OF_RANGE",C[C.UNIMPLEMENTED=12]="UNIMPLEMENTED",C[C.INTERNAL=13]="INTERNAL",C[C.UNAVAILABLE=14]="UNAVAILABLE",C[C.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){ot(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Kc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new j(I.comparator);function Se(){return up}const du=new j(I.comparator);function qt(...n){let e=du;for(const t of n)e=e.insert(t.key,t);return e}function fu(n){let e=du;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Qe(){return Wt()}function pu(){return Wt()}function Wt(){return new Mt(n=>n.toString(),(n,e)=>n.isEqual(e))}const lp=new j(I.comparator),hp=new $(I.comparator);function k(...n){let e=hp;for(const t of n)e=e.add(t);return e}const dp=new $(R);function gu(){return dp}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,kn.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Vs(b.min(),r,gu(),Se(),k())}}class kn{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new kn(s,t,k(),k(),k())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t,s,r){this.Et=e,this.removedTargetIds=t,this.key=s,this.At=r}}class mu{constructor(e,t){this.targetId=e,this.Rt=t}}class yu{constructor(e,t,s=ne.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Qo{constructor(){this.bt=0,this.vt=Yo(),this.Pt=ne.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=k(),t=k(),s=k();return this.vt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:T()}}),new kn(this.Pt,this.Vt,e,t,s)}kt(){this.St=!1,this.vt=Yo()}Ot(e,t){this.St=!0,this.vt=this.vt.insert(e,t)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class fp{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Se(),this.Kt=Xo(),this.Gt=new $(R)}Qt(e){for(const t of e.Et)e.At&&e.At.isFoundDocument()?this.jt(t,e.At):this.zt(t,e.key,e.At);for(const t of e.removedTargetIds)this.zt(t,e.key,e.At)}Wt(e){this.forEachTarget(e,t=>{const s=this.Ht(t);switch(e.state){case 0:this.Jt(t)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(t);break;case 3:this.Jt(t)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(t)&&(this.Yt(t),s.xt(e.resumeToken));break;default:T()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qt.forEach((s,r)=>{this.Jt(r)&&t(r)})}Zt(e){const t=e.targetId,s=e.Rt.count,r=this.Xt(t);if(r){const i=r.target;if(jr(i))if(s===0){const o=new I(i.path);this.zt(t,o,Y.newNoDocument(o,b.min()))}else O(s===1);else this.te(t)!==s&&(this.Yt(t),this.Gt=this.Gt.add(t))}}ee(e){const t=new Map;this.qt.forEach((i,o)=>{const a=this.Xt(o);if(a){if(i.current&&jr(a.target)){const c=new I(a.target.path);this.Ut.get(c)!==null||this.ne(o,c)||this.zt(o,c,Y.newNoDocument(c,e))}i.Ct&&(t.set(o,i.Nt()),i.kt())}});let s=k();this.Kt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Xt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Ut.forEach((i,o)=>o.setReadTime(e));const r=new Vs(e,t,this.Gt,this.Ut,s);return this.Ut=Se(),this.Kt=Xo(),this.Gt=new $(R),r}jt(e,t){if(!this.Jt(e))return;const s=this.ne(e,t.key)?2:0;this.Ht(e).Ot(t.key,s),this.Ut=this.Ut.insert(t.key,t),this.Kt=this.Kt.insert(t.key,this.se(t.key).add(e))}zt(e,t,s){if(!this.Jt(e))return;const r=this.Ht(e);this.ne(e,t)?r.Ot(t,1):r.Mt(t),this.Kt=this.Kt.insert(t,this.se(t).delete(e)),s&&(this.Ut=this.Ut.insert(t,s))}removeTarget(e){this.qt.delete(e)}te(e){const t=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let t=this.qt.get(e);return t||(t=new Qo,this.qt.set(e,t)),t}se(e){let t=this.Kt.get(e);return t||(t=new $(R),this.Kt=this.Kt.insert(e,t)),t}Jt(e){const t=this.Xt(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.qt.get(e);return t&&t.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Qo),this.Lt.getRemoteKeysForTarget(e).forEach(t=>{this.zt(e,t,null)})}ne(e,t){return this.Lt.getRemoteKeysForTarget(e).has(t)}}function Xo(){return new j(I.comparator)}function Yo(){return new j(I.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),gp=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mp=(()=>({and:"AND",or:"OR"}))();class yp{constructor(e,t){this.databaseId=e,this.yt=t}}function hs(n,e){return n.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vu(n,e){return n.yt?e.toBase64():e.toUint8Array()}function vp(n,e){return hs(n,e.toTimestamp())}function fe(n){return O(!!n),b.fromTimestamp(function(e){const t=Ve(e);return new B(t.seconds,t.nanos)}(n))}function Mi(n,e){return function(t){return new M(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function wu(n){const e=M.fromString(n);return O(_u(e)),e}function Hr(n,e){return Mi(n.databaseId,e.path)}function yr(n,e){const t=wu(e);if(t.get(1)!==n.databaseId.projectId)throw new m(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new m(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(Iu(t))}function zr(n,e){return Mi(n.databaseId,e)}function wp(n){const e=wu(n);return e.length===4?M.emptyPath():Iu(e)}function Gr(n){return new M(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Iu(n){return O(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Jo(n,e,t){return{name:Hr(n,e),fields:t.value.mapValue.fields}}function Ip(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:T()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(c,u){return c.yt?(O(u===void 0||typeof u=="string"),ne.fromBase64String(u||"")):(O(u===void 0||u instanceof Uint8Array),ne.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:hu(c.code);return new m(u,c.message||"")}(o);t=new yu(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=yr(n,s.document.name),i=fe(s.document.updateTime),o=s.document.createTime?fe(s.document.createTime):b.min(),a=new ie({mapValue:{fields:s.document.fields}}),c=Y.newFoundDocument(r,i,o,a),u=s.targetIds||[],l=s.removedTargetIds||[];t=new Kn(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=yr(n,s.document),i=s.readTime?fe(s.readTime):b.min(),o=Y.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Kn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=yr(n,s.document),i=s.removedTargetIds||[];t=new Kn([],i,r,null)}else{if(!("filter"in e))return T();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new ap(r),o=s.targetId;t=new mu(o,i)}}return t}function Ep(n,e){let t;if(e instanceof An)t={update:Jo(n,e.key,e.value)};else if(e instanceof Oi)t={delete:Hr(n,e.key)};else if(e instanceof qe)t={update:Jo(n,e.key,e.data),updateMask:Np(e.fieldMask)};else{if(!(e instanceof op))return T();t={verify:Hr(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof us)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof an)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof cn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ls)return{fieldPath:i.field.canonicalString(),increment:o.It};throw T()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:vp(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:T()}(n,e.precondition)),t}function Tp(n,e){return n&&n.length>0?(O(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?fe(s.updateTime):fe(r);return i.isEqual(b.min())&&(i=fe(r)),new sp(i,s.transformResults||[])}(t,e))):[]}function _p(n,e){return{documents:[zr(n,e.path)]}}function bp(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=zr(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=zr(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(c){if(c.length!==0)return Tu(ue.create(c,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:ut(l.field),direction:kp(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.yt||Ms(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function Sp(n){let e=wp(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){O(s===1);const l=t.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(l){const h=Eu(l);return h instanceof ue&&Qc(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new pt(lt(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ms(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new as(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new as(d,h)}(t.endAt)),Xf(e,r,o,i,a,"F",c,u)}function Ap(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return T()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function Eu(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=lt(e.unaryFilter.field);return F.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=lt(e.unaryFilter.field);return F.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=lt(e.unaryFilter.field);return F.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=lt(e.unaryFilter.field);return F.create(i,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(n):n.fieldFilter!==void 0?function(e){return F.create(lt(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ue.create(e.compositeFilter.filters.map(t=>Eu(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return T()}}(e.compositeFilter.op))}(n):T()}function kp(n){return pp[n]}function Cp(n){return gp[n]}function Dp(n){return mp[n]}function ut(n){return{fieldPath:n.canonicalString()}}function lt(n){return J.fromServerFormat(n.fieldPath)}function Tu(n){return n instanceof F?function(e){if(e.op==="=="){if(Vo(e.value))return{unaryFilter:{field:ut(e.field),op:"IS_NAN"}};if(Fo(e.value))return{unaryFilter:{field:ut(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Vo(e.value))return{unaryFilter:{field:ut(e.field),op:"IS_NOT_NAN"}};if(Fo(e.value))return{unaryFilter:{field:ut(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ut(e.field),op:Cp(e.op),value:e.value}}}(n):n instanceof ue?function(e){const t=e.getFilters().map(s=>Tu(s));return t.length===1?t[0]:{compositeFilter:{op:Dp(e.op),filters:t}}}(n):T()}function Np(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function _u(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rp{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&rp(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Gt(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Gt(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=pu();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=uu(o,a);c!==null&&s.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(b.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),k())}isEqual(e){return this.batchId===e.batchId&&Et(this.mutations,e.mutations,(t,s)=>zo(t,s))&&Et(this.baseMutations,e.baseMutations,(t,s)=>zo(t,s))}}class Li{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){O(e.mutations.length===s.length);let r=lp;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Li(e,t,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e,t,s,r,i=b.min(),o=b.min(),a=ne.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Ye(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ye(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp{constructor(e){this.oe=e}}function Lp(n){const e=Sp({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?cs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(){this.Ze=new xp}addToCollectionParentIndex(e,t){return this.Ze.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getIndexType(e,t){return p.resolve(0)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}getMinOffset(e,t){return p.resolve(Fe.min())}getMinOffsetFromCollectionGroup(e,t){return p.resolve(Fe.min())}updateCollectionGroup(e,t,s){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class xp{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new $(M.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new $(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new St(0)}static Sn(){return new St(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(){this.changes=new Mt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Y.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?p.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vp{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&Gt(s.mutation,r,oe.empty(),B.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,k()).next(()=>s))}getLocalViewOfDocuments(e,t,s=k()){const r=Qe();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=qt();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=Qe();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,k()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=Se();const o=Wt(),a=Wt();return t.forEach((c,u)=>{const l=s.get(u.key);r.has(u.key)&&(l===void 0||l.mutation instanceof qe)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Gt(l.mutation,u,l.mutation.getFieldMask(),B.now())):o.set(u.key,oe.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new Fp(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Wt();let r=new j((o,a)=>o-a),i=k();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=s.get(c)||oe.empty();l=a.applyToLocalView(u,l),s.set(c,l);const h=(r.get(a.batchId)||k()).add(c);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=pu();l.forEach(d=>{if(!i.has(d)){const g=uu(t.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return p.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(r){return I.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):eu(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):p.resolve(Qe());let a=-1,c=i;return o.next(u=>p.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?p.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,k())).next(l=>({batchId:a,changes:fu(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new I(t)).next(s=>{let r=qt();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const r=t.collectionGroup;let i=qt();return this.indexManager.getCollectionParents(e,r).next(o=>p.forEach(o,a=>{const c=function(u,l){return new Ot(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r))).next(i=>{r.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,Y.newInvalidDocument(u)))});let o=qt();return i.forEach((a,c)=>{const u=r.get(a);u!==void 0&&Gt(u.mutation,c,oe.empty(),B.now()),xs(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return p.resolve(this.es.get(t))}saveBundleMetadata(e,t){var s;return this.es.set(t.id,{id:(s=t).id,version:s.version,createTime:fe(s.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,function(s){return{name:s.name,query:Lp(s.bundledQuery),readTime:fe(s.readTime)}}(t)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{constructor(){this.overlays=new j(I.comparator),this.ss=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Qe();return p.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.ce(e,t,i)}),p.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.ss.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ss.delete(s)),p.resolve()}getOverlaysForCollection(e,t,s){const r=Qe(),i=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>s&&r.set(c.getKey(),c)}return p.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new j((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>s){let l=i.get(u.largestBatchId);l===null&&(l=Qe(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Qe(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=r)););return p.resolve(a)}ce(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ss.get(r.largestBatchId).delete(s.key);this.ss.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new Op(t,s));let i=this.ss.get(t);i===void 0&&(i=k(),this.ss.set(t,i)),this.ss.set(t,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.rs=new $(q.os),this.us=new $(q.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){const s=new q(e,t);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.ls(new q(e,t))}fs(e,t){e.forEach(s=>this.removeReference(s,t))}ds(e){const t=new I(new M([])),s=new q(t,e),r=new q(t,e+1),i=[];return this.us.forEachInRange([s,r],o=>{this.ls(o),i.push(o.key)}),i}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const t=new I(new M([])),s=new q(t,e),r=new q(t,e+1);let i=k();return this.us.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new q(e,0),s=this.rs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class q{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return I.comparator(e.key,t.key)||R(e.gs,t.gs)}static cs(e,t){return R(e.gs,t.gs)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new $(q.os)}checkEmpty(e){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Rp(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this.ps=this.ps.add(new q(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.Ts(s),i=r<0?0:r;return p.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new q(t,0),r=new q(t,Number.POSITIVE_INFINITY),i=[];return this.ps.forEachInRange([s,r],o=>{const a=this.Is(o.gs);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new $(R);return t.forEach(r=>{const i=new q(r,0),o=new q(r,Number.POSITIVE_INFINITY);this.ps.forEachInRange([i,o],a=>{s=s.add(a.gs)})}),p.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;I.isDocumentKey(i)||(i=i.child(""));const o=new q(new I(i),0);let a=new $(R);return this.ps.forEachWhile(c=>{const u=c.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(c.gs)),!0)},o),p.resolve(this.Es(a))}Es(e){const t=[];return e.forEach(s=>{const r=this.Is(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){O(this.As(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return p.forEach(t.mutations,r=>{const i=new q(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,t){const s=new q(t,0),r=this.ps.firstAfterOrEqual(s);return p.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,p.resolve()}As(e,t){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.Rs=e,this.docs=new j(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Rs(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return p.resolve(s?s.document.mutableCopy():Y.newInvalidDocument(t))}getEntries(e,t){let s=Se();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Y.newInvalidDocument(r))}),p.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Se();const o=t.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Of(Rf(l),s)<=0||(r.has(l.key)||xs(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return p.resolve(i)}getAllFromCollectionGroup(e,t,s,r){T()}bs(e,t){return p.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new Kp(this)}getSize(e){return p.resolve(this.size)}}class Kp extends Up{constructor(e){super(),this.Xn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Xn.addEntry(e,r)):this.Xn.removeEntry(s)}),p.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hp{constructor(e){this.persistence=e,this.vs=new Mt(t=>Ci(t),Di),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Pi,this.targetCount=0,this.Ss=St.Vn()}forEachTarget(e,t){return this.vs.forEach((s,r)=>t(r)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Ps&&(this.Ps=t),p.resolve()}xn(e){this.vs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ss=new St(t),this.highestTargetId=t),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.xn(t),p.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.vs.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),p.waitFor(i).next(()=>r)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const s=this.vs.get(t)||null;return p.resolve(s)}addMatchingKeys(e,t,s){return this.Vs.hs(t,s),p.resolve()}removeMatchingKeys(e,t,s){this.Vs.fs(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),p.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Vs.ws(t);return p.resolve(s)}containsKey(e,t){return p.resolve(this.Vs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zp{constructor(e,t){this.Ds={},this.overlays={},this.Cs=new Ai(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new Hp(this),this.indexManager=new Pp,this.remoteDocumentCache=function(s){return new qp(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new Mp(t),this.Os=new Bp(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $p,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Ds[e.toKey()];return s||(s=new jp(t,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,t,s){v("MemoryPersistence","Starting transaction:",e);const r=new Gp(this.Cs.next());return this.referenceDelegate.Ms(),s(r).next(i=>this.referenceDelegate.Fs(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}$s(e,t){return p.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,t)))}}class Gp extends Lf{constructor(e){super(),this.currentSequenceNumber=e}}class xi{constructor(e){this.persistence=e,this.Bs=new Pi,this.Ls=null}static qs(e){return new xi(e)}get Us(){if(this.Ls)return this.Ls;throw T()}addReference(e,t,s){return this.Bs.addReference(s,t),this.Us.delete(s.toString()),p.resolve()}removeReference(e,t,s){return this.Bs.removeReference(s,t),this.Us.add(s.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),p.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach(r=>this.Us.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.Us.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ms(){this.Ls=new Set}Fs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Us,s=>{const r=I.fromPath(s);return this.Ks(e,r).next(i=>{i||t.removeEntry(r,b.min())})}).next(()=>(this.Ls=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ks(e,t).next(s=>{s?this.Us.delete(t.toString()):this.Us.add(t.toString())})}ks(e){return 0}Ks(e,t){return p.or([()=>p.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.$s(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Ci=s,this.xi=r}static Ni(e,t){let s=k(),r=k();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ui(e,t.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this.ki=!1}initialize(e,t){this.Oi=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,s,r){return this.Mi(e,t).next(i=>i||this.Fi(e,t,r,s)).next(i=>i||this.$i(e,t))}Mi(e,t){if(Ko(t))return p.resolve(null);let s=be(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=cs(t,null,"F"),s=be(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=k(...i);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(c=>{const u=this.Bi(t,a);return this.Li(t,u,o,c.readTime)?this.Mi(e,cs(t,null,"F")):this.qi(e,u,t,c)}))})))}Fi(e,t,s,r){return Ko(t)||r.isEqual(b.min())?this.$i(e,t):this.Oi.getDocuments(e,s).next(i=>{const o=this.Bi(t,i);return this.Li(t,o,s,r)?this.$i(e,t):(Lo()<=N.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Kr(t)),this.qi(e,o,t,Nf(r,-1)))})}Bi(e,t){let s=new $(nu(e));return t.forEach((r,i)=>{xs(e,i)&&(s=s.add(i))}),s}Li(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}$i(e,t){return Lo()<=N.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",Kr(t)),this.Oi.getDocumentsMatchingQuery(e,t,Fe.min())}qi(e,t,s,r){return this.Oi.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t,s,r){this.persistence=e,this.Ui=t,this.Tt=r,this.Ki=new j(R),this.Gi=new Mt(i=>Ci(i),Di),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Vp(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ki))}}function Xp(n,e,t,s){return new Qp(n,e,t,s)}async function bu(n,e){const t=S(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.zi(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let c=k();for(const u of r){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(s,c).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function Yp(n,e){const t=S(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(g=>{d=d.next(()=>u.getEntry(a,g)).next(w=>{const A=c.docVersions.get(g);O(A!==null),w.version.compareTo(A)<0&&(l.applyToRemoteDocument(w,c),w.isValidDocument()&&(w.setReadTime(c.commitVersion),u.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=k();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Su(n){const e=S(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ns.getLastRemoteSnapshotVersion(t))}function Jp(n,e){const t=S(n),s=e.snapshotVersion;let r=t.Ki;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.ji.newChangeBuffer({trackRemovals:!0});r=t.Ki;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(t.Ns.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Ns.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(ne.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(w,A,D){return w.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,g,l)&&a.push(t.Ns.updateTargetData(i,g))});let c=Se(),u=k();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Zp(i,o,e.documentUpdates).next(l=>{c=l.Hi,u=l.Ji})),!s.isEqual(b.min())){const l=t.Ns.getLastRemoteSnapshotVersion(i).next(h=>t.Ns.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Ki=r,i))}function Zp(n,e,t){let s=k(),r=k();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=Se();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(b.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{Hi:o,Ji:r}})}function eg(n,e){const t=S(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function tg(n,e){const t=S(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Ns.getTargetData(s,e).next(i=>i?(r=i,p.resolve(r)):t.Ns.allocateTargetId(s).next(o=>(r=new Ye(e,o,0,s.currentSequenceNumber),t.Ns.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Ki.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Ki=t.Ki.insert(s.targetId,s),t.Gi.set(e,s.targetId)),s})}async function Wr(n,e,t){const s=S(n),r=s.Ki.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!Sn(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(r.target)}function Zo(n,e,t){const s=S(n);let r=b.min(),i=k();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=S(a),h=l.Gi.get(u);return h!==void 0?p.resolve(l.Ki.get(h)):l.Ns.getTargetData(c,u)}(s,o,be(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(o,e,t?r:b.min(),t?i:k())).next(a=>(ng(s,Yf(e),a),{documents:a,Yi:i})))}function ng(n,e,t){let s=n.Qi.get(e)||b.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Qi.set(e,s)}class ea{constructor(){this.activeTargetIds=gu()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sg{constructor(){this.Ur=new ea,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,s){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new ea,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,s,r,i){const o=this.fo(e,t);v("RestConnection","Sending: ",o,s);const a={};return this._o(a,r,i),this.wo(e,o,a,s).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw Fr("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",s),c})}mo(e,t,s,r,i,o){return this.lo(e,t,s,r,i)}_o(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rt,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}fo(e,t){const s=ig[e];return`${this.co}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,s,r){return new Promise((i,o)=>{const a=new If;a.setWithCredentials(!0),a.listenOnce(yf.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case mr.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),i(u);break;case mr.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new m(f.DEADLINE_EXCEEDED,"Request time out"));break;case mr.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const g=function(w){const A=w.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(A)>=0?A:f.UNKNOWN}(d.status);o(new m(g,d.message))}else o(new m(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new m(f.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(r);a.send(t,"POST",c,s,15)})}yo(e,t,s){const r=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=gf(),o=mf(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new wf({})),this._o(a.initMessageHeaders,t,s),a.encodeInitMessageHeaders=!0;const c=r.join("");v("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new og({Yr:w=>{h?v("Connection","Not sending because WebChannel is closed:",w):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",w),u.send(w))},Zr:()=>u.close()}),g=(w,A,D)=>{w.listen(A,Q=>{try{D(Q)}catch(V){setTimeout(()=>{throw V},0)}})};return g(u,Fn.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),g(u,Fn.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.oo())}),g(u,Fn.EventType.ERROR,w=>{h||(h=!0,Fr("Connection","WebChannel transport errored:",w),d.oo(new m(f.UNAVAILABLE,"The operation could not be completed")))}),g(u,Fn.EventType.MESSAGE,w=>{var A;if(!h){const D=w.data[0];O(!!D);const Q=D,V=Q.error||((A=Q[0])===null||A===void 0?void 0:A.error);if(V){v("Connection","WebChannel received error:",V);const Ce=V.status;let ye=function(xt){const Ut=x[xt];if(Ut!==void 0)return hu(Ut)}(Ce),He=V.message;ye===void 0&&(ye=f.INTERNAL,He="Unknown error status: "+Ce+" with message "+V.message),h=!0,d.oo(new m(ye,He)),u.close()}else v("Connection","WebChannel received:",D),d.uo(D)}}),g(o,vf.STAT_EVENT,w=>{w.stat===Oo.PROXY?v("Connection","Detected buffering proxy"):w.stat===Oo.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function vr(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(n){return new yp(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ys=e,this.timerId=t,this.po=s,this.Io=r,this.To=i,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const t=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),r=Math.max(0,t-s);r>0&&v("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,r,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,t,s,r,i,o,a,c){this.Ys=e,this.So=s,this.Do=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new Au(e,t)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(_e(t.toString()),_e("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Co===t&&this.jo(s,r)},s=>{e(()=>{const r=new m(f.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(r)})})}jo(e,t){const s=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(r=>{s(()=>this.zo(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget(()=>this.Co===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cg extends ku{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.Tt=i}Wo(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.ko.reset();const t=Ip(this.Tt,e),s=function(r){if(!("targetChange"in r))return b.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?b.min():i.readTime?fe(i.readTime):b.min()}(e);return this.listener.Ho(t,s)}Jo(e){const t={};t.database=Gr(this.Tt),t.addTarget=function(r,i){let o;const a=i.target;return o=jr(a)?{documents:_p(r,a)}:{query:bp(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=vu(r,i.resumeToken):i.snapshotVersion.compareTo(b.min())>0&&(o.readTime=hs(r,i.snapshotVersion.toTimestamp())),o}(this.Tt,e);const s=Ap(this.Tt,e);s&&(t.labels=s),this.qo(t)}Yo(e){const t={};t.database=Gr(this.Tt),t.removeTarget=e,this.qo(t)}}class ug extends ku{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.Tt=i,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(O(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const t=Tp(e.writeResults,e.commitTime),s=fe(e.commitTime);return this.listener.eu(s,t)}return O(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=Gr(this.Tt),this.qo(e)}tu(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Ep(this.Tt,s))};this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.Tt=r,this.iu=!1}ru(){if(this.iu)throw new m(f.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.lo(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new m(f.UNKNOWN,r.toString())})}mo(e,t,s,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.mo(e,t,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new m(f.UNKNOWN,i.toString())})}terminate(){this.iu=!0}}class hg{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(_e(t),this.cu=!1):v("OnlineStateTracker",t)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=i,this.yu.Gr(o=>{s.enqueueAndForget(async()=>{at(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=S(a);c.mu.add(4),await Cn(c),c.pu.set("Unknown"),c.mu.delete(4),await $s(c)}(this))})}),this.pu=new hg(s,r)}}async function $s(n){if(at(n))for(const e of n.gu)await e(!0)}async function Cn(n){for(const e of n.gu)await e(!1)}function Cu(n,e){const t=S(n);t.wu.has(e.targetId)||(t.wu.set(e.targetId,e),Bi(t)?Vi(t):Lt(t).Mo()&&Fi(t,e))}function Du(n,e){const t=S(n),s=Lt(t);t.wu.delete(e),s.Mo()&&Nu(t,e),t.wu.size===0&&(s.Mo()?s.Bo():at(t)&&t.pu.set("Unknown"))}function Fi(n,e){n.Iu.Ft(e.targetId),Lt(n).Jo(e)}function Nu(n,e){n.Iu.Ft(e),Lt(n).Yo(e)}function Vi(n){n.Iu=new fp({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>n.wu.get(e)||null}),Lt(n).start(),n.pu.au()}function Bi(n){return at(n)&&!Lt(n).Oo()&&n.wu.size>0}function at(n){return S(n).mu.size===0}function Ru(n){n.Iu=void 0}async function fg(n){n.wu.forEach((e,t)=>{Fi(n,e)})}async function pg(n,e){Ru(n),Bi(n)?(n.pu.fu(e),Vi(n)):n.pu.set("Unknown")}async function gg(n,e,t){if(n.pu.set("Online"),e instanceof yu&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.wu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.wu.delete(o),s.Iu.removeTarget(o))}(n,e)}catch(s){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await ds(n,s)}else if(e instanceof Kn?n.Iu.Qt(e):e instanceof mu?n.Iu.Zt(e):n.Iu.Wt(e),!t.isEqual(b.min()))try{const s=await Su(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.Iu.ee(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=r.wu.get(c);u&&r.wu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=r.wu.get(a);if(!c)return;r.wu.set(a,c.withResumeToken(ne.EMPTY_BYTE_STRING,c.snapshotVersion)),Nu(r,a);const u=new Ye(c.target,a,1,c.sequenceNumber);Fi(r,u)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){v("RemoteStore","Failed to raise snapshot:",s),await ds(n,s)}}async function ds(n,e,t){if(!Sn(e))throw e;n.mu.add(1),await Cn(n),n.pu.set("Offline"),t||(t=()=>Su(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.mu.delete(1),await $s(n)})}function Ou(n,e){return e().catch(t=>ds(n,t,e))}async function js(n){const e=S(n),t=Be(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;mg(e);)try{const r=await eg(e.localStore,s);if(r===null){e._u.length===0&&t.Bo();break}s=r.batchId,yg(e,r)}catch(r){await ds(e,r)}Mu(e)&&Lu(e)}function mg(n){return at(n)&&n._u.length<10}function yg(n,e){n._u.push(e);const t=Be(n);t.Mo()&&t.Xo&&t.tu(e.mutations)}function Mu(n){return at(n)&&!Be(n).Oo()&&n._u.length>0}function Lu(n){Be(n).start()}async function vg(n){Be(n).su()}async function wg(n){const e=Be(n);for(const t of n._u)e.tu(t.mutations)}async function Ig(n,e,t){const s=n._u.shift(),r=Li.from(s,e,t);await Ou(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await js(n)}async function Eg(n,e){e&&Be(n).Xo&&await async function(t,s){if(r=s.code,cp(r)&&r!==f.ABORTED){const i=t._u.shift();Be(t).$o(),await Ou(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await js(t)}var r}(n,e),Mu(n)&&Lu(n)}async function na(n,e){const t=S(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const s=at(t);t.mu.add(3),await Cn(t),s&&t.pu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.mu.delete(3),await $s(t)}async function Tg(n,e){const t=S(n);e?(t.mu.delete(2),await $s(t)):e||(t.mu.add(2),await Cn(t),t.pu.set("Unknown"))}function Lt(n){return n.Tu||(n.Tu=function(e,t,s){const r=S(e);return r.ru(),new cg(t,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(n.datastore,n.asyncQueue,{Xr:fg.bind(null,n),no:pg.bind(null,n),Ho:gg.bind(null,n)}),n.gu.push(async e=>{e?(n.Tu.$o(),Bi(n)?Vi(n):n.pu.set("Unknown")):(await n.Tu.stop(),Ru(n))})),n.Tu}function Be(n){return n.Eu||(n.Eu=function(e,t,s){const r=S(e);return r.ru(),new ug(t,r.connection,r.authCredentials,r.appCheckCredentials,r.Tt,s)}(n.datastore,n.asyncQueue,{Xr:vg.bind(null,n),no:Eg.bind(null,n),nu:wg.bind(null,n),eu:Ig.bind(null,n)}),n.gu.push(async e=>{e?(n.Eu.$o(),await js(n)):(await n.Eu.stop(),n._u.length>0&&(v("RemoteStore",`Stopping write stream with ${n._u.length} pending writes`),n._u=[]))})),n.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new Ee,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new $i(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new m(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ji(n,e){if(_e("AsyncQueue",`${e}: ${n}`),Sn(n))return new m(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.comparator=e?(t,s)=>e(t,s)||I.comparator(t.key,s.key):(t,s)=>I.comparator(t.key,s.key),this.keyedMap=qt(),this.sortedSet=new j(this.comparator)}static emptySet(e){return new mt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new mt;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this.Au=new j(I.comparator)}track(e){const t=e.doc.key,s=this.Au.get(t);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(t,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(t):e.type===1&&s.type===2?this.Au=this.Au.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):T():this.Au=this.Au.insert(t,e)}Ru(){const e=[];return this.Au.inorderTraversal((t,s)=>{e.push(s)}),e}}class At{constructor(e,t,s,r,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new At(e,t,mt.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ps(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.bu=void 0,this.listeners=[]}}class bg{constructor(){this.queries=new Mt(e=>tu(e),Ps),this.onlineState="Unknown",this.vu=new Set}}async function Pu(n,e){const t=S(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new _g),r)try{i.bu=await t.onListen(s)}catch(o){const a=ji(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.Pu(t.onlineState),i.bu&&e.Vu(i.bu)&&qi(t)}async function xu(n,e){const t=S(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function Sg(n,e){const t=S(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Vu(r)&&(s=!0);o.bu=r}}s&&qi(t)}function Ag(n,e,t){const s=S(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function qi(n){n.vu.forEach(e=>{e.next()})}class Uu{constructor(e,t,s){this.query=e,this.Su=t,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new At(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Du?this.xu(e)&&(this.Su.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.ku(e),t=!0),this.Cu=e,t}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),t=!0),t}Nu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const t=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ku(e){e=At.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(e){this.key=e}}class Vu{constructor(e){this.key=e}}class kg{constructor(e,t){this.query=e,this.Ku=t,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=k(),this.mutatedKeys=k(),this.ju=nu(e),this.zu=new mt(this.ju)}get Wu(){return this.Ku}Hu(e,t){const s=t?t.Ju:new sa,r=t?t.zu:this.zu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const c=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=xs(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),A=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;d&&g?d.data.isEqual(g.data)?w!==A&&(s.track({type:3,doc:g}),D=!0):this.Yu(d,g)||(s.track({type:2,doc:g}),D=!0,(c&&this.ju(g,c)>0||u&&this.ju(g,u)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),D=!0):d&&!g&&(s.track({type:1,doc:d}),D=!0,(c||u)&&(a=!0)),D&&(g?(o=o.add(g),i=A?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{zu:o,Ju:s,Li:a,mutatedKeys:i}}Yu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const i=e.Ju.Ru();i.sort((u,l)=>function(h,d){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return T()}};return g(h)-g(d)}(u.type,l.type)||this.ju(u.doc,l.doc)),this.Zu(s);const o=t?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,c=a!==this.Gu;return this.Gu=a,i.length!==0||c?{snapshot:new At(this.query,e.zu,r,i,e.mutatedKeys,a===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new sa,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(t=>this.Ku=this.Ku.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ku=this.Ku.delete(t)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=k(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const t=[];return e.forEach(s=>{this.Qu.has(s)||t.push(new Vu(s))}),this.Qu.forEach(s=>{e.has(s)||t.push(new Fu(s))}),t}nc(e){this.Ku=e.Yi,this.Qu=k();const t=this.Hu(e.documents);return this.applyChanges(t,!0)}sc(){return At.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Cg{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Dg{constructor(e){this.key=e,this.ic=!1}}class Ng{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new Mt(a=>tu(a),Ps),this.uc=new Map,this.cc=new Set,this.ac=new j(I.comparator),this.hc=new Map,this.lc=new Pi,this.fc={},this.dc=new Map,this._c=St.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Rg(n,e){const t=$g(n);let s,r;const i=t.oc.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.sc();else{const o=await tg(t.localStore,be(e));t.isPrimaryClient&&Cu(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Og(t,e,s,a==="current",o.resumeToken)}return r}async function Og(n,e,t,s,r){n.mc=(h,d,g)=>async function(w,A,D,Q){let V=A.view.Hu(D);V.Li&&(V=await Zo(w.localStore,A.query,!1).then(({documents:He})=>A.view.Hu(He,V)));const Ce=Q&&Q.targetChanges.get(A.targetId),ye=A.view.applyChanges(V,w.isPrimaryClient,Ce);return ia(w,A.targetId,ye.tc),ye.snapshot}(n,h,d,g);const i=await Zo(n.localStore,e,!0),o=new kg(e,i.Yi),a=o.Hu(i.documents),c=kn.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),u=o.applyChanges(a,n.isPrimaryClient,c);ia(n,t,u.tc);const l=new Cg(e,t,o);return n.oc.set(e,l),n.uc.has(t)?n.uc.get(t).push(e):n.uc.set(t,[e]),u.snapshot}async function Mg(n,e){const t=S(n),s=t.oc.get(e),r=t.uc.get(s.targetId);if(r.length>1)return t.uc.set(s.targetId,r.filter(i=>!Ps(i,e))),void t.oc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Wr(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),Du(t.remoteStore,s.targetId),Qr(t,s.targetId)}).catch(bn)):(Qr(t,s.targetId),await Wr(t.localStore,s.targetId,!0))}async function Lg(n,e,t){const s=jg(n);try{const r=await function(i,o){const a=S(i),c=B.now(),u=o.reduce((d,g)=>d.add(g.key),k());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Se(),w=k();return a.ji.getEntries(d,u).next(A=>{g=A,g.forEach((D,Q)=>{Q.isValidDocument()||(w=w.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(A=>{l=A;const D=[];for(const Q of o){const V=ip(Q,l.get(Q.key).overlayedDocument);V!=null&&D.push(new qe(Q.key,V,Zc(V.value.mapValue),ce.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,D,o)}).next(A=>{h=A;const D=A.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,A.batchId,D)})}).then(()=>({batchId:h.batchId,changes:fu(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let c=i.fc[i.currentUser.toKey()];c||(c=new j(R)),c=c.insert(o,a),i.fc[i.currentUser.toKey()]=c}(s,r.batchId,t),await Dn(s,r.changes),await js(s.remoteStore)}catch(r){const i=ji(r,"Failed to persist write");t.reject(i)}}async function Bu(n,e){const t=S(n);try{const s=await Jp(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.hc.get(i);o&&(O(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ic=!0:r.modifiedDocuments.size>0?O(o.ic):r.removedDocuments.size>0&&(O(o.ic),o.ic=!1))}),await Dn(t,s,e)}catch(s){await bn(s)}}function ra(n,e,t){const s=S(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.oc.forEach((i,o)=>{const a=o.view.Pu(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=S(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Pu(o)&&(c=!0)}),c&&qi(a)}(s.eventManager,e),r.length&&s.rc.Ho(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Pg(n,e,t){const s=S(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.hc.get(e),i=r&&r.key;if(i){let o=new j(I.comparator);o=o.insert(i,Y.newNoDocument(i,b.min()));const a=k().add(i),c=new Vs(b.min(),new Map,new $(R),o,a);await Bu(s,c),s.ac=s.ac.remove(i),s.hc.delete(e),Ki(s)}else await Wr(s.localStore,e,!1).then(()=>Qr(s,e,t)).catch(bn)}async function xg(n,e){const t=S(n),s=e.batch.batchId;try{const r=await Yp(t.localStore,e);ju(t,s,null),$u(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Dn(t,r)}catch(r){await bn(r)}}async function Ug(n,e,t){const s=S(n);try{const r=await function(i,o){const a=S(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(O(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(s.localStore,e);ju(s,e,t),$u(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Dn(s,r)}catch(r){await bn(r)}}function $u(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function ju(n,e,t){const s=S(n);let r=s.fc[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.fc[s.currentUser.toKey()]=r}}function Qr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.uc.get(e))n.oc.delete(s),t&&n.rc.gc(s,t);n.uc.delete(e),n.isPrimaryClient&&n.lc.ds(e).forEach(s=>{n.lc.containsKey(s)||qu(n,s)})}function qu(n,e){n.cc.delete(e.path.canonicalString());const t=n.ac.get(e);t!==null&&(Du(n.remoteStore,t),n.ac=n.ac.remove(e),n.hc.delete(t),Ki(n))}function ia(n,e,t){for(const s of t)s instanceof Fu?(n.lc.addReference(s.key,e),Fg(n,s)):s instanceof Vu?(v("SyncEngine","Document no longer in limbo: "+s.key),n.lc.removeReference(s.key,e),n.lc.containsKey(s.key)||qu(n,s.key)):T()}function Fg(n,e){const t=e.key,s=t.path.canonicalString();n.ac.get(t)||n.cc.has(s)||(v("SyncEngine","New document in limbo: "+t),n.cc.add(s),Ki(n))}function Ki(n){for(;n.cc.size>0&&n.ac.size<n.maxConcurrentLimboResolutions;){const e=n.cc.values().next().value;n.cc.delete(e);const t=new I(M.fromString(e)),s=n._c.next();n.hc.set(s,new Dg(t)),n.ac=n.ac.insert(t,s),Cu(n.remoteStore,new Ye(be(Ni(t.path)),s,2,Ai.at))}}async function Dn(n,e,t){const s=S(n),r=[],i=[],o=[];s.oc.isEmpty()||(s.oc.forEach((a,c)=>{o.push(s.mc(c,e,t).then(u=>{if((u||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){r.push(u);const l=Ui.Ni(c.targetId,u);i.push(l)}}))}),await Promise.all(o),s.rc.Ho(r),await async function(a,c){const u=S(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.Ci,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.xi,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Sn(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Ki.get(h),g=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(g);u.Ki=u.Ki.insert(h,w)}}}(s.localStore,i))}async function Vg(n,e){const t=S(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const s=await bu(t.localStore,e);t.currentUser=e,function(r,i){r.dc.forEach(o=>{o.forEach(a=>{a.reject(new m(f.CANCELLED,i))})}),r.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Dn(t,s.Wi)}}function Bg(n,e){const t=S(n),s=t.hc.get(e);if(s&&s.ic)return k().add(s.key);{let r=k();const i=t.uc.get(e);if(!i)return r;for(const o of i){const a=t.oc.get(o);r=r.unionWith(a.view.Wu)}return r}}function $g(n){const e=S(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Bu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Bg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Pg.bind(null,e),e.rc.Ho=Sg.bind(null,e.eventManager),e.rc.gc=Ag.bind(null,e.eventManager),e}function jg(n){const e=S(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=xg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ug.bind(null,e),e}class qg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Bs(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){return Xp(this.persistence,new Wp,e.initialUser,this.Tt)}Tc(e){return new zp(xi.qs,this.Tt)}Ic(e){return new sg}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Kg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>ra(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vg.bind(null,this.syncEngine),await Tg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bg}createDatastore(e){const t=Bs(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new ag(r));var r;return function(i,o,a,c){return new lg(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>ra(this.syncEngine,a,0),o=ta.C()?new ta:new rg,new dg(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,c,u){const l=new Ng(s,r,i,o,a,c);return u&&(l.wc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=S(e);v("RemoteStore","RemoteStore shutting down."),t.mu.add(5),await Cn(t),t.yu.shutdown(),t.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ku{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):_e("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=X.UNAUTHENTICATED,this.clientId=qc.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new m(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ee;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=ji(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function zg(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await bu(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Gg(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Wg(n);v("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>na(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>na(e.remoteStore,i)),n.onlineComponents=e}async function Wg(n){return n.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await zg(n,new qg)),n.offlineComponents}async function Hu(n){return n.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Gg(n,new Kg)),n.onlineComponents}function Qg(n){return Hu(n).then(e=>e.syncEngine)}async function zu(n){const e=await Hu(n),t=e.eventManager;return t.onListen=Rg.bind(null,e.syncEngine),t.onUnlisten=Mg.bind(null,e.syncEngine),t}function Xg(n,e,t={}){const s=new Ee;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Ku({next:h=>{i.enqueueAndForget(()=>xu(r,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new m(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new m(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Uu(Ni(o.path),u,{includeMetadataChanges:!0,Ou:!0});return Pu(r,l)}(await zu(n),n.asyncQueue,e,t,s)),s.promise}function Yg(n,e,t={}){const s=new Ee;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,c){const u=new Ku({next:h=>{i.enqueueAndForget(()=>xu(r,l)),h.fromCache&&a.source==="server"?c.reject(new m(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Uu(o,u,{includeMetadataChanges:!0,Ou:!0});return Pu(r,l)}(await zu(n),n.asyncQueue,e,t,s)),s.promise}const oa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(n,e,t){if(!t)throw new m(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Jg(n,e,t,s){if(e===!0&&s===!0)throw new m(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function aa(n){if(!I.isDocumentKey(n))throw new m(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ca(n){if(I.isDocumentKey(n))throw new m(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":T()}function le(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new m(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=qs(n);throw new m(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function Zg(n,e){if(e<=0)throw new m(f.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new m(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new m(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Jg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ua({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new m(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new m(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ua(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Ef;switch(t.type){case"gapi":const s=t.client;return new Sf(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new m(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=oa.get(e);t&&(v("ComponentProvider","Removing Datastore"),oa.delete(e),t.terminate())}(this),Promise.resolve()}}function em(n,e,t,s={}){var r;const i=(n=le(n,Ks))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Fr("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=X.MOCK_USER;else{o=Ql(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const c=s.mockUserToken.sub||s.mockUserToken.user_id;if(!c)throw new m(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new X(c)}n._authCredentials=new Tf(new jc(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ue(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new re(this.firestore,e,this._key)}}class Ke{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Ke(this.firestore,e,this._query)}}class Ue extends Ke{constructor(e,t,s){super(e,t,Ni(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new re(this.firestore,null,new I(e))}withConverter(e){return new Ue(this.firestore,e,this._path)}}function Ev(n,e,...t){if(n=G(n),Gu("collection","path",e),n instanceof Ks){const s=M.fromString(e,...t);return ca(s),new Ue(n,null,s)}{if(!(n instanceof re||n instanceof Ue))throw new m(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(M.fromString(e,...t));return ca(s),new Ue(n.firestore,null,s)}}function tm(n,e,...t){if(n=G(n),arguments.length===1&&(e=qc.R()),Gu("doc","path",e),n instanceof Ks){const s=M.fromString(e,...t);return aa(s),new re(n,null,new I(s))}{if(!(n instanceof re||n instanceof Ue))throw new m(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(M.fromString(e,...t));return aa(s),new re(n.firestore,n instanceof Ue?n.converter:null,new I(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new Au(this,"async_queue_retry"),this.Hc=()=>{const t=vr();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ko.Vo()};const e=vr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=vr();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const t=new Ee;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Sn(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const t=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw _e("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.jc=!1,s))));return this.qc=t,t}enqueueAfterDelay(e,t,s){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);const r=$i.createAndSchedule(this,e,t,s,i=>this.Xc(i));return this.Gc.push(r),r}Jc(){this.Qc&&T()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Gc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}class ct extends Ks{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new nm,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wu(this),this._firestoreClient.terminate()}}function sm(n,e){const t=typeof n=="object"?n:si(),s=typeof n=="string"?n:e||"(default)",r=ni(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=zl("firestore");i&&em(r,...i)}return r}function Hi(n){return n._firestoreClient||Wu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Wu(n){var e;const t=n._freezeSettings(),s=function(r,i,o,a){return new Pf(r,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new Hg(n._authCredentials,n._appCheckCredentials,n._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new kt(ne.fromBase64String(e))}catch(t){throw new m(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new kt(ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new m(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new J(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new m(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new m(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=/^__.*__$/;class im{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new qe(e,this.data,this.fieldMask,t,this.fieldTransforms):new An(e,this.data,t,this.fieldTransforms)}}class Qu{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new qe(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Xu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class Wi{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.Tt=s,this.ignoreUndefinedProperties=r,i===void 0&&this.ia(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new Wi(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.oa({path:s,ca:!1});return r.aa(e),r}ha(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.oa({path:s,ca:!1});return r.ia(),r}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return fs(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Xu(this.ra)&&rm.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class om{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.Tt=s||Bs(e)}wa(e,t,s,r=!1){return new Wi({ra:e,methodName:t,_a:s,path:J.emptyPath(),ca:!1,da:r},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function zs(n){const e=n._freezeSettings(),t=Bs(n._databaseId);return new om(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Yu(n,e,t,s,r,i={}){const o=n.wa(i.merge||i.mergeFields?2:0,e,t,r);Qi("Data must be an object, but it was:",o,s);const a=Ju(s,o);let c,u;if(i.merge)c=new oe(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Xr(e,h,t);if(!o.contains(d))throw new m(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);el(l,d)||l.push(d)}c=new oe(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new im(new ie(a),c,u)}class Gs extends zi{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Gs}}function am(n,e,t,s){const r=n.wa(1,e,t);Qi("Data must be an object, but it was:",r,s);const i=[],o=ie.empty();ot(s,(c,u)=>{const l=Xi(e,c,t);u=G(u);const h=r.ha(l);if(u instanceof Gs)i.push(l);else{const d=Nn(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new oe(i);return new Qu(o,a,r.fieldTransforms)}function cm(n,e,t,s,r,i){const o=n.wa(1,e,t),a=[Xr(e,s,t)],c=[r];if(i.length%2!=0)throw new m(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Xr(e,i[d])),c.push(i[d+1]);const u=[],l=ie.empty();for(let d=a.length-1;d>=0;--d)if(!el(u,a[d])){const g=a[d];let w=c[d];w=G(w);const A=o.ha(g);if(w instanceof Gs)u.push(g);else{const D=Nn(w,A);D!=null&&(u.push(g),l.set(g,D))}}const h=new oe(u);return new Qu(l,h,o.fieldTransforms)}function um(n,e,t,s=!1){return Nn(t,n.wa(s?4:3,e))}function Nn(n,e){if(Zu(n=G(n)))return Qi("Unsupported field value:",e,n),Ju(n,e);if(n instanceof zi)return function(t,s){if(!Xu(s.ra))throw s.fa(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=Nn(o,s.la(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=G(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Zf(s.Tt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=B.fromDate(t);return{timestampValue:hs(s.Tt,r)}}if(t instanceof B){const r=new B(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:hs(s.Tt,r)}}if(t instanceof Gi)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof kt)return{bytesValue:vu(s.Tt,t._byteString)};if(t instanceof re){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.fa(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Mi(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.fa(`Unsupported field value: ${qs(t)}`)}(n,e)}function Ju(n,e){const t={};return Kc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ot(n,(s,r)=>{const i=Nn(r,e.ua(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function Zu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof B||n instanceof Gi||n instanceof kt||n instanceof re||n instanceof zi)}function Qi(n,e,t){if(!Zu(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=qs(t);throw s==="an object"?e.fa(n+" a custom object"):e.fa(n+" "+s)}}function Xr(n,e,t){if((e=G(e))instanceof Hs)return e._internalPath;if(typeof e=="string")return Xi(n,e);throw fs("Field path arguments must be of type string or ",n,!1,void 0,t)}const lm=new RegExp("[~\\*/\\[\\]]");function Xi(n,e,t){if(e.search(lm)>=0)throw fs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Hs(...e.split("."))._internalPath}catch{throw fs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function fs(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${s}`),o&&(c+=` in document ${r}`),c+=")"),new m(f.INVALID_ARGUMENT,a+n+c)}function el(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new re(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new hm(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ws("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class hm extends tl{data(){return super.data()}}function Ws(n,e){return typeof e=="string"?Xi(n,e):e instanceof Hs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new m(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yi{}class Ji extends Yi{}function Tv(n,e,...t){let s=[];e instanceof Yi&&s.push(e),s=s.concat(t),function(r){const i=r.filter(a=>a instanceof Zi).length,o=r.filter(a=>a instanceof Qs).length;if(i>1||i>0&&o>0)throw new m(f.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class Qs extends Ji{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new Qs(e,t,s)}_apply(e){const t=this._parse(e);return nl(e._query,t),new Ke(e.firestore,e.converter,qr(e._query,t))}_parse(e){const t=zs(e.firestore);return function(r,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new m(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){ha(l,u);const d=[];for(const g of l)d.push(la(a,r,g));h={arrayValue:{values:d}}}else h=la(a,r,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||ha(l,u),h=um(o,i,l,u==="in"||u==="not-in");return F.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function _v(n,e,t){const s=e,r=Ws("where",n);return Qs._create(r,s,t)}class Zi extends Yi{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Zi(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:ue.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)nl(i,a),i=qr(i,a)}(e._query,t),new Ke(e.firestore,e.converter,qr(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class eo extends Ji{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new eo(e,t)}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new m(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new m(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new pt(r,i);return function(a,c){if(Ri(a)===null){const u=Ls(a);u!==null&&sl(a,u,c.field)}}(s,o),o}(e._query,this._field,this._direction);return new Ke(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Ot(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function bv(n,e="asc"){const t=e,s=Ws("orderBy",n);return eo._create(s,t)}class to extends Ji{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new to(e,t,s)}_apply(e){return new Ke(e.firestore,e.converter,cs(e._query,this._limit,this._limitType))}}function Sv(n){return Zg("limit",n),to._create("limit",n,"F")}function la(n,e,t){if(typeof(t=G(t))=="string"){if(t==="")throw new m(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!eu(e)&&t.indexOf("/")!==-1)throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(M.fromString(t));if(!I.isDocumentKey(s))throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return Uo(n,new I(s))}if(t instanceof re)return Uo(n,t._key);throw new m(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${qs(t)}.`)}function ha(n,e){if(!Array.isArray(n)||n.length===0)throw new m(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function nl(n,e){if(e.isInequality()){const s=Ls(n),r=e.field;if(s!==null&&!s.isEqual(r))throw new m(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=Ri(n);i!==null&&sl(n,r,i)}const t=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new m(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new m(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function sl(n,e,t){if(!t.isEqual(e))throw new m(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class fm{convertValue(e,t="none"){switch(st(e)){case 0:return null;case 1:return e.booleanValue;case 2:return U(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Tt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw T()}}convertObject(e,t){const s={};return ot(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new Gi(U(e.latitude),U(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=zc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(rn(e));default:return null}}convertTimestamp(e){const t=Ve(e);return new B(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=M.fromString(e);O(_u(s));const r=new sn(s.get(1),s.get(3)),i=new I(s.popFirst(5));return r.isEqual(t)||_e(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rl(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class il extends tl{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Hn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ws("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Hn extends il{data(e={}){return super.data(e)}}class pm{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new Kt(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Hn(this._firestore,this._userDataWriter,s.key,s,new Kt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new m(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Hn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Kt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Hn(s._firestore,s._userDataWriter,o.doc.key,o.doc,new Kt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:gm(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function gm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return T()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(n){n=le(n,re);const e=le(n.firestore,ct);return Xg(Hi(e),n._key).then(t=>mm(e,n,t))}class ol extends fm{constructor(e){super(),this.firestore=e}convertBytes(e){return new kt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new re(this.firestore,null,t)}}function kv(n){n=le(n,Ke);const e=le(n.firestore,ct),t=Hi(e),s=new ol(e);return dm(n._query),Yg(t,n._query).then(r=>new pm(e,s,n,r))}function Cv(n,e,t){n=le(n,re);const s=le(n.firestore,ct),r=rl(n.converter,e,t);return Xs(s,[Yu(zs(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,ce.none())])}function Dv(n,e,t,...s){n=le(n,re);const r=le(n.firestore,ct),i=zs(r);let o;return o=typeof(e=G(e))=="string"||e instanceof Hs?cm(i,"updateDoc",n._key,e,t,s):am(i,"updateDoc",n._key,e),Xs(r,[o.toMutation(n._key,ce.exists(!0))])}function Nv(n){return Xs(le(n.firestore,ct),[new Oi(n._key,ce.none())])}function Rv(n,e){const t=le(n.firestore,ct),s=tm(n),r=rl(n.converter,e);return Xs(t,[Yu(zs(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,ce.exists(!1))]).then(()=>s)}function Xs(n,e){return function(t,s){const r=new Ee;return t.asyncQueue.enqueueAndForget(async()=>Lg(await Qg(t),s,r)),r.promise}(Hi(n),e)}function mm(n,e,t){const s=t.docs.get(e._key),r=new ol(n);return new il(n,r,e._key,s,new Kt(t.hasPendingWrites,t.fromCache),e.converter)}(function(n,e=!0){(function(t){Rt=t})(pn),wt(new Ze("firestore",(t,{instanceIdentifier:s,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new ct(new _f(t.getProvider("auth-internal")),new kf(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new m(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sn(a.options.projectId,c)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),xe(Mo,"3.8.4",n),xe(Mo,"3.8.4","esm2017")})();function no(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(n);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(n,s[r])&&(t[s[r]]=n[s[r]]);return t}function al(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ym=al,cl=new dn("auth","Firebase",al());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new ei("@firebase/auth");function zn(n,...e){da.logLevel<=N.ERROR&&da.error(`Auth (${pn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(n,...e){throw so(n,...e)}function pe(n,...e){return so(n,...e)}function vm(n,e,t){const s=Object.assign(Object.assign({},ym()),{[e]:t});return new dn("auth","Firebase",s).create(e,{appName:n.name})}function so(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return cl.create(n,...e)}function E(n,e,...t){if(!n)throw so(e,...t)}function we(n){const e="INTERNAL ASSERTION FAILED: "+n;throw zn(e),new Error(e)}function Ae(n,e){n||we(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Map;function Ie(n){Ae(n instanceof Function,"Expected a class definition");let e=fa.get(n);return e?(Ae(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,fa.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n,e){const t=ni(n,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(Yn(i,e??{}))return r;he(r,"already-initialized")}return t.initialize({options:e})}function Im(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Ie);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Em(){return pa()==="http:"||pa()==="https:"}function pa(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Em()||Yl()||"connection"in navigator)?navigator.onLine:!0}function _m(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ae(t>e,"Short delay should be less than long delay!"),this.isMobile=Xl()||Jl()}get(){return Tm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n,e){Ae(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;we("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;we("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;we("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Rn(3e4,6e4);function Ys(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function On(n,e,t,s,r={}){return ll(n,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=fn(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),ul.fetch()(hl(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function ll(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},bm),e);try{const r=new Am(n),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $n(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $n(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $n(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw $n(n,"user-disabled",o);const l=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw vm(n,l,u);he(n,l)}}catch(r){if(r instanceof ke)throw r;he(n,"internal-error",{message:String(r)})}}async function Js(n,e,t,s,r={}){const i=await On(n,e,t,s,r);return"mfaPendingCredential"in i&&he(n,"multi-factor-auth-required",{_serverResponse:i}),i}function hl(n,e,t,s){const r=`${e}${t}?${s}`;return n.config.emulator?ro(n.config,r):`${n.config.apiScheme}://${r}`}class Am{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(pe(this.auth,"network-request-failed")),Sm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $n(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const r=pe(n,e,s);return r.customData._tokenResponse=t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function km(n,e){return On(n,"POST","/v1/accounts:delete",e)}async function Cm(n,e){return On(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Dm(n,e=!1){const t=G(n),s=await t.getIdToken(e),r=io(s);E(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:Qt(wr(r.auth_time)),issuedAtTime:Qt(wr(r.iat)),expirationTime:Qt(wr(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wr(n){return Number(n)*1e3}function io(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return zn("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ma(t);return r?JSON.parse(r):(zn("Failed to decode base64 JWT payload"),null)}catch(r){return zn("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Nm(n){const e=io(n);return E(e,"internal-error"),E(typeof e.exp<"u","internal-error"),E(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof ke&&Rm(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Rm({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qt(this.lastLoginAt),this.creationTime=Qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(n){var e;const t=n.auth,s=await n.getIdToken(),r=await un(n,Cm(t,{idToken:s}));E(r==null?void 0:r.users.length,t,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Pm(i.providerUserInfo):[],a=Lm(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dl(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function Mm(n){const e=G(n);await ps(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Lm(n,e){return[...n.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function Pm(n){return n.map(e=>{var{providerId:t}=e,s=no(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xm(n,e){const t=await ll(n,{},async()=>{const s=fn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=n.config,o=hl(n,r,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ul.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){E(e.idToken,"internal-error"),E(typeof e.idToken<"u","internal-error"),E(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return E(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:r,expiresIn:i}=await xm(e,t);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:r,expirationTime:i}=t,o=new ln;return s&&(E(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(E(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(E(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ln,this.toJSON())}_performRefresh(){return we("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(n,e){E(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Je{constructor(e){var{uid:t,auth:s,stsTokenManager:r}=e,i=no(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Om(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await un(this,this.stsTokenManager.getToken(this.auth,e));return E(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Dm(this,e)}reload(){return Mm(this)}_assign(e){this!==e&&(E(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Je(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){E(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await ps(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await un(this,km(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,r,i,o,a,c,u,l;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(r=t.email)!==null&&r!==void 0?r:void 0,g=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,w=(o=t.photoURL)!==null&&o!==void 0?o:void 0,A=(a=t.tenantId)!==null&&a!==void 0?a:void 0,D=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,Q=(u=t.createdAt)!==null&&u!==void 0?u:void 0,V=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:Ce,emailVerified:ye,isAnonymous:He,providerData:xt,stsTokenManager:Ut}=t;E(Ce&&Ut,e,"internal-error");const xl=ln.fromJSON(this.name,Ut);E(typeof Ce=="string",e,"internal-error"),De(h,e.name),De(d,e.name),E(typeof ye=="boolean",e,"internal-error"),E(typeof He=="boolean",e,"internal-error"),De(g,e.name),De(w,e.name),De(A,e.name),De(D,e.name),De(Q,e.name),De(V,e.name);const sr=new Je({uid:Ce,auth:e,email:d,emailVerified:ye,displayName:h,isAnonymous:He,photoURL:w,phoneNumber:g,tenantId:A,stsTokenManager:xl,createdAt:Q,lastLoginAt:V});return xt&&Array.isArray(xt)&&(sr.providerData=xt.map(Ul=>Object.assign({},Ul))),D&&(sr._redirectEventId=D),sr}static async _fromIdTokenResponse(e,t,s=!1){const r=new ln;r.updateFromServerResponse(t);const i=new Je({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await ps(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fl.type="NONE";const ga=fl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(n,e,t){return`firebase:${n}:${e}:${t}`}class yt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Gn(this.userKey,r.apiKey,i),this.fullPersistenceKey=Gn("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Je._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new yt(Ie(ga),e,s);const r=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||Ie(ga);const o=Gn(s,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=Je._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new yt(i,e,s):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new yt(i,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ml(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(pl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(vl(e))return"Blackberry";if(wl(e))return"Webos";if(oo(e))return"Safari";if((e.includes("chrome/")||gl(e))&&!e.includes("edge/"))return"Chrome";if(yl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function pl(n=te()){return/firefox\//i.test(n)}function oo(n=te()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function gl(n=te()){return/crios\//i.test(n)}function ml(n=te()){return/iemobile/i.test(n)}function yl(n=te()){return/android/i.test(n)}function vl(n=te()){return/blackberry/i.test(n)}function wl(n=te()){return/webos/i.test(n)}function Zs(n=te()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Um(n=te()){var e;return Zs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Fm(){return Zl()&&document.documentMode===10}function Il(n=te()){return Zs(n)||yl(n)||wl(n)||vl(n)||/windows phone/i.test(n)||ml(n)}function Vm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function El(n,e=[]){let t;switch(n){case"Browser":t=ma(te());break;case"Worker":t=`${ma(te())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${pn}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});s.onAbort=t,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ya(this),this.idTokenSubscription=new ya(this),this.beforeStateQueue=new Bm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=cl,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ie(t)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await yt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=r==null?void 0:r._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(r=c.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return E(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ps(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_m()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?G(e):null;return t&&E(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&E(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ie(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dn("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ie(e)||this._popupRedirectResolver;E(t,this,"argument-error"),this.redirectPersistenceManager=await yt.create(this,[Ie(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return E(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,s,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return E(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=El(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function er(n){return G(n)}class ya{constructor(e){this.auth=e,this.observer=null,this.addObserver=oh(t=>this.observer=t)}get next(){return E(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function jm(n,e,t){const s=er(n);E(s._canInitEmulator,s,"emulator-config-failed"),E(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const r=!!(t!=null&&t.disableWarnings),i=Tl(e),{host:o,port:a}=qm(e),c=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Km()}function Tl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qm(n){const e=Tl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(s);if(r){const i=r[1];return{host:i,port:va(s.substr(i.length+1))}}else{const[i,o]=s.split(":");return{host:i,port:va(o)}}}function va(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Km(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return we("not implemented")}_getIdTokenResponse(e){return we("not implemented")}_linkToIdToken(e,t){return we("not implemented")}_getReauthenticationResolver(e){return we("not implemented")}}async function Hm(n,e){return On(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zm(n,e){return Js(n,"POST","/v1/accounts:signInWithPassword",Ys(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(n,e){return Js(n,"POST","/v1/accounts:signInWithEmailLink",Ys(n,e))}async function Wm(n,e){return Js(n,"POST","/v1/accounts:signInWithEmailLink",Ys(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn extends ao{constructor(e,t,s,r=null){super("password",s),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new hn(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new hn(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return zm(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Gm(e,{email:this._email,oobCode:this._password});default:he(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Hm(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Wm(e,{idToken:t,email:this._email,oobCode:this._password});default:he(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(n,e){return Js(n,"POST","/v1/accounts:signInWithIdp",Ys(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qm="http://localhost";class rt extends ao{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new rt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):he("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=t,i=no(t,["providerId","signInMethod"]);if(!s||!r)return null;const o=new rt(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return vt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,vt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,vt(e,t)}buildRequest(){const e={requestUri:Qm,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fn(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ym(n){const e=Vt(Bt(n)).link,t=e?Vt(Bt(e)).deep_link_id:null,s=Vt(Bt(n)).deep_link_id;return(s?Vt(Bt(s)).link:null)||s||t||e||n}class co{constructor(e){var t,s,r,i,o,a;const c=Vt(Bt(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(s=c.oobCode)!==null&&s!==void 0?s:null,h=Xm((r=c.mode)!==null&&r!==void 0?r:null);E(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Ym(e);try{return new co(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.providerId=Pt.PROVIDER_ID}static credential(e,t){return hn._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=co.parseLink(t);return E(s,"argument-error"),hn._fromEmailAndCode(e,s.code,s.tenantId)}}Pt.PROVIDER_ID="password";Pt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Pt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends _l{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Mn{constructor(){super("facebook.com")}static credential(e){return rt._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Mn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return rt._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Re.credential(t,s)}catch{return null}}}Re.GOOGLE_SIGN_IN_METHOD="google.com";Re.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Mn{constructor(){super("github.com")}static credential(e){return rt._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Oe.credential(e.oauthAccessToken)}catch{return null}}}Oe.GITHUB_SIGN_IN_METHOD="github.com";Oe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends Mn{constructor(){super("twitter.com")}static credential(e,t){return rt._fromParams({providerId:Me.PROVIDER_ID,signInMethod:Me.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Me.credentialFromTaggedObject(e)}static credentialFromError(e){return Me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Me.credential(t,s)}catch{return null}}}Me.TWITTER_SIGN_IN_METHOD="twitter.com";Me.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,r=!1){const i=await Je._fromIdTokenResponse(e,s,r),o=wa(s);return new Ct({user:i,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const r=wa(s);return new Ct({user:e,providerId:r,_tokenResponse:s,operationType:t})}}function wa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs extends ke{constructor(e,t,s,r){var i;super(t.code,t.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,gs.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,r){return new gs(e,t,s,r)}}function bl(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?gs._fromErrorAndOperation(n,i,e,s):i})}async function Jm(n,e,t=!1){const s=await un(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ct._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(n,e,t=!1){const{auth:s}=n,r="reauthenticate";try{const i=await un(n,bl(s,r,e,n),t);E(i.idToken,s,"internal-error");const o=io(i.idToken);E(o,s,"internal-error");const{sub:a}=o;return E(n.uid===a,s,"user-mismatch"),Ct._forOperation(n,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&he(s,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sl(n,e,t=!1){const s="signIn",r=await bl(n,s,e),i=await Ct._fromIdTokenResponse(n,s,r);return t||await n._updateCurrentUser(i.user),i}async function ey(n,e){return Sl(er(n),e)}function ty(n,e,t){return ey(G(n),Pt.credential(e,t))}function ny(n,e,t,s){return G(n).onIdTokenChanged(e,t,s)}function sy(n,e,t){return G(n).beforeAuthStateChanged(e,t)}function ry(n){return G(n).signOut()}const ms="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ms,"1"),this.storage.removeItem(ms),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(){const n=te();return oo(n)||Zs(n)}const oy=1e3,ay=10;class kl extends Al{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=iy()&&Vm(),this.fallbackToPolling=Il(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),r=this.localCache[t];s!==r&&e(t,r,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const r=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);Fm()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ay):r()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},oy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}kl.type="LOCAL";const cy=kl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl extends Al{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Cl.type="SESSION";const Dl=Cl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const s=new tr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await uy(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}tr.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=uo("",20);r.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(){return window}function hy(n){ge().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return typeof ge().WorkerGlobalScope<"u"&&typeof ge().importScripts=="function"}async function dy(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fy(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function py(){return Nl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl="firebaseLocalStorageDb",gy=1,ys="firebaseLocalStorage",Ol="fbase_key";class Ln{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function nr(n,e){return n.transaction([ys],e?"readwrite":"readonly").objectStore(ys)}function my(){const n=indexedDB.deleteDatabase(Rl);return new Ln(n).toPromise()}function Jr(){const n=indexedDB.open(Rl,gy);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(ys,{keyPath:Ol})}catch(r){t(r)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(ys)?e(s):(s.close(),await my(),e(await Jr()))})})}async function Ia(n,e,t){const s=nr(n,!0).put({[Ol]:e,value:t});return new Ln(s).toPromise()}async function yy(n,e){const t=nr(n,!1).get(e),s=await new Ln(t).toPromise();return s===void 0?null:s.value}function Ea(n,e){const t=nr(n,!0).delete(e);return new Ln(t).toPromise()}const vy=800,wy=3;class Ml{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Jr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>wy)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Nl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=tr._getInstance(py()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await dy(),!this.activeServiceWorker)return;this.sender=new ly(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fy()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jr();return await Ia(e,ms,"1"),await Ea(e,ms),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ia(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>yy(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ea(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=nr(r,!1).getAll();return new Ln(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vy)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ml.type="LOCAL";const Iy=Ml;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Ty(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=r=>{const i=pe("internal-error");i.customData=r,t(i)},s.type="text/javascript",s.charset="UTF-8",Ey().appendChild(s)})}function _y(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Rn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(n,e){return e?Ie(e):(E(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends ao{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return vt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sy(n){return Sl(n.auth,new lo(n),n.bypassAuthState)}function Ay(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Zm(t,new lo(n),n.bypassAuthState)}async function ky(n){const{auth:e,user:t}=n;return E(t,e,"internal-error"),Jm(t,new lo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sy;case"linkViaPopup":case"linkViaRedirect":return ky;case"reauthViaPopup":case"reauthViaRedirect":return Ay;default:he(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy=new Rn(2e3,1e4);class dt extends Ll{constructor(e,t,s,r,i){super(e,t,r,i),this.provider=s,this.authWindow=null,this.pollId=null,dt.currentPopupAction&&dt.currentPopupAction.cancel(),dt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return E(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=uo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Cy.get())};e()}}dt.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy="pendingRedirect",Wn=new Map;class Ny extends Ll{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Wn.get(this.auth._key());if(!e){try{const s=await Ry(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Wn.set(this.auth._key(),e)}return this.bypassAuthState||Wn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Ry(n,e){const t=Ly(e),s=My(n);if(!await s._isAvailable())return!1;const r=await s._get(t)==="true";return await s._remove(t),r}function Oy(n,e){Wn.set(n._key(),e)}function My(n){return Ie(n._redirectPersistence)}function Ly(n){return Gn(Dy,n.config.apiKey,n.name)}async function Py(n,e,t=!1){const s=er(n),r=by(s,e),o=await new Ny(s,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xy=10*60*1e3;class Uy{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Fy(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Pl(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(pe(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xy&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ta(e))}saveEventToCache(e){this.cachedEventUids.add(Ta(e)),this.lastProcessedEventTime=Date.now()}}function Ta(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Pl({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Fy(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vy(n,e={}){return On(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const By=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$y=/^https?/;async function jy(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Vy(n);for(const t of e)try{if(qy(t))return}catch{}he(n,"unauthorized-domain")}function qy(n){const e=Yr(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!$y.test(t))return!1;if(By.test(n))return s===n;const r=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky=new Rn(3e4,6e4);function _a(){const n=ge().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Hy(n){return new Promise((e,t)=>{var s,r,i;function o(){_a(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{_a(),t(pe(n,"network-request-failed"))},timeout:Ky.get()})}if(!((r=(s=ge().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=ge().gapi)===null||i===void 0)&&i.load)o();else{const a=_y("iframefcb");return ge()[a]=()=>{gapi.load?o():t(pe(n,"network-request-failed"))},Ty(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw Qn=null,e})}let Qn=null;function zy(n){return Qn=Qn||Hy(n),Qn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gy=new Rn(5e3,15e3),Wy="__/auth/iframe",Qy="emulator/auth/iframe",Xy={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Yy=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jy(n){const e=n.config;E(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ro(e,Qy):`https://${n.config.authDomain}/${Wy}`,s={apiKey:e.apiKey,appName:n.name,v:pn},r=Yy.get(n.config.apiHost);r&&(s.eid=r);const i=n._getFrameworks();return i.length&&(s.fw=i.join(",")),`${t}?${fn(s).slice(1)}`}async function Zy(n){const e=await zy(n),t=ge().gapi;return E(t,n,"internal-error"),e.open({where:document.body,url:Jy(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Xy,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=pe(n,"network-request-failed"),a=ge().setTimeout(()=>{i(o)},Gy.get());function c(){ge().clearTimeout(a),r(s)}s.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ev={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},tv=500,nv=600,sv="_blank",rv="http://localhost";class ba{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iv(n,e,t,s=tv,r=nv){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const c=Object.assign(Object.assign({},ev),{width:s.toString(),height:r.toString(),top:i,left:o}),u=te().toLowerCase();t&&(a=gl(u)?sv:t),pl(u)&&(e=e||rv,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[g,w])=>`${d}${g}=${w},`,"");if(Um(u)&&a!=="_self")return ov(e||"",a),new ba(null);const h=window.open(e||"",a,l);E(h,n,"popup-blocked");try{h.focus()}catch{}return new ba(h)}function ov(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av="__/auth/handler",cv="emulator/auth/handler";function Sa(n,e,t,s,r,i){E(n.config.authDomain,n,"auth-domain-config-required"),E(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:pn,eventId:r};if(e instanceof _l){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",ih(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Mn){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${uv(n)}?${fn(a).slice(1)}`}function uv({config:n}){return n.emulator?ro(n,cv):`https://${n.authDomain}/${av}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="webStorageSupport";class lv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dl,this._completeRedirectFn=Py,this._overrideRedirectResult=Oy}async _openPopup(e,t,s,r){var i;Ae((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Sa(e,t,s,Yr(),r);return iv(e,o,uo())}async _openRedirect(e,t,s,r){return await this._originValidation(e),hy(Sa(e,t,s,Yr(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Ae(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Zy(e),s=new Uy(e);return t.register("authEvent",r=>(E(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ir,{type:Ir},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ir];o!==void 0&&t(!!o),he(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=jy(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Il()||oo()||Zs()}}const hv=lv;var Aa="@firebase/auth",ka="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){E(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function pv(n){wt(new Ze("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=s.options;return((a,c)=>{E(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),E(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:El(n)},l=new $m(a,c,u);return Im(l,t),l})(s,r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),wt(new Ze("auth-internal",e=>{const t=er(e.getProvider("auth").getImmediate());return(s=>new dv(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),xe(Aa,ka,fv(n)),xe(Aa,ka,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gv=5*60,mv=Pa("authIdTokenMaxAge")||gv;let Ca=null;const yv=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>mv)return;const r=t==null?void 0:t.token;Ca!==r&&(Ca=r,await fetch(n,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function vv(n=si()){const e=ni(n,"auth");if(e.isInitialized())return e.getImmediate();const t=wm(n,{popupRedirectResolver:hv,persistence:[Iy,cy,Dl]}),s=Pa("authTokenSyncURL");if(s){const i=yv(s);sy(t,i,()=>i(t.currentUser)),ny(t,o=>i(o))}const r=La("auth");return r&&jm(t,`http://${r}`),t}pv("Browser");const Da={apiKey:"AIzaSyCaC7Ve9AzjcqYOt-Q8h3g_D2fek7wdy7k",authDomain:"bachelorprosjekt2023-9f51f.firebaseapp.com",projectId:"bachelorprosjekt2023-9f51f",storageBucket:"bachelorprosjekt2023-9f51f.appspot.com",messagingSenderId:"831956904877",appId:"1:831956904877:web:cecd5309b6fae011f00f24"};let ft;id().length&&(ft=si(),od(ft)),ft=Ar(Da);const Ov=sm(ft),Na=vv(ft),Mv=Fl({user:null,loading:!0,data:{}}),Lv={login:async(n,e)=>{await ty(Na,n,e)},logout:async()=>{await ry(Na)}};export{Cv as J,Av as K,Rv as X,Dv as Y,tm as Z,Na as a,Mv as b,Lv as c,Ov as d,Ev as e,_v as f,vv as g,bv as h,Nv as i,B as n,Tv as o,sm as u,Sv as w,kv as z};
