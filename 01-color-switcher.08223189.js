const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let d;e.addEventListener("click",(function(){t.style.backgroundColor="#337763",e.disabled=!0,o.disabled=!1,d=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),o.addEventListener("click",(function(){clearInterval(d),e.disabled=!1,o.disabled=!0}));
//# sourceMappingURL=01-color-switcher.08223189.js.map
