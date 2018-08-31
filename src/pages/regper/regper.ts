import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {LoadingController} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {AlertController} from 'ionic-angular';
/**
 * Generated class for the RegperPage page.
 * regper.ts
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-regper',
    templateUrl: 'regper.html',
})
export class RegperPage {

    miventana: any;

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private CosValFor: FormBuilder,
        private VentanaEspera: LoadingController,
        private conecta: ConectarProvider,
        private alertCtrl: AlertController) {
        this.iniciarFormulario();
    }

    RegPersona: FormGroup;

    iniciarFormulario() {
        this.RegPersona = this.CosValFor.group({
            fecha: ['', [Validators.required]],
            tipo: ['', [Validators.required]],
            numero: ['', [Validators.required, Validators.pattern(/^[0-9]{5,20}$/)]],
            nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚÜ üñÑ]{2,30}$/)]],
            apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-ZáéíóúÁÉÍÓÚÜ üñÑ]{2,30}$/)]],
            tel: ['', [Validators.required, Validators.pattern(/^[/+0-9]{7,15}$/)]],
            email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]]
        });
    }
    /*    regPer this.miventana = this.VentanaEspera.crea               content: "Un momento... <br> Se esta procesando su solici                             // Mostr               this.miventana.presen               console.table(this.RegPersona.val      
                  
/*
    reg                    this.miventana = this.VentanaEspera.c                        content: "Un momento... <br> Se esta procesando su sol                                    // Mo                    this.miventana.pre                    let estado = this.conecta.enviarAlservidor(this.RegPersona.                    // Vamos a consumir el s                    estado.subscribe(data => {                    // Vamos a consumir una                                         // Reciba y Respuesta del s                                       e                            this.miventana.dis                            console.lo                            this.presentAlert("Error No.06", "No existe conexión con el servidor. Verifique la cone                                 );                    
    */


    regPer() {
        this.miventana = this.VentanaEspera.create({
            content: "Un momento...<b>Se esta procesando su solicitud"
        });
        this.miventana.present();
      //  console.table(this.RegPersona.value);  // Este sirve para probar el envio de información.
        let estado = this.conecta.enviarAlservidor(this.RegPersona.value);
        estado.subscribe(data => {
            let res: any = data;
            this.miventana.dismiss();
            if (res.success == "ok") {
                this.presentAlert("Positivo", "El usuario fue registrado");
                this.iniciarFormulario();
            } else {
                this.presentAlert("Error N.7", "La cédula ya esta registrada");
            }
        },
            err => {
                this.miventana.dismiss();
                this.presentAlert("Error No. 6", "No existe conexión con el servidor");
            });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad RegperPage');
    }

    // Metodo
    presentAlert(estadoTitulo, estMensaje) {
        let alert = this.alertCtrl.create({
            title: estadoTitulo,
            subTitle: estMensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }

}
   //console.table(this.RegPersona.value);