## BeerJS Córdoba - Quick intro to Jest

### Introduction

<img src="beerjs.png" align="right" valign="top" />
In this repository contains a useless app that allows you to search movie titles on iMDB... and nothing else. The point of this project is to showcase a few examples of Jest implementations on the BeerJS meetup.

[Here's the link to the slides that go with this project](https://goo.gl/h14xuN).

Now, you'll find that there are three branches:

#### `01-snapshots`

On this branch you'll find only one test file with an example of how to use snapshots. For more information about snapshot testing you can check this video:

[Rogelio Guzman - Jest Snapshots and Beyond - React Conf 2017](https://www.youtube.com/watch?v=HAuXJVI_bUs)

#### `02-expect`

This branch has the same test as the previous one, but instead of testing with snapshots, it uses a custom mock implementation and asserts the results and the calls to the mocks.

#### `03-jest-ex`

Different from the other two, this branch uses [jest-ex](npmjs.com/package/jest-ex) with [jest-cli](https://www.npmjs.com/package/jest-cli) to run more complex tests (copied from other project :P).

## Disclaimer

This project is just for a presentation, that's why half of the code is not documented and part of the implementation is questionable :P, I doubt I'll ever update it.