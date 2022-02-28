const config: Highcharts.Options = {   
    chart: {
       type: 'column'
    },
    title: {
       text: 'Vendor VS Avg. Rating for given Tech.'
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
       categories: ['Accenture', 'Infosys', 'TCS', 'Tech Mahindra' , 'Sapient'], title: {
          text: null
       } 
    },
    yAxis : {
       min: 0,
       title: {
          text: 'Avg Rating', align: 'high'
       },
       max: 5,
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
        name: 'Rating',
        type: 'column',
        data:[2, 3, 3.5, 4, 1.6]
    } 
     
]
 };

 export default {config};