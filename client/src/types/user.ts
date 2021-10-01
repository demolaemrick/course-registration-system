export interface InitialUser {
  firstName: string;
  lastName: string;
  email: string;
  matricNo: string;
}

export interface RegisterFormData extends InitialUser {
  password: string;
  passwordConfirm: string;
}

export interface LoginCredentials {
  matricNo: string;
  password: string;
}

export interface LoginValidationError {
  matricNo?: string;
  password?: string;
}
export interface RegisterValidationError extends LoginValidationError {
  firstName?: string;
  lastName?: string;
  email?: string;
  passwordConfirm?: string;
}

export interface User extends InitialUser {
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
  [key: string]: any;
}

export interface UserUpdateOptions {
  gender: string;
  college: string;
  phone: string;
  level: string;
  department: string;
  programme: string;
  profile_picture: string | Blob;
  [key: string]: any;
}
