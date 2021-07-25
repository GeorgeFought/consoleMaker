function infoFunction() {
    document.getElementById("infoDropdown").classList.toggle("info-show");
}

window.onclick = function (event) {
    if (!event.target.matches('.info-dropbtn')) {
        var dropdowns = document.getElementsByClassName("info-dropdown-content");
        var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('info-show')) {
                    openDropdown.classList.remove('info-show');
                }
            }
    }
}