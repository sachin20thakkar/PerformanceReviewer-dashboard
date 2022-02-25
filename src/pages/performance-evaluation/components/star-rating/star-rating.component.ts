import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.sass']
})
export class StarRatingComponent implements OnInit {
  @Input() rating:number = 0;
  @Output() applyRating:EventEmitter<number> = new EventEmitter<number>()
  constructor() { }

  ngOnInit(): void {
  }

  onClick(rating:any) {
    this.rating = rating;
    this.applyRating.emit(rating);
  }

}
