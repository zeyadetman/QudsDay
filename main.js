var i = -1;
var bgi = ["assets/images/1.jpg", "assets/images/2.jpg", "assets/images/3.jpg", "assets/images/4.jpg"];
var time = 8000


window.setInterval(chgBG, time);

function chgBG(arr) {
    i++;
    console.log(i % 2);
    bG = bgi[i % bgi.length].toString();
    console.log(bG.toString());
    document.getElementById('header').style.backgroundImage = "url('" + bG + "')";
}

window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };

    return t;
}(document, "script", "twitter-wjs"));