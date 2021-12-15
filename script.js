function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } 
    else {
      x.style.display = "block";
    }
  };

function goToMePage() {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let kay = path.length - page.length;
    window.location.href = `${path.slice(0,kay)}me.html`;

}

function goToProjectsPage() {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let kay = path.length - page.length;
    window.location.href = `${path.slice(0,kay)}my_work.html`;
}

function goToContactPage() {
    let path = window.location.pathname;
    let page = path.split("/").pop();
    let kay = path.length - page.length;
    window.location.href = `${path.slice(0,kay)}contact.html`;
}