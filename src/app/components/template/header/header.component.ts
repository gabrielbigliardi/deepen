import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isMenuOpen = false;

  
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private activatedRoute: ActivatedRoute) {}



  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((value) => {
      console.log(value)
      this.jumpTo(value)
    })
  }



  jumpTo(section: any) { //any 
    document.getElementById(section)?.scrollIntoView({behavior: 'smooth'})
  }
}
