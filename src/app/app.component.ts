import { Component, OnInit } from '@angular/core';
import {NgbModal,NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Email } from './models/email';
import {EmailService} from './services/email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NgbCarouselConfig, EmailService]
})
export class AppComponent implements OnInit  {
  title = 'proyecto-portafolio';
  showNavigationArrows = false;
  showNavigationIndicators = false;
  public email: Email;
  public status;
  images1=[
    "assets/img/portfolio/nutripedia/1.PNG",
    "assets/img/portfolio/nutripedia/2.PNG",
    "assets/img/portfolio/nutripedia/3.PNG",
    "assets/img/portfolio/nutripedia/4.PNG",
    "assets/img/portfolio/nutripedia/5.png"
  ];
  images2=[
    "assets/img/portfolio/eleva/1.PNG",
    "assets/img/portfolio/eleva/2.PNG",
    "assets/img/portfolio/eleva/3.PNG",
  ];
  images3=[
    "assets/img/portfolio/viviendas/1.PNG",
    "assets/img/portfolio/viviendas/2.PNG",
    "assets/img/portfolio/viviendas/3.PNG",
  ];
  images4=["assets/img/portfolio/fixed/1.PNG"];
  images5=[
    "assets/img/portfolio/bookia/1.png",
    "assets/img/portfolio/bookia/2.png",
    "assets/img/portfolio/bookia/3.png",
    "assets/img/portfolio/bookia/4.png"
  ];
  constructor(public modal: NgbModal, private _config: NgbCarouselConfig, private _emailService: EmailService){
    _config.showNavigationArrows = true;
    _config.showNavigationIndicators = true;
    this.email =  new Email('','','','','');
  }


  ngOnInit(): void{

  }


  modales(contenido){
    this.modal.open(contenido,{windowClass:"myCustomModalClass"})
  }

  onSubmit(form){
    this._emailService.sendEmailContact(this.email).subscribe(
      Response => {
        console.log(Response);
        if(Response){
          this.status = 'success';
        }else {
          this.status = 'error';
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
