const axios = require('axios');
// I know that if the string has special characters the whole thing will explode.
const finder = (title) => {
  const query = title.toLowerCase();
  const url = `https://v2.sg.media-imdb.com/suggests/${query.substr(0, 1)}/${query}.json`;
  return axios.get(url)
  .then(({ data }) => ({
    data: JSON.parse(
      data.replace(/(imdb\$\w+\()(.*?)(\))$/, '$2')
    ),
  }));
};

module.exports = finder;
