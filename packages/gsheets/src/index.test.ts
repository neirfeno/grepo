import { helloGSheets } from './index';

describe('helloGSheets', () => {
  it('should return the correct greeting', () => {
    expect(helloGSheets()).toBe('Hello from GSheets!');
  });
}); 