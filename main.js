var xhr = new XMLHttpRequest();
var url = "http://1.234.198.25:9090/api/login";
var queryString = window.location.search;
var data = new URLSearchParams(queryString);
var code = data.get("CODE");


$(document).ready(function() {
  init();
});

function init() {
  var params = "CODE=" + (code);
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
            $("#memo").text(response.message)               
      }
  };
  xhr.send(params);
}

function fnSave(){
  var memo = $("#memo").text();
  var params = "CODE=" + code + "&MEMO=" + memo ;
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var response = JSON.parse(xhr.responseText);
          alert("저장되었습니다.");
      }
      else{
        alert("저장실패");
      }
  };
  xhr.send(params);
}

