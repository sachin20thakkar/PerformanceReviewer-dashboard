import {Component} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { BUTTON_NAME, RECORD_STATE } from "./action.cell.constant";

@Component({
   selector: 'action-cell-component',
   templateUrl: './action.cell.template.html',
   styleUrls: ['./action.cell.sass']
})
export class ActionCell implements ICellRendererAngularComp {
   public button: BUTTON_NAME = BUTTON_NAME.View;
   public userInfo:any={};
    constructor(private modalService: NgbModal) {}
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
   buttonClicked(content:unknown) {
    this.modalService.open(content, { size: 'xl', scrollable:true });
   }

}