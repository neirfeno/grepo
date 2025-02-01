import { helloGCalendar } from './index';

describe('helloGCalendar', () => {
  it('should return the correct greeting', () => {
    expect(helloGCalendar()).toBe('Hello from GCalendar!');
  });
}); 