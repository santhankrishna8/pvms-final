import { CommonModule } from '@angular/common';
import { Component,OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
}
