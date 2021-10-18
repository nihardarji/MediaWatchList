import { Pipe, PipeTransform } from '@angular/core';
import { MediaItem } from './types';

@Pipe({
  name: 'categoryList'
})
export class CategoryListPipe implements PipeTransform {

  transform(mediaItems: MediaItem[]) {
    const categories: string[] = []
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category)
      }
    });
    return categories
  }

}
