import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: "app-auth-validator",
  templateUrl: "./auth-validator.component.html",
  styleUrls: ["./auth-validator.component.css"],
})
export class AuthValidatorComponent {
  @Input() control: AbstractControl | null = null;

  showError(control: AbstractControl | null) {
    return !control?.valid && (control?.touched || control?.dirty);
  }

  errorMessage(control: AbstractControl | null): string {
    const minLength = control?.getError("minlength")?.requiredLength;

    if (control?.hasError("required")) {
      return `This field should be filled`;
    }

    if (control?.hasError("minlength")) {
      return `This field should have at least ${minLength} symbols`;
    }

    if (control?.hasError("email")) {
      return "Email address is incorrect";
    }

    if (control?.hasError("confirmPassword")) {
      return "Password and Confirm Password must be match";
    }

    return "";
  }
}
