
const header=document.querySelector("header");
const menu=document.querySelector(".menu-btn");
const nav=document.querySelector(".nav-links");
const back=document.querySelector(".backtop");

window.addEventListener("scroll",()=>{
  header?.classList.toggle("scrolled",window.scrollY>30);
  back?.classList.toggle("show",window.scrollY>500);
});
menu?.addEventListener("click",()=>nav?.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>nav?.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
 entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll(".faq button").forEach(btn=>{
 btn.addEventListener("click",()=>{
   const item=btn.parentElement;
   item.classList.toggle("open");
   btn.querySelector("i").className=item.classList.contains("open")?"fa-solid fa-minus":"fa-solid fa-plus";
 });
});

back?.addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));

document.querySelectorAll("form").forEach(form=>{
 form.addEventListener("submit",e=>{
   e.preventDefault();
   const toast=document.querySelector(".toast");
   if(toast){toast.textContent="Thanks! Your request has been received.";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3200)}
   form.reset();
 });
});
