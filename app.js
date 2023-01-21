var datepicker = document.getElementById("datepicker");
var chosenDate = document.getElementById("choosenDate");
var ageYear = document.getElementById("ageYear");
var ageMonth = document.getElementById("ageMonth");
var ageDays = document.getElementById("ageDays");
var ageHours = document.getElementById("ageHours");
var ageSeconds = document.getElementById("ageSeconds");
var ageMiliSeconds = document.getElementById("ageMiliSeconds");

datepicker.addEventListener("change", function () {
  var options = { year: "numeric", month: "long", day: "numeric" };
  var selectDate = new Date(this.value);
  var DOB = selectDate.toLocaleDateString("en-US", options);

  var miliSeconds_Btw_DOB = Date.parse(DOB);
  var miliSeconds_Btw_NOW = Date.now();

  var age_in_MiliSeconds = miliSeconds_Btw_NOW - miliSeconds_Btw_DOB;

  //console.log(age_in_MiliSeconds);//
  var miiliSeconds = age_in_MiliSeconds;
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;
  var month = day * 30;
  var year = day * 365;
  // calculating//

  var years = Math.round(miiliSeconds / year);
  var months = years * 12;
  var days = years * 365;
  var hours = Math.round(miiliSeconds / hour);
  var seconds = Math.round(miiliSeconds / second);

  //printing values//

  ageYear.innerHTML = years;
  ageMonth.innerHTML = months;
  ageDays.innerHTML = days;
  ageHours.innerHTML = hours;
  ageSeconds.innerHTML = seconds;
  ageMiliSeconds.innerHTML = miiliSeconds;
  chosenDate.innerHTML = DOB;

  document.querySelector('.age-calc').classList.add('expand');
  
});

