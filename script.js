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
      window.location.href = `${path.slice(0,kay-6)}me.html`;
    }
    else 
    {
      window.location.href = `${path.slice(0,kay)}me.html`;
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