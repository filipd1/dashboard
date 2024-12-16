const menuLink = document.querySelectorAll("#menu-link")
const slide = document.querySelectorAll("#slide")
const mobileMenu = document.querySelector(".mobile-menu-wrapper")
const mobileMenuIcon = document.querySelector("#mobile-menu-icon")
const mobileMenuExit = document.querySelector("#mobile-menu-exit-icon")

setActiveElement(menuLink, "active")
setActiveElement(slide, "active-slide")

function setActiveElement(element, className) {
    element.forEach(s => {
        s.addEventListener("click", () => {
            element.forEach(link => (
                link.classList.remove(className)
            ))
            
            s.classList.add(className)
        })
    })
}

mobileMenuIcon.addEventListener("click" , () => {
    mobileMenu.classList.add("show")
})

mobileMenuExit.addEventListener("click" , () => {
    mobileMenu.classList.remove("show")
})

document.addEventListener('click', (event) => {
    if (mobileMenu.classList.contains('show') && !mobileMenu.contains(event.target) && event.target !== mobileMenuIcon) {
      mobileMenu.classList.remove('show');
    }
});