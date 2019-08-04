import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class ColorService {
    /**
     * The movies-data as an observable or as a snapshot.
     */
    private _bgColor$ = new BehaviorSubject<string>('#f1e7bc');
    bgColor$ = this._bgColor$.asObservable();
    get bgColor(): string { return this._bgColor$.getValue(); }
    set bgColor(color: string)  {
        this._bgColor$.next(color);
    }
}   