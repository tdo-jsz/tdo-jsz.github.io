$.ajax("teamerliste.txt").done(function(d){
  var x = d.split("\n");
  var t = "";
  for (var i = 0; i < x.length; i++){
  
    t += "<tr>";
    var l = x[i].split(",");
    for (var j = 0; j < l.length; j++){
      t += "<td>"+l[j]+"</td>";
    }
    t += "</tr>";
  }
  $("#tbl").html(t);
});
