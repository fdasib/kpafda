if (localStorage.getItem("pass") == "true") {
    location.href = "index.html";
}
localStorage.setItem("pass", false);
document.querySelector("input").addEventListener("keyup", function () {
    let value = document.querySelector("input").value;
    if (value == "kpaf2728fda") {
        localStorage.setItem("pass", true);
        location.href = "file:///D:/Project/com.fda.kpafda/index.html";
    }
});
