import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SumaseparadaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sumaseparada',
    templateUrl: 'sumaseparada.html',
})
export class SumaseparadaPage {

    n1: number;
    n2: number;
    resultado_separado: number;
    resultado2;
    resultado3;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        //get mostrar (lo que viene)
        //  this.n1 = this.navParams.get('va1');
        //  this.n2 = this.navParams.get('va2');
        this.n1 = parseInt(this.navParams.get("va1"));
        this.n2 = parseInt(this.navParams.get("va2"));
        this.resultado_separado = this.n1 + this.n2;

        //this.resultado_separado = "La suma de " + this.n1 + "+" + this.n2 + "=" + (parseInt(this.n1) + parseInt(this.n2));
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SumaobjetoPage');
        this.resultado2 = this.n1 + this.n2;
    }

    suma() {
        this.resultado3 = (this.n1 + this.n2);
    }

}
