// const page=document.querySelector("body");
// const darkMode=document.querySelector("body #darkModeSwitch");
// const textToggle=document.querySelector(".textToggle");
// const albumToggle=document.querySelector(".albumToggle");
// const icon=document.querySelector("#logo");
// const contactBtn=document.querySelector("#contactButton");

// if(localStorage.getItem("darkMode")==="true"){
//     page.classList.add("dark-mode");
//     darkMode.checked = true;
//     icon.setAttribute("src","./images/white-book.svg");
//     icon.setAttribute("height","20px")
//     contactBtn.classList.remove("btn-outline-primary");
//     contactBtn.classList.add("btn-outline-light");
//     if(textToggle){
//         textToggle.classList.toggle("text-toggle");
//     }
//     if(albumToggle){
//         albumToggle.classList.toggle("album-toggle");
//     }
//     localStorage.setItem("darkMode", true);
    
// }
// darkMode.addEventListener("change",()=>{
//     if(darkMode.checked){
//         icon.setAttribute("src","./images/white-book.svg");
//         icon.setAttribute("height","20px")
//         if(contactBtn){
//             contactBtn.classList.remove("btn-outline-primary");
//             contactBtn.classList.add("btn-outline-light");
//         }
       
//         localStorage.setItem("darkMode", true);

//     }else{
//         icon.setAttribute("src","./images/journals.svg");
//         if(contactBtn){
//             contactBtn.classList.remove("btn-outline-light");
//             contactBtn.classList.add("btn-outline-primary");
//         }
        
//         localStorage.setItem("darkMode", false);
//     }
//     if(textToggle){
//         textToggle.classList.toggle("text-toggle");
//     }
//     if(albumToggle){
//         albumToggle.classList.toggle("album-toggle");
//     }
//     page.classList.toggle("dark-mode");
    
// })
// if(contactBtn){
//     contactBtn.addEventListener("click", () => {
//         document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
//     });
// }
const page = document.querySelector("body");
const darkMode = document.querySelector("#darkModeSwitch");
const icon = document.querySelector("#logo");
const contactBtn = document.querySelector("#contactButton");

function applyDarkMode(isDark) {
  const textToggle = document.querySelector(".textToggle");
  const albumToggle = document.querySelector(".albumToggle");

  page.classList.toggle("dark-mode", isDark);
  icon.setAttribute("src", isDark ? "./images/white-book.svg" : "./images/journals.svg");
  icon.setAttribute("height", "20px");

  if (contactBtn) {
    contactBtn.classList.toggle("btn-outline-primary", !isDark);
    contactBtn.classList.toggle("btn-outline-light", isDark);
  }

  if (textToggle) textToggle.classList.toggle("dark", isDark);
  if (albumToggle) albumToggle.classList.toggle("dark", isDark);
}

// 🟢 On initial load
if (localStorage.getItem("darkMode") === "true") {
  darkMode.checked = true;
  applyDarkMode(true);
}

// 🟢 On toggle switch
darkMode.addEventListener("change", () => {
  const isDark = darkMode.checked;
  localStorage.setItem("darkMode", isDark);
  applyDarkMode(isDark);
});

// 🟢 Contact scroll
if (contactBtn) {
  contactBtn.addEventListener("click", () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  });
}





