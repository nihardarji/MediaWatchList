import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MediaItemService } from '../../media-item.service';
import { lookupListToken } from '../../providers';

@Component({
  selector: 'app-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private mediaItemService: MediaItemService,
    private router: Router,
    @Inject(lookupListToken) public lookupList: any
  ) {
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl(''),
      category: new FormControl(''),
      year: new FormControl('')
    })
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Movies'),
      name: this.formBuilder.control('', [
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')
      ]),
      category: this.formBuilder.control(''),
      year: this.formBuilder.control('', this.yearValidator),
    })
  }

  onSubmit(mediaItemForm: any) {
    this.mediaItemService
      .add(mediaItemForm)
      .subscribe(() => this.router.navigate(['/']))
  }

  yearValidator(control: AbstractControl): ValidationErrors | null {
    if(control.value.trim().length === 0) {
      return null
    }
    const minYear = 1800
    const maxYear = 2200
    const year = parseInt(control.value)
    if(minYear <= year && maxYear >= year) {
      return null
    } else {
      return {
        year: {
          min: minYear,
          max: maxYear
        }
      }
    }
  }

}
