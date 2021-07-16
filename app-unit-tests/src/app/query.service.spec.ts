import { TestBed } from '@angular/core/testing';

import { QueryService } from './query.service';

describe('QueryService', () => {
  let service: QueryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QueryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(`shoudl create a post in new array`, () => {
    const queryText = 'this is my new post';
    service.addNewQuote(queryText);
    expect(service.getQuote().length).toBeGreaterThanOrEqual(1);
  });
  it('should remove a post from the array ! ', () => {
    service.addNewQuote('This is my first post');
    service.removeQuote(0);
    expect(service.getQuote().length).toBeLessThan(1);
  });
});
