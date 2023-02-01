// Click Header
let textDipilih = document.querySelectorAll(".opsi ul li");

textDipilih.forEach((e) => {
    if (e.textContent == window.localStorage.getItem("folder")) {
        e.classList.add("dipilih");
    } else if (window.localStorage.getItem("folder") == null) {
        document.querySelectorAll("ul li")[0].classList.add("dipilih");
    }
});

// click
document.documentElement.addEventListener("click", function (e) {
    if (e.target.matches(".button-opsi") || e.target.matches("header span")) {
        document.querySelector("main").classList.toggle("hilang");
        document.querySelector("header .opsi").classList.toggle("show");
    } else if (e.target.matches(".opsi li")) {
        let folder = e.target.textContent;

        window.localStorage.setItem("folder", folder);
        fotoVideo();

        textDipilih.forEach((e) => e.classList.remove("dipilih"));
        e.target.classList.add("dipilih");

        document.querySelector("main").classList.toggle("hilang");
        document.querySelector("header .opsi").classList.toggle("show");
    } else if (e.target.matches(".row img")) {
        document.getElementById("myModal").style.display = "block";
    } else if (e.target.matches(".close")) {
        document.getElementById("myModal").style.display = "none";
    }
});

// Setting Element Foto Video
function fotoVideo() {
    let folderSimpan = window.localStorage.getItem("folder");
    let jmlFoto, jmlVideo;
    if (folderSimpan == null) {
        jmlFoto = 52;
        jmlVideo = 9;
        folderSimpan = "07-11-2020";
    }
    document.querySelector("span#folder").textContent = folderSimpan;

    if (folderSimpan == "07-11-2020") {
        jmlFoto = 52;
        jmlVideo = 9;
    } else if (folderSimpan == "07-18-2020") {
        jmlFoto = 19;
        jmlVideo = 0;
    } else if (folderSimpan == "07-25-2020") {
        jmlFoto = 16;
        jmlVideo = 0;
    } else if (folderSimpan == "08-08-2020") {
        jmlFoto = 73;
        jmlVideo = 6;
    } else if (folderSimpan == "08-15-2020") {
        jmlFoto = 74;
        // kurang png
        jmlVideo = 42;
    } else if (folderSimpan == "08-29-2020") {
        jmlFoto = 92;
        jmlVideo = 15;
    } else if (folderSimpan == "09-12-2020") {
        jmlFoto = 40;
        jmlVideo = 8;
    } else if (folderSimpan == "09-26-2020") {
        jmlFoto = 15;
        jmlVideo = 5;
    } else if (folderSimpan == "10-10-2020") {
        jmlFoto = 71;
        jmlVideo = 4;
    } else if (folderSimpan == "10-17-2020") {
        jmlFoto = 79;
        jmlVideo = 20;
    } else if (folderSimpan == "10-19-2020") {
        jmlFoto = 0;
        jmlVideo = 6;
    } else if (folderSimpan == "11-10-2020") {
        jmlFoto = 74;
        jmlVideo = 23;
    } else if (folderSimpan == "11-24-2020") {
        jmlFoto = 21;
        jmlVideo = 56;
    } else if (folderSimpan == "12-15-2020") {
        jmlFoto = 26;
        jmlVideo = 25;
    }

    let column = "";
    let pilihGambar = "";
    let mySlide = "";
    for (let i = 1; i <= jmlFoto; i++) {
        let column2 = `<div class="column">
                    <img
                        src="assset/img/${folderSimpan}/${i}.webp"
                        onclick="currentSlide(${i})"
                        class="hover-shadow cursor"
                    />
                </div>`;
        column += column2;

        let pilihGambar2 = `<div class="column">
                            <img
                                class="pilih cursor"
                                src="assset/img/${folderSimpan}/${i}.webp"
                                onclick="currentSlide(${i})"
                                alt="Gambar ke-${i}"
                            />
                        </div>`;
        pilihGambar += pilihGambar2;

        let mySlide2 = `<div class="mySlides">
                            <div class="numbertext">
                                <span class="posisi">${i}</span> / ${jmlFoto}
                            </div>
                            <img src="assset/img/${folderSimpan}/${i}.webp" />
                        </div>`;
        mySlide += mySlide2;
    }

    for (let i = 1; i <= jmlVideo; i++) {
        let column3 = `<div class="column">
                                    <video controls>
                                        <source src="assset/video/${folderSimpan}/${i}.webm" type="video/webm">
                                    </video>
                                </div>`;
        column += column3;
    }
    document.querySelector(".row").innerHTML = column;
    document.querySelector(".pilihGambar2").innerHTML = pilihGambar;
    document.querySelector(".container-myslides").innerHTML = mySlide;
}
fotoVideo();

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

var pilih = document.getElementsByClassName("pilih");
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var pilih = document.getElementsByClassName("pilih");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < pilih.length; i++) {
        pilih[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    pilih[slideIndex - 1].classList.add("active");
    if (pilih[slideIndex - 1].alt != undefined) {
        captionText.innerHTML = pilih[slideIndex - 1].alt;
    } else {
        captionText.innerHTML = pilih[slideIndex - 1].getAttribute("data-name");
    }
}
