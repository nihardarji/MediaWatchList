import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-media-item',
  templateUrl: './media-item.component.html',
  styleUrls: ['./media-item.component.css']
})
export class MediaItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() mediaItem: any;
  @Output() delete = new EventEmitter()
  onDelete() {
    console.log('Deleted');
    this.delete.emit(this.mediaItem)
  }
}
