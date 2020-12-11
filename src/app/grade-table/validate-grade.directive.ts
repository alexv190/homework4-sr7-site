import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'option[validateGrade]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateGradeDirective,
      multi: true,
    },
  ]
})
export class ValidateGradeDirective implements Validator{

  constructor() {}
  validate(control: AbstractControl): ValidationErrors {
   
    return {error:'a'};
  }

}
