import { Component, inject } from '@angular/core';
import { pythonLogicService } from '../../services/pythonl.service';
import codeAlgorithm from './code';

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

  printF = codeAlgorithm;

  logMe() {
    console.log(this.pythonService.pyodide.runPython);
  }
}
