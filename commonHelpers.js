import{a as v,S as b,i as m}from"./assets/vendor-9a8cfc74.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))f(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function u(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function f(t){if(t.ep)return;t.ep=!0;const r=u(t);fetch(t.href,r)}})();const w="https://pixabay.com/api/";let h=15;const p=async(s,e)=>(await v.get(`${w}`,{params:{key:"43952062-1ac9439355a7535a7f5f048fb",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:h}})).data,g=s=>s.map(e=>`<li class="gallery-card">
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
</li>`).join(""),i=document.querySelector(".gallery-list"),S=document.querySelector(".form"),a=document.querySelector(".loader"),o=document.querySelector(".load-more-btn");let l=1,n="",d=0,y=new b(".gallery-list a",{captionsData:"alt",captionDelay:250});async function H(s){if(s.preventDefault(),l=1,n=s.target.elements.query.value.trim(),n===""){i.innerHTML="",s.target.reset();return}i.innerHTML="",a.classList.remove("is-hidden");try{const e=await p(n);if(e.total===0){s.target.reset(),m.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:4e3,pauseOnHover:!0,color:"red"}),a.classList.add("is-hidden"),o.classList.add("is-hidden");return}i.innerHTML=g(e.hits),y.refresh(),d=Math.ceil(e.totalHits/h),console.log(d),l+=1}catch(e){console.log(e)}i.innerHTML!==""&&o.classList.remove("is-hidden"),s.target.reset(),a.classList.add("is-hidden")}async function L(s){s.preventDefault(),o.classList.add("is-hidden"),a.classList.remove("is-hidden");try{const e=await p(n,l);i.insertAdjacentHTML("beforeend",g(e.hits)),y.refresh(),l+=1,o.classList.remove("is-hidden"),console.log("photosData.totalHits:",e.totalHits),console.log("🚀photosData.total:",e.total),a.classList.add("is-hidden"),l>d&&(o.classList.add("is-hidden"),o.removeEventListener("click",L),m.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",timeout:4e3,pauseOnHover:!0,color:"red"}))}catch(e){console.log(e)}}S.addEventListener("submit",H);o.addEventListener("click",L);
//# sourceMappingURL=commonHelpers.js.map
