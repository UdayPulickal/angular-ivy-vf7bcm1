import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <div>
      <h1>{{ pageHeader ? pageHeader : "No Page Header" }}</h1>
      <h1>{{ getFullName() }}</h1>
      <img
        src="https://www.pragimtech.com/wp-content/uploads/2019/02/{{
          imagePath
        }}"
      />
      <br /><br />
      <my-employee></my-employee>
      <button [disabled]="isDisabled">Click me</button>
      <div [innerHtml]="badHtml">{{ badHtml }}</div>
    </div>
  `
})
export class AppComponent {
  pageHeader: string = "Employee Details";
  firstName = "Uday";
  lastName = "Pulickal";
  isDisabled: boolean = false;
  imagePath: string = "pargim-logo-1.png";
  badHtml: string = 'Hello <script>("Hacked");</script> World';
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}
