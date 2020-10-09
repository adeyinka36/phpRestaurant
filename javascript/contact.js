const header = document.getElementsByTagName("HEADER")[0];
const menu = document.getElementsByClassName("menu")[0];
const menuItems = document.getElementsByClassName("menu-items")[0];
const con = document.getElementsByClassName("container")[0];
const body = document.getElementsByTagName("BODY")[0];

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




con.addEventListener("click",(e)=>{
   
   if(e.target.tagName !=="UL" || e.target.tagName !=="LI" ){
        console.log("yes")
        menuItems.style.opacity="0";
        menuItems.style.transform="translateY(-200%)";
        menuItems.style.visibility="hidden";
        drop=false;
    }
})


onload=()=>{
  
    let flashItems = document.getElementsByClassName("flash");
    flashItems=Array.from(flashItems);
    
function showMenu(){
    flashItems.forEach(item => {
        setTimeout(()=>{
            item.style.opacity="0";
        },0)
        
    });

}

    setTimeout(showMenu,3000)

    

    setTimeout(()=>{
        let circles = document.getElementsByClassName("circle");
         circles=Array.from(circles);

         circles.forEach(item=>{
             item.classList.add("menu-animate")
         })
    },3200)
    
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