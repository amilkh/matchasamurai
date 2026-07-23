// Language toggle with persistence
function setLang(lang){
  document.body.classList.remove('en','ja');
  document.body.classList.add(lang);
  document.documentElement.lang = lang;
  try{ localStorage.setItem('ms_lang', lang); }catch(e){}
}
function toggleLang(){
  setLang(document.body.classList.contains('ja') ? 'en' : 'ja');
}
(function(){
  var saved;
  try{ saved = localStorage.getItem('ms_lang'); }catch(e){}
  if(!saved){
    saved = (navigator.language||'').toLowerCase().startsWith('ja') ? 'ja' : 'en';
  }
  setLang(saved);
})();
// close mobile nav on link click
document.addEventListener('click', function(e){
  if(e.target.closest('.nav a')) document.body.classList.remove('nav-open');
});
