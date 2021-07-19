import { Auth } from './auth';

describe('Auth', () => {
  let service: Auth;
  beforeEach(() => {
    service = new Auth();
  });

  afterEach(() => {
    service = null;
    localStorage.removeItem('token');
  });

  it('should create an instance', () => {
    expect(new Auth()).toBeTruthy();
  });

  it('should return true from isAuthenticated when there is a token', () => {
    localStorage.setItem('token', 'testtoken');
    expect(service.isAuthenticated()).toBeTruthy();
  });

  it('should return false from isAuthenticated when there is no token', () => {
    expect(service.isAuthenticated()).toBeFalsy();
  });
});
