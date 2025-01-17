import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { ApiResponseModel, IDesignation } from '../../model/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);
  designationList: IDesignation[] = [];
  isLoading: boolean = true;

  ngOnInit(): void {
    this.masterService.getDesignation().subscribe(
      (res: ApiResponseModel) => {
        this.designationList = res.data;
        this.isLoading = false;
      },
      (error) => {
        alert('Error fetch data');
        this.isLoading = false;
      }
    );
  }
}
