import { FormGroup, ValidationErrors } from "@angular/forms";

export function confirmPassword(
  controlName: FormGroup
): ValidationErrors | null {
  const control = controlName.get("password");
  const matchingControl = controlName.get("confirmPassword");

  if (
    matchingControl &&
    matchingControl.errors &&
    !matchingControl.errors["confirmPassword"]
  ) {
    return null;
  }

  if (control && matchingControl && control.value !== matchingControl.value) {
    matchingControl?.setErrors({ confirmPassword: true });
    return { confirmPassword: true };
  }

  matchingControl?.setErrors(null);
  return null;
}
