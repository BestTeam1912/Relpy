import { TestBed, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SessionService } from './session.service';

fdescribe('SessionService', () => {
	beforeEach(() => TestBed.configureTestingModule({
		imports:[RouterTestingModule],
		providers:[SessionService]
	}));

	it('should be created', inject([SessionService], () => {
		const service: SessionService = TestBed.get(SessionService);
		expect(service).toBeTruthy();
	}));

	it('should have verifySession function', inject([SessionService], (service)=>{
		expect(service.verifySession).toBeTruthy();
	}));
});
