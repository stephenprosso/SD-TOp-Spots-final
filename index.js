$(document).ready(function(){

  $.getJSON("info.json", function(data){
    for (var i = 0; i < data.length; i++){
        var name = data[i].name;
        var description = data[i].description;
        var lat = data[i].location[0];
        var long = data[i].location[1];
      var link = "https://www.google.com/maps?q=" + lat + long;
      var anchor = '<a href="https://www.google.com/maps?q="' + lat + ',' + long + '> click here </a>';
      $("#TopSpotTable").append
      ("<tr>" +
        "<td>" + name + "</td>" +
        "<td>" + description + "</td>" +
        "<td>" + anchor + "</td>" +
        "</tr>");
    }
  });
});
