var header = document.getElementById('header');
header.onmousemove = (e) => {
    e.target.style.backgroundColor = "rgba(50, 70, 60, 0.822)";
    document.getElementById('span1').style.display = 'block'
    document.getElementById('vdeo1').play();
}

header.onmouseout = (e) => {
    e.target.style.backgroundColor = "rgba(0,0,0,0)"
    document.getElementById('span1').style.display = 'none'
    document.getElementById('vdeo1').pause();
}

// alert 1:
$(document).ready(() => {
    $('#clo').click(() => {
        alert({
            title: 'Thông báo',
            content: 'Thi đậu môn js',
        })
    })
})

//alert 2:
$(document).ready(function () {
    var object = $('.box');
    $('#showBox').click(function () {
        object.show();
    });
    $('.close').click(function () {
        object.hide();
    })
})

// alert 3:
Swal.fire({
    title: 'Custom width, padding, color, background.',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `
})

function them(butn) {
    var row = butn.parentElement.parentElement.cloneNode(true);
    var xoa = row.getElementsByTagName('button')[0];
    xoa.innerText = "xóa";
    xoa.setAttribute('onclick', 'xoa(this)');
    document.getElementById("gioHang").appendChild(row);
    tong();
}

function xoa(butn2) {
    var row = butn2.parentElement.parentElement;
    document.getElementById("gioHang").removeChild(row);
    tong();
}

function tong() {
    var cart = document.getElementById("gioHang");
    var rows = cart.getElementsByTagName("tr");
    var tong = 0;
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td")[1];
        var price = cells.innerText.substring(1, 5);
        tong += Number(price);
    }
    document.getElementById("tong").innerText = tong;
}