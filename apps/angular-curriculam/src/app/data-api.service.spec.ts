import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { DataAPIService } from './data-api.service';
import { DROPDOWN_ITEMS, EMPLOYEE_DATA } from './data';

describe('DataAPIService', () => {
  let service: DataAPIService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataAPIService],
    });
    service = TestBed.inject(DataAPIService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('it should retrive all the data', () => {
    expect(service).toBeTruthy();
    service.getEmployeesAllData().subscribe((data) => {
      expect(data.length).toBe(12);
      const dataItem = data.find((item) => item.id == 1);
      expect(dataItem.employee_name).toBe('Tiger Nixon');
    });
    const req = httpTestingController.expectOne('https://dummy.restapiexample.com/api/v1/employees');

        expect(req.request.method).toEqual("GET");

        req.flush({payload: Object.values(EMPLOYEE_DATA)});

  });
});
