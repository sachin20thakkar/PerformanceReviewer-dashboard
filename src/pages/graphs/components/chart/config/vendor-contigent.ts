const config: Highcharts.Options = {   
    chart: {
       type: 'column'
    },
    title: {
       text: 'Vendor vs Contigents'
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
       categories: ['Tech Mahindra', 'TCS', 'Infosys', 'Sapient', 'Accenture'], title: {
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
        name: 'Java',
        type: 'column',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'UI',
        type: 'column',
        data: [2, 2, 3, 2, 1]
    }, {
        name: 'Scrum',
        type: 'column',
        data: [3, 4, 4, 2, 5]
    }]
 };

 export default {config};