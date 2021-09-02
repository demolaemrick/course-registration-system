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

export interface User extends userType {
  createdAt: string;
  college: string | null;
  department: string | null;
  gender: string | null;
  level: string | null;
  phone: string | null;
  profile_picture: string | undefined;
  programme: string | null;
  updatedAt: string;
  uuid: string;
}
export interface UserUpdateOptionsType {
  gender: string;
  college: string;
  phone: string;
  level: string;
  department: string;
  programme: string;
  profile_picture: string | Blob;
}
