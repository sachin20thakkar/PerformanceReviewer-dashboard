import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import TechContigents from './config/tech-contigents';
import  VendorConginent  from './config/vendor-contigent';

const charts:any = {
  'vendor-conginent': VendorConginent.config,
  'tech-contigent': TechContigents.config
}
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.sass']
})
export class ChartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts; 
  chartOptions: Highcharts.Options ={}; // required
  @Input() chartType:string='';
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = charts[this.chartType] || {};
  //   this.chartOptions.series=[{
  //     name: 'Java',
  //     type: 'column',
  //     data: [5, 3, 4, 7, 2]
  // }, {
  //     name: 'UI',
  //     type: 'column',
  //     data: [2, 2, 3, 2, 1]
  // }, {
  //     name: 'Scrum',
  //     type: 'column',
  //     data: [3, 4, 4, 2, 5]
  // }];
  }

}
