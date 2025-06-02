import{a as l,S as u,i}from"./assets/vendor-DFCQGEf1.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();async function d(s){const o="https://pixabay.com/api/",r="50647927-495c70707602983112414a885",a=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}),e=`${o}?${a}`;return(await l.get(e)).data}const c=document.querySelector(".gallery"),f=new u(".gallery a");function p(s){const o=s.map(r=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r.largeImageURL}">
          <img class="gallery-image" src="${r.webformatURL}" alt="${r.tags}" />
        </a>
        <div class="info">
          <p>Likes: ${r.likes}</p>
          <p>Views: ${r.views}</p>
          <p>Comments: ${r.comments}</p>
          <p>Downloads: ${r.downloads}</p>
        </div>
      </li>
      `).join("");c.insertAdjacentHTML("beforeend",o),f.refresh()}function m(){c.innerHTML=""}function y(){document.querySelector(".loader").classList.add("visible")}function g(){document.querySelector(".loader").classList.remove("visible")}const h=document.querySelector(".form");h.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o===""){i.warning({message:"Please enter a search query!",position:"topRight"});return}m(),y();try{const r=await d(o);if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(r.hits)}catch(r){i.error({message:"An error occurred while fetching images!",position:"topRight"}),console.error(r)}finally{g()}});
//# sourceMappingURL=index.js.map
