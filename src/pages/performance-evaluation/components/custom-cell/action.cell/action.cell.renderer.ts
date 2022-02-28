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
    if(params.data.reviewStatus === RECORD_STATE.Pending) {
        this.button = BUTTON_NAME.Edit;
    }
   }

   updateStatus(details: any) {
      this.userPEReport.details = details;
   }

   performSave() {
      const payload = {...this.userPEReport, "consultantMSID": this.userInfo.userId,
      "vendor": this.userInfo.vendor, "techFamily": this.userInfo.techFamily}
      this.contigentService.saveDraft(this.userPEReport).subscribe(() => {
         this.modalService.dismissAll();
      })
   }

   performSubmit() {
      const payload = {...this.userPEReport, "consultantMSID": this.userInfo.userId,
      "vendor": this.userInfo.vendor, "techFamily": this.userInfo.techFamily}
      this.contigentService.submitForm(this.userPEReport).subscribe(() => {
         this.modalService.dismissAll();
      })
   }

   buttonClicked(content:unknown) {
   this.loaderService.setLoader(true);
   this.contigentService.getContigentPE(this.userInfo.userId).subscribe((response) => {
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