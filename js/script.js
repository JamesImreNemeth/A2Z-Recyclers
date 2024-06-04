// Carousel Section
const buttons = document.querySelectorAll("[data-carousel-button]") // Gets all the buttons with data-carousel

buttons.forEach(button => {
  button.addEventListener("click", () => { // loops through all the buttons and adds a click event
    const offset = button.dataset.carouselButton === "next" ? 1 : -1 // If the img = next, add one, if not then add -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]") // Gets all the slides from the HTML

    const activeSlide = slides.querySelector("[data-active]") //Finds the active slide with the data-active attribute
    let newIndex = [...slides.children].indexOf(activeSlide) + offset // finds the new index of the active slide depending if it was prev or next
    if (newIndex < 0) newIndex = slides.children.length - 1 // If we back, then go to the last image
    if (newIndex >= slides.children.length) newIndex = 0 // If we got past the last slide, go back to the start

    slides.children[newIndex].dataset.active = true // The next image that is selected will become active
    delete activeSlide.dataset.active // The old image will delete its active status attribute
  })
})

// Needs to be fixed!

function updateClock() {
  const now = new Date();
  // Gathers all the information for the time (Hours, Minutes and Seconds)
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  // Finds the clock element and displays the time
  document.getElementById('clock').textContent = `${hours}:${minutes}:${seconds}`;
}

// Call updateClock function every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();

// Allows user to naviagte between HTML pages using the button
document.getElementById("projects_btn").addEventListener("click", function () {
  window.location.href = "projects.html";
})
document.getElementById("tips_btn").addEventListener("click", function () {
  window.location.href = "tips.html";
})
document.getElementById("login_btn").addEventListener("click", function () {
  window.location.href = "login.html";
})

// Another method od using a button through JS
function galleryBtn() {
  document.getElementById("gallery")
  window.location.href = "gallery.html";
}

// Fucntions used to hide and show the menu when in open a mobile
function showSidebar(){
const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}

function hideSideBar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}

// Function used to check if the user has written the correct text before pressing submit, if not they will get a pop-up.
const subElement = document.getElementById("subscribe-text")

function newsletter_checker(e){
  let char = /@/;
  if (subElement.value.match(char)){
    alert("Thankyou for signing up!");
    subElement.value = "";
  }
  else{
    alert("Please enter valid email");
    subElement.value = "";
  }
}

function openPage(){
    var search = document.getElementById("search-bar").value;

    if (search === "home"){
      window.open("index.html");
    }
    if (search === "projects"){
      window.open("projects.html");
    }
    if (search === "tips"){
      window.open("tips.html");
    }
    if (search === "login"){
      window.open("login.html");
    }
    if (search === "contact"){
      window.open("contact.html");
    }
    if (search === "gallery"){
      window.open("gallery.html");
    }
}


function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

function validateName(name) {
  let char = /^[a-zA-Z.\s]+$/;
  return char.test(String(name).toLowerCase());
}

function validateNumber(number) {
  let num = /[0123456789]/;
  return num.test(String(number).toLowerCase());
}

function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const number = document.getElementById('number').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMessage = document.getElementById('error-message');

  let errors = [];

  if (name === "") {
    errors.push("Name is required.");
    } 
    else if (!validateName(name)) {
    errors.push("Invalid Name.");
  }

  if (email === "") {
      errors.push("Email Address is required.");
  } else if (!validateEmail(email)) {
      errors.push("Invalid Email Address.");
  }

  if (number === "") {
    errors.push("Number is required.");
    } 
    else if (!validateNumber(number)) {
    errors.push("Invalid Number.");
  }

  if (password === "") {
      errors.push("Password is required.");
  } else if (password.length < 6) {
      errors.push("Password must be at least 6 characters long.");
  }

  if (errors.length > 0) {
      errorMessage.innerHTML = errors.join("<br>");
      return false;
  } else {
      errorMessage.innerHTML = "";
      // Proceed with form submission or further processing
      alert("Thankyou!");
      
      return true;
  }
}


