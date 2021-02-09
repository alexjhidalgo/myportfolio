function myFunction() {

    let x = document.getElementById("myLinks");

    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}
$(window).resize(function() {

    let x = document.getElementById("myLinks")

    if( $(this).width() >= 634 ) {
        x.style.display = "block";
    }
});

$(window).resize(function() {

    let x = document.getElementById("myLinks")

    if( $(this).width() <= 634 ) {
        x.style.display = "none";
    }
});