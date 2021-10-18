import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MediaItemService } from '../media-item.service';
import { MediaItem } from '../types';

@Component({
  selector: 'app-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {

  medium: string | null = ''
  mediaItems: MediaItem[]

  constructor(private mediaItemService: MediaItemService, private activatedRoutes: ActivatedRoute) {
    this.mediaItems = []
  }

  ngOnInit(): void {
    this.activatedRoutes
      .paramMap
      .subscribe(paramMap => {
        let medium = paramMap.get('medium')
        if(medium && medium.toLowerCase() === 'all') {
          medium = ''
        }
        this.getMediaItems(medium)
      })
  }

  onMediaItemDelete(mediaItem: MediaItem) {
    this.mediaItemService
      .delete(mediaItem)
      .subscribe(() => this.getMediaItems(this.medium))
  }

  getMediaItems(medium: string | null) {
    this.medium = medium
    this.mediaItemService
      .get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems
      })
  }
}
