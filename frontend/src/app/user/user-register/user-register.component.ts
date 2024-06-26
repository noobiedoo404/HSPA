import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ValidationErrors, FormBuilder } from '@angular/forms';
import { UserForRegister } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  user!: UserForRegister;
  userSubmitted!: boolean;
  constructor(private fb: FormBuilder, private alertify: AlertifyService) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl(null, Validators.required),
    //   email: new FormControl(null, [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.required, Validators.maxLength(10)])
    // }, this.passwordMatchingValidator);
    this.createRegisterationForm();
  }

  createRegisterationForm() {
    this.registrationForm =  this.fb.group({
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]]
    }, {validators: this.passwordMatchingValidator});
}

  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null :
      { notmatched: true }
  };

  // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------

  // getter used to expose any value as property prefixed with get word
  // restriction 
  // cant have an argument and must have a return
  // 
  get userName() {
    return this.registrationForm.get('userName') as FormControl;
  }

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registrationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registrationForm.get('mobile') as FormControl;
  }
  // ------------------------

  onSubmit() {
    console.log(this.registrationForm.value);
    this.userSubmitted = true;

    if (this.registrationForm.valid) {
      // this.user = Object.assign(this.user, this.registerationForm.value);
      // this.authService.registerUser(this.userData()).subscribe(() =>
      // {
      //     this.onReset();
      //     this.alertify.success('Congrats, you are successfully registered');
      // });
    }
  }

    onReset() {
      this.userSubmitted = false;
      this.registrationForm.reset();
  }
}