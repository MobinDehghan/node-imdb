import axios from 'axios';
import cheerio from 'cheerio';

export interface IGetMovieResult {
  title: string;
  rating: string;
  time: string;
  poster?: string;
  story?: string;
  release?: string;
  writer?: string;
  directors: string[];
  stars: string[];
  genres: string[];
  countries: string[];
  languages: string[];
}

async function getMovie(id: string): Promise<IGetMovieResult | false> {
  try {
    const response = await axios.get(
      `https://www.imdb.com/title/${id}/?ref_=fn_al_tt_1`
    );
    const $ = cheerio.load(response.data);
    const title = $('.TitleBlock__TitleContainer-sc-1nlhx7j-1 h1')
      .text()
      .trim();
    const rating = $('.iTLWoV').first().text();
    const time = $('.TitleBlock__TitleMetaDataContainer-sc-1nlhx7j-2 > ul > li')
      .last()
      .text();
    const poster = $('.ipc-media--poster-27x40 > img').attr('src');
    const story = $('.ipc-html-content--base > div')
      .first()
      .html()
      ?.split('<span')[0];

    const release = $('[data-testid=title-details-releasedate]')
      .find('a')
      .text()
      .match(/([0-9]{4})/)?.[0];

    const detailList = $('.iGxbgr ul');
    const writer =
      detailList.length === 4 ? $(detailList.get(2)).text() : undefined;

    const directors = $(detailList.get(1))
      .find('a')
      .map((i, e) => $(e).text())
      .toArray();

    const stars = detailList
      .last()
      .find('a')
      .map((i, e) => $(e).text())
      .toArray();

    const genres = $('[data-testid=storyline-genres]')
      .find('ul a')
      .map((i, e) => $(e).text())
      .toArray();

    const countries = $('[data-testid=title-details-origin]')
      .find('ul a')
      .map((i, e) => $(e).text())
      .toArray();

    const languages = $('[data-testid=title-details-languages]')
      .find('ul a')
      .map((i, e) => $(e).text())
      .toArray();

    return {
      title,
      rating,
      time,
      poster,
      story,
      release,
      writer,
      directors,
      stars,
      genres,
      countries,
      languages
    };
  } catch (_) {
    return false;
  }
}

export default getMovie;
