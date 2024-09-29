/* ---------------------On click nav bar function ---------------- */

function toggleNavbar() {
  var navbar = document.getElementById('hiddenNavbar');
  navbar.classList.toggle('show'); // Toggle the 'show' class
}
// Get all the links in the hidden navbar options
var hiddenNavbarOptions = document.querySelectorAll('.hidden-navbar-options a');

// Add a click event listener to each link
for (var i = 0; i < hiddenNavbarOptions.length; i++) {
  hiddenNavbarOptions[i].addEventListener('click', function () {
    // Hide the hidden navbar when a link is clicked
    var navbar = document.getElementById('hiddenNavbar');
    navbar.classList.remove('show');
  });
}

/*----------------------Dark Mode Toggle butoon----------------------*/

const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");

checkbox1.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

checkbox2.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

/*-------------------------------TYPING EFFECT----------------------------*/
let typingEffect = new Typed(".typedText", {
  strings: ["Web Developer","Software Developer", "Designer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 3000
})

/* ----------------------CHANGE ACTIVE LINK---------------------- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 40,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

      document.querySelector('.nav-section a[href*=' + sectionId + ']').classList.add('active-link')

    } else {

      document.querySelector('.nav-section a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}
window.addEventListener('scroll', scrollActive)

/* -------------------- SCROLL REVEAL ANIMATION --------------------------------- */

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.name', {})
sr.reveal('.typedtext', { delay: 100 })
sr.reveal('.aboutme', { delay: 200 })
sr.reveal('.buttons', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.selfimage', { delay: 300 })
sr.reveal('.introduction', { delay: 100 })
sr.reveal('.skill-box', { delay: 100 })

/*------------------------PROJECT BOX-----------------------*/
sr.reveal('.project-wrapper', { interval: 200 })

/*---------------------- FORM SUBMIT-----------------------*/

document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('#myForm form');
  const nameInput = document.querySelector('input[name="name"]');
  const emailInput = document.querySelector('input[name="email"]');
  const messageInput = document.querySelector('textarea[name="message"]');
  const resultDiv = document.querySelector('#result');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Check if all fields are filled
    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      alert('Please fill all the fields');
      return;
    }

    // Submit the form using Fetch API
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: new FormData(form)
    })
      .then(response => response.json())
      .then(data => {
        // Show the dialog message with styling
        resultDiv.textContent = ' Message Sent ✓ ';
        resultDiv.style.position = 'fixed'; // Position fixed
        resultDiv.style.top = '50%'; // Center vertically
        resultDiv.style.left = '50%'; // Center horizontally
        resultDiv.style.transform = 'translate(-50%, -50%)'; // Adjust for the element's own dimensions
        resultDiv.style.display = 'flex'; // Use flexbox for centering text
        resultDiv.style.justifyContent = 'center'; // Center text horizontally in the flex container
        resultDiv.style.alignItems = 'center'; // Center text vertically in the flex container
        resultDiv.style.backgroundColor = '#4CAF50'; // Green background color
        resultDiv.style.color = 'white'; // White text color
        resultDiv.style.padding = '15px 30px'; // Corrected padding
        resultDiv.style.borderRadius = '8px'; // Add border radius

        // Clear the input fields
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';

        // Hide the dialog message after 1 second
        setTimeout(function () {
          resultDiv.style.display = 'none'; // Hide the dialog box
        }, 1000);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
