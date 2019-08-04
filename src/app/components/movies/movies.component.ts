import { Component } from '@angular/core';

import { MoviesService } from 'app/services/movies.service';
import { ColorService } from 'app/services/color.service';

@Component({
    selector: 'movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.scss']
})

export class MoviesComponent {
    movies$ = this.moviesService.movies$;
    bgColor$ = this.colorService.bgColor$;

    constructor(
        private colorService: ColorService,
        private moviesService: MoviesService) { }

    changeContainerColor(color: string, movieIdx: number) {
        this.moviesService.changeMovieBackground(color, movieIdx);
    }
}