import { Component } from '@angular/core';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CalculatorComponent]
})
export class AppComponent {
  title = 'calculator';
}
