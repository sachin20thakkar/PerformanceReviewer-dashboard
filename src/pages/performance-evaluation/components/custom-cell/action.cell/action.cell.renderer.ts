import {Component} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { ContigentService } from "src/services/contigent.service";
import { LoaderService } from "src/services/loader.service";
import { BUTTON_NAME, RECORD_STATE } from "./action.cell.constant";

@Component({
   selector: 'action-cell-component',
   templateUrl: './action.cell.template.html',
   styleUrls: ['./action.cell.sass']
})
export class ActionCell implements ICellRendererAngularComp {
   public button: BUTTON_NAME = BUTTON_NAME.View;
   public userPEReport: any = {};
   public userInfo:any={};
   showLoader: boolean = false;
    constructor(private modalService: NgbModal,
      private contigentService: ContigentService,
      private loaderService: LoaderService) {}
   // gets called once before the renderer is used
   agInit(params: ICellRendererParams): void {
    this.setButton(params)
   }
   refresh(params: ICellRendererParams): boolean {
    this.setButton(params);
    return true;
   }
   setButton(params: ICellRendererParams) {
       this.userInfo = params.data;
    if(params.data.reviewstatus === RECORD_STATE.Pending) {
        this.button = BUTTON_NAME.Edit;
    }
   }
   buttonClicked(content:unknown) {
   this.loaderService.setLoader(true);
   this.contigentService.getContigentPE(this.userInfo.userID).subscribe((response) => {
      this.loaderService.setLoader(false);
      this.userPEReport = response;
      this.modalService.open(content, { size: 'xl', scrollable:true });
   }, () =>  {
      this.loaderService.setLoader(false);
      this.userPEReport = {details: {}};
      this.modalService.open(content, { size: 'xl', scrollable:true });
   })
     
   }

}