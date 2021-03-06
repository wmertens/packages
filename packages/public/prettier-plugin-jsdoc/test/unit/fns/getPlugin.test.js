jest.mock('../../../src/fns/getLanguages', () => ({
  getLanguages: () => 'languages',
}));
jest.mock('../../../src/fns/getParsers', () => ({
  getParsers: () => 'parsers',
}));
jest.mock('../../../src/fns/getOptions', () => ({
  getOptions: () => 'options',
  getDefaultOptions: () => 'defaultOptions',
}));
jest.unmock('../../../src/fns/getPlugin');

const { getPlugin } = require('../../../src/fns/getPlugin');

describe('getPlugin', () => {
  it('should generate the plugin main exports', () => {
    // Given/When/Then
    expect(getPlugin()).toEqual({
      languages: 'languages',
      options: 'options',
      defaultOptions: 'defaultOptions',
      parsers: 'parsers',
    });
  });
});
