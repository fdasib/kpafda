// Detect path
if (location.pathname.indexOf("index") != -1) {
    document.querySelector("a[href='index.html']").classList.add("active");
} else if (location.pathname.indexOf("image") != -1) {
    document.querySelector("a[href='image.html']").classList.add("active");
}

// Click Sosmed
let navbarSosmed = false;
document
    .querySelector(".container-navbar-sosmed")
    .classList.add("navbar-sosmed-hilang");

document.getElementById("sosmed").addEventListener("click", function () {
    if (navbarSosmed) {
        navbarSosmed = false;
    } else {
        navbarSosmed = true;
    }

    if (navbarSosmed) {
        document
            .querySelector(".container-navbar-sosmed")
            .classList.remove("navbar-sosmed-hilang");
    } else {
        document
            .querySelector(".container-navbar-sosmed")
            .classList.add("navbar-sosmed-hilang");
    }
});

// click opsi sosmed
document
    .querySelector(".navbar-sosmed")
    .addEventListener("click", function (e) {
        if (
            e.target.matches(".fa-instagram") ||
            e.target == document.querySelector("#ig span")
        ) {
            website2APK.openExternal("https://instagram.com/_program.is.fun_");
        } else if (
            e.target.matches(".fa-twitter") ||
            e.target == document.querySelector("#tw span")
        ) {
            website2APK.openExternal("https://twitter.com/programisfun");
        } else if (
            e.target.matches(".fa-tiktok") ||
            e.target == document.querySelector("#tk span")
        ) {
            website2APK.openExternal("https://www.tiktok.com/@programisfun?_");
        }
    });

// Scroll Hidden
var startScrollPos = window.pageYOffset;
window.addEventListener("scroll", function () {
    var currentScrollPos = window.pageYOffset;
    if (startScrollPos > currentScrollPos) {
        document.querySelector("footer").style.bottom = "0";
        document.querySelector("header").style.top = "0";
    } else {
        document.querySelector("footer").style.bottom = "-100%";
        document.querySelector("header").style.top = "-100%";
    }
    startScrollPos = currentScrollPos;
});
