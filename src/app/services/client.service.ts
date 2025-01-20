import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { ApiResponseModel } from '../model/interface/role';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(
      environment.API_URL + 'GetAllClients'
    );
  }
  addUpdate(clientObj: Client): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(
      environment.API_URL + 'AddUpdateClient',
      clientObj
    );
  }
  deleteClientById(id: number): Observable<ApiResponseModel> {
    return this.http.delete<ApiResponseModel>(
      environment.API_URL + `DeleteClientByClientId?clientId=` + id
    );
  }
}

// service are use for creating a Injectable class for business logic and make the codebase clean.
