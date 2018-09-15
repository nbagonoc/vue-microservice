$(document).ready(function() {
  $.getJSON("http://localhost:5000/api/items", function(data) {
    var output = "";
    $.each(data, function(key, val) {
      output += "<tr>";
      output += "<td class='text-capitalize'>" + val.name + "</td>";
      output += "<td>" + val.weight + "</td>";
      output += "<td>" + val.size + "</td>";
      output += "<td>";
      output += "</td>";
      output += "</tr>";
    });
    $(".items").html(output);
  });
});
