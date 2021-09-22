function changeConsole(a, c, t){
    //Image
    document.querySelector('.switch').src = a;
    //Background Color
    const sec = document.querySelector('.sec');
    sec.style.background = c;
    //Name
    const titulo = document.querySelector('.titulo');
    titulo.innerHTML = t;
} 