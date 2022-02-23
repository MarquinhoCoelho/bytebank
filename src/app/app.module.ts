import { MessageService } from 'primeng/api';
import {  HttpClientModule } from '@angular/common/http';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ExtratoComponent } from './extrato/extrato.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AppRoutingModule } from './app-routing.module';
import { PrimeNGComponent } from './prime-ng/prime-ng.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import { Extrato2Component } from './extrato2/extrato2.component';
import { FooterComponent } from './footer/footer.component';
import {CardModule} from 'primeng/card';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { NovaTransferenciaModalComponent } from './nova-transferencia-modal/nova-transferencia-modal.component';
import {SidebarModule} from 'primeng/sidebar';
import { HeaderComponent } from './header/header.component';
import {MenuModule} from 'primeng/menu';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { HomeComponent } from './home/home.component';
import {DividerModule} from 'primeng/divider';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import {ChartModule} from 'primeng/chart';
import {DropdownModule} from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ProgressBarModule} from 'primeng/progressbar';


registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    ExtratoComponent,
    PrimeNGComponent,
    Extrato2Component,
    FooterComponent,
    NovaTransferenciaModalComponent,
    HeaderComponent,
    HomeComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    CardModule,
    DialogModule,
    ToastModule,
    DynamicDialogModule,
    SidebarModule,
    MenuModule,
    ConfirmDialogModule,
    DividerModule,
    InputMaskModule,
    InputTextModule,
    ChartModule,
    DropdownModule,
    SliderModule,
    CalendarModule,
    ContextMenuModule,
    MultiSelectModule,
    ProgressBarModule

  ],
  providers: [
    ConfirmationService,
    DialogService,

    MessageService,
    {provide: LOCALE_ID, useValue: 'pt' },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'BRL'
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
