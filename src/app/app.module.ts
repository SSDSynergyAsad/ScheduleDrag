import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragToSelectModule } from '../../projects/ngx-drag-to-select/src/public_api';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PhoneComponent } from './phone/phone.component';

import {
  KeyComponent,
  ModifierKeyComponent,
  ShortcutComponent,
  ShortcutDescriptionComponent,
} from './shortcut/shortcut.component';

import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { TimeSliderSimpleComponent } from './time-slider-simple/time-slider-simple.component';
import { SecondToHourPipe } from './time-slider-simple/second-hour.pipe';
import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { NouisliderModule } from 'ng2-nouislider';
const MATERIAL_MODULES = [
  MatCheckboxModule,
  MatGridListModule,
  MatChipsModule,
  MatTabsModule,
  MatIconModule,
  MatButtonModule,
  NgxSliderModule
];

@NgModule({
  declarations: [
    AppComponent,
    KeyComponent,
    ShortcutComponent,
    ShortcutDescriptionComponent,
    ShortcutsComponent,
    ModifierKeyComponent,
    FooterComponent,
    HeaderComponent,
    PhoneComponent,
    TimeSliderSimpleComponent,
    SecondToHourPipe,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'demo-app' }),
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ...MATERIAL_MODULES,
    NouisliderModule,
    SliderModule,
    DragToSelectModule.forRoot(),

    // AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
    schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
