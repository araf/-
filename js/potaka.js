div = document.getElementById('potaka');

function drawFlag(div, width) {
    div.innerHTML = '';

    red = document.createElement('div');
    green = document.createElement('div');
    rs = red.style;
    gs = green.style;

    rs.backgroundColor = 'red';
    gs.backgroundColor = 'green';

    rs.position = 'realtive';

    x = width;
    gs.width = x;
    gs.height = x * 3 / 5;
    rs.left = x / 4;
    rs.top = x / 10;
    rs.width = 2 * x / 5;
    rs.height = 2 * x / 5;
    rs.borderRadius = x / 5;

    green.appendChild(red);
    div.appendChild(green);
}

width = 100;


function doResize(e) {
    var evt = window.event || e;
    var delta = evt.detail ? evt.detail * (-120) : evt.wheelDelta;
    if (delta < 0) {
        width++;

    } else {
        width--;
    }

    drawFlag(div, width);
}

var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel";

if (document.attachEvent)
    document.attachEvent("on" + mousewheelevt, doResize);
else if (document.addEventListener)
    document.addEventListener(mousewheelevt, doResize, false);