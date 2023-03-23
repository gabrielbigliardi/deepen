import { Component } from '@angular/core';

import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  faLinkedin = faLinkedin
  faInstagram = faInstagram
  faFacebook = faFacebook
  faArrowLeft = faArrowLeft

}
