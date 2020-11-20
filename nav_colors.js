// This function applies the color taken from the sessionStorage.
function navbarSelected(){
    if(sessionStorage.getItem("onclickColor") == "home"){
        document.getElementById("home").style.backgroundColor = "#a27d01"
    }
    else if(sessionStorage.getItem("onclickColor") == "aboutme"){
        document.getElementById("about").style.backgroundColor = "#a27d01"
    }
    else if(sessionStorage.getItem("onclickColor") == "stuff"){
        document.getElementById("stuff").style.backgroundColor = "#a27d01"
    }

}

// Called when page is loaded,saves home in sessionStorage.
function homeColor(){
    sessionStorage.setItem("onclickColor", "home");
}

// Called when page is loaded,saves aboutme in sessionStorage.
function aboutmeColor(){
    sessionStorage.setItem("onclickColor", "aboutme");
}

// Called when page is loaded,saves stuff in sessionStorage.
function stuffColor(){
    sessionStorage.setItem("onclickColor", "stuff");
}