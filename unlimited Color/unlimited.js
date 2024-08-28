let start =document.querySelector('#start');


console.log(start)

let stop =document.querySelector('#stop')

console.log(stop)


let body =document.querySelector('body')

console.log(body)

let arra =[]
let color=[


'#F0F8FF',

'#FAEBD7',

'#00FFFF',

'#7FFFD4',

'#F0FFFF',


'#FFE4C4',

'#000000',

'#FFEBCD',

'#0000FF',

'#8A2BE2',

'#A52A2A',

'#DEB887',

'#5F9EA0',

'#7FFF00',

'#D2691E',

'#FF7F50',

'#6495ED',

'#FFF8DC',

]

start.addEventListener('click',function(e){
  
    let i = 0; //
    setIntervId=setInterval(function(){
       
      let colors=  body.style.backgroundColor = color[i % color.length];

      console.log("last color:-"+colors)
          i++
  
        },1000)


});
stop.addEventListener('click',function(){

clearInterval(setIntervId);
    body.style.background=setIntervId.colors;

})
