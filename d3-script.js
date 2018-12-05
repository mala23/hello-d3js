function d3Script() {
  var dataset = [ 25, 7, 5, 26, 11 ];

  d3.select("#exercise01").selectAll("p")
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

  d3.select("#exercise08").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d * 5
      return barHeight + "px"
    })

  var width = 500
  var height = 50

  var svg = d3.select("#exercise11")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
}
