module.exports = {
  get: () => Promise.resolve({
    data: `imdb$title(${JSON.stringify({ hello: 'world' })})`,
  }),
};
