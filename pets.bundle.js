(()=>{"use strict";var e={619:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modalActions=void 0;const a=n(498);t.modalActions=function(){document.querySelectorAll(".our-friends__card").forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=function(e){for(let t=0;t<Object.keys(a.allItems).length;t++)if(a.allItems[t].name===e)return t}(e),n=document.createElement("div");n.classList.add("modal__wrapper");const i=document.createElement("div");i.classList.add("button__small-light"),i.innerHTML="<h4>+</h4>";const s=document.createElement("div");s.classList.add("modal__card");const o=document.createElement("img");o.src=a.allItems[t].img;const l=document.createElement("div");l.classList.add("modal__card-content");const r=document.createElement("h3");r.textContent=a.allItems[t].name;const d=document.createElement("div");d.textContent=a.allItems[t].type+" - "+a.allItems[t].breed,d.classList.add("modal__card-type");const c=document.createElement("div");c.classList.add("modal__card-text"),c.textContent=a.allItems[t].description;const h=document.createElement("ul"),m=document.createElement("li");m.innerHTML=`<b>Age:</b> ${a.allItems[t].age}`;const u=document.createElement("li");u.innerHTML=`<b>Inoculations:</b> ${a.allItems[t].inoculations}`;const p=document.createElement("li");p.innerHTML=`<b>Diseases:</b> ${a.allItems[t].diseases}`;const g=document.createElement("li");g.innerHTML=`<b>Parasites:</b> ${a.allItems[t].parasites}`,h.appendChild(m),h.appendChild(u),h.appendChild(p),h.appendChild(g),c.appendChild(h),l.appendChild(r),l.appendChild(d),l.appendChild(c),s.appendChild(o),s.appendChild(l),n.appendChild(i),n.appendChild(s),document.body.appendChild(n),i.addEventListener("click",(()=>{!function(){const e=document.querySelectorAll(".modal__wrapper");for(const t of e)document.body.removeChild(t);document.querySelector(".shadow").classList.remove("shadow_active"),document.body.style.overflow="auto",document.querySelector(".header__light").style.position="sticky"}()}))}(e.currentTarget.childNodes[1].textContent),document.querySelector(".shadow").classList.add("shadow_active"),document.body.style.overflow="hidden",document.querySelector(".header__light").style.position="static"}))}))}},498:function(e,t,n){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n);var i=Object.getOwnPropertyDescriptor(t,n);i&&!("get"in i?!t.__esModule:i.writable||i.configurable)||(i={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,a,i)}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),i=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return i(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.allItems=t.buildList=void 0;const o=s(n(254));function l(e){const t=document.createElement("div");t.classList.add("our-friends__card");const n=document.createElement("img");n.classList.add("our-friends__card-image"),n.src=e.img;const a=document.createElement("div");a.classList.add("card__name"),a.textContent=e.name;const i=document.createElement("div");return i.classList.add("button__big-light"),i.textContent="Learn more",t.appendChild(n),t.appendChild(a),t.appendChild(i),t}t.allItems=o,t.buildList=function(e=Object.keys(o).length){const t=[];let n;n=1===e||e%2==0?(Object.keys(o).length-1)/e:Math.ceil((Object.keys(o).length-1)/e);for(let a=0;a<n;a++){t.push([]);for(let n=0+e*a;n<e+e*a;n++)void 0!==o[n]?t[a].push(l(o[n])):t[a].push(l(o[Math.floor(Math.random()*(Object.keys(o).length-1))]))}return t}},254:e=>{e.exports=JSON.parse('[{"name":"Jennifer","img":"./assets/images/pets-jennifer.png","type":"Dog","breed":"Labrador","description":"Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won\'t hesitate to play up a storm in the house if she has all of her favorite toys.","age":"2 months","inoculations":["none"],"diseases":["none"],"parasites":["none"]},{"name":"Sophia","img":"./assets/images/pets-sophia.png","type":"Dog","breed":"Shih tzu","description":"Sophia here and I\'m looking for my forever home to live out the best years of my life. I am full of energy. Everyday I\'m learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.","age":"1 month","inoculations":["parvovirus"],"diseases":["none"],"parasites":["none"]},{"name":"Woody","img":"./assets/images/pets-woody.png","type":"Dog","breed":"Golden Retriever","description":"Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.","age":"3 years 6 months","inoculations":["adenovirus","distemper"],"diseases":["right back leg mobility reduced"],"parasites":["none"]},{"name":"Scarlet","img":"./assets/images/pets-scarlet.png","type":"Dog","breed":"Jack Russell Terrier","description":"Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.","age":"3 months","inoculations":["parainfluenza"],"diseases":["none"],"parasites":["none"]},{"name":"Katrine","img":"./assets/images/pets-katrine.png","type":"Cat","breed":"British Shorthair","description":"Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.","age":"6 months","inoculations":["panleukopenia"],"diseases":["none"],"parasites":["none"]},{"name":"Timmy","img":"./assets/images/pets-timmy.png","type":"Cat","breed":"British Shorthair","description":"Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.","age":"2 years 3 months","inoculations":["calicivirus","viral rhinotracheitis"],"diseases":["kidney stones"],"parasites":["none"]},{"name":"Freddie","img":"./assets/images/pets-freddie.png","type":"Cat","breed":"British Shorthair","description":"Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.","age":"2 months","inoculations":["rabies"],"diseases":["none"],"parasites":["none"]},{"name":"Charly","img":"./assets/images/pets-charly.png","type":"Dog","breed":"Jack Russell Terrier","description":"This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.","age":"8 years","inoculations":["bordetella bronchiseptica","leptospirosis"],"diseases":["deafness","blindness"],"parasites":["lice","fleas"]}]')}},t={};function n(a){var i=t[a];if(void 0!==i)return i.exports;var s=t[a]={exports:{}};return e[a].call(s.exports,s,s.exports,n),s.exports}(()=>{const e=n(498),t=n(619),a=document.querySelector(".our-pets__wrapper"),i=document.querySelector("#button__first"),s=document.querySelector("#button__prev"),o=document.querySelector("#button__current"),l=document.querySelector("#button__next"),r=document.querySelector("#button__last"),d=(0,e.buildList)(window.innerWidth<767?3:window.innerWidth<1279?6:8);let c=0;function h(e=c){d[e].forEach((e=>{null==a||a.appendChild(e)})),0===c&&c!==d.length-1&&(s.classList.add("button__small-light_inactive"),i.classList.add("button__small-light_inactive"),l.classList.remove("button__small-light_inactive"),r.classList.remove("button__small-light_inactive")),c===d.length-1&&0!==c&&(l.classList.add("button__small-light_inactive"),r.classList.add("button__small-light_inactive"),s.classList.remove("button__small-light_inactive"),i.classList.remove("button__small-light_inactive")),c>0&&c<d.length-1&&(i.classList.remove("button__small-light_inactive"),s.classList.remove("button__small-light_inactive"),l.classList.remove("button__small-light_inactive"),r.classList.remove("button__small-light_inactive")),0===c&&c===d.length-1&&(s.classList.add("button__small-light_inactive"),i.classList.add("button__small-light_inactive"),l.classList.add("button__small-light_inactive"),r.classList.add("button__small-light_inactive")),(0,t.modalActions)()}o.textContent=(c+1).toString(),i.addEventListener("click",(()=>{c=0,a.innerHTML="",h(),o.textContent=(c+1).toString()})),s.addEventListener("click",(()=>{c>0?(c-=1,a.innerHTML="",h(),o.textContent=(c+1).toString()):console.log("no more")})),l.addEventListener("click",(()=>{c<d.length-1?(c+=1,a.innerHTML="",h(),o.textContent=(c+1).toString()):console.log("no more")})),r.addEventListener("click",(()=>{c=d.length-1,a.innerHTML="",h(),o.textContent=(c+1).toString()})),h()})()})();