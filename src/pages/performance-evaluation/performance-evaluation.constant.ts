import { ActionCell } from "./components/custom-cell/action.cell/action.cell.renderer";

const COLUMN_DEFINATION = [
    { field: 'fullName',  headerName: 'Name', flex:2},
    { field: 'userId', headerName: 'User Id', flex:1 },
    { field: 'reviewStatus', headerName: 'Review Status', flex:1},
    { field: 'reviewedOn', headerName: 'Reviewed On', flex:2},
    {field:'', headerName: 'Action', flex:1, cellRenderer: ActionCell }
];
export default {COLUMN_DEFINATION};