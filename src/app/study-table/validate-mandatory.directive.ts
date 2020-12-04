import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: 'input[validateMandatory]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateMandatoryDirective,
      multi: true,
    },
  ],
})
export class ValidateMandatoryDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) {
      return {
        validateMandatoryError: 'Введите значение'
      }
    }
    return null;
  }
}