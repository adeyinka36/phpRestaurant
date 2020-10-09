const header = document.getElementsByTagName("HEADER")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuItems = document.getElementsByClassName("menu-items")[0];
const con = document.getElementsByClassName("container")[0];
const body = document.getElementsByTagName("BODY")[0];
const effect= document.getElementsByClassName("effect")[0];

let drop=false;

header.addEventListener("click",(e)=>{
    console.log(e.target.tagName);
    if(e.target.tagName=="I"){
        if(drop==false){
            menuItems.style.top="100%"
            
            drop=true;
        }

        else if(drop==true){
            menuItems.style.top="-700%"
            drop=false;
        }

}


})




body.addEventListener("click",(e)=>{
   if(e.target.classList.contains("container")){
    menuItems.style.top="-700%"
        drop=false;
    }
})


function runeffect(){
    
    
    effect.style.opacity="0";
    effect.style.transform="translateX(-200%)";
    effect.style.visibility="hidden";
}




function runeffect(){
    effect.style.opacity="0";
    effect.style.transform="translateX(-200%)";
    effect.style.visibility="hidden";
}



onload=()=>{
    setTimeout(runeffect,3000);
    let flashItems = document.getElementsByClassName("flash");
    flashItems=Array.from(flashItems);
    
function showMenu(){
    flashItems.forEach(item => {
        setTimeout(()=>{
            item.style.opacity="0";
        },0)
        
    });

}

    setTimeout(showMenu,6000)

    

    setTimeout(()=>{
        let circles = document.getElementsByClassName("circle");
         circles=Array.from(circles);

         circles.forEach(item=>{
             item.classList.add("menu-animate")
         })
    },6200)
    
}

function getBaseUrl() {
    let re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}

const circ = Array.from(document.getElementsByClassName("circle"));

circ.forEach(item=>{
    item.addEventListener("click",(e)=>{
        let ref = getBaseUrl();
        ref = ref[0];
        let text= e.target.previousElementSibling.innerText.toLowerCase();
         window.location = `${ref}${text}.php`
        
    
    })

})