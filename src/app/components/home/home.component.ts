import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ISelectOption } from 'ngx-semantic/modules/select';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  countries: ISelectOption[] = []
  organizations: ISelectOption[] = [
    { text: "Frontend Developer", value: "Frontend Developer" },
    { text: "Backend Developer", value: "Backend Developer" },
    { text: "Designer", value: "Designer" },
    { text: "DevOps Engineer", value: "DevOps Engineer" },
  ]

  constructor(
    private notify: NotificationService,
    private countryService: CountryService,
    private router: Router
  ) { }


  testForm = new FormGroup({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)]),
    phone: new FormControl("", [Validators.required, Validators.minLength(11), Validators.maxLength(11)]),
    country: new FormControl("", [Validators.required]),
    organization: new FormControl("", [Validators.required]),
    successful: new FormControl("", [Validators.required]),
  })

  get firstName() {
    return this.testForm.get("firstName");
  }
  get lastName() {
    return this.testForm.get("lastName");
  }
  get email() {
    return this.testForm.get("email");
  }
  get password() {
    return this.testForm.get("password");
  }
  get phone() {
    return this.testForm.get("phone");
  }
  get country() {
    return this.testForm.get("country");
  }
  get organization() {
    return this.testForm.get("organization");
  }
  get successful() {
    return this.testForm.get("successful");
  }

  ngOnInit(): void {
    this.fetchCountries();
  }

  fetchCountries() {
    this.countryService.getCountries().subscribe(
      (countries: ISelectOption[]) => {
        this.countries = countries;
      },
      (error: any) => {
        console.error('Error fetching countries:', error.message);
      }
    );
  }

  submitForm() {
    console.log("loj")
    console.log(this.testForm.value)
  }
}
