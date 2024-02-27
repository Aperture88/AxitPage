document.querySelector('.menu-icon').addEventListener('click', function() {
    var navList = document.querySelector('.header__nav-list');
    this.classList.toggle('active'); 
    if (navList.style.display === "none") {
        navList.style.display = "block";
    } else {
        navList.style.display = "none";
    }
});
