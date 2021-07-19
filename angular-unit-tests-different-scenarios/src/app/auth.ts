export class Auth {
  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }
}
