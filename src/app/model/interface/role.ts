export interface IRole {
  roleId: number;
  role: string;
}
export interface IDesignation {
  designationId: number;
  designation: string;
}

export interface ApiResponseModel {
  message: string;
  result: boolean;
  data: any;
}

export interface Employee {
  empName: string;
  empId: string;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  role: string;
  mobile: string;
}

export interface ClientProject {
  empName: string;
  empId: number;
  empCode: string;
  empEmailId: string;
  empDesignation: string;
  projectName: string;
  startDate: Date;
  expectedEndDate: Date;
  clientName: string;
  clientProjectId: number;
}

// interface are created in angular for creating a Strict type of the data shape we are getting as response.
