import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'PruebaTecnicaImagineApp';
  private roter = inject(Router);
  private selectedLanguage = 'es';
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }

  modalSwitch: boolean = false;
  homeReady: boolean = true;
  // Carga el splash screen inicial
  ngOnInit(): void {
    this.roter.navigateByUrl('/feed');
    setTimeout(() => {
      this.homeReady = false;
    }, 2500);
  }
}
