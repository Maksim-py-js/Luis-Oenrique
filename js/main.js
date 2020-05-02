var ctx = document.getElementById('myChart').getContext('2d');
var html = {
    label: "HTML 5",
    data: [0, 100, 0, 0, 0, 0, 0],
    lineTension: 0.3,
    backgroundColor: [
        'rgba(153, 102, 255, 0.2)'
    ],
    borderColor: [
        'rgba(153, 102, 255, 1)'
    ]
};
   
var js = {
    label: "JS",
    data: [0, 0, 100, 0, 0, 0, 0],
    backgroundColor: [
        'rgba(255, 159, 64, 0.2)'
    ],
    borderColor: [
        'rgba(255, 159, 64, 1)'
    ]
};

var css = {
    label: "CSS 3",
    data: [0, 0, 0, 100, 0, 0, 0],
    lineTension: 0.3,
    backgroundColor: [
        'rgba(54, 162, 235, 0.2)'
    ],
    borderColor: [
        'rgba(54, 162, 235, 1)'
    ]
};
   
var jQuery = {
    label: "jQuery",
    data: [0, 0, 0, 0, 100, 0, 0],
    backgroundColor: [
        'rgba(75, 192, 192, 0.2)'
    ],
    borderColor: [
        'rgba(75, 192, 192, 1)'
    ]
};   
var localData = {
    labels: ["0s", "10s", "20s", "30s", "40s", "50s", "60s"],
    datasets: [html, js, css, jQuery]
};
 
 
var myChart = new Chart(ctx, {
    type: 'line',
    data: localData
});
