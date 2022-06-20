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
    this.form = fb.group(
      {
        email: [
          "",
          [Validators.required, Validators.email, Validators.minLength(1)],
        ],
        password: ["", [Validators.required, Validators.minLength(6)]],
      },
      { updateOn: "submit" }
    );
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
}
