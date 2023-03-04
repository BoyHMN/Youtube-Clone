const toggle = document.getElementById('btn');
const youtubeLogo = document.querySelector('.youtubelogo');
const youtubeLogo1 = document.querySelector('.youtubelogo1');
 let theme ='light';
toggle.onclick=function(){
    if (theme === 'light')
     theme = 'dark';
     else
     theme = 'light';
    let element=document.body;
    element.classList.toggle("dark");
    if (theme==='light') {
        youtubeLogo.style.display = 'block';
        youtubeLogo1.style.display = 'none';
    }else{
        youtubeLogo1.style.display = 'block';
        youtubeLogo.style.display = 'none';
    }
 }


