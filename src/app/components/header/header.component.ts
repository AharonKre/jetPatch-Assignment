import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ColorService } from 'app/services/color.service';
import { MoviesService, MovieItem } from 'app/services/movies.service';
import { AddMovieDialog } from 'app/modals/add-movie/add-movie.modal';

@Component({
    selector: 'm-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    bgColor$ = this.colorService.bgColor$;

    constructor(
        private dialog: MatDialog,
        private colorService: ColorService,
        private moviesService: MoviesService) { }

    addMovie() {
        this.dialog.open(AddMovieDialog, {
            width: '500px'
        }).afterClosed().subscribe((movie: MovieItem) => {
            movie && this.moviesService.addNewMovie(movie);
        });
    }

    changeMasterBgColor(color: string) {
        this.colorService.bgColor = color;
    }
}