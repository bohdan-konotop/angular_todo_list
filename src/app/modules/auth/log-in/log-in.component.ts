import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-logIn",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
})
export class LogInComponent {
  user: FormGroup;

  hide: boolean = true;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.user = fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  login(): void {
    if (this.user.invalid) return;
    void this.authService.login(this.user.value);
  }

  getUserExistance() {
    return this.authService.getUserExistance();
  }

  changeHide(event: Event): void {
    event.preventDefault();
    this.hide = !this.hide;
  }
}
