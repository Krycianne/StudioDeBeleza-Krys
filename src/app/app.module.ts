import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UnhaEmGelComponent } from './unha-em-gel/unha-em-gel.component';
import { PenteadoComponent } from './penteado/penteado.component';
import { MaquiagemComponent } from './maquiagem/maquiagem.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NaoEncontradaComponent,
    UnhaEmGelComponent,
    PenteadoComponent,
    MaquiagemComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, BrowserAnimationsModule,
    MatSnackBarModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
