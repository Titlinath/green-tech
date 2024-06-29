document.addEventListener('DOMContentLoaded', function() {
    // Data for charts and tables
    var roadBlockData = {
        labels: ['Maharashtra', 'Delhi', 'Tamil Nadu', 'Karnataka', 'Gujarat'],
        datasets: [{
            label: 'Road Blocks (%)',
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            data: [30, 40, 25, 35, 28]
        }]
    };

    var healthImpactData = {
        labels: ['Respiratory', 'Gastrointestinal', 'Skin', 'Vector-borne', 'Waterborne'],
        datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            data: [30, 20, 15, 10, 10]
        }]
    };

    var humanDiseasesData = {
        labels: ['Maharashtra', 'Delhi', 'Tamil Nadu', 'Karnataka', 'Gujarat'],
        datasets: [{
            label: 'Human Diseases (%)',
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            data: [30, 40, 25, 35, 28]
        }]
    };

    var animalDiseasesData = {
        labels: ['Livestock/Pets', 'Wildlife', 'Aquatic Life', 'Birds', 'Rodents/Insects'],
        datasets: [{
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            data: [18, 15, 10, 10, 12]
        }]
    };

    var animalImpactData = {
        labels: ['Maharashtra', 'Delhi', 'Tamil Nadu', 'Karnataka', 'Gujarat'],
        datasets: [{
            label: 'Animal Impact (%)',
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            data: [18, 15, 10, 12, 10]
        }]
    };

    // Function to generate tables
    function generateTable(table, data) {
        var tableHead = '<tr><th>State</th><th>Percentage (%)</th></tr>';
        var tableBody = '';

        for (var i = 0; i < data.labels.length; i++) {
            tableBody += '<tr><td>' + data.labels[i] + '</td><td>' + data.datasets[0].data[i] + '</td></tr>';
        }

        table.innerHTML = tableHead + tableBody;
    }

    // Initialize charts and tables
    var ctxBar = document.getElementById('barChart').getContext('2d');
    var ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    var ctxPolarArea = document.getElementById('polarAreaChart').getContext('2d');
    var ctxBubble = document.getElementById('bubbleChart').getContext('2d');
    var ctxScatter = document.getElementById('scatterChart').getContext('2d');

    var barChart = new Chart(ctxBar, {
        type: 'bar',
        data: roadBlockData,
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            hover: {
                animationDuration: 400
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var doughnutChart = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: healthImpactData,
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            hover: {
                animationDuration: 400
            }
        }
    });

    var polarAreaChart = new Chart(ctxPolarArea, {
        type: 'polarArea',
        data: humanDiseasesData,
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            },
            hover: {
                animationDuration: 400
            }
        }
    });

    var bubbleChart = new Chart(ctxBubble, {
        type: 'bubble',
        data: animalDiseasesData,
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.raw.y + '%';
                        }
                    }
                }
            },
            hover: {
                animationDuration: 400
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    var scatterChart = new Chart(ctxScatter, {
        type: 'scatter',
        data: animalImpactData,
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.raw.y + '%';
                        }
                    }
                }
            },
            hover: {
                animationDuration: 400
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    generateTable(document.getElementById('roadBlockTable'), roadBlockData);
    generateTable(document.getElementById('healthImpactTable'), healthImpactData);
    generateTable(document.getElementById('humanDiseasesTable'), humanDiseasesData);
    generateTable(document.getElementById('animalDiseasesTable'), animalDiseasesData);
    generateTable(document.getElementById('animalImpactTable'), animalImpactData);

   // Add sortable table functionality
document.querySelectorAll('th').forEach(header => {
    header.addEventListener('click', function() {
        const table = header.parentElement.parentElement.parentElement;
        const index = Array.from(header.parentElement.children).indexOf(header);
        sortTable(table, index);
    });
});

// Sort table function
function sortTable(table, columnIndex) {
    const rows = Array.from(table.querySelectorAll('tr:nth-child(n+2)')); // Skip header row
    const isNumeric = !isNaN(rows[0].querySelectorAll('td')[columnIndex].innerText);
    
    rows.sort((rowA, rowB) => {
        const cellA = rowA.querySelectorAll('td')[columnIndex].innerText;
        const cellB = rowB.querySelectorAll('td')[columnIndex].innerText;

        if (isNumeric) {
            return parseFloat(cellA) - parseFloat(cellB);
        } else {
            return cellA.localeCompare(cellB);
        }
    });

    rows.forEach(row => table.appendChild(row));
}

});