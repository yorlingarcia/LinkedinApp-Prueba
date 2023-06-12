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
  // menuItems: MenuItem[] = [
  //   {
  //     label: 'component.navbar.servicios',
  //     children: [
  //       {
  //         label: 'component.navbar.servicios',
  //         children: [
  //           {
  //             label: 'From Template',
  //           },
  //           { label: 'New File' },
  //         ],
  //       },
  //       {
  //         label: 'Open',
  //         children: [{ label: 'Browse...' }, { label: 'Recent' }],
  //       },
  //     ],
  //   },
  //   {
  //     label: 'component.navbar.portafolio',
  //     children: [
  //       { label: 'Undo' },
  //       { label: 'Redo' },
  //       { label: 'Cut' },
  //       { label: 'Copy' },
  //       { label: 'Paste' },
  //     ],
  //   },
  //   {
  //     label: 'component.navbar.quienesSomos',
  //   },
  //   {
  //     label: 'component.navbar.contactanos',
  //   },
  // ];
}
