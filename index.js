const page=document.querySelector("body");
const darkMode=document.querySelector("body #darkModeSwitch");
const textToggle=document.querySelector(".textToggle");
const icon=document.querySelector("#logo");
const contactBtn=document.querySelector("#contactButton");
if(localStorage.getItem("darkMode")==true){
    icon.setAttribute("src","./images/white-book.svg");
    icon.setAttribute("height","20px")
    contactBtn.classList.remove("btn-outline-primary");
    contactBtn.classList.add("btn-outline-light");
    localStorage.setItem("darkMode", true);
}
darkMode.addEventListener("change",()=>{
    if(darkMode.checked){
        icon.setAttribute("src","./images/white-book.svg");
        icon.setAttribute("height","20px")
        if(contactBtn){
            contactBtn.classList.remove("btn-outline-primary");
            contactBtn.classList.add("btn-outline-light");
        }
        
        localStorage.setItem("darkMode", true);

    }else{
        icon.setAttribute("src","./images/journals.svg");
        if(contactBtn){
            contactBtn.classList.remove("btn-outline-light");
            contactBtn.classList.add("btn-outline-primary");
        }
        
        localStorage.setItem("darkMode", false);

    }
    
    page.classList.toggle("dark-mode");
    textToggle.classList.toggle("text-toggle");
    
    
    
})
if(contactBtn){
    contactBtn.addEventListener("click", () => {
        document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
    });
}


