const finder = require('../finder');

describe('Finder', () => {
  it('should match the snapshot', () => (
    finder('rosario')
    .then((response) => {
      expect(response).toMatchSnapshot();
    })
  ));
});
