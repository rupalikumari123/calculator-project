



let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displayTime(){
    let date=new Date();

    //Getting hurs,min,secs fro date
    let hh=date.getHours();
    let mm=date.gateMinutes();
    let ss=date.getSeconds();

    let hRotation=30*hh+mm/2;
    let mRotation=6*mm;
    let sRotation=6*ss;

    hr.style.transform=`rotate(${hRotation}deg)`;
    min.style.transform=`rotate(${mRotaion}deg)`;
    sec.style.transform=`rotate(${sRotation}deg)`;

}
setInterval(dispalyTime,1000);
