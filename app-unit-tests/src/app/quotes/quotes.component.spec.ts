import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { QuotesComponent } from './quotes.component';
import { QueryService } from '../query.service';
import { By } from '@angular/platform-browser';
import { QuoteModel } from '../quote-model';

describe('QuotesComponent', () => {
  let component: QuotesComponent;
  let fixture: ComponentFixture<QuotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuotesComponent],
      imports: [FormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should use the quoteList from the service,', () => {
    const queryService = fixture.debugElement.injector.get(QueryService);
    fixture.detectChanges();
    expect(queryService.getQuote().length).toEqual(component.quoteList.length);
  });
  it('should create a new post', () => {
    component.quoteText = 'I love this test';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.innerHTML).toContain('I love this test');
  });

  it('should disbale the button when textarea is empty', () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeTruthy();
  });

  it('should enable the button when textarea is not empty', () => {
    component.quoteText = 'I love this test';
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css('button'));
    expect(button.nativeElement.disabled).toBeFalsy();
  });

  it('should fetch data asynchronously', async () => {
    const fakedFetchedList = [
      new QuoteModel('I love unit testing', 'Mon 4, 2018'),
    ];
    const queryService = fixture.debugElement.injector.get(QueryService);

    let spy = spyOn(queryService, 'fetchQuotesFromServer').and.returnValue(
      Promise.resolve(fakedFetchedList)
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.fetchedList).toBe(fakedFetchedList);
    });
  });
});
