import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { UtilsService } from '../common/utils.service';

@Directive({
  selector: 'input[validateDate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ValidateDateDirective,
      multi: true,
    },
  ],
})
export class ValidateDateDirective implements Validator {

  constructor(private utils:UtilsService) {}
  validate(control: AbstractControl): ValidationErrors {
    const value = control.value;
    // Create date from input value
    var inputDate = this.utils.transformToOnlyDate(new Date(value));
    var todaysDate = this.utils.transformToOnlyDate(new Date());
    if (inputDate < todaysDate) {
      return {
        wrongDate: 'Дата урока не может быть ранее заданного дня',
      };
    }
    return null;
  }


}
