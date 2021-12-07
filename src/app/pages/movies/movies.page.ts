import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieType } from 'src/app/enums/movie-type';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss']
})
export class MoviesPage implements OnInit {

  public movies: Movie[] = [];
  public form: FormGroup;
  public MovieType = MovieType;
  public type: MovieType = MovieType.streaming;
  public query: string = '';
  public selected: Movie;

  constructor(
    private moviesService: MoviesService,
    private formBuilder: FormBuilder,
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void {
    this.getMovies();
  }

  private buildForm() {
    return this.formBuilder.group({
      query: ['']
    });
  }

  public submit() {
    if (this.form.valid && this.form.value.query) {
      this.getMovies(MovieType.search, this.form.value.query);
    } else {
      this.getMovies();
    }
  }

  public getMovies(type: MovieType = MovieType.streaming, query: string = '') {
    switch (type) {
      case MovieType.search:
        this.type = MovieType.search;
        this.query = query;
        this.moviesService.search(query).subscribe(data => this.movies = data);
        break;

      case MovieType.ads:
        this.type = MovieType.ads;
        this.moviesService.ads().subscribe(data => this.movies = data);
        break;

      case MovieType.rent:
        this.type = MovieType.rent;
        this.moviesService.rent().subscribe(data => this.movies = data);
        break;

      case MovieType.theatres:
        this.type = MovieType.theatres;
        this.moviesService.theatres().subscribe(data => this.movies = data);
        break;

      default:
        this.type = MovieType.streaming;
        this.moviesService.streaming().subscribe(data => this.movies = data);
        break;
    }
  }

  public reset() {
    this.form.reset();
    this.getMovies();
  }

}
