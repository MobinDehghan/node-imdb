import getMovie, { IGetMovieResult } from '../src/getMovie';

jest.setTimeout(20000);

let movie: IGetMovieResult;

beforeAll(async () => {
  movie = <IGetMovieResult>await getMovie('tt2306299');
});

describe('get movie', () => {
  it('should return data when id is correct', async () => {
    expect(movie).toBeTruthy();
  });

  it('should return false when id is wrong', async () => {
    const movie = await getMovie('2306299');
    expect(movie).toBeFalsy();
  });

  it('should has a title', async () => {
    expect(movie.title).toBe('Vikings');
  });
  it('should has a rating', async () => {
    expect(movie.rating).toBe('8.5');
  });

  it('should has a time', async () => {
    expect(movie.time).toBe('44min');
  });

  it('should has a poster', async () => {
    expect(movie.poster).toBeTruthy();
  });

  it('should has a story', async () => {
    expect(movie.story).toBeTruthy();
  });

  it('should has a release', async () => {
    expect(movie.release).toBe('2013');
  });

  it('should has directors', async () => {
    expect(movie.directors.length).toBeTruthy();
  });

  it('should has stars', async () => {
    expect(movie.stars.length).toBeTruthy();
  });

  it('should has genres', async () => {
    expect(movie.genres.length).toBeTruthy();
  });

  it('should has countries', async () => {
    expect(movie.countries.length).toBeTruthy();
  });

  it('should has languages', async () => {
    expect(movie.languages.length).toBeTruthy();
  });
});
