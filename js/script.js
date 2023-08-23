/*==================================== toggle icon navbar==========================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/*====================================Scroll section active link==========================*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
        
    });
    /*====================================Sticky navbar==========================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================================== remove toggle icon and navbar when click navbar link(scroll)==========================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

 /*====================================Scroll reversal==========================*/

 ScrollReveal({
     reset: true ,
     distance:'80px',
     duration: 2000,
     delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

/*====================================typed js==========================*/

const typed =  new Typed('.multiple-text', {
    strings: ['Java Developer!','Frontend Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/*===============*/
// script.js
emailjs.init("ncjHMlBwV2BJ5hcQE");

function sendEmail() {
    var templateParams = {
        from_name: document.getElementsByName("Full Name")[0].value,
        from_email: document.getElementsByName("Email Address")[0].value,
        from_mobile: document.getElementsByName("Mobile Number")[0].value,
        email_subject: document.getElementsByName("Email Subject")[0].value,
        message: document.getElementsByName("Message")[0].value
    };

    emailjs.send("service_asgxar6", "template_tbab4pf", templateParams)
        .then(function(response) {
            console.log("Email sent successfully:", response);
            alert("Email sent successfully!");

            // Clear form fields after sending the message
            document.getElementsByName("Full Name")[0].value = "";
            document.getElementsByName("Email Address")[0].value = "";
            document.getElementsByName("Mobile Number")[0].value = "";
            document.getElementsByName("Email Subject")[0].value = "";
            document.getElementsByName("Message")[0].value = "";
        })
        .catch(function(error) {
            console.log("Email could not be sent:", error);
            alert("Email could not be sent. Please try again later.\nError: " + error);
        });
        
}

