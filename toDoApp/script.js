


 const formEl=document.querySelector(".form");
 const inputEl=document.querySelector(".input");
 const liEl=document.querySelector("ul");
 let mydata=[];

 renderDOM()
     
     function renderDOM(){
    
    JSON.parse(localStorage.getItem('mydata')).forEach((text)=>{
        
        
        liEl.append(createNewlE(text));
    })
}
   
 function createNewlE(text){
     const newlE=document.createElement("li");
     const pEl=document.createElement("p");
     const img=document.createElement("img");
     img.classList.add("trash-i");
     img.src="trash.svg";
     pEl.innerText=text;
     newlE.appendChild(pEl);
     newlE.appendChild(img);
     return newlE


 }
 
 function removeElement(el){
     el.remove();
 }
 





 liEl.addEventListener("click",e=>{
     if(e.target && e.target.matches("p")){
         mydata=JSON.parse(localStorage.getItem('mydata'))
        
         e.target.classList.toggle("done");
         e.target.nextElementSibling.classList.toggle("trash-i-visible");
         e.target.nextElementSibling.addEventListener("click",function(){
             console.log(liEl.children)
            
             let clickedIndex=[...liEl.children].indexOf(e.target.nextElementSibling.parentNode);
             console.log(clickedIndex);
            
            mydata.splice(clickedIndex,1);
           
             e.target.parentNode.remove();
             localStorage.setItem('mydata',JSON.stringify(mydata));
           
         });

     }
 })
 
 formEl.addEventListener("submit",(e)=>{
    
     e.preventDefault();
     if((localStorage.getItem('mydata'))){
        
        mydata=  JSON.parse(localStorage.getItem('mydata'));
       mydata.push(inputEl.value)
       
     }else{
        mydata.push(inputEl.value);

     }
     
     localStorage.setItem('mydata',JSON.stringify(mydata));
     liEl.append(createNewlE(inputEl.value));
    
     inputEl.value=" ";

 })
 