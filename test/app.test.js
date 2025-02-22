const mathAdd = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error('All arguments should exists');
  }

  return a + b;
};

describe('2 + 2 = 4', () => {
  it('should be 4', () => {
    const r = mathAdd(2, 2);

    // eslint-disable-next-line no-undef
    expect(r).toEqual(4);
  });

  it('should be 8', () => {
    const r = mathAdd(3, 5);

    // eslint-disable-next-line no-undef
    expect(r).toEqual(8);
  });

  it('should be 2', () => {
    const r = mathAdd(0, 2);

    // eslint-disable-next-line no-undef
    expect(r).toEqual(2);
  });

  it('should be Error', () => {
    const r = () => {
      mathAdd(2);
    };

    // eslint-disable-next-line no-undef
    expect(r).toThrow();
  });

  it('should be Error2', () => {
    const r = () => {
      mathAdd(undefined, 2);
    };

    // eslint-disable-next-line no-undef
    expect(r).toThrow();
  });
});
