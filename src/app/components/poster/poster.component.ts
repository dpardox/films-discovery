import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss']
})
export class PosterComponent implements OnInit {

  @Input() public movie: Movie;

  constructor() { }

  ngOnInit(): void {
  }

}
