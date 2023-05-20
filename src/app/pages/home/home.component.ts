import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeReady: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.homeReady = false;
    }, 2500);
  }
}
