function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
  };

function goToMePage()
{
    // Gets url and removes file name from endpoint and updates it to have me.html 
    // as the page.
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let kay = path.length - page.length;

    let maybe_html = path.slice(kay-6, kay);
    if (maybe_html == "HTMLs/")
    {
      window.location.href = `${path.slice(0,kay-6)}index.html`;
    }
    else 
    {
      window.location.href = `${path.slice(0,kay)}index.html`;
    }
    
    
}

function goToProjectsPage()
{
    // Gets url and removes file name from endpoint and updates it to have my_work.html 
    // as the page.
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let kay = path.length - page.length;
    let maybe_html = path.slice(kay-6, kay);
    if (maybe_html == "HTMLs/")
    {
      window.location.href = `${path.slice(0,kay)}my_work.html`;
    }
    else 
    {
      window.location.href = `${path.slice(0,kay)}HTMLs/my_work.html`;
    }
}

function goToContactPage()
{
    // Gets url and removes file name from endpoint and updates it to have contact.html 
    // as the page.
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let kay = path.length - page.length;
    let maybe_html = path.slice(kay-6, kay);
    if (maybe_html == "HTMLs/")
    {
      window.location.href = `${path.slice(0,kay)}contact.html`;
    }
    else 
    {
      window.location.href = `${path.slice(0,kay)}HTMLs/contact.html`;
    }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}