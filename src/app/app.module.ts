import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import this for ngModel usage

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component'; // Import your Calculator component

@NgModule({
      declarations: [
            AppComponent,
            CalculatorComponent, // Declare CalculatorComponent here
      ],
      imports: [
            BrowserModule,
            FormsModule, // Add FormsModule here to enable ngModel
      ],
      providers: [],
      bootstrap: [AppComponent] // Bootstrap the main AppComponent
})
export class AppModule { }