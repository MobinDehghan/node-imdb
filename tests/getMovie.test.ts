import getMovie, { IGetMovieResult } from '../src/getMovie';

jest.setTimeout(20000);

describe('get movie', () => {
  it('should return data when id is correct', async () => {
    const movie = await getMovie('tt2306299');
    expect(movie).toBeTruthy();
  });

  it('should return false when id is wrong', async () => {
    const movie = await getMovie('2306299');
    expect(movie).toBeFalsy();
  });

  it('should has a title', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.title).toBe('Vikings');
  });
  it('should has a rating', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.rating).toBe('8.5');
  });

  it('should has a time', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.time).toBe('44min');
  });

  it('should has a poster', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.poster).toBeTruthy();
  });

  it('should has a story', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.story).toBeTruthy();
  });

  it('should has a release', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.release).toBe('2013');
  });

  it('should has directors', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.directors.length).toBeTruthy();
  });

  it('should has stars', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.stars.length).toBeTruthy();
  });

  it('should has genres', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.genres.length).toBeTruthy();
  });

  it('should has countries', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.countries.length).toBeTruthy();
  });

  it('should has languages', async () => {
    const movie = <IGetMovieResult>await getMovie('tt2306299');
    expect(movie.languages.length).toBeTruthy();
  });
});
