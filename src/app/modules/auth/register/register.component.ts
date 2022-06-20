import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";
import { confirmPassword } from "../../../validators/confirm.validator";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  form: FormGroup;

  hide: boolean = true;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.form = fb.group(
      {
        username: ["", [Validators.required, Validators.minLength(2)]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(6)]],
        confirmPassword: ["", [Validators.required]],
      },
      {
        validators: confirmPassword,
        updateOn: "submit",
      }
    );
  }

  nextFocus(focusItem: HTMLInputElement, event: Event) {
    focusItem.focus();
    event.preventDefault();
    return;
  }

  register(): void {
    if (this.form.invalid) return;
    void this.authService.register(this.form.value);
  }

  getIsEmailInUse() {
    return this.authService.getIsEmailInUse();
  }
}
