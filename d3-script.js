function d3Script() {
  var dataset = [ 5, 10, 15, 20, 25 ];

  d3.select("body").selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(d) { return d })
    .style("color", function(d) {
      if (d > 15) {
        return "red"
      } else {
        return "black"
      }
    })
}
