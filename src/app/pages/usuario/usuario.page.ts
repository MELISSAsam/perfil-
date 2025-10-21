import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonCardContent,
  IonCardTitle,
  IonCard,
  IonCardHeader,
  IonInput
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonCardContent,
    IonCardTitle,
    IonCard,
    IonCardHeader,
    IonInput,
    RouterLink
  ]
})
export class UsuarioPage implements OnInit {

  nombre: string = '';
  telefono: string = '';
  correo: string = '';

  constructor() { }

  ngOnInit() { }

}
