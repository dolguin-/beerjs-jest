jest.mock('axios');
const axios = require('axios');
const finder = require('../finder');

describe('Finder', () => {
  it('should search for a movie', () => {
    // Given
    const responseObject = { hello: 'world' };
    const query = 'rosario';
    const responseData = `imdb$${query}(${JSON.stringify(responseObject)})`;
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: responseData }));
    // When
    return finder(query)
    .then((response) => {
      // Then
      expect(response).toEqual({
        data: responseObject,
      });
      expect(axios.get).toHaveBeenCalledTimes(1);
      expect(axios.get).toHaveBeenCalledWith(
        expect.stringMatching(new RegExp(`${query}\\.json$`))
      );
    });
  });
});
