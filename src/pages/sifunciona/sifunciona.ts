import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

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

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad SifuncionaPage');
    }
    
    numero1:any;
    numero2:any;
    irSumaSeparada(n1,n2) {
        this.navCtrl.push(n1, n2);
    }
  
      
}