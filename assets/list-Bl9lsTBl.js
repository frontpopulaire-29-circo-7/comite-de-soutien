import"./style-BRwyWYlo.js";import{i as p,g as m,q as l,c as u,a as f}from"./index.browser.esm2017-C0ocQTjK.js";async function b(n){const o=l(u(n,"soutiens"));return(await f(o)).docs.map(e=>e.data())}window.addEventListener("DOMContentLoaded",()=>{const o=p({apiKey:"AIzaSyD1T695o8J8vps5e8YeTYSGVhQYIi1LJNY",authDomain:"comite-de-soutien.firebaseapp.com",projectId:"comite-de-soutien",storageBucket:"comite-de-soutien.appspot.com",messagingSenderId:"642182812817",appId:"1:642182812817:web:eff866d732bb08ba481b30"}),a=m(o);b(a).then(d=>{d.forEach(e=>{let r=document.querySelector("tbody"),t=document.createElement("tr"),i=document.createElement("td");i.innerText=e.firstname;let s=document.createElement("td");s.innerText=e.lastname;let c=document.createElement("td");c.innerText=e.role,t.appendChild(i),t.appendChild(s),t.appendChild(c),r.appendChild(t)})})});
