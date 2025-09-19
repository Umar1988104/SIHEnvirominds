document.getElementById("calcForm").addEventListener("submit", function(e){
  e.preventDefault();
  let roof = parseFloat(document.querySelectorAll("input")[1].value);
  let space = parseFloat(document.querySelectorAll("input")[2].value);

  // Simple dummy calculation
  let potential = roof * 0.8 * 100; // litres/year approx
  document.getElementById("output").innerText = 
    "Estimated Rainwater Harvesting Potential: " + potential.toFixed(2) + " litres/year";
});
