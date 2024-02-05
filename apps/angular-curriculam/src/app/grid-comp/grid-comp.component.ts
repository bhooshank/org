import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ColGroupDef } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { DataAPIService } from '../data-api.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'org-grid-comp',
  standalone: true,
  imports: [CommonModule, AgGridAngular,HttpClientModule],
  templateUrl: './grid-comp.component.html',
  styleUrl: './grid-comp.component.scss',
})
export class GridCompComponent implements OnInit{
  employees$:Observable<any> | undefined;
  defaultColDef:ColDef[]  =[{
    resizable:true
  }]
  columnDefs: ColDef[] = [
    { headerName: 'id', field: 'id' },
    { headerName: 'name', field: 'employee_name'  },
    { headerName: 'salary', field: 'employee_salary'},
    { headerName: 'age', field: 'employee_age', rowGroup:true},

  ];

  constructor(private data:DataAPIService){
    
  }
 
  ngOnInit(): void {
      this.employees$ = this.data.getEmployeesAllData();
  }
}
