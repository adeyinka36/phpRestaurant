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
            menuItems.style.opacity="1";
            menuItems.style.transform="translateY(0px)";
            menuItems.style.visibility="visible";
            
            drop=true;
        }

        else if(drop==true){
            menuItems.style.opacity="0";
            menuItems.style.transform="translateY(-200%)";
                menuItems.style.visibility="hidden";
            drop=false;
        }

}


})




body.addEventListener("click",(e)=>{
   if(e.target.classList.contains("container")){
        menuItems.style.opacity="0";
        menuItems.style.transform="translateY(-200%)";
        menuItems.style.visibility="hidden";
        drop=false;
    }
})


function runeffect(){
    
    console.log("effectss");
    effect.style.opacity="0";
    effect.style.transform="translateX(-200%)";
    effect.style.visibility="hidden";
}

onload=()=>{
    setTimeout(runeffect,3000);
}