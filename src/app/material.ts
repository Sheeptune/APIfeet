import {MatCheckboxModule,} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import {NgModule} from '@angular/core'

@NgModule({
imports : [
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
],
exports : [
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
]
})

export class MaterialModule { }