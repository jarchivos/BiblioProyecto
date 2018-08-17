import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HemerotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hemeroteca',
  templateUrl: 'hemeroteca.html',
})
export class HemerotecaPage {
resultado;
numero1;
numero2;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HemerotecaPage');
  }
  
  suma() {
      this.resultado = "La suma de " + this.numero1 + "+" + this.numero2 + "=" + (parseInt(this.numero1)+ parseInt(this.numero2));
  }

}
