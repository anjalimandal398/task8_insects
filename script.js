let btn = document.querySelector("button")
let body = document.querySelector('body')

let insects = [
    'https://freepngimg.com/thumb/bugs/4-2-bug-png-2.png',
    'https://freepngimg.com/thumb/bugs/34593-2-bug-clip-art.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT650cN0BJaestBc3jYdSQzZlgDOqESBSRltA&s'
];

btn.addEventListener("click",function(){

   let valueX=Math.random()*100
   let valueY=Math.random()*100
   let rotate=Math.random()*360
   let img=document.createElement('img')

   let randomIndex = Math.random() * insects.length;
    img.setAttribute('src', insects[randomIndex]);
//    img.setAttribute('src','https://freepngimg.com/thumb/bugs/4-2-bug-png-2.png')    ->isse bs ek random insects print ho rhi thi

//    console.log(img);   for check the code

   img.style.height='100px' 
   img.style.position='absolute'
   img.style.left=valueX+'%'
   img.style.top=valueY+'%'
   img.style.rotate=rotate+'deg'

   
   document.body.appendChild(img)
})