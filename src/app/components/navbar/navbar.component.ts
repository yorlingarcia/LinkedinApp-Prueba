import { Component, Injectable, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ItemsNavBar, MenuItem } from 'src/app/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() itemsNavBar: ItemsNavBar[] = [];
  //cambio de tamaño horizontal del input
  statusInput: boolean = true;
  onFocus() {
    this.statusInput = false;
  }
  onBlur() {
    this.statusInput = true;
  }
  menuItems: MenuItem[] = [
    {
      label: 'page.home.navBar.idioma.es',
    },
    {
      label: 'page.home.navBar.idioma.en',
    },
  ];
  currentIndex: number = 0;
  private router = inject(Router);
  redirecTo(path: string, index: number) {
    this.router.navigateByUrl(`/${path}`);
    this.currentIndex = index;
  }
}
