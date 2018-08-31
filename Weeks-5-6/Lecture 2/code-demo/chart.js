//get our canvas element by id
let elChart = document.getElementById('myChart').getContext('2d');

//declare a new variable and assign it the value of a new instance of our chart object that will display our chart 
let myChart = new Chart(elChart, {
    type: 'bar',
    data: {
        labels: ['red', 'blue', 'green'],
        datasets: [{
            label: '# of times clicked',
            data: [2, 5, 3],
            backgroundColor: 'blue'
        }
        ],
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                    }
                }]
            }
        }
    }
});

