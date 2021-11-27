const ball = document.querySelector('div.circle');
var cursor = document.querySelector('div.cursor');
const cursorBall = cursor.querySelectorAll('div');

const white = document.querySelector('.second');

let cursorX = 0;
let cursorY = 0;

let mouseX = 0;
let mouseY = 0;

// ball.classList.toggle('black');

cursorBall.forEach( (cursorBall,idx) => {

    let ballX = 0;
    let ballY = 0;

    let speed = 0.8;
    let ballSpeed = 0.1 - idx * 0.01;

    function animate() {
        let distX = mouseX - ballX;
        let distY = mouseY - ballY;
    
        let CurDistX = mouseX - cursorX;
        let CurDistY = mouseY - cursorY;
    
        cursorX = cursorX + (CurDistX * ballSpeed);
        cursorY = cursorY + (CurDistY * ballSpeed);
    
        ballX = ballX + (distX * speed);
        ballY = ballY + (distY * speed);
    
        
        cursorBall.style.left = cursorX + 'px';
        cursorBall.style.top = cursorY + 'px';
    
        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';
    
        requestAnimationFrame(animate)
    }

    animate();
})





document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});


//Loading animation for links


const fullBody = document.querySelector('.full-body');
const links = document.querySelectorAll('a');
const animationBox = document.querySelector('.loader');
const loaderChildren = animationBox.children;
console.log(links);

links.forEach((button)=>{
    button.addEventListener('click', ()=>{
        loaderChildren[0].classList.add("box-1ani");
    loaderChildren[1].classList.add("box-2ani");
    loaderChildren[2].classList.add("box-3ani");
    loaderChildren[3].classList.add("box-4ani");
    loaderChildren[4].classList.add("box-5ani");
    loaderChildren[5].classList.add("box-6ani");
    loaderChildren[6].classList.add("box-7ani");
    loaderChildren[7].classList.add("box-8ani");
    fullBody.style.filter = "blur(5px)";
    setTimeout(     ()=>{
        fullBody.style.filter = "blur(0px)";

    }, 500);
    setTimeout( ()=>{
        loaderChildren[0].classList.remove("box-1ani");
        loaderChildren[1].classList.remove("box-2ani");
        loaderChildren[2].classList.remove("box-3ani");
        loaderChildren[3].classList.remove("box-4ani");
        loaderChildren[4].classList.remove("box-5ani");
        loaderChildren[5].classList.remove("box-6ani");
        loaderChildren[6].classList.remove("box-7ani");
        loaderChildren[7].classList.remove("box-8ani");
    }, 1200)
    })
})


// Loader

var loader = document.getElementById("preloader");

window.addEventListener("load", ()=>{
    setInterval(()=>{
        loader.style.opacity = "0";
    }, 3000)
    
})



