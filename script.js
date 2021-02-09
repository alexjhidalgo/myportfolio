function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
  };

function goToAboutMePage() {
    var x = document.getElementById("about-me-page");
    if (x.style.display === "block"){
        x.style.display = "block"
    }
    else {
        document.getElementById("projects-page").style.display = "none";
        document.getElementById("contact-page").style.display = "none";
        x.style.display = "block"
    }
}

function goToProjectsPage() {
    var x = document.getElementById("projects-page");
    if (x.style.display === "block"){
        x.style.display = "block"
    }
    else {
        document.getElementById("about-me-page").style.display = "none";
        document.getElementById("contact-page").style.display = "none";
        x.style.display = "block"
    }
}

function goToContactPage() {
    var x = document.getElementById("contact-page");
    if (x.style.display === "block"){
        x.style.display = "block"
    }
    else {
        document.getElementById("projects-page").style.display = "none";
        document.getElementById("about-me-page").style.display = "none";
        x.style.display = "block"
    }
}