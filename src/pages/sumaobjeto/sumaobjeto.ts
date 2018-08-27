import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the SumaobjetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-sumaobjeto',
    templateUrl: 'sumaobjeto.html',
})
export class SumaobjetoPage {
    bolsa: any;
    n01: any;
    n02: any;
    resultado_objeto: any;
    
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.bolsa = this.navParams.get("caja:{n01: this.nobj1, n02:this.nobj2}");
        this.resultado_objeto = "La suma de " + this.n01 + "+" + this.n02 + "=" + (parseInt(this.n01) + parseInt(this.n02));
    }
    
        ionViewDidLoad() {
        console.log('ionViewDidLoad SumaobjetoPage');
    }
}










    /*      
          this.n1 = navParams.get('n1');
          this.n2 = navParams.get('n2');
          this.resultado = "La suma de " + this.n1 + "+" + this.n2 + "=" + (parseInt(this.n1) + parseInt(this.n2));
      }
    */


