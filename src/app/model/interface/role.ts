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

// interface are created in angular for creating a Strict type of the data shape we are getting as response.
