export interface Usuario {
  id: string;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export interface CreateUserDTO extends Omit<Usuario, 'id'| 'role'> {}
