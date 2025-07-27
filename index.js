const page=document.querySelector("body");
const darkMode=document.querySelector("body #darkModeSwitch");
const textToggle=document.querySelector(".textToggle");
const icon=document.querySelector("#logo");
const contactBtn=document.querySelector("#contactButton");
darkMode.addEventListener("change",()=>{
    if(darkMode.checked){
        icon.setAttribute("src","./images/white-book.svg");
        icon.setAttribute("height","20px")
        contactBtn.classList.remove("btn-outline-primary");
        contactBtn.classList.add("btn-outline-light");
        

    }else{
        icon.setAttribute("src","./images/journals.svg");
        contactBtn.classList.remove("btn-outline-light");
        contactBtn.classList.add("btn-outline-primary");
        

    }
    page.classList.toggle("dark-mode");
    textToggle.classList.toggle("text-toggle");
    
    
    
})
contactBtn.addEventListener("click", () => {
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });

