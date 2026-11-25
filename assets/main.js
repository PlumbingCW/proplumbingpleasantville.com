(function(){
  var drawer=document.getElementById('mob-drawer'),overlay=document.getElementById('mob-overlay'),toggle=document.getElementById('mob-toggle'),root=document.documentElement;
  function setOpen(o){
    if(!drawer)return;
    drawer.classList.toggle('open',o);overlay.classList.toggle('open',o);
    toggle.setAttribute('aria-expanded',o?'true':'false');
    root.style.overflow=o?'hidden':'';
  }
  if(toggle){
    toggle.addEventListener('click',function(){setOpen(true)});
    overlay.addEventListener('click',function(){setOpen(false)});
    document.getElementById('mob-close').addEventListener('click',function(){setOpen(false)});
    drawer.addEventListener('click',function(e){if(e.target.closest('a'))setOpen(false)});
  }
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){setOpen(false);document.querySelectorAll('.has-drop.open').forEach(function(x){x.classList.remove('open')})}});
  document.querySelectorAll('.has-drop>.navbtn').forEach(function(b){
    b.addEventListener('click',function(){
      var li=b.parentNode,o=li.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');
    });
  });
})();
