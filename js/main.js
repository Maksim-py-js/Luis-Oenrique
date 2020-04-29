var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['', 'Blue', '', 'Green', '', 'Orange','', 'Purple', ''],
        datasets: [{
            label: "",
            data: [0, 83, 58, 73, 54, 98, 54, 83, 0],
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1,
            pointBackgroundColor: [
            	'rgba(0, 0, 0, 0)',
            	'rgba(0, 0, 0, 1)',
            	'rgba(0, 0, 0, 0)',
            	'rgba(0, 0, 0, 1)',
            	'rgba(0, 0, 0, 0)',
            	'rgba(0, 0, 0, 1)',
            	'rgba(0, 0, 0, 0)',
            	'rgba(0, 0, 0, 1)',
            	'rgba(0, 0, 0, 0)',
            	'rgba(0, 0, 0, 1)',
            	'rgba(0, 0, 0, 0)'
            ],
            pointRadius: [0, 6.5, 0, 6.5, 0, 6.5, 0, 6.5, 0]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
