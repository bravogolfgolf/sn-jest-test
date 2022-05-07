import Enzyme from 'enzyme';
import {UIEnzymeAdapter} from '@servicenow/ui-enzyme-adapter';

Enzyme.configure({adapter: new UIEnzymeAdapter()});

describe('x-402400-sn-jest-test Test', () => {
	it('should be true', () => {
		expect(true).toBe(true);
	});
});
