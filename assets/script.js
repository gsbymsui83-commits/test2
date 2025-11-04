// Mobile nav
const toggler = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggler) {
  toggler.addEventListener('click', () => links.classList.toggle('show'));
}

// Subtle reveal on scroll
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if (e.isIntersecting) {
      e.target.style.transform = 'translateY(0)';
      e.target.style.opacity = '1';
      observer.unobserve(e.target);
    }
  });
},{threshold:0.12});

document.querySelectorAll('.reveal').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'all .6s cubic-bezier(.2,.8,.2,1)';
  observer.observe(el);
});

// Smooth hash links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
