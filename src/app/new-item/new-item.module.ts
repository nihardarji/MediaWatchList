import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MediaItemFormComponent } from './media-item-form/media-item-form.component';
import { NewItemRouting } from './new-item-routing/new-item-routing.module';

@NgModule({
  declarations: [
    MediaItemFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewItemRouting
  ]
})
export class NewItemModule { }
