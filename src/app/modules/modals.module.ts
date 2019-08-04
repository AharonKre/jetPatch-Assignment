import { NgModule } from '@angular/core';
import { SharedModule } from 'app/modules/shared.module';

import { AddMovieDialog } from 'app/modals/add-movie/add-movie.modal';

@NgModule({
    imports: [SharedModule],
    declarations: [AddMovieDialog],
    entryComponents: [AddMovieDialog],
    exports: [AddMovieDialog]
})
export class ModalsModule { }
