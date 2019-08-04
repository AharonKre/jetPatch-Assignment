import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

const urlPattern = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/i;

@Component({
    selector: 'add-movie',
    templateUrl: './add-movie.modal.html',
    styles: [`
        .add-movie-form {
            display: flex;
            flex-direction: column;
        }
        mat-dialog-actions {
            justify-content: space-around;
        }
    `]
})

export class AddMovieDialog {

    addMovieForm: FormGroup;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.setForm();
    }

    private setForm() {
        this.addMovieForm = this.formBuilder.group({
            name: [null, {
                validators: [Validators.required]
            }],
            imdbLink: [null, {
                validators: [Validators.required, Validators.pattern(urlPattern)]
            }]
        });
    }
}