function myFunction() {
    var x = document.getElementById("display");
    var y = document.querySelector("#margin");
    var about = document.querySelector("#about");
    if (x.style.display == "flex") {
      x.style.display = "none";
      y.style.marginTop ="0px";
      about.style.marginTop="0px";

     
    } else {
      x.style.display = "flex";
      y.style.marginTop ="50px";
      about.style.marginTop="px";


    }
  }