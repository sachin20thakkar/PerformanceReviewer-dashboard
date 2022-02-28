const config: Highcharts.Options = {   
    chart: {
       type: 'column'
    },
    title: {
       text: 'Tech vs Contigents'
    },
   
    legend : {
       layout: 'vertical',
       align: 'left',
       verticalAlign: 'top',
       x: 250,
       y: 100,
       floating: true,
       borderWidth: 1,
      
       backgroundColor: ( '#FFFFFF'),
        shadow: true
     },
     xAxis:{
       categories: ['Java', 'UI', 'Scrum', 'Support' , 'Others'], title: {
          text: null
       } 
    },
    yAxis : {
       min: 0,
       title: {
          text: 'No. of Resources(%)', align: 'high'
       },
       labels: {
          overflow: 'justify'
       }
    },
    tooltip : {
       //valueSuffix: ' millions'
    },
    plotOptions : {
       column: {
          dataLabels: {
             enabled: true
          }
       },
       series: {
          stacking: 'normal'
       }
    },
    credits:{
       enabled: false
    },
    series: [{
        name: 'Tech Mahindra',
        type: 'column',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'TCS',
        type: 'column',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Infosys',
        type: 'column',
        data: [3, 4, 4, 2, 5]
    },
    {
        name: 'Accenture',
        type: 'column',
        data: [3, 4, 4, 2, 5]
    }    
]
 };

 export default {config};