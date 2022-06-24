var _=Object.defineProperty,ee=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var N=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,le=Object.prototype.propertyIsEnumerable;var T=(e,a,n)=>a in e?_(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,$=(e,a)=>{for(var n in a||(a={}))ne.call(a,n)&&T(e,n,a[n]);if(N)for(var n of N(a))le.call(a,n)&&T(e,n,a[n]);return e},A=(e,a)=>ee(e,ae(a));import{aX as oe,aY as se,ar as U,T as B,N as te,U as ie,H as h,aW as R,r as E,aQ as S,I as G,aZ as ue,$ as P,K as j,au as K,a_ as Q,d as V,J as D,Q as z,i as p,a5 as re,w as de,k as M,P as f,aE as I,a$ as L,j as g,O as w,Z as be,q as W,aa as Z,a8 as F,a7 as ce,a6 as me,L as ve,M as fe,aG as he,ab as pe,ac as q}from"./index.e442f220.js";const k=new Map;let O;oe&&(document.addEventListener("mousedown",e=>O=e),document.addEventListener("mouseup",e=>{for(const a of k.values())for(const{documentHandler:n}of a)n(e,O)}));function H(e,a){let n=[];return Array.isArray(a.arg)?n=a.arg:se(a.arg)&&n.push(a.arg),function(t,i){const u=a.instance.popperRef,l=t.target,b=i==null?void 0:i.target,s=!a||!a.instance,r=!l||!b,o=e.contains(l)||e.contains(b),m=e===l,d=n.length&&n.some(v=>v==null?void 0:v.contains(l))||n.length&&n.includes(b),c=u&&(u.contains(l)||u.contains(b));s||r||o||m||d||c||a.value(t,i)}}const Oe={beforeMount(e,a){k.has(e)||k.set(e,[]),k.get(e).push({documentHandler:H(e,a),bindingFn:a.value})},updated(e,a){k.has(e)||k.set(e,[]);const n=k.get(e),t=n.findIndex(u=>u.bindingFn===a.oldValue),i={documentHandler:H(e,a),bindingFn:a.value};t>=0?n.splice(t,1,i):n.push(i)},unmounted(e){k.delete(e)}},ke={modelValue:{type:Array,default:()=>[]},disabled:Boolean,min:{type:Number,default:void 0},max:{type:Number,default:void 0},size:{type:String,validator:U},id:{type:String,default:void 0},label:{type:String,default:void 0},fill:{type:String,default:void 0},textColor:{type:String,default:void 0},tag:{type:String,default:"div"}},J={modelValue:{type:[Number,String,Boolean],default:()=>{}},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:{type:String,validator:U},tabindex:[String,Number]},y=()=>{const e=B(te,{}),a=B(ie,{}),n=B("CheckboxGroup",{}),t=h(()=>n&&(n==null?void 0:n.name)==="ElCheckboxGroup"),i=h(()=>a.size);return{isGroup:t,checkboxGroup:n,elForm:e,elFormItemSize:i,elFormItem:a}},ge=(e,{elFormItem:a})=>{const{inputId:n,isLabeledByFormItem:t}=R(e,{formItemContext:a});return{isLabeledByFormItem:t,groupId:n}},Ce=e=>{const a=E(!1),{emit:n}=Q(),{isGroup:t,checkboxGroup:i,elFormItem:u}=y(),l=E(!1);return{model:h({get(){var s,r;return t.value?(s=i.modelValue)==null?void 0:s.value:(r=e.modelValue)!=null?r:a.value},set(s){var r;t.value&&Array.isArray(s)?(l.value=i.max!==void 0&&s.length>i.max.value,l.value===!1&&((r=i==null?void 0:i.changeEvent)==null||r.call(i,s))):(n(S,s),a.value=s)}}),isGroup:t,isLimitExceeded:l,elFormItem:u}},ye=(e,a,{model:n})=>{const{isGroup:t,checkboxGroup:i}=y(),u=E(!1),l=G(i==null?void 0:i.checkboxGroupSize,{prop:!0}),b=h(()=>{const o=n.value;return ue(o)==="[object Boolean]"?o:Array.isArray(o)?o.includes(e.label):o!=null?o===e.trueLabel:!!o}),s=G(h(()=>{var o;return t.value?(o=i==null?void 0:i.checkboxGroupSize)==null?void 0:o.value:void 0})),r=h(()=>!!(a.default||e.label));return{isChecked:b,focus:u,size:l,checkboxSize:s,hasOwnLabel:r}},Se=(e,{model:a,isChecked:n})=>{const{elForm:t,isGroup:i,checkboxGroup:u}=y(),l=h(()=>{var s,r;const o=(s=u.max)==null?void 0:s.value,m=(r=u.min)==null?void 0:r.value;return!!(o||m)&&a.value.length>=o&&!n.value||a.value.length<=m&&n.value});return{isDisabled:h(()=>{var s,r;const o=e.disabled||(t==null?void 0:t.disabled);return(r=i.value?((s=u.disabled)==null?void 0:s.value)||o||l.value:o)!=null?r:!1}),isLimitDisabled:l}},Ie=(e,{model:a})=>{function n(){Array.isArray(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&n()},Le=(e,{model:a,isLimitExceeded:n,hasOwnLabel:t,isDisabled:i,isLabeledByFormItem:u})=>{const{elFormItem:l}=y(),{emit:b}=Q();function s(d){var c,v;return d===e.trueLabel||d===!0?(c=e.trueLabel)!=null?c:!0:(v=e.falseLabel)!=null?v:!1}function r(d,c){b("change",s(d),c)}function o(d){if(n.value)return;const c=d.target;b("change",s(c.checked),d)}async function m(d){n.value||!t.value&&!i.value&&u.value&&(a.value=s([!1,e.falseLabel].includes(a.value)),await P(),r(a.value,d))}return j(()=>e.modelValue,()=>{var d;(d=l==null?void 0:l.validate)==null||d.call(l,"change").catch(c=>K())}),{handleChange:o,onClickRoot:m}},X=(e,a)=>{const{model:n,isGroup:t,isLimitExceeded:i,elFormItem:u}=Ce(e),{focus:l,size:b,isChecked:s,checkboxSize:r,hasOwnLabel:o}=ye(e,a,{model:n}),{isDisabled:m}=Se(e,{model:n,isChecked:s}),{inputId:d,isLabeledByFormItem:c}=R(e,{formItemContext:u,disableIdGeneration:o,disableIdManagement:t}),{handleChange:v,onClickRoot:C}=Le(e,{model:n,isLimitExceeded:i,hasOwnLabel:o,isDisabled:m,isLabeledByFormItem:c});return Ie(e,{model:n}),{elFormItem:u,inputId:d,isLabeledByFormItem:c,isChecked:s,isDisabled:m,isGroup:t,checkboxSize:r,hasOwnLabel:o,model:n,handleChange:v,onClickRoot:C,focus:l,size:b}},$e=V({name:"ElCheckbox",props:J,emits:[S,"change"],setup(e,{slots:a}){const n=D("checkbox");return $({ns:n},X(e,a))}}),Be=["tabindex","role","aria-checked"],Ee=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],Ge=["id","aria-hidden","disabled","value","name","tabindex"];function Fe(e,a,n,t,i,u){return p(),re(ce(!e.hasOwnLabel&&e.isLabeledByFormItem?"span":"label"),{class:f([e.ns.b(),e.ns.m(e.checkboxSize),e.ns.is("disabled",e.isDisabled),e.ns.is("bordered",e.border),e.ns.is("checked",e.isChecked)]),"aria-controls":e.indeterminate?e.controls:null,onClick:e.onClickRoot},{default:de(()=>[M("span",{class:f([e.ns.e("input"),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("indeterminate",e.indeterminate),e.ns.is("focus",e.focus)]),tabindex:e.indeterminate?0:void 0,role:e.indeterminate?"checkbox":void 0,"aria-checked":e.indeterminate?"mixed":void 0},[M("span",{class:f(e.ns.e("inner"))},null,2),e.trueLabel||e.falseLabel?I((p(),g("input",{key:0,id:e.inputId,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),class:f(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[2]||(a[2]=l=>e.focus=!0),onBlur:a[3]||(a[3]=l=>e.focus=!1)},null,42,Ee)),[[L,e.model]]):I((p(),g("input",{key:1,id:e.inputId,"onUpdate:modelValue":a[4]||(a[4]=l=>e.model=l),class:f(e.ns.e("original")),type:"checkbox","aria-hidden":e.indeterminate?"true":"false",disabled:e.isDisabled,value:e.label,name:e.name,tabindex:e.tabindex,onChange:a[5]||(a[5]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[6]||(a[6]=l=>e.focus=!0),onBlur:a[7]||(a[7]=l=>e.focus=!1)},null,42,Ge)),[[L,e.model]])],10,Be),e.hasOwnLabel?(p(),g("span",{key:0,class:f(e.ns.e("label"))},[w(e.$slots,"default"),e.$slots.default?F("v-if",!0):(p(),g(be,{key:0},[W(Z(e.label),1)],2112))],2)):F("v-if",!0)]),_:3},8,["class","aria-controls","onClick"])}var Ve=z($e,[["render",Fe],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const De=V({name:"ElCheckboxButton",props:J,emits:[S,"change"],setup(e,{slots:a}){const{focus:n,isChecked:t,isDisabled:i,size:u,model:l,handleChange:b}=X(e,a),{checkboxGroup:s}=y(),r=D("checkbox"),o=h(()=>{var m,d,c,v;const C=(d=(m=s==null?void 0:s.fill)==null?void 0:m.value)!=null?d:"";return{backgroundColor:C,borderColor:C,color:(v=(c=s==null?void 0:s.textColor)==null?void 0:c.value)!=null?v:"",boxShadow:C?`-1px 0 0 0 ${C}`:null}});return{focus:n,isChecked:t,isDisabled:i,model:l,handleChange:b,activeStyle:o,size:u,ns:r}}}),ze=["name","tabindex","disabled","true-value","false-value"],we=["name","tabindex","disabled","value"];function Ne(e,a,n,t,i,u){return p(),g("label",{class:f([e.ns.b("button"),e.ns.bm("button",e.size),e.ns.is("disabled",e.isDisabled),e.ns.is("checked",e.isChecked),e.ns.is("focus",e.focus)])},[e.trueLabel||e.falseLabel?I((p(),g("input",{key:0,"onUpdate:modelValue":a[0]||(a[0]=l=>e.model=l),class:f(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,"true-value":e.trueLabel,"false-value":e.falseLabel,onChange:a[1]||(a[1]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[2]||(a[2]=l=>e.focus=!0),onBlur:a[3]||(a[3]=l=>e.focus=!1)},null,42,ze)),[[L,e.model]]):I((p(),g("input",{key:1,"onUpdate:modelValue":a[4]||(a[4]=l=>e.model=l),class:f(e.ns.be("button","original")),type:"checkbox",name:e.name,tabindex:e.tabindex,disabled:e.isDisabled,value:e.label,onChange:a[5]||(a[5]=(...l)=>e.handleChange&&e.handleChange(...l)),onFocus:a[6]||(a[6]=l=>e.focus=!0),onBlur:a[7]||(a[7]=l=>e.focus=!1)},null,42,we)),[[L,e.model]]),e.$slots.default||e.label?(p(),g("span",{key:2,class:f(e.ns.be("button","inner")),style:me(e.isChecked?e.activeStyle:null)},[w(e.$slots,"default",{},()=>[W(Z(e.label),1)])],6)):F("v-if",!0)],2)}var Y=z(De,[["render",Ne],["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const Te=V({name:"ElCheckboxGroup",props:ke,emits:[S,"change"],setup(e,{emit:a,slots:n}){const{elFormItem:t}=y(),{groupId:i,isLabeledByFormItem:u}=ge(e,{elFormItem:t}),l=G(),b=D("checkbox"),s=o=>{a(S,o),P(()=>{a("change",o)})},r=h({get(){return e.modelValue},set(o){s(o)}});return ve("CheckboxGroup",A($({name:"ElCheckboxGroup",modelValue:r},fe(e)),{checkboxGroupSize:l,changeEvent:s})),j(()=>e.modelValue,()=>{var o;(o=t.validate)==null||o.call(t,"change").catch(m=>K())}),()=>he(e.tag,{id:i.value,class:b.b("group"),role:"group","aria-label":u.value?void 0:e.label||"checkbox-group","aria-labelledby":u.value?t.labelId:void 0},[w(n,"default")])}});var x=z(Te,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const He=pe(Ve,{CheckboxButton:Y,CheckboxGroup:x});q(Y);const Ue=q(x);export{Oe as C,He as E,Ue as a};