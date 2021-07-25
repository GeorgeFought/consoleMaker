function inspirationFunction() {
    document.getElementById("inspirationDropdown").classList.toggle("inspiration-show");
}

window.onclick = function (event) {
    if (!event.target.matches('.inspiration-dropbtn')) {
        var dropdowns = document.getElementsByClassName("inspiration-dropdown-content");
        var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('inspiration-show')) {
                    openDropdown.classList.remove('inspiration-show');
                }
            }
    }
}