const btn=document.getElementById("openBtn");

const letter=document.querySelector(".letter");

const cards=document.querySelector(".cards");

const final=document.querySelector(".final");

const message=`Dear Jasmitha,

Happy Birthday to the most precious person in my life.

Every day with you feels like a blessing.

Your smile gives me peace.

Your laugh is my favorite song.

Whenever life becomes difficult,
thinking about you makes everything beautiful again.

You are not just someone I love.

You are my comfort.

My happiness.

My strength.

My future.

My beautiful Chinnu...

Sometimes I call you Junnu because that's how close you are to my heart.

Thank you for loving me.

Thank you for understanding me.

I promise to stand beside you through every situation either happy or sad i be with you my girl.



I hope today brings you as much joy as you bring into my life.

Happy Birthday My cutie pie❤️ `;

let i=0;

btn.onclick=()=>{

letter.classList.remove("hidden");

cards.classList.remove("hidden");

final.classList.remove("hidden");

type();

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

}

function type(){

if(i<message.length){

document.getElementById("typing").innerHTML+=message.charAt(i);

i++;

setTimeout(type,40);

}

}

function fireworks(){

const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<300;i++){

particles.push({

x:canvas.width/2,

y:canvas.height/2,

dx:(Math.random()-0.5)*10,

dy:(Math.random()-0.5)*10,

r:Math.random()*5+2

});

}

function animate(){

ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach(p=>{

ctx.beginPath();

ctx.arc(p.x,p.y,p.r,0,Math.PI*2);

ctx.fillStyle=`hsl(${Math.random()*360},100%,70%)`;

ctx.fill();

p.x+=p.dx;

p.y+=p.dy;

});

requestAnimationFrame(animate);

}

animate();

}
const hearts = document.querySelector(".hearts");

for(let i=0;i<40;i++){

const heart=document.createElement("span");

heart.innerHTML=Math.random()>0.5?"💜":"🤍";

heart.style.left=Math.random()*100+"%";

heart.style.animationDuration=(6+Math.random()*8)+"s";

heart.style.fontSize=(18+Math.random()*22)+"px";

heart.style.animationDelay=Math.random()*8+"s";

hearts.appendChild(heart);

}