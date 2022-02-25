import { Component, OnInit } from '@angular/core';
import { ChartService } from 'src/services/graph.service';

@Component({
  selector: 'app-graph-sidebar',
  templateUrl: './graph-sidebar.component.html',
  styleUrls: ['./graph-sidebar.component.sass']
})
export class GraphSidebarComponent implements OnInit {
  showGraphContainer:boolean = false;
  chartList:Array<any> = [];
  applyToChartList:Array<number> = []
  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    
    this.chartService.fetchChartList().subscribe(chartlist => {
      this.chartList = chartlist as Array<any>;
    })
  }
  // addToList(chart) {
  //   const index = this.applyToChartList.includes(chart.id)
  //   if() {

  //   }
  // }
  toggleGraphContainer() {
    this.showGraphContainer= !this.showGraphContainer;
  }

}
