import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'scroll-vertically';

  windowWidth = window.innerWidth;
  horLength: any;
  horizontalSection: any;
  distFromTop: any;
  scrollDistance: any;
  scrollTop: any;
  elementWrapper: any;
  initialHeight: any;
  @HostListener('window:scroll', ['$event'])
  onScrollEvent(event : any){
    this.scrollTop = window.pageYOffset;
    let temp = this.distFromTop-this.initialHeight
    if (this.scrollTop >= temp && this.scrollTop <= this.scrollDistance) {
      this.elementWrapper.style.transform = "translateX(-"+(this.scrollTop - this.distFromTop)+"px)";
    }
  }

  ngOnInit(): void {
    this.horLength = document.querySelector('.element-wrapper')?.scrollWidth;
    this.horizontalSection = document.querySelector(".horizontal-section") as HTMLElement;
    this.distFromTop = this.horizontalSection.offsetTop;
    this.initialHeight = this.horizontalSection.clientHeight;
    this.scrollDistance = this.distFromTop + this.horLength - this.windowWidth;
    this.elementWrapper = document.querySelector('.element-wrapper') as HTMLElement;

    this.horizontalSection.style.height = this.horLength + "px";


    console.log(this.initialHeight);
  }

}
