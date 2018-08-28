    import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HemerotecaPage} from '../hemeroteca/hemeroteca';

import {ListperPage} from '../listper/listper';
import {SifuncionaPage} from '../sifunciona/sifunciona';
import {RegperPage} from '../regper/regper'

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {
    }

    irHemeroteca() {
        this.navCtrl.push(HemerotecaPage);
    }
    
     irListadodepersonas() {
        this.navCtrl.push(ListperPage);
    }
    
  
    irSifunciona() {
        this.navCtrl.push(SifuncionaPage);
    }
    
    irFormulario(){
        this.navCtrl.push(RegperPage);
    }
    
    
    
    nombre='';
    public continuar(){
        this.navCtrl.push(SifuncionaPage, {nombre: this.nombre});
    }
        
    
}
