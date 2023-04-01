function overFun(){
    document.getElementById("para_id").style.color="red";
   
}
function outFun(){
    document.getElementById("para_id").style.color="black";
    
}
function overFunBtn(){
    document.getElementById("btn").innerHTML="Content changes";
}
function outFunBtn(){
    document.getElementById("btn").innerHTML="BUTTON";
}
let para=document.getElementById("p_id")
let input=document.getElementById("text_id");
let butn=document.getElementById("btn_id");
butn.addEventListener('click',function(){
    input.setAttribute("value",para.innerHTML);
})
let element=document.querySelectorAll('li');
element.forEach((i)=>{
    i.addEventListener('mouseover',function(){
        i.style.color="crimson";
        i.style.fontWeight="bold"; 
    })
    i.addEventListener('mouseout',function(){
        i.style.color="black";
        i.style.fontWeight="normal"; 
    })
})
