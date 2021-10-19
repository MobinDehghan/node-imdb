import searchMovie, { ISearchMovieResult } from '../src/searchMovie';

let movies: ISearchMovieResult[];

beforeAll(async () => {
  movies = await searchMovie('servant');
});

describe('search movie', () => {
  it('should return an array greater than 0', async () => {
    expect(movies.length).toBeGreaterThan(0);
  });

  it('should return an array equal 0 when title is empty', async () => {
    const movies = await searchMovie('');
    expect(movies.length).toBe(0);
  });

  it('should first element contains title, id, image', async () => {
    const [movie] = movies;
    expect(Object.keys(movie)).toEqual(['title', 'id', 'image']);
  });

  it('should first element has a title', async () => {
    const [movie] = movies;
    expect(movie.title).toBeTruthy();
  });

  it('should first element has a id', async () => {
    const [movie] = movies;
    expect(movie.id).toBeTruthy();
  });

  it('should first element has a image', async () => {
    const [movie] = movies;
    expect(movie.image).toBeTruthy();
  });
});
