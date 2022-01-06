import { inputStandard } from './inputStandard';

describe('inputStandard', () => {
  it('capitalises a single word', () => {
    const example = inputStandard('australia');
    expect(example).toBe('Australia');
  });

  it('capitalises two words', () => {
    const example = inputStandard('south sudan');
    expect(example).toBe('South Sudan');
  });

  it('ignores whitelisted worlds', () => {
    const example = inputStandard('united states of america');
    expect(example).toBe('United States of America');
  });
});
