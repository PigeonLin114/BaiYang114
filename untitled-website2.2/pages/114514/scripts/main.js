//https://www.bilibili.com/video/BV1GJ411x7h7/
function Random(){
  var min = document.getElementById('min').value;
  var max = document.getElementById("max").value;
  var result = Math.floor(Math.random() * (max - min) + min);
  document.write(result);
}