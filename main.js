
const nav = document.getElementById('about');
const navTop = nav.offsetTop;


$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY >= navTop) {
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // Hamburger Menu

    let hamburgerMenu = document.querySelector('.hamburger-menu')
    let navDisplay = document.querySelector('.nav-link')

    hamburgerMenu.addEventListener('click', ()=>{
        navDisplay.classList.toggle('active')
    })


    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });


    // toggle menu bar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    //  typing animation script
    var typed = new Typed(".typing", {
        strings: ['Software Engineer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // Email

    const submitBtn = document.getElementById('submit-msg')
    submitBtn.addEventListener('click', sendMail)

    function sendMail(params){
        var tempParams = {
            from_name: document.getElementById('first-name').value + ' ' + document.getElementById('last-name').value,
            user_email: document.getElementById('client-email').value,
            email_subject: document.getElementById('subject').value,
            to_name: 'Chinwuba Israel',
            message: document.getElementById('message').value
        };

        emailjs.send('service_visjccq', 'template_q26rvdb', tempParams)
        .then(function(res){
            console.log('success',res.status);
            alert('sent')
        })
    }
});

// Email

// function sendMail(){
//     Email.send({
//         Host : "smtp.gmail.com",
//         Username : "chiizzy12a@gmail.com",
//         Password : "Igwebike1",
//         To : 'chiizzy5@gmail.com',
//         From : document.getElementById("email").value ,
//         Subject : "Wadup gee",
//         Body : "And this is the body"
//     }).then(
//       message => alert(message)
//     );
// }

