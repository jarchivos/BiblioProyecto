import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {VerperfilPage} from '../verperfil/verperfil';

/**
 * Generated class for the ListperPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
    selector: 'page-listper',
    templateUrl: 'listper.html',
})
export class ListperPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, private acceso: ConectarProvider) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListperPage');
    }

    ced: any;
    consultar() {
        let estado = this.acceso.traerListPer(this.ced);
        estado.subscribe(data => {
            this.ejecutar(data);
        }, err => {
            console.log(err);
        });
    }
    edificio: any;
    ejecutar(laRespuestaDelServidor) {
        this.edificio = laRespuestaDelServidor.results;
    }

    irVerperfil(persona) {
        this.navCtrl.push(VerperfilPage, {Data: persona});
    }
}
