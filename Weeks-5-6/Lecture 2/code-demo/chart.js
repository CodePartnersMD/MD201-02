//get our canvas element by id
let elChart = document.getElementById('myChart').getContext('2d');

//define a function that populates the data for my chart by looping through my image array
function populateChart(prop) {
    //create a variable that will be an empty array that will store and return my prop values
    let propsArray = [];
    //loop through 
    for(let i= 0;i < heroImageArray.length; i++) {
        propsArray.push(heroImageArray[i][prop]);
    }
    return propsArray;
}

//declare a new variable and assign it the value of a new instance of our chart object that will display our chart 
function displayChart() {
    elChart.innerHTML = '';
    let myChart = new Chart(elChart, {
        //assign the property of type to be a bar chart
        type: 'bar',
        //set up our data property that will contain the lables for our data and the various datasets that we want displayed as bars
        data: {
            labels: populateChart('name'),
            datasets: [
                {
                    label: '# of times clicked',
                    data: populateChart('clicked'),
                    backgroundColor: 'blue'
                },
                {
                    label: '# of times shown',
                    data: populateChart('shown'),
                    backgroundColor: 'gray'
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
}
