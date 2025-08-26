// Mobile menu
const btn = document.getElementById('menuBtn');
const links = document.getElementById('navLinks');
if (btn && links){
  btn.addEventListener('click', ()=>{
    const open = links.style.display === 'flex';
    links.style.display = open ? 'none' : 'flex';
    btn.setAttribute('aria-expanded', String(!open));
  });
}

// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
