# node-imdb

a nodejs library to get data from imdb

# Example

```javascript
const { searchMovie, getMovie } = require('node-imdb');
// or
import { searchMovie, getMovie } from 'node-imdb';
```

```javascript
async function searchMovieExample(title) {
  const result = await searchMovie(title);
  console.log(result);
}

searchMovieExample('Game of Thorns');

async function getMovieExample(id) {
  const result = await getMovie(id);
  console.log(result);
}

getMovieExample('tt0944947');
```
