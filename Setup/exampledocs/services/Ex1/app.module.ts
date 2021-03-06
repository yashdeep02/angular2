import { NgModule } from '@angular/core';

import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from './app.component';

import { StudentListComponent } from "./student-list.component";

import { AddStudentComponent } from "./add-student.component";

import { EditStudentComponent } from "./edit-student.component";

import { DeleteStudentComponent } from "./delete-student.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,StudentListComponent,AddStudentComponent,EditStudentComponent,DeleteStudentComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
