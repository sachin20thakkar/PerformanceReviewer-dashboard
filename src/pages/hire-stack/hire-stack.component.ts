import { Component, OnInit } from '@angular/core';
import { CellClickedEvent } from 'ag-grid-community';
import { Hire } from 'src/models/hire.model';
import { Position } from 'src/models/position.model';
import { HireService } from 'src/services/hire.service';
import Constants from './hire-stack.constant';
import PositionConstnats from './hire-position.constant';

@Component({
  selector: 'app-hire-stack',
  templateUrl: './hire-stack.component.html',
  styleUrls: ['./hire-stack.component.sass']
})
export class HireStackComponent implements OnInit {
  public hireList: Array<Hire> = [];
  public positionList: Array<Position> = [];
  public columnDefs = Constants.COLUMN_DEFINATION;
  public postionColumnDefs = PositionConstnats.COLUMN_DEFINATION;
  public candidate: Position;
  public test: string = "";
  public showCandidatesScreened = false;
  public currentPid = "";
  public showCandidateForm = false;
  constructor(private hireService: HireService) {
    this.candidate = {};
   }

  ngOnInit(): void {
    this.hireService.fetchHireInfo().subscribe((data) => {
      console.log(data.positionDetails);
      this.hireList = data.positionDetails.map(this.maptoHireList);
      console.log("Updated" , this.hireList);

    });
  }

  private maptoHireList(data: any) {
    return {
      trackerId: data.trackerId,
      resource: data.resourceName + " " + data.resourceId,
      resourceStatus: data.resourceStatus,
      title: data.title,
      costCentre: data.costCentre,
      city: data.city
    }
  }

  public onCellClicked(event: CellClickedEvent) {
    console.log("Cell clicked", event.data);
    this.currentPid = event.data.trackerId;   
    this.hireService.fetchCandidatesScreened(this.currentPid).subscribe(data => {
      this.positionList = data.candidateProfiles;
      this.showCandidatesScreened = true;
    }); 
  }

  public onBack() {
    this.showCandidatesScreened = false;
    this.showCandidateForm = false;
  }

  public addCandidate() {
    this.showCandidateForm = true;
    this.showCandidatesScreened = false;
    this.candidate = {posName: "Associate", posTrackerId: this.currentPid};
  }

  public onSubmit() {
    this.showCandidateForm = false;
    this.showCandidatesScreened = true;
    console.log(this.candidate);
    this.positionList.push(this.candidate);    
  }

}
