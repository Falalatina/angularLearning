import { Component, inject } from '@angular/core';
import { pythonLogicService } from '../../services/pythonl.service';
//import { codeAlgorithm } from './code.py?raw';

@Component({
  selector: 'python-logic',
  standalone: true,
  imports: [],
  templateUrl: './python-logic.component.html',
  styleUrl: './python-logic.component.scss',
})
export class PythonLogicComponent {
  pythonService = inject(pythonLogicService);

  run = (a: any) => {
    this.pythonService.pyodide.runPython(a);
  };

  runPythonCode = '';

  read = fetch('./code.py')
    .then((response) => response.text())
    .then((data) => {
      this.runPythonCode = data;
    });

  logMe() {
    console.log(this.pythonService.pyodide.runPython);
  }
}
