import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { BannerComponent } from './banner/banner.component';
import { ContactComponent } from './contact/contact.component';
import { projectsComponent } from './projects/projects.component';
import { NgbModule, NgbNav, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { aboutComponent } from './about/about.component';
import { researchareasComponent } from './researchareas/researchareas.component';
import { peopleComponent } from './people/people.component';
import { publicationsComponent } from './publications/publications.component';
import { thesesComponent } from './theses/theses.component';
export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    
    aboutComponent,
    researchareasComponent,
    peopleComponent,
    projectsComponent,
    publicationsComponent,
    thesesComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    NgbNavModule,
    CarouselModule,
    TranslateModule.forChild({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ]
})
export class HomeModule { }
