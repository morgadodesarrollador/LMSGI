
export interface IPelicula{
  id?: string;
  original_language?: string;
  original_title?: string;
  title?: string;
  overview?: string;
  poster_path?: string;
  popularity?: string;
  vote_average?: string;
  adult?: string;
  genre_ids?: string[];
}

export interface IPeliculas{
  page: number;
  results?: IPelicula[];
}

export interface IGenero {
  id: string;
  name: string;
}
export interface IGeneros {
  genres?: IGenero[]
}
