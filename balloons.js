document.addEventListener("DOMContentLoaded", function() {
  const elem = document.getElementById('dob');
  const datepicker = new Datepicker(elem, {
    // options
    autohide: true,
    format: 'MM-dd'
  });

  var anyBalloonSelected = false;

  const happyAnimate = [
    "animate__bounce",
    "animate__flash",
    "animate__pulse",
    "animate__rubberBand",
    "animate__shakeX",
    "animate__shakeY",
    "animate__headShake",
    "animate__tada",
    "animate__wobble",
    "animate__jello",
    "animate__heartBeat"
  ]; 

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  document.getElementById('happy').classList.add("animate__animated");
  document.getElementById('happy').classList.add(happyAnimate[getRandomInt(11)]);

  document.getElementById('submit').addEventListener('click', function(e){
    let anyBalloonSelected = false;
    document.querySelectorAll('.form-check-input').forEach((item) => {
      if(item.checked == true){
        anyBalloonSelected = true;
      }
    });
    if(anyBalloonSelected == false){
      e.preventDefault();
      bootstrap.Toast.getOrCreateInstance(document.getElementById('liveToast'), { autohide: false}).show();
    }
  });
  
  //check all elements
  document.getElementById('check-all').addEventListener('click', function(e){
    document.querySelectorAll('.form-check-input').forEach((c) => {
      c.checked = true;
      document.getElementById(c.id + 'Img').style.visibility = c.checked ? "visible" : "hidden";
      const elem = document.getElementById(c.id + 'Img');
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      elem.style.visibility = "visable";
      elem.classList.add("animate__animated", "animate__bounceInDown");
    });
  });
  
  //uncheck all elements
  document.getElementById('uncheck-all').addEventListener('click', function(e){
    document.querySelectorAll('.form-check-input').forEach((c) => {
      c.checked = false;
      //document.getElementById(c.id + 'Img').style.visibility = c.checked ? "visible" : "hidden";
      const elem = document.getElementById(c.id + 'Img');
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      //elem.style.visibility = "visable";
      elem.classList.add("animate__animated", "animate__bounceOutUp");
    });
  });

  document.getElementById('checkbox-card').addEventListener('mouseover', function(e){
    if (e.target.classList.contains('form-check-label')) {
      document.getElementById('happy').style.color = e.target.id.slice(0, -5);
    }
  });

  document.getElementById('checkbox-card').addEventListener('mouseout', function(e){
    if (e.target.classList.contains('form-check-label')) {
      document.getElementById('happy').style.color = "black";
    }
  });

  // uncheck all boxes by default (Firefox)
  document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
  
  // event listener for check/uncheck
  document.getElementById('checkbox-card').addEventListener('change', function(e){
    if (e.target.classList.contains('form-check-input')) {
      document.getElementById(e.target.id + 'Img').style.visibility = e.target.checked ? "visible" : "hidden";
      const elem = document.getElementById(e.target.id + 'Img');
      elem.style.visibility = "visible";
      elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
      e.target.checked ?
        elem.classList.add("animate__animated", "animate__bounceInDown") :
        elem.classList.add("animate__animated", "animate__bounceOutUp");
    }
  });
});