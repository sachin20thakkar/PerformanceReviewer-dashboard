import { Component, OnInit } from '@angular/core';
import { Hire } from 'src/models/hire.model';
import { HireService } from 'src/services/hire.service';
import Constants from './hire-stack.constant';

@Component({
  selector: 'app-hire-stack',
  templateUrl: './hire-stack.component.html',
  styleUrls: ['./hire-stack.component.sass']
})
export class HireStackComponent implements OnInit {
  public hireList: Array<Hire> = [];
  public columnDefs = Constants.COLUMN_DEFINATION;
  public defaultColDef = {width: 100}
  constructor(private hireService: HireService) { }

  ngOnInit(): void {
    this.hireService.fetchHireInfo().subscribe((data) => {
      console.log(data.hirePosData);
      this.hireList = data.hirePosData.map(this.maptoHireList);
      console.log("Updated" , this.hireList);

    });
  }

  private maptoHireList(data: any) {
    return {
      pid: data.pTrackerId,
      resource: data.resourceName + " " + data.resourceId,
      resourceStatus: data.resourceStatus,
      posTitle: data.posTitle,
      posCostCenter: data.posCostCenter,
      posCity: data.posCity
    }
  }

}
