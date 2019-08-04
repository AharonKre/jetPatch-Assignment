import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { cloneDeep } from 'lodash';

export interface MovieItem {
    name: string;
    imdbLink: string;
    backgroundColor?: string;
}

@Injectable()
export class MoviesService {
    /**
     * The movies-data as an observable or as a snapshot.
     */
    private _movies$ = new BehaviorSubject<MovieItem[]>([]);
    movies$ = this._movies$.asObservable();
    get movies(): MovieItem[] { return this._movies$.getValue(); }

    addNewMovie(movie: MovieItem) {
        const moviesCopy = cloneDeep(this.movies);
        moviesCopy.push(movie);
        this._movies$.next(moviesCopy);
    }

    addMultipleNewMovies(movies: MovieItem[]) {
        const moviesCopy = cloneDeep(this.movies);
        this._movies$.next(moviesCopy.concat(movies));
    }

    changeMovieBackground(color: string, movieIdx: number) {
        const moviesCopy: MovieItem[] = cloneDeep(this.movies);
        moviesCopy[movieIdx].backgroundColor = color;
        this._movies$.next(moviesCopy);
    }
}