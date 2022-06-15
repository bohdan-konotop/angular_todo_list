import { FormGroup } from "@angular/forms";

export function confirmPassword(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors["confirmPassword"]) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmPassword: true });
      return { confirmPassword: true };
    }

    matchingControl.setErrors(null);
    return null;
  };
}
