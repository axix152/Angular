import { Component, inject, OnInit, signal } from '@angular/core';
import { Client } from '../../model/class/client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ApiResponseModel } from '../../model/interface/role';
import { AsyncPipe, UpperCasePipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-client',
  imports: [FormsModule, UpperCasePipe, AsyncPipe],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  // create instance of Client
  clientObj: Client = new Client();
  // Create List for All CLient
  clientList: Client[] = [];
  // inject Client Service
  clientService = inject(ClientService);

  firstName = signal('Hello World');

  // Asynce pipe
  // for Industry best practice for Observable we use $ in the end of any Observables
  userList$: Observable<any> = new Observable<any>();

  ngOnInit(): void {
    this.loadClient();
    this.userList$ = this.clientService.getAllUser();
  }

  changeSignalValue() {
    this.firstName.set('New Hello to world');
  }

  // get all client
  loadClient() {
    this.clientService.getAllClients().subscribe((res: ApiResponseModel) => {
      this.clientList = res.data;
    });
  }

  // method for saving client to database.
  onSaveClient() {
    this.clientService
      .addUpdate(this.clientObj)
      .subscribe((res: ApiResponseModel) => {
        if (res.result) {
          alert('Client Added successfully');
          this.loadClient();
          this.clientObj = new Client();
        } else {
          alert(res.message);
        }
      });
  }

  // edit client
  onEdit(data: Client) {
    this.clientObj = data;
  }

  // delete Client
  onDelete(id: number) {
    const isDelete = confirm('Are you sure want to delete?');
    if (isDelete) {
      this.clientService
        .deleteClientById(id)
        .subscribe((res: ApiResponseModel) => {
          if (res.result) {
            alert('Client delete Success');
            this.loadClient();
          } else {
            alert(res.message);
          }
        });
    }
  }
}
