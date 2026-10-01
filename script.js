function showMessage() {

    alert("Thank you for choosing Onion Food!");

}


function goToPricing() {

    document.getElementById("pricing").scrollIntoView({
        behavior: "smooth"
    });

}


function goToHowItWorks() {

    document.getElementById("how-it-works").scrollIntoView({
        behavior: "smooth"
    });

}


function openMobilePage() {

    document.querySelector(".mobile-intro").style.display = "none";

}


/* Mobile Navigation */

function toggleMobileMenu() {

    let nav = document.querySelector("nav");

    nav.classList.toggle("mobile-nav-open");

}
function toggleMobileMenu() {
    document.querySelector("nav").classList.toggle("mobile-nav-open");
}