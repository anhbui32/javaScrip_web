var i;
var arrProduct = [
    './images/mer1.jpg'
];

function changeImg1() {
    document.slide.src = arrProduct[i]
    if (i <= arrProduct.length - 1) {
        i++
    } else {
        i = 0;
    }
    setTimeout()
}