const toggle = document.getElementById('btn');
const youtubelogo = document.querySelector('.youtubelogo');
const youtubelogo1 = document.querySelector('.youtubelogo1');
 let theme ='light';
toggle.onclick=function(){
    if (theme === 'light')
     theme = 'dark';
     else
     theme = 'light';
    let element=document.body;
    element.classList.toggle("dark");
    if (theme==='light') {
        youtubelogo.style.display = 'block';
        youtubelogo1.style.display = 'none';
    }else{
        youtubelogo1.style.display = 'block';
        youtubelogo.style.display = 'none';
    }
 }


