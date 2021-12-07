import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Movie } from '../interfaces/movie.interface';
import { format, subDays } from 'date-fns';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  public search(query: string): Observable<Movie[]> {
    return this.http.get<any>(`${environment.api}/search/movie`, {
      params: { query }
    }).pipe(
      map(x => x.results),
      map(x => x.map((i: any) => ({
        poster: `${environment.image}${i.poster_path}`,
        title: i.title,
        release: i.release_date,
        overview: i.overview,
        rate: i.vote_average,
      }))),
      map(x => x.slice(0, 6)),
    );
  }

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
        overview: i.overview,
        rate: i.vote_average,
      }))),
      map(x => x.slice(0, 6)),
    );
  }

  public ads(): Observable<Movie[]> {
    return this.http.get<any>(`${environment.api}/discover/movie`, {
      params: {
        'sort_by': 'popularity.desc',
        'watch_region': 'US',
        'with_watch_monetization_types': 'ads',
      }
    }).pipe(
      map(x => x.results),
      map(x => x.map((i: any) => ({
        poster: `${environment.image}${i.poster_path}`,
        title: i.title,
        release: i.release_date,
        overview: i.overview,
        rate: i.vote_average,
      }))),
      map(x => x.slice(0, 6)),
    );
  }

  public rent(): Observable<Movie[]> {
    return this.http.get<any>(`${environment.api}/discover/movie`, {
      params: {
        'sort_by': 'popularity.desc',
        'watch_region': 'US',
        'with_watch_monetization_types': 'rent|buy',
      }
    }).pipe(
      map(x => x.results),
      map(x => x.map((i: any) => ({
        poster: `${environment.image}${i.poster_path}`,
        title: i.title,
        release: i.release_date,
        overview: i.overview,
        rate: i.vote_average,
      }))),
      map(x => x.slice(0, 6)),
    );
  }

  public theatres(): Observable<Movie[]> {
    return this.http.get<any>(`${environment.api}/discover/movie`, {
      params: {
        'sort_by': 'popularity.desc',
        'watch_region': 'US',
        'primary_release_date.gte': format(subDays(new Date, 7), 'yyyy-MM-dd'),
        'primary_release_date.lte': format(new Date, 'yyyy-MM-dd'),
      }
    }).pipe(
      map(x => x.results),
      map(x => x.map((i: any) => ({
        poster: `${environment.image}${i.poster_path}`,
        title: i.title,
        release: i.release_date,
        overview: i.overview,
        rate: i.vote_average,
      }))),
      map(x => x.slice(0, 6)),
    );
  }

}
