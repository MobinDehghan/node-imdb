import axios from 'axios';
import cheerio from 'cheerio';

export interface ISearchMovieResult {
  title: string;
  id: string;
  image: string;
}

async function searchMovie(title: string) {
  const movies: ISearchMovieResult[] = [];
  try {
    const response = await axios.get(
      `https://www.imdb.com/find?s=tt&q=${title}&ref_=nv_sr_sm`
    );
    const $ = cheerio.load(response.data);
    $('.findResult').each((i, element) => {
      const title = $(element).find('td.result_text a');
      const id = <string>title.attr('href')?.split('/')[2];
      const image = $(element).find('td a img');
      const movie = {
        title: title.text(),
        id,
        image: <string>image.attr('src')
      };
      movies.push(movie);
    });
  } catch (_) {
    //
  }
  return movies;
}

export default searchMovie;
