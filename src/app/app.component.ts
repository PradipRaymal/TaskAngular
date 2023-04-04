import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'User Registration Form';
  genderList = ['Male', 'Female'];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
    Validators.email
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(200)
  ]);
  genderFormControl = new FormControl('', [Validators.required]);
  birthdateFormControl = new FormControl('', [Validators.required]);
  workExperienceFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(/^\d+$/)
  ]);

  get age(): number {
    const today = new Date();
    const birthdateFormControlValue = this.birthdateFormControl.value;
    if (!birthdateFormControlValue) {
      return 0;
    }
    const birthdateString = birthdateFormControlValue.toString();
    const birthdate = new Date(birthdateString.split('-').reverse().join('-'));
    let age = today.getFullYear() - birthdate.getFullYear();
    const month = today.getMonth() - birthdate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
      age--;
    }
    return age;
  }

  onSubmit() {
    console.log('Form submitted successfully');
    console.log('Email: ' + this.emailFormControl.value);
    console.log('Name: ' + this.nameFormControl.value);
    console.log('Gender: ' + this.genderFormControl.value);
    console.log('Birthdate: ' + this.birthdateFormControl.value);
    console.log('Age: ' + this.age);
    console.log('Work Experience: ' + this.workExperienceFormControl.value);
  }
}