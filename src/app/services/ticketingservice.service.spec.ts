import { TestBed } from '@angular/core/testing';

import { TicketingserviceService } from './ticketingservice.service';

describe('TicketingserviceService', () => {
  let service: TicketingserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketingserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
