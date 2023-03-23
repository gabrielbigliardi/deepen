import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HeroComponent } from './components/views/home/hero/hero.component';
import { AboutComponent } from './components/views/home/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SolutionsComponent } from './components/views/home/solutions/solutions.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { BlogComponent } from './components/views/home/blog/blog.component';
import { ClientsComponent } from './components/views/home/clients/clients.component';
import { ContactComponent } from './components/views/home/contact/contact.component';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeroComponent,
    AboutComponent,
    SolutionsComponent,
    BlogComponent,
    ClientsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
