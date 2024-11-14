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

    await this.pyodide.loadPackage('networkx');
    await this.pyodide.loadPackage('nltk');
    await this.pyodide.loadPackage('Numpy');
    await this.pyodide.loadPackage('click');
  };

  constructor() {
    this.getPy();
  }

  textExample =
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.";
}
