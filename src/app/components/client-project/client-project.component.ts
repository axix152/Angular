import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ClientService } from '../../services/client.service';
import {
  ApiResponseModel,
  ClientProject,
  Employee,
} from '../../model/interface/role';
import { Client } from '../../model/class/client';
import { DatePipe } from '@angular/common';
import { single } from 'rxjs';
import { AlertComponent } from '../../reusabaleComponent/alert/alert.component';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, DatePipe, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
    ]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(''),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(''),
    projectCost: new FormControl(''),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl('', [Validators.email]),
    clientId: new FormControl(''),
  });

  ngOnInit(): void {
    this.getAllClient();
    this.getAllEmployee();
    this.getAllClientProject();
  }

  // inject client service
  clientSer = inject(ClientService);
  clientList: Client[] = [];
  employeeList: Employee[] = [];
  ClientAllProjectList = signal<ClientProject[]>([]);

  getAllClient() {
    this.clientSer.getAllClients().subscribe((res: ApiResponseModel) => {
      if (res.result) {
        this.clientList = res.data;
      }
    });
  }

  getAllEmployee() {
    this.clientSer.getAllEmployees().subscribe((res) => {
      if (res.result) {
        this.employeeList = res.data;
      }
    });
  }

  saveClientProject() {
    const formValue = this.projectForm.value;

    this.clientSer
      .addUpdateClientProject(formValue)
      .subscribe((res: ApiResponseModel) => {
        if (res.result) {
          alert('Client project added success');
          this.getAllClientProject();
        } else {
          console.log(res.message);
        }
      });
  }

  // get all client project
  getAllClientProject() {
    this.clientSer.getAllClientProjects().subscribe((res: ApiResponseModel) => {
      if (res.result) {
        this.ClientAllProjectList.set(res.data);
      }
    });
  }

  // edit Client Project
  onEdit(data: ClientProject) {}

  // delete client project
  onDelete(id: number) {}
}
