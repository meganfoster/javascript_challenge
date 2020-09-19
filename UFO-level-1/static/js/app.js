// from data.js
var tableData = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach(function(sighting) {
    // console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
      // console.log(key, value);
      // Append a cell to the row for each value
      // in the UFO Sightings object
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Clear table rows
  tbody.html("")
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select(".form-control");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(event => event.datetime === inputValue);

  console.log(filteredData);

  filteredData.forEach(function(sighting) {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
      });
    });
}