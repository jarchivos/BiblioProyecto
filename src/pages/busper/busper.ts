import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ToastController} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {PerperPage} from '../perper/perper';

/**
 * Generated class for the BusperPage page.
 * busper.ts
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-busper',
    templateUrl: 'busper.html',
})
export class BusperPage {
    item: any = 1;
    criterio = "";
    edificio: any;
    persona: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,
        private conecta: ConectarProvider) {
        this.persona = this.navParams.get("per");
    }

    presentToast(Mensaje) {
        const toast = this.toastCtrl.create({
            message: Mensaje,
            position: 'middle',
            showCloseButton: true,
            closeButtonText: 'Ok',
            duration: 2000
        });
        toast.present();
    }

    buscar() {
        if (this.item != 1 && this.criterio == "") {
            this.presentToast("La opción de filtro no puede estar vacio");
        } else {
            let busqueda = {item: this.item, criterio: this.criterio};
            let estado = this.conecta.servidorBuscar(busqueda);
            estado.subscribe(data => {
                //console.table (busqueda);
                 console.log(data);
                this.cargarVista(data);
            }, err => {
                console.log(err);
            });
        }
    }

    verifique() {
        this.criterio = '';
        this.presentToast("¡Cambió el criterio de busqueda!");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad BusperPage');

    }

    cargarVista(data) {
        this.edificio = data.result;
    }

    verPerfil(persona) {
        this.navCtrl.push(PerperPage, {per: persona});
    }
}
