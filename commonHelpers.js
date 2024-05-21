import{a as c,S as u,i as f}from"./assets/vendor-9a8cfc74.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const d="https://pixabay.com/api/",m=r=>c.get(`${d}`,{params:{key:"43952062-1ac9439355a7535a7f5f048fb",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data).catch(e=>console.log(e)),g=r=>r.map(e=>`<li class="gallery-card">
  <a class="gallery-link" href="${e.largeImageURL}">
    <img
      class="gallery-photo"
      src="${e.webformatURL}"
      data-source="${e.largeImageURL}"
      alt="${e.tags}"
    />
  </a>
  <div class="under-img-info">
    <ul class="list-info">
      <li class="item-info">
        <h3 class="title-info">Likes</h3>
        <p class="text-info">${e.likes}</p>
      </li>
      <li class="item-info">
        <h3 class="title-info">Views</h3>
        <p class="text-info">${e.views}</p>
      </li>
      <li class="item-info">
        <h3 class="title-info">Comments</h3>
        <p class="text-info">${e.comments}</p>
      </li>
      <li class="item-info">
        <h3 class="title-info">Downloads</h3>
        <p class="text-info">${e.downloads}</p>
      </li>
    </ul>
  </div>
</li>`).join(""),o=document.querySelector(".gallery-list"),y=document.querySelector(".form"),l=document.querySelector(".loader");let h=new u(".gallery-list a",{captionsData:"alt",captionDelay:250});async function p(r){r.preventDefault();const e=r.target.elements.query.value.trim();if(e===""){o.innerHTML="",r.target.reset();return}o.innerHTML="",l.classList.remove("is-hidden");try{const i=await m(e);if(i.total===0){r.target.reset(),f.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3,pauseOnHover:!0,color:"red"}),l.classList.add("is-hidden");return}o.innerHTML=g(i.hits),h.refresh()}catch(i){console.log(i)}r.target.reset(),l.classList.add("is-hidden")}y.addEventListener("submit",p);
//# sourceMappingURL=commonHelpers.js.map
