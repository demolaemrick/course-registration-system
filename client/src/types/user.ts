export interface userType {
  firstName: string;
  lastName: string;
  email: string;
  matricNo: string;
}

export interface userFormData extends userType {
  password: string;
  passwordConfirm: string;
}


export interface loginCredentials {
  matricNo: string;
  password: string;
}

export interface errorMessage {
  firstName?: string;
  lastName?: string;
  email?: string;
  matricNo?: string;
  password?: string;
  passwordConfirm?: string;
}