import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  animations: [
    trigger('confirmation', [
      state('void', style({ opacity: 0, transform: 'translateY(-20px)' })),
      transition(':enter, :leave', [
        animate(300)
      ]),
    ]),
  ],
})
export class ContactFormComponent {
  showConfirmation = false;
  submittedName: string = '';
  submittedEmail: string = '';
  submittedMessage: string = '';
  submittedPhone: string = '';

  onSubmit(form: NgForm) {
    this.submittedName = form.value.name;
    this.submittedEmail = form.value.email;
    this.submittedMessage = form.value.message;
    this.submittedPhone = form.value.phone;
    this.showConfirmation = true;

    form.resetForm();
  }
}
