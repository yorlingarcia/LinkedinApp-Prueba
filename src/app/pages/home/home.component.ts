import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CardSeguir } from 'src/app/interfaces/card-seguir.interface';
import { ModalToggleService } from 'src/app/services/modal-toggle.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  homeReady: boolean = true;
  modalSwitch: boolean = false;

  constructor(private modalToggleService: ModalToggleService) {}
  ngAfterViewInit(): void {
    this.modalToggleService.modal$.subscribe(
      (valor) => (this.modalSwitch = valor)
    );
  }
  // Carga el splash screen inicial
  ngOnInit(): void {
    setTimeout(() => {
      this.homeReady = false;
    }, 2500);
  }

  listItem: CardSeguir[] = [
    {
      srcImg: './assets/img/perfil.jpeg',
      nombre: 'Yorlin Garcia Sierra',
      description: 'Desarrollador Angular',
    },
    {
      srcImg: './assets/img/perfil.jpeg',
      nombre: 'El espectador',
      description: 'Empresa',
    },
    {
      srcImg: './assets/img/perfil.jpeg',
      nombre: 'ANZ OILFIELD SERVICES PVT. LTD.',
      description: 'Empresa',
    },
  ];
}
