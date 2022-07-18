var products = document.getElementById('products')

function scrollbtn(direction) {
    if(direction==='left'){
        products.scrollBy(-1500,0)
    }else{
        products.scrollBy(1500,0)
    }
    
}




window.addEventListener("resize", (e) => {
    var screen = window.innerWidth;
    if (screen <= 992) {
        document.getElementById('leftbtn').style.display = "none";
        document.getElementById('rightbtn').style.display = "none";
    } else {
        document.getElementById('leftbtn').style.display = "block";
        document.getElementById('rightbtn').style.display = "block";
    }
})