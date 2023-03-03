const toggle = document.getElementById('btn');
const youtubelogo = document.querySelector('.youtubelogo');
const youtubelogo1 = document.querySelector('.youtubelogo1');
 toggle.onclick=function(){
    let element=document.body;
    element.classList.toggle("dark");
    if (youtubelogo.style.display==='none') {
        youtubelogo.style.display = 'block';
        youtubelogo1.style.display = 'none';
    }else{
        youtubelogo1.style.display = 'block';
        youtubelogo.style.display = 'none';
    }
 }


