const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let d=null;t.addEventListener("click",(function(){d=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`,t.setAttribute("disabled","disabled")}),1e3)})),e.addEventListener("click",(function(){clearInterval(d),t.removeAttribute("disabled","disabled")}));
//# sourceMappingURL=01-color-switcher.32eeb549.js.map
