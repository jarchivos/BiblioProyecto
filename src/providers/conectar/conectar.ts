import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConectarProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConectarProvider {

    constructor(public http: HttpClient) {
        console.log('Hello ConectarProvider Provider');
    }

    traerListPer(ced) {
        return this.http.get("https://randomuser.me/api/?results=" + ced);
    }

    //  Esto sirve para encapsular y enviar al servidor, formatos que no reconozca, ej: ñ, tildes.
    options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    enviarAlservidor(persona: any) {
        console.table(persona);
      
        return this.http.post("http://192.168.0.222/flas011/controller/registro.php", JSON.stringify(persona), this.options);
        //return this.http.post("http://192.168.0.75/flas011/controller/registro.php", JSON.stringify(persona), this.options);
    }

    servidorBuscar(criterio: any) {
       
        return this.http.post("http://192.168.0.222/flas011/controller/buscar.php", JSON.stringify(criterio), this.options);
        //return this.http.post("http://192.168.0.75/flas011/controller/buscar.php", JSON.stringify(criterio), this.options);
    }
    
    servidorActualizar(newPersona){
        return this.http.post("http://192.168.0.222/flas011/controller/actualizarPersona.php", JSON.stringify(newPersona), this.options);
    }

}
