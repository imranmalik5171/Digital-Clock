let hrs = document.getElementById('hrs');
let mins = document.getElementById('mins');
let sec = document.getElementById('sec');

setInterval(()=>{
    let d = new Date();

hrs.innerHTML = (d.getHours()<10?"0":"") + d.getHours();
mins.innerHTML = (d.getMinutes()<10?"0":"") + d.getMinutes();
sec.innerHTML = (d.getSeconds()<10?"0":"") + d.getSeconds();
},1000)   


