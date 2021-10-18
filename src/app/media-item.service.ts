import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { MediaItem, MediaItemResponse } from './types';

@Injectable({
  providedIn: 'root'
})
export class MediaItemService {

  constructor(private http: HttpClient) { }

  get(medium: string | null) {
    let getOptions
    if(medium) 
      getOptions = {
        params: { medium }
      }
    return this.http.get<MediaItemResponse>('mediaitems', getOptions)
      .pipe(
        map(response => response.mediaItems),
        catchError(this.handleError)  
      )
  }

  add(mediaItem: MediaItem) {
    return this.http
      .post('mediaitems', mediaItem)
      .pipe(catchError(this.handleError))
  }

  delete(mediaItem: MediaItem) {
    return this.http
      .delete(`mediaitems/${mediaItem.id}`)
      .pipe(catchError(this.handleError))
  }

  private handleError(error: HttpErrorResponse) {
    console.error(error.message)
    return throwError(`An error occured, ${error.message}`)
  }
}

