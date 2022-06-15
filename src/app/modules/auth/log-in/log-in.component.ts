import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-logIn",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
})
export class LogInComponent {
  form: FormGroup;

  hide: boolean = true;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = fb.group({
      email: [
        "",
        [Validators.required, Validators.email, Validators.minLength(1)],
      ],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  nextFocus(focusItem: HTMLInputElement, event: Event) {
    focusItem.focus();
    event.preventDefault();
    return;
  }

  login(): void {
    if (this.form.invalid) return;
    void this.authService.login(this.form.value);
  }

  getUserExistance() {
    return this.authService.getUserExistance();
  }

  //
  //   message: string = "";
  //
  //   errorMessage() {
  //     const value = this.user.value.email || 0;
  //     const emailRegular = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  //
  //     if (value < 1) {
  //       this.message = "This field shoud be filled";
  //     } else if (!emailRegular.test(value)) {
  //       this.message = "Not a valid email";
  //     } else this.message = "";
  //   }
}
