import { CommonModule } from '@angular/common';
import { Component,OnInit, OnDestroy } from '@angular/core';
import { BasicVideoListComponent } from "../basic-video-list/basic-video-list.component";
export interface Video {
  title: string;
  url: string;
  thumbnail?: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BasicVideoListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy  {
  images: string[] = [
    'assets/i1.jpg',
    'assets/i2.jpg',
    'assets/i3.jpg',
    'assets/i4.jpg',
    'assets/i6.png',
    'assets/IMG-20250322-WA0021.jpg',
    'assets/IMG-20250322-WA0022.jpg',
    'assets/IMG-20250322-WA0023.jpg',
    'assets/IMG-20250322-WA0024.jpg',
    'assets/IMG-20250322-WA0025.jpg',
    'assets/IMG-20250322-WA0026.jpg',
    'assets/IMG-20250322-WA0027.jpg',
    'assets/IMG-20250322-WA0028.jpg',
    'assets/IMG-20250322-WA0029.jpg',
    'assets/IMG-20250322-WA0030.jpg',
    'assets/IMG-20250322-WA0031.jpg',
    'assets/IMG-20250322-WA0032.jpg',
    'assets/IMG-20250322-WA0033.jpg',
    'assets/IMG-20250322-WA0034.jpg',
    'assets/IMG-20250322-WA0035.jpg',
    'assets/IMG-20250322-WA0036.jpg',
    'assets/IMG-20250322-WA0037.jpg',
    'assets/IMG-20250322-WA0038.jpg',
    'assets/IMG-20250322-WA0039.jpg',
    'assets/IMG-20250322-WA0040.jpg',
    'assets/IMG-20250322-WA0041.jpg',
    'assets/IMG-20250322-WA0042.jpg',
    // 'assets/IMG-20250322-WA0043.jpg',
    'assets/IMG-20250322-WA0044.jpg',
    'assets/IMG-20250322-WA0045.jpg',
    'assets/IMG-20250322-WA0046.jpg',
    'assets/IMG-20250322-WA0047.jpg',
    'assets/IMG-20250322-WA0048.jpg'
  ];
  
  currentIndex: number = 0;
  private intervalId: any;

  ngOnInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    this.stopSlider();
  }

  startSlider() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 5000);
  }

  stopSlider() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    console.log('Current Index: ', this.currentIndex);
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    console.log('Current Index: ', this.currentIndex);
  }



  videos: Video[] = [
    { title: 'ఔషధ విజ్ఞాన సదస్సు December 2019', url: 'assets/2019_7 mins.mp4', thumbnail: 'assets/2019.png' },
    { title: "ఔషధ విజ్ఞాన సదస్సు December 2021- 1", url: 'assets/dec_2021_10mins.mp4', thumbnail: 'assets/2021.png' },
    { title: 'ఔషధ విజ్ఞాన సదస్సు December 2021- 2', url: 'assets/dec_2021_25secs.mp4', thumbnail: 'assets/2021.png' },
    { title: 'ఔషధ విజ్ఞాన సదస్సు December 2021- 3', url: 'assets/dec_2021.mp4', thumbnail: 'assets/2021.png' },
    // Add your video data here
  ];

  selectedVideoUrl: string | null = null;
  selectedVideo: boolean = false;
  isModalOpen: boolean = false;

  openVideoModal(url: string) {
    console.log('Video clicked:', url);
    this.selectedVideoUrl = url;
    console.log('selectedVideoUrl:', this.selectedVideoUrl);
    this.isModalOpen = true;
    this.selectedVideo = true;  
    console.log('isModalOpen:', this.isModalOpen);
  }

  closeVideoModal(event?: MouseEvent) {
    console.log('Close button clicked');
    this.isModalOpen = false;
    this.selectedVideoUrl = null;
    this.selectedVideo = false;  
    const modalVideo = document.getElementById('modalVideo') as HTMLVideoElement;
    if (modalVideo) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
      modalVideo.src = '';
    }
  }
}
