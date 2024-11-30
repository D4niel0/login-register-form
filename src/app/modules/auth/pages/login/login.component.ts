import { Component, OnDestroy, OnInit } from '@angular/core';
import { SharedModule } from '../../../../shared/modules/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginData } from '../../../../core/models';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  host: {
    class:
      'min-h-screen flex items-center justify-center w-full bg-transparent py-10 overflow-hidden',
  },
})
export class LoginComponent implements OnInit, OnDestroy {
  validateFormLog!: FormGroup;
  loginData!: LoginData;

  error: string | null = null;
  isLoading: boolean = false;

  passwordVisible: boolean = false;

  $onDestroy: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.validateFormLog = this.fb.group({
      email: [
        localStorage.getItem('clientEmail') || null,
        [Validators.required, Validators.email],
      ],
      password: [null, [Validators.required]],
    });

    this.validateFormLog.controls['email'].valueChanges
      .pipe(takeUntil(this.$onDestroy))
      .subscribe((emailValue) => {
        if (this.validateFormLog.controls['email'].valid) {
          localStorage.setItem('clientEmail', emailValue);
        }
      });
  }

  submitForm(): void {
    console.log(this.validateFormLog.getRawValue());
  }

  togglePasswordVisibility(): void {
    this.passwordVisible = !this.passwordVisible;
  }

  ngOnDestroy() {
    this.$onDestroy.next();
    this.$onDestroy.complete();
  }
}
