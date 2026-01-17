document.getElementById('navToggle')?.addEventListener('click', function(){
  const nav = document.getElementById('siteNav');
  if(!nav) return; nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
});
