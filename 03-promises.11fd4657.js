const e=document.querySelector(".form"),o=document.querySelector('[name="amount"]'),t=document.querySelector('[name="delay"]'),n=document.querySelector('[name="step"]');function u(e,o){const t=Math.random()>.3;Number(n.value);return new Promise(((n,u)=>{setTimeout((()=>{t?n({position:e,delay:o}):u({position:e,delay:o})}),o)}))}e.addEventListener("submit",(function(e){e.preventDefault();const l=Number(o.value),r=Number(n.value);let m=Number(t.value);for(let e=1;e<=l;e++)u(e,m).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)})),m+=r}));
//# sourceMappingURL=03-promises.11fd4657.js.map