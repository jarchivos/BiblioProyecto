import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-hemeroteca',
    templateUrl: 'hemeroteca.html',
})
export class HemerotecaPage {
    resultado;
    numero1;
    numero2;
    numero3;
    Estado;


    Ctrl: boolean = true;
    Cambio(valor) {
        this.Ctrl = valor;
        this.tabla();
    }

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad HemerotecaPage');
    }

    suma() {
        this.resultado = "La suma de " + this.numero1 + "+" + this.numero2 + "=" + (parseInt(this.numero1) + parseInt(this.numero2));
    }

    resta() {
        this.resultado = "La resta de " + this.numero1 + "+" + this.numero2 + "=" + (parseInt(this.numero1) + parseInt(this.numero2));
    }

    multi() {
        this.resultado = "La multiplicación de " + this.numero1 + "+" + this.numero2 + "=" + (parseInt(this.numero1) + parseInt(this.numero2));
    }

    div() {
        this.resultado = "La división de " + this.numero1 + "+" + this.numero2 + "=" + (parseInt(this.numero1) + parseInt(this.numero2));
    }

    edificio;
    tabla() {
        this.Estado = true;
        this.edificio = Array();
        for (let i = 1; i <= this.numero2; i++) {
            if (((this.numero1 * i) % this.numero3 == 0) == this.Ctrl ){
                this.edificio.push({num: this.numero1, ind: i, res: (this.numero1 * i)});
            }
        }
    }

}
