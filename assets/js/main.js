/*=============== SHOW MENU  Section===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

//   -----------------Click and Menu Bar Show Section---------------------
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

//   -----------------Click and Menu Bar Close Section---------------------

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}



/*=============== REMOVE MENU MOBILE  Section===============*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
    const navMenu = document.getElementById("nav-menu")
    // When we click on each nav-link,remove show-menu
    navMenu.classList.remove("show-menu")
}

navLink.forEach(n => n.addEventListener("click", linkAction))


/*=============== ADD BLUR TO HEADER  Section===============*/
const blurHeader = () => {
    const header = document.getElementById("header")

    this.scrollY >= 50 ? header.classList.add("blur-header")
        : header.classList.remove("blur-header")
}

window.addEventListener("scroll", blurHeader)


/*=============== EMAIL JS  Section===============*/
const contactForm = document.getElementById("contact-form"),

    contactMessage = document.getElementById("contact-message")
const SendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_g9m4cvv', 'template_hz9zrc6', '#contact-form', 'GtOgndyU0U76tZHzU')
        .then(() => {
            // Show sent message

            contactMessage.textContent = 'Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            // Clear input fields

            contactForm.reset()

        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent (service error) ❌'
        })
}

contactForm.addEventListener("submit", SendEmail)

/*=============== SHOW SCROLL UP  Section===============*/
const scrollup = () => {
    const scrollup = document.getElementById("scroll-up")

    this.scrollY >= 330 ? scrollup.classList.add("show-scroll")
        : scrollup.classList.remove("show-scroll")
}

window.addEventListener("scroll", scrollup)

/*=============== SCROLL SECTIONS ACTIVE LINK  Section===============*/
const sections = document.querySelectorAll("section[id]")

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId =current.getAttribute("id"),
            sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                sectionsClass.classList.add("active-link")
            }else{
                sectionsClass.classList.remove("active-link")
            }
    })

}

window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION  Section===============*/

const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay: 400,
    // reset: true   //Animation repeat
})


sr.reveal(`.home_data, .home_social, .contact_container, .footer_container`)
sr.reveal(`.home_image`, {origin: 'bottom'})
sr.reveal(`.about_data, .skills_data`, {origin: 'left'})
sr.reveal(`.about_image, .skills_content`, {origin: 'right'})
sr.reveal(`.services_card, .projects_card`, {interval: 100})