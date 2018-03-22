const axios = require('axios');

const finder = (title) => {
  const query = title.toLowerCase();
  const url = `https://v2.sg.media-imdb.com/suggests/${query.substr(0, 1)}/${query}.json`;
  return axios.get(url)
  .then(({ data }) => ({
    data: JSON.parse(
      data.replace(new RegExp(`(imdb\\\$${query}\\\()(.*?)(\\\))$`), '$2')
    ),
  }));
};

module.exports = finder;
