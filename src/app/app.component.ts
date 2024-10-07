import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'nislab';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Nislab | Network and Information Security Laboratory" );

    this.metaService.addTags([
      {name: 'keywords', content: 'nislab, gtu, bilmuh, cybersecurity, cyber, security'},
      {name: 'description', content: 'This is the webpage of Network and Information Security Laboratory in Gebze Technical University.'},
    ]);
    
    
    AOS.init(); 

  }
}
