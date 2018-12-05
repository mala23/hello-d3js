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

  var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle")

  circles.attr("cx", function(d, i) {
    return (i * 50) + 25
    })
    .attr("cy", height/2)
    .attr("r", function(d) {
      console.log(d)
      return d
    })
    .attr("fill", "yellow")
    .attr("stroke", "orange")
    .attr("stroke-width", function(d) {
      return d/2
    })

  var barsWidth = 500
  var barsHeight = 100
  var barsPadding = 1

  var svgBars = d3.select("#exercise13")
    .append("svg")
    .attr("width", barsWidth)
    .attr("height", barsHeight)

  svgBars.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("x", function(d, i) {
      return i * (barsWidth / dataset.length)
    })
    .attr("y", function(d) {
      return barsHeight - d * 4
    })
    .attr("width", barsWidth / dataset.length - barsPadding)
    .attr("height", function(d) {
      console.log(d)
      return d * 4
    })
    .attr("fill", function(d) {
      return "rgb(0, 0, " + (d * 10) + ")"
    })

  svgBars.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .text(function(d) {
      return d
    })
    .attr("x", function(d, i) {
      return i * (barsWidth / dataset.length) + (((barsWidth / dataset.length)) / 2 - 10)
    })
    .attr("y", function(d, i) {
      return barsHeight + 25
    })
    .attr("font-family", "sans-serif")
    .attr("font-size", "1rem")
}
