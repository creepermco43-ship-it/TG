(function(){
  const DC='https://discord.gg/ZKr66hgzwY';
  const pages=[
    {href:'index.html',label:'Home'},
    {href:'games.html',label:'Team'},
    {href:'about.html',label:'About'},
    {href:'sponsors.html',label:'Sponsors'},
    {href:'contact.html',label:'Contact'},
  ];
  const cur=location.pathname.split('/').pop()||'index.html';
  const nav=document.getElementById('tg-nav');
  if(!nav)return;
  nav.innerHTML=`<a href="index.html" class="tg-logo">TEAM <span>TG</span></a><ul class="tg-links">${pages.map(p=>`<li><a href="${p.href}" class="${cur===p.href?'active':''}">${p.label}</a></li>`).join('')}</ul><div class="tg-nav-right"><a href="${DC}" target="_blank" class="tg-btn-dc">Join Discord</a><button class="tg-hamburger" id="tg-ham"><span></span><span></span><span></span></button></div>`;
  const mob=document.getElementById('tg-mobile');
  if(mob)mob.innerHTML=pages.map(p=>`<a href="${p.href}" class="${cur===p.href?'active':''}">${p.label}</a>`).join('')+`<a href="${DC}" target="_blank" class="tg-btn-dc" style="margin-top:.8rem;display:inline-block;padding:.7rem 1.5rem">Join Discord</a>`;
  document.getElementById('tg-ham')?.addEventListener('click',()=>{const m=document.getElementById('tg-mobile');m.style.display=m.style.display==='flex'?'none':'flex'});
  const foot=document.getElementById('tg-footer');
  if(foot)foot.innerHTML=`<div class="tg-footer-logo">TEAM <span>TG</span></div><div class="tg-footer-links">${pages.map(p=>`<a href="${p.href}">${p.label}</a>`).join('')}</div><div class="tg-footer-copy">© 2023 Team TG · All rights reserved</div>`;
  const ro=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting)x.target.classList.add('vis')}),{threshold:.1});
  document.querySelectorAll('.tg-reveal').forEach(el=>ro.observe(el));
  window.addEventListener('scroll',()=>{nav.style.background=window.scrollY>40?'rgba(5,5,5,.97)':'rgba(5,5,5,.92)'});
})();
