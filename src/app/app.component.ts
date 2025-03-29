import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { inject } from "@vercel/analytics"
import { CComponent } from "./c/c.component";
export interface Video {
  title: string;
  url: string;
  thumbnail?: string;
} 
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: []
})
export class AppComponent   {
  
  showImages: boolean = true;
  bootstrap: any;
  images:string[] = [
    'assets/fp1.jpg',
    'assets/Screenshot_20250316_185805_M365 Copilot.jpg',
    'assets/fp2.jpg'
  ];

  
  closeImages() {
    this.showImages = false;
  }
  
  title = 'pvms';



  
  
}

