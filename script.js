let _24 = true;

let checkbox = document.getElementById("check");
checkbox.addEventListener("change", function() {
  if (this.checked) {
    _24 = false;
  } else {
    _24 = true;
  }
});

function update(){

    const date = new Date();
    const Hours = date.getHours().toString().padStart(2,0);
    const Min = date.getMinutes().toString().padStart(2,0);
    const Sec = date.getSeconds().toString().padStart(2,0);
    const merdiem = Hours >= 12 ? "PM" : "AM";

    let hours = Hours % 12 || 12;
    hours = hours.toString().padStart(2,0);

    let timestr = `${Hours}:${Min}:${Sec}`;

    if(_24){
        document.getElementById("clock").textContent = timestr;
    }
    else{
        timestr = `${hours}:${Min}:${Sec} ${merdiem}`;
        document.getElementById("clock").textContent = timestr;
    }
    
}

update();
setInterval(update,1000);