import { Component } from '@angular/core';

@Component({
  selector: 'app-legend',
  standalone: true,
  imports: [],
  templateUrl: './legend.component.html',
  styleUrl: './legend.component.scss',
})
export class LegendComponent {
  colors = [
    {
      section: 'header',
      items: [
        {
          gName: 'xuntouchablex',
          color: [
            { c: '', desc: '' },
            { c: '', desc: '' },
          ],
        },
        {
          gName: 'etm',
          color: [
            { c: '', desc: '' },
            { c: '', desc: '' },
          ],
        },
      ],
    },
    {
      section: 'body',
    },
  ];
}
