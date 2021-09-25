# node-imdb

a nodejs library to gets data from imdb

# Example

```javascript
const imdb = require('node-imdb').default;
// or
import imdb from 'node-imdb';
```

```javascript
async function searchMovieExample(title) {
  const result = await imdb.searchMovie(title);
  console.log(result);
}

searchMovieExample('Game of Thorns');

async function getMovieExample(id) {
  const result = await imdb.getMovie(id);
  console.log(result);
}

getMovieExample('tt0944947');
```
