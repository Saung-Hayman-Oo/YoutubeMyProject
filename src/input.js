$('.counter-up').counterUp({
    delay: 10,
    time: 1000
});

var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 3, 15, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    lineTension: 0
                },
                {
                    label: '# of Votes',
                    data: [4, 8, 7, 9, 3, 3],
                    backgroundColor: [

                        'rgba(54, 162, 235, 0.2)',

                    ],
                    borderColor: [

                        'rgba(54, 162, 235, 1)',

                    ],
                    borderWidth: 1,
                    lineTension: 0
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    display:false,
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes:[
                    {
                        display:true,
                        gridLines:[
                            {
                                display:true
                            }
                        ]
                    }
                ]
            },
            legend:{
                display: true,
                shape:"circle",
                position: 'top',
                labels: {
                    fontColor: '#333',
                    usePointStyle:true
                }
            }
        },
        plugins: {
           
            // title: {
            //     display: false,
            //     text: (ctx) => 'Tooltip point style: ' + ctx.chart.options.plugins.tooltip.usePointStyle,
            //   },
            //   tooltip: {
            //     usePointStyle: true,
            //   },
        }
    });

    var ctx = document.getElementById('pieChart').getContext('2d');
    var pieChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Mandalay', 'Yangon', 'Monywa', 'Naypyitaw', 'Mgway'],
            datasets: [
                {
                    label: '# of Votes',
                    data: [12, 3, 15, 5, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1,
                    lineTension: 0
                },
                
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    display:false,
                    ticks: {
                        beginAtZero: true
                    }
                }],
                xAxes:[
                    {
                        display:false,
                        gridLines:[
                            {
                                display:true
                            }
                        ]
                    }
                ]
            },
            legend:{
                display: true,
                shape:"circle",
                position: 'bottom',
                labels: {
                    fontColor: '#333',
                    usePointStyle:true
                }
            }
        },
        plugins: {
          
        }
    });

    