import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from '../model/class/client';
import { environment } from '../../environments/environment.development';
import { ApiResponseModel } from '../model/interface/role';
import { Constant } from '../constant/constants';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT
    );
  }
  getAllEmployees(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_EMP
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

  addUpdateClientProject(clientObj: Client): Observable<ApiResponseModel> {
    return this.http.post<ApiResponseModel>(
      environment.API_URL + 'AddUpdateClientProject',
      clientObj
    );
  }

  // get all client project
  getAllClientProjects(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(
      environment.API_URL + 'GetAllClientProjects'
    );
  }

  // get all user from json place holder API
  getAllUser() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}

// service are use for creating a Injectable class for business logic and make the codebase clean.
