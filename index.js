function hamburgerMenu() {
    let navList = document.getElementById('myNavList');
    let fancyfont= document.getElementById('fancyfont');
    console.log(navList.className)
    if (navList.className === "navList") {
        navList.className += " responsive";
        fancyfont.className += " startbootstrap"
    } else {
        navList.className = "navList";
        fancyfont.className = "";
    }
    console.log(navList.className)
}

