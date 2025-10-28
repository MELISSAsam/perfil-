import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; 
import { 
  IonContent,   
  IonHeader, 
  IonTitle,   
  IonToolbar,   
  IonButton, 
  IonCardContent, 
  IonCardTitle, 
  IonButtons, 
  IonCard,   
  IonCardHeader, 
  IonInput,   
  IonInputPasswordToggle, 
  IonModal, // 👈 AGREGADO: Importación del componente <ion-modal>
  ModalController // Importación del servicio (ya estaba)
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButton, 
    IonCardContent, 
    IonCardTitle, 
    IonButtons, 
    IonCard, 
    IonCardHeader, 
    IonInput, 
    IonInputPasswordToggle,
    IonModal // 👈 AGREGADO: Inclusión en el array imports
  ],
})
export class UsuarioPage implements OnInit {

  nombre: string = '';
  telefono: string = '';
  correo: string = '';
  password: string = 'mipassword';
  message: string = 'Presiona el botón para editar tu información.';

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() { }

  async cancel() {
    await this.modalCtrl.dismiss(null, 'cancel');
  }

  async confirm() {
    await this.modalCtrl.dismiss(this.nombre, 'confirm');
  }
  
  onWillDismiss(event: any) {
    const role = event.detail.role;
    const data = event.detail.data;

    if (role === 'confirm' && data) {
      this.message = `¡Datos de ${data} actualizados correctamente!`;
    } else if (role === 'cancel') {
      this.message = 'Edición de información cancelada.';
    } else {
      this.message = 'Presiona el botón para editar tu información.';
    }
  }
}