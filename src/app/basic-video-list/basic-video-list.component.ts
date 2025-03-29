import { CommonModule } from '@angular/common';
import { Component,Input, Output, EventEmitter } from '@angular/core';
export interface Video {
  title: string;
  url: string;
  thumbnail?: string;
}
@Component({
  selector: 'app-basic-video-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-video-list.component.html',
  styleUrl: './basic-video-list.component.css'
})
export class BasicVideoListComponent {
  @Input() videos: Video[] = [];
  @Output() videoSelected = new EventEmitter<string>();

  selectVideo(url: string) {
    this.videoSelected.emit(url);
  }

}
