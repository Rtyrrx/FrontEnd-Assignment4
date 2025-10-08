// Shared site interactions with GSAP (and ScrollTrigger if available)
(function(){
  // Guard: require gsap
  if (typeof window.gsap === 'undefined') return;

  // Register ScrollTrigger when available
  if (window.ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  // Animate elements with .animate-in on load
  gsap.utils.toArray('.animate-in').forEach(function(el, i){
    gsap.to(el, {opacity:1, y:0, duration:0.6, delay: 0.1 + i*0.08, ease:'power2.out'});
  });

  // Reveal on scroll for .reveal
  if (window.ScrollTrigger) {
    gsap.utils.toArray('.reveal').forEach(function(el){
      gsap.to(el, {
        scrollTrigger: { trigger: el, start: 'top 80%' },
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out'
      });
    });
  }

  // Smooth scroll for same-page anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - 64;
      gsap.to(window, {scrollTo: y, duration: 0.6, ease: 'power2.out'});
    });
  });
})();
