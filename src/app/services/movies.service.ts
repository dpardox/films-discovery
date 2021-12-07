import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public streaming(): Observable<Movie[]> {
    return this.http.get<any>(`${environment.api}/discover/movie`, {
      params: {
        'sort_by': 'popularity.desc',
        'watch_region': 'US',
        'with_watch_monetization_types': 'flatrate',
      }
    }).pipe(
      map(x => x.results),
      map(x => x.map((i: any) => ({
        poster: `${environment.image}${i.poster_path}`,
        title: i.title,
        release: i.release_date,
      }))),
      map(x => x.slice(0, 6)),
    );
  }

  public search(query: string): Observable<Movie[]> {
    return this.http.get<any>(`${environment.api}/search/movie`, {
      params: { query }
    }).pipe(
      map(x => x.results),
      map(x => x.map((i: any) => ({
        poster: `${environment.image}${i.poster_path}`,
        title: i.title,
        release: i.release_date,
      }))),
      map(x => x.slice(0, 6)),
    );
  }

}
