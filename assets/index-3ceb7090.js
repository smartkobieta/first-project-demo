(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();(()=>{const o={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),closeMenuBtn1:document.querySelector("[data-menu-close1]"),menu:document.querySelector("[data-menu]")};o.openMenuBtn.addEventListener("click",c),o.closeMenuBtn.addEventListener("click",c),o.closeMenuBtn1.addEventListener("click",c);function c(){o.menu.classList.toggle("is-hidden")}})();(()=>{const o={openModalBtn:document.querySelector("[data-modal-open]"),openModalBtn1:document.querySelector("[data-modal-open1]"),openModalBtn2:document.querySelector("[data-modal-open2]"),openModalBtn3:document.querySelector("[data-modal-open3]"),closeModalBtn:document.querySelector("[data-modal-close]"),modal:document.querySelector("[data-modal]")};o.openModalBtn.addEventListener("click",n),o.openModalBtn1.addEventListener("click",n),o.openModalBtn2.addEventListener("click",n),o.openModalBtn3.addEventListener("click",n),o.closeModalBtn.addEventListener("click",n),o.modal.addEventListener("click",c),document.body.addEventListener("keydown",d);function c(e){e.currentTarget===e.target&&n()}function d(e){o.modal.classList.contains("is-hidden")||e.key==="Escape"&&n()}function n(){o.modal.classList.toggle("is-hidden")}})();let l=document.getElementById("btn-back-to-top");window.onscroll=function(){s()};function s(){document.body.scrollTop>500||document.documentElement.scrollTop>500?l.classList.add("show"):l.classList.remove("show")}l.addEventListener("click",i);function i(){document.body.scrollTop=0,document.documentElement.scrollTop=0,l.blur()}