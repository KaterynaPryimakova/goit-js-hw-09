!function(){var e=document.querySelector(".form"),n=document.querySelector('[name="amount"]'),o=document.querySelector('[name="delay"]'),t=document.querySelector('[name="step"]');function u(e,n){var o=Math.random()>.3;Number(t.value);return new Promise((function(t,u){setTimeout((function(){o?t({position:e,delay:n}):u({position:e,delay:n})}),n)}))}e.addEventListener("submit",(function(e){e.preventDefault();for(var c=Number(n.value),a=Number(t.value),r=Number(o.value),i=1;i<=c;i++)u(i,r).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),r+=a}))}();
//# sourceMappingURL=03-promises.45994fc0.js.map