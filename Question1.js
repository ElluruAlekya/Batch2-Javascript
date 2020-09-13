function FirstBtnfn(){
    var change = document.getElementById("plant");
    const otherimage = "https://www.ikea.com/au/en/images/products/fejka-artificial-potted-plant-with-pot__0614211_PE686835_S5.JPG?f=s.jpg"
    change.src = otherimage;

}
function SecBtnfn(){
    var change = document.getElementById("plant");
    const otherimage = "https://i.ebayimg.com/images/g/TzwAAOSw7wxazDHN/s-l300.jpg"
    change.src = otherimage;

}
function ThirdBtnfn(){
    console.log("hello");
    var change = document.getElementById("plant");
    const otherimage = "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
    change.src = otherimage;

}
FirstBtnfn();
SecBtnfn();
ThirdBtnfn();