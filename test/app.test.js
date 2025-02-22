const mathAdd = (a, b) => a + b;

describe('2 + 2 = 4', () => {
  it('should be 4', () => {
    const r = mathAdd(2, 2);

    // eslint-disable-next-line no-undef
    expect(r).toEqual(4);
  });
});
