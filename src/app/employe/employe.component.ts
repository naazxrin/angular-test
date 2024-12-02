import { NgFor} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employe',
  standalone: true,
  imports: [FormsModule,NgFor],
  templateUrl: './employe.component.html',
  styleUrl: './employe.component.css'
})
export class EmployeComponent {
  employees: any[] = [];
  newEmployee: any = { name: '', contact: '', email: '', address: '' };

  addEmployee() {
    this.employees.push({ ...this.newEmployee });
    this.newEmployee = { name: '', contact: '', email: '', address: '' };
  }

}
