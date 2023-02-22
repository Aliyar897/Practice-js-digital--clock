setInterval(() => {
  var date = new Date();
  var hour = date.getHours();
  var mins = date.getMinutes();
  var seconds = date.getSeconds();
  let d = date.getDate();
  var ele = document.getElementById("clockcontainer");
  ele.innerHTML = "Time is: " + hour + ":" + mins + ":" + seconds;
  d;
}, 1000);
