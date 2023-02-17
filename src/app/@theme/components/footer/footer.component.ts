import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://talan.com/" target="_blank">Talan</a></b> 2023
    </span>
    <div class="socials">
      <a href="https://www.facebook.com/talan/" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/talan_fr?lang=en" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://www.linkedin.com/company/talan/"  target="_blank"class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
