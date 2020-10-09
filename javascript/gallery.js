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
   if(e.target.classList.contains("container") || e.target.tagName=="IMG"){
        menuItems.style.opacity="0";
        menuItems.style.transform="translateY(-200%)";
        menuItems.style.visibility="hidden";
        drop=false;
    }
})


onload=()=>{
    const carousel= document.getElementsByClassName("carousel")[0];
    const prev= document.getElementsByClassName("prev")[0];
    const next= document.getElementsByClassName("next")[0];

    let images=4;
  
    for(let i=1;i<=images;i++){
        let img=document.createElement("img");
       img.src=`images/image${i}.jpg`;
       carousel.append(img);
    }
    
    let curr=0;
    const first= document.getElementsByTagName("IMG")[curr];
    const allImages = document.getElementsByTagName("IMG");
    const last = document.getElementsByTagName("IMG")[(allImages.length)-1];

    first.style.right="0px";
    count=0;
    
    
    next.addEventListener("click",(e)=>{
        if(count!==(allImages.length-1)){
        allImages[count].style.right="-100%";
        count++
        allImages[count].style.right="0px";
        }
    })

    
    prev.addEventListener("click",(e)=>{
        if(count!==0){
        allImages[count].style.right="100%";
        count--
        allImages[count].style.right="0px";
        }

    })



}


function getBaseUrl() {
    let re = new RegExp(/^.*\//);
    return re.exec(window.location.href);
}



const cancelIcon=document.getElementsByClassName("cancel")[0];

cancelIcon.addEventListener("click",(e)=>{
    let  ref=getBaseUrl();
    ref=ref[0];
     window.location = `${ref}index.php`
    
})