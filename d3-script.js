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
      return i * (barsWidth / dataset.length) + (barsWidth / dataset.length - barsPadding) / 2
    })
    .attr("y", function(d, i) {
      return barsHeight + 25
    })
    .attr("text-anchor", "middle")
    .attr("font-family", "sans-serif")
    .attr("font-size", "1rem")

  var datasetScatterplot = [
    ['Poultry', 3.3, 4.5],
    ['Pork', 6.4, 1.8],
    ['Beef', 25, 0.08],
    ['Eggs', 2.3, 0.09],
    ['Whole Milk', 0.7, 0.22]]

  var widthScatterplot = 500
  var heightScatterplot = 300
  var paddingScatterplot = 80

  var xScale = d3.scaleLinear()
    .domain([0, 25])
    //.domain([0, 3d.max(datasetScatterplot, function(d) { return d[1] })])
    .range([0, widthScatterplot - paddingScatterplot])

  var yScale = d3.scaleLinear()
    .domain([0, 4.5])
    //.domain([0, 3d.max(datasetScatterplot, function(d) { return d[2] })])
    .range([heightScatterplot - paddingScatterplot, paddingScatterplot])

  var rScale = d3.scaleLinear()
    .domain([0, 4.5])
    .range([5, 8])

  var svgScatterplot = d3.select('#exercise14')
    .append('svg')
    .attr('width', widthScatterplot)
    .attr('height', heightScatterplot)

  svgScatterplot.selectAll('circle')
    .data(datasetScatterplot)
    .enter()
    .append('circle')
    .attr('cx', function(d) {
      return xScale(d[1])
    })
    .attr('cy', function(d) {
      return yScale(d[2])
    })
    .attr('r', function(d) {
      return rScale(d[1])
    })

  svgScatterplot.selectAll("text")
    .data(datasetScatterplot)
    .enter()
    .append('text')
    .text(function(d) {
      return d[1] + ',' + d[2]
    })
    .attr('x', function(d) {
      return xScale(d[1])
    })
    .attr('y', function(d) {
      return yScale(d[2])
    })
    .attr('font-family', 'sans-serif')
    .attr('font-size', '1rem')
    .attr('fill', 'red')

  var xAxis = d3.axisBottom(xScale)

  svgScatterplot.append("g")
    .attr('class', 'axis')
    .attr('transform', 'translate(0,' + (50 + (heightScatterplot - paddingScatterplot)) + ')')
    .call(xAxis)
}
