(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}})();(()=>{const t={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),closeMenuBtn1:document.querySelector("[data-menu-close1]"),menu:document.querySelector("[data-menu]")};t.openMenuBtn.addEventListener("click",r),t.closeMenuBtn.addEventListener("click",r),t.closeMenuBtn1.addEventListener("click",r);function r(){t.menu.classList.toggle("is-hidden")}})();(()=>{const t={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtn1:document.querySelector("[data-modal-open1]"),openModalBtn2:document.querySelector("[data-modal-open2]"),openModalBtn3:document.querySelector("[data-modal-open3]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};t.openModalBtn.addEventListener("click",o),t.openModalBtn1.addEventListener("click",o),t.openModalBtn2.addEventListener("click",o),t.openModalBtn3.addEventListener("click",o),t.closeModalBtn.addEventListener("click",o),t.modal.addEventListener("click",r),document.body.addEventListener("keydown",d);function r(e){e.currentTarget===e.target&&o()}function d(e){t.modal.classList.contains("is-hidden")||e.key==="Escape"&&o()}function o(){t.modal.classList.toggle("is-hidden")}})();
