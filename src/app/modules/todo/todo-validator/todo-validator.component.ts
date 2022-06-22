import { Component, Input } from "@angular/core";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: "app-todo-validator",
  templateUrl: "./todo-validator.component.html",
  styleUrls: ["./todo-validator.component.css"],
})
export class TodoValidatorComponent {
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
    return "";
  }
}
