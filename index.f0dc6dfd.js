!function(){var e=document.querySelector(".breed-select"),t=document.querySelector(".loader"),n=document.querySelector(".cat-info"),o=document.querySelector(".error");function c(e){console.error(e),t.style.display="none",e.style.display="block",e.textContent="Oops! Something went wrong! Try reloading the page!"}e.addEventListener("change",(function(){var r,a,i=e.value;t.style.display="block",n.style.display="none",(r=i,a="https://api.thecatapi.com/v1/images/search?breed_id=".concat(r),fetch(a,{headers:{"x-api-key":"live_86lXvOSuiF0TB8qZsLAqtKwuIt4g7hRYI34cxcD8lxYG16pPWorGNrp3KLJHvful"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw console.error("Error fetching cat information:",e),e}))).then((function(e){!function(e){var c=e[0].url,r=e[0].breeds[0].name,a=e[0].breeds[0].description,i=e[0].breeds[0].temperament,l=document.createElement("img");l.src=c;var d=document.querySelector(".cat-info");d.innerHTML="";var s=document.createElement("h2");s.textContent=r,d.appendChild(s),d.appendChild(l);var u=document.createElement("p");u.textContent="Description: ".concat(a),d.appendChild(u);var p=document.createElement("p");p.textContent="Temperament: ".concat(i),d.appendChild(p),t.style.display="none",n.style.display="block",o.style.display="none"}(e)})).catch(c)})),window.addEventListener("DOMContentLoaded",(function(){t.style.display="block",e.style.display="none",fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_86lXvOSuiF0TB8qZsLAqtKwuIt4g7hRYI34cxcD8lxYG16pPWorGNrp3KLJHvful"}}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){throw console.error("Error fetching breed collection:",e),e})).then((function(n){!function(n){e.innerHTML="",n.forEach((function(t){var n=document.createElement("option");n.value=t.id,n.text=t.name,e.appendChild(n)})),t.style.display="none",e.style.display="block"}(n)})).catch(c)}))}();
//# sourceMappingURL=index.f0dc6dfd.js.map
