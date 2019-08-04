import { Component } from '@angular/core';

import { MoviesService } from 'app/services/movies.service';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.addMultipleNewMovies([{
      name: 'Hobbs & Shaw',
      imdbLink: 'https://www.imdb.com/title/tt6806448/'
    }, {
      name: '1917',
      imdbLink: 'https://www.imdb.com/title/tt8579674/'
    }, {
      name: 'The Lion King',
      imdbLink: 'https://www.imdb.com/title/tt6105098/'
    }, {
      name: 'Rogue One',
      imdbLink: 'https://www.imdb.com/title/tt3748528/'
    }, {
      name: 'Aladdin',
      imdbLink: 'https://www.imdb.com/title/tt6139732/'
    }, {
      name: 'The Art of Self-Defense',
      imdbLink: 'https://www.imdb.com/title/tt7339248/'
    }, {
      name: 'Crawl',
      imdbLink: 'https://www.imdb.com/title/tt8364368/'
    }]);
  }
}
