import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';


import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';

import {HemerotecaPage} from '../pages/hemeroteca/hemeroteca';
import {CienciasPage} from '../pages/ciencias/ciencias';
import {HumanidadesPage} from '../pages/humanidades/humanidades';
import {SistemasPage} from '../pages/sistemas/sistemas';
import {ListperPage} from '../pages/listper/listper';
import {VerperfilPage} from '../pages/verperfil/verperfil'
import {HttpClientModule} from '@angular/common/http';
import {ConectarProvider} from '../providers/conectar/conectar';

import {SifuncionaPage} from '../pages/sifunciona/sifunciona';
import {SumaseparadaPage} from '../pages/sumaseparada/sumaseparada';
import {SumaobjetoPage} from '../pages/sumaobjeto/sumaobjeto';
import {RegperPage} from '../pages/regper/regper'

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        HemerotecaPage,
        CienciasPage,
        HumanidadesPage,
        SistemasPage,
        ListperPage,
        VerperfilPage,
        SifuncionaPage,
        SumaseparadaPage,
        SumaobjetoPage,
        RegperPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        HemerotecaPage,
        CienciasPage,
        HumanidadesPage,
        SistemasPage,
        ListperPage,
        VerperfilPage,
        SifuncionaPage,
        SumaseparadaPage,
        SumaobjetoPage,
        RegperPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider
    ]
})
export class AppModule {}
