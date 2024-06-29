document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('carbonFootprintForm');
    const results = document.getElementById('results');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
  
      // Get form values
      const country = document.getElementById('country').value;
      const population = parseFloat(document.getElementById('population').value);
      const emissions = parseFloat(document.getElementById('emissions').value);
      const energy = parseFloat(document.getElementById('energy').value);
      const transport = parseFloat(document.getElementById('transport').value);
  
      // Perform calculations
      const totalEmissions = population * emissions;
      const energyFootprint = (energy / 1000) * population; // Convert kWh to MWh
      const transportFootprint = (transport / 1000) * population; // Convert km to 1000 km
  
      // Display results
      results.innerHTML = `
        <h2>Carbon Footprint Results</h2>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Total CO2 Emissions:</strong> ${totalEmissions.toFixed(2)} tons</p>
        <p><strong>Annual Energy Consumption Footprint:</strong> ${energyFootprint.toFixed(2)} MWh</p>
        <p><strong>Annual Transportation Footprint:</strong> ${transportFootprint.toFixed(2)} 1000 km</p>
      `;
    });
  });