import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
//new
import {ConectarProvider} from '../../providers/conectar/conectar';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {LoadingController} from 'ionic-angular';
import {AlertController} from 'ionic-angular';

/**
 * Generated class for the ActurperPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-acturper',
    templateUrl: 'acturper.html',
})
export class ActurperPage {
    persona: any;
    RegPersona: FormGroup;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private CosValFor: FormBuilder,
        private VentanaEspera: LoadingController,
        private conecta: ConectarProvider,
        private alertCtrl: AlertController) {
        //this.iniciarFormulario();
        this.persona = this.navParams.get('per');
        this.iniciarFormulario();
    }
    // new

    iniciarFormulario() {
        this.RegPersona = this.CosValFor.group({
            fecnac: [this.persona.fecnac, [Validators.required]],
            tipo: [this.persona.tipo, [Validators.required]],
            ced: [this.persona.ced, [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]],
            nombre: [this.persona.nombre, [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚÜ üñÑ]{2,30}$/)]],
            apellido: [this.persona.apellido, [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚÜ üñÑ]{2,30}$/)]],
            telefono: [this.persona.telefono, [Validators.required, Validators.pattern(/^[/+0-9]{7,15}$/)]],
            email: [this.persona.email, [Validators.required, Validators.email, Validators.maxLength(30)]]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ActurperPage');
        //  console.table(this.persona);
    }

    // Metodo
    presentAlert(estadoTitulo, estMensaje) {
        let alert = this.alertCtrl.create({
            title: estadoTitulo,
            subTitle: estMensaje,
            buttons: ['Cerrar']
        });
        alert.present();
        // Actualizar Persona
    }
        actualizarPer() {
            const loader = this.VentanaEspera.create({
                content: "Un momento por favor.... Se esta procesando su solicitud"
            });
            loader.present();
            let perLocal = this.RegPersona.value;
            perLocal.id = this.persona.id;
            let estado = this.conecta.servidorActualizar(perLocal);

            estado.subscribe(data => {
                loader.dismiss();
                let respuesta: any = data;
                if (respuesta.success == "ok") {
                    this.showAlert("Informe", "Se actualizo el registro con éxito");
                } else {
                    this.showAlert("Informe", "No se actualizo el registro");
                }

            }, err => {
                loader.dismiss();
                this.showAlert("Error #8", "No hay conexión con el servidor");

            });
        }

        showAlert(titulo, mensaje) {
            const alert = this.alertCtrl.create({
                title: titulo,
                subTitle: mensaje,
                buttons: ['Cerrar']
            });
            alert.present();
        }
    }
