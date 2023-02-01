document.querySelector(".template-navbar").innerHTML = `
        <footer>
        <div class="navbar">
            <a href="image.html">
                <i class="fa-regular fa-image"></i>
                <span>Image</span>
            </a>
            <a id="sosmed">
                <i class="fa-solid fa-paperclip"></i>
                <span>Sosmed</span>
            </a>
            <a href="index.html">
                <i class="fa-solid fa-house-chimney"></i>
                <span>Home</span>
            </a>
            <a href="#pif">
                <i class="fa-solid fa-user-group"></i>
                <span>PIF</span>
            </a>
            <a href="security.html">
                <i class="fa-solid fa-lock"></i>
                <span>Security</span>
            </a>
        </div>

        <div class="container-navbar-sosmed">
            <hr />
            <div class="navbar navbar-sosmed">
                <a href="#" id="ig">
                    <i class="fa-brands fa-instagram"></i>
                    <span>Instagram</span>
                </a>
                <a href="#" id="tw">
                    <i class="fa-brands fa-twitter"></i>
                    <span>Twitter</span>
                </a>
                <a href="#" id="yt">
                    <i class="fa-brands fa-youtube"></i>
                    <span>Youtube</span>
                </a>
                <a href="#" id="tk">
                    <i class="fa-brands fa-tiktok"></i>
                    <span>Tiktok</span>
                </a>
            </div>
        </div>
    </footer>`;
