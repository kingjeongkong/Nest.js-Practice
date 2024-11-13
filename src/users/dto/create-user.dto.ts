export class CreateUserDto {
  user: string;
  email: string;
  role: 'INTERN' | 'ENGINEER' | 'ADMIN';
}
