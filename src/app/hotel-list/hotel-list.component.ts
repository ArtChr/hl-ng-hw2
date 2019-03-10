import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IHotel } from '../interfaces/hotel.interface';

@Component({
  selector: 'app-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class ListComponent {

  @Input()
  public hotels: IHotel[];

  @Input()
  public currentHotel: IHotel;

  @Input()
  public searchText: string;

  @Input()
  public displayStars: number;

  @Output()
  public hotelSelected: EventEmitter<number> = new EventEmitter();

  public selectHotel(id: number): void {
    this.hotelSelected.emit(id);
  }

}