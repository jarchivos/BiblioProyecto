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
    todo: any = {
        va1: "",
        va2: ""
    };
    resultado: number;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.todo = this.navParams.get("todo");
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SumaobjetoPage');
        this.resultado = parseInt(this.todo.va1) + parseInt(this.todo.va2);
    }
}










    /*      
          this.n1 = navParams.get('n1');
          this.n2 = navParams.get('n2');
          this.resultado = "La suma de " + this.n1 + "+" + this.n2 + "=" + (parseInt(this.n1) + parseInt(this.n2));
      }
    */


