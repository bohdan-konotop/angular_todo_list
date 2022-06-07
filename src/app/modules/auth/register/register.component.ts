import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../../services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  user: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.user = fb.group({
      username: ["", [Validators.required, Validators.minLength(2)]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  register(): void {
    void this.authService.register(this.user.value);
  }

  getIsEmailInUse() {
    return this.authService.getIsEmailInUse();
  }
}
