import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item/media-item.component';
import { MediaItemListComponent } from './media-item-list/media-item-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CategoryListPipe } from './category-list.pipe';
import { lookupList, lookupListToken } from './providers';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http'
import { MockXHRBackend } from './mock-xhr-backend';
import { Routing } from './app-routing/app-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Routing
  ],
  providers: [
    { provide: lookupListToken, useValue: lookupList },
    { provide: HttpXhrBackend, useClass: MockXHRBackend }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
