// se agregan todas la constantes
const btn1 = document.getElementById('btntop')
const btn2 = document.getElementById('btnmid')
const btn3 = document.getElementById('btnbot')

const article1 = document.getElementById('article1')
const article2 = document.getElementById('article2')
const article3 = document.getElementById('article3')

const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')

// se declaran los eventos click
btn1.addEventListener("click", button1);
btn2.addEventListener("click", button2);
btn3.addEventListener("click", button3);

// se declaran las funciones principales
function button1(){
    btn1.className += " active"
    btn2.className = "btn"
    btn3.className = "btn"

    // se declaran las funcines secundarias
    parraph1()
    photo1()
}

///////funciones principales//////////
function button2(){
    btn1.className = "btn"
    btn2.className += " active"
    btn3.className = "btn"

    parraph2()
    photo2()
}


function button3(){
    btn1.className = "btn"
    btn2.className = "btn"
    btn3.className += " active"

    parraph3()
    photo3()
}

////////funciones secundarias - cambio de parrafo/////////
function parraph1(){
    article1.className += " read"
    article2.className = "article"
    article3.className = "article"
}

function parraph2(){
    article1.className = "article"
    article2.className += " read"
    article3.className = "article"
}

function parraph3(){
    article1.className = "article"
    article2.className = "article"
    article3.className += " read"
}

//////////funciones secundarias - cambio de imagen///////////
function photo1(){
    img1.className += " read"
    img2.className = "img"
    img3.className = "img"
}
function photo2(){
    img1.className = "img"
    img2.className += " read"
    img3.className = "img"
}
function photo3(){
    img1.className = "img"
    img2.className = "img"
    img3.className += " read"
}