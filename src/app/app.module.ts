import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './public/master-page/navbar/navbar.component';
import { FooterComponent } from './public/master-page/footer/footer.component';
import { InicioComponent } from './public/inicio/inicio.component';
import { ParalaxDirective } from './paralax.directive';
import { NgxParallaxModule } from '@yoozly/ngx-parallax';
import { HeroComponent } from './public/master-page/hero/hero.component';
import { PageNotFoundComponent } from './public/master-page/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InicioComponent,
    ParalaxDirective,
    HeroComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxParallaxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
