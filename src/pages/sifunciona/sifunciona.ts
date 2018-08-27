import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {SumaseparadaPage} from '../sumaseparada/sumaseparada';
import {SumaobjetoPage} from '../sumaobjeto/sumaobjeto'

// import {SumaseparadaPage} from '../sumaseparada/sumaseparada';
/**
 * Generated class for the SifuncionaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sifunciona',
    templateUrl: 'sifunciona.html',
})
export class SifuncionaPage {
    numero1:number;
    numero2:number;
   

    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SifuncionaPage');
    }


    sumaseparada() {
        this.navCtrl.push(SumaseparadaPage, {va1: this.numero1, va2: this.numero2});
    }

    caja={nobj1: this.numero1, nobj2: this.numero2}
    
    
    sumaobjeto() {
        this.navCtrl.push(SumaobjetoPage, {caja: {numero1: this.numero1, numero2: this.numero2}});
    }

}