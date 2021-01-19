console.clear()
const btn = document.querySelector('#btn');
const video = document.getElementById('myVideo');
const switcher = document.querySelector('.switcher')
const preloader = document.querySelector('.preloader')

window.addEventListener("load", function () {
    preloader.classList.add("hide-preloader");
  });
  


btn.addEventListener('click',function (){
 if(video.paused){
     video.play()
     switcher.classList.remove('transformer')
 }else if(video.play){
     video.pause()
     switcher.classList.add('transformer')
 }
});
