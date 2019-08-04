import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MoviesService } from 'app/services/movies.service';
import { ColorService } from 'app/services/color.service';

@NgModule({
    declarations: [],
    imports: [],
    providers: [
        MoviesService,
        ColorService
    ],
})
export class CoreModule {
    // This guards against the CoreModule from being imported into any
    // module except the root-module (AppModule).
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
