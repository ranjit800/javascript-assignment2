function generateCard() {
    console.log("debug");
    const Name = document.getElementById("inname").value;
    const College = document.getElementById("incollege").value;
    const Location = document.getElementById("inlocation").value;

    document.getElementById("name").textContent = Name;
    document.getElementById("college").textContent = College;
    document.getElementById("location").textContent = Location;
  
}

function generateCard() {
    console.log("debug");
    const Name = document.getElementById("inname").value;
    const College = document.getElementById("incollege").value;
    const Location = document.getElementById("inlocation").value;

    document.getElementById("name").textContent = Name;
    document.getElementById("college").textContent = College;
    document.getElementById("location").textContent = Location;
  
}


function loadImage(event){
const image = document.getElementById("imgDisplayed");
image.src = URL.createObjectURL(event.target.files[0])
}

loadImage();
function loadImage(event){
const image = document.getElementById("imgDisplayed");
image.src = URL.createObjectURL(event.target.files[0])
}

loadImage();