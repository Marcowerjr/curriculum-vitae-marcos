import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { HeaderIosComponent } from './header-ios/header-ios.component';
import { ContactCardComponent } from './contact-card/contact-card.component';
import { AboutMeCardComponent } from './about-me-card/about-me-card.component';
import { AptitudesCardComponent } from './aptitudes-card/aptitudes-card.component';
import { LanguagesCardComponent } from './languages-card/languages-card.component';
import { TechnologiesProgrammingLanguagesCardComponent } from './technologies-programming-languages-card/technologies-programming-languages-card.component';
import { ParallaxDirective } from './parallax.directive';
import { ScrollRevealDirective } from './scroll-reveal.directive';

@NgModule({
  declarations: [
    HeaderComponent,
    HeaderIosComponent,
    AboutMeCardComponent,
    ContactCardComponent,
    AptitudesCardComponent,
    LanguagesCardComponent,
    TechnologiesProgrammingLanguagesCardComponent,
    ParallaxDirective,
    ScrollRevealDirective,
  ],
  exports: [
    HeaderComponent,
    HeaderIosComponent,
    AboutMeCardComponent,
    ContactCardComponent,
    AptitudesCardComponent,
    LanguagesCardComponent,
    TechnologiesProgrammingLanguagesCardComponent,
    ParallaxDirective,
    ScrollRevealDirective,
  ],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}
