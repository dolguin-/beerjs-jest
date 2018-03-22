class App {
  constructor(finder, logger, prompt, utils) {
    this.finder = finder;
    this.logger = logger;
    this.prompt = prompt;
    this.utils = utils;
  }

  movieSearch() {
    const schema = {
      title: {
        default: 'Batman',
        description: 'Movie title',
        required: true,
      },
    };

    let movieTitle;
    return this.prompt.ask(schema)
    .then(({ title }) => {
      movieTitle = title;
      this.logger.warning(`Searching for '${movieTitle}'...`);
      return this.finder(title);
    })
    .then((response) => {
      this.logger.info('Analyzing results...');
      const results = this.utils.getPropertyWithPath(response, 'data/d');
      return this.utils.delayPromise(results);
    })
    .then((movies) => {
      if (movies.length) {
        const message = this.utils.pluralize(movies.length, {
          1: `1 result for '${movieTitle}'!`,
          other: `{} results for '${movieTitle}'!!`,
        });
        this.logger.success(message);
        this.logger.log(movies.map((movie) => `${movie.l}`));
      } else {
        this.logger.warning(`No results found for '${movieTitle}'`);
      }
    })
    .catch((error) => {
      if (error.message !== 'canceled') {
        this.logger.error('Something went wrong with the request');
        this.logger.error(error);
      }
    });
  }
}

module.exports = App;
