var i =-1;
var bgi = ["1.jpg", "2.jpg","3.jpg","4.jpg"];
var time = 6000


window.setInterval(chgBG, time);

function chgBG(arr){
    i++;
    console.log(i%2);
    bG = bgi[i%bgi.length].toString();
    console.log(bG.toString());
    document.getElementById('header').style.backgroundImage = "url('"+bG+"')";
}
