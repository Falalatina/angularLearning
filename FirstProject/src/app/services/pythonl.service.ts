import { Injectable } from '@angular/core';
import { loadPyodide } from 'pyodide';

@Injectable({
  providedIn: 'root',
})
export class pythonLogicService {
  pyodide: any;

  getPy = async () => {
    this.pyodide = await loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.3/full/',
    });
  };

  constructor() {
    this.getPy();
  }
}
