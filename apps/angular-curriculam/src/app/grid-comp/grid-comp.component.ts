import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'org-grid-comp',
  standalone: true,
  imports: [CommonModule, AgGridAngular],
  templateUrl: './grid-comp.component.html',
  styleUrl: './grid-comp.component.scss',
})
export class GridCompComponent {
  columnDefs: ColDef[] = [
    { headerName: 'Make', field: 'make', sortable: true,editable:true,singleClickEdit:true },
    { headerName: 'Model', field: 'model', sortable: true },
    { headerName: 'Price', field: 'price', sortable: true },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 },
  ];
}
