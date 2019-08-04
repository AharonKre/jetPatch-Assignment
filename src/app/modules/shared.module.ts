import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColorPickerModule } from 'ngx-color-picker';
import {
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule
} from '@angular/material';

import { EllipsisOverflowDirective } from 'app/directives/ellipsis-overflow.directive';

@NgModule({
    declarations: [EllipsisOverflowDirective],
    exports: [
        FormsModule,
        RouterModule,
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatButtonModule,
        MatDialogModule,
        MatTooltipModule,
        ColorPickerModule,
        ReactiveFormsModule,
        EllipsisOverflowDirective
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule,
        MatCardModule,
        MatIconModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        ColorPickerModule,
        ReactiveFormsModule
    ]
})
export class SharedModule { }
