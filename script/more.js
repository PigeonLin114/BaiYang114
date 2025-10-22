const more = document.getElementById("more")

more.addEventListener("mousedown", function() {
    document.getElementById("more").style.display = "none";
    document.getElementById("history").style.display = "grid";
});
