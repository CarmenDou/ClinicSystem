import { TestBed } from '@angular/core/testing';

import { ParticipantAttackService } from './participant-attack.service';

describe('ParticipantAttackService', () => {
  let service: ParticipantAttackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParticipantAttackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
