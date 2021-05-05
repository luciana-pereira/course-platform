import { Component, OnChanges, Input } from '@angular/core';
import { threadId } from 'node:worker_threads';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html'
})
export class StarComponent implements OnChanges {
  @Input()
  rating: number = 0;
  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 94 / 5;
  }
}
