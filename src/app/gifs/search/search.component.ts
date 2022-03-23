import { Component, ElementRef, ViewChild} from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent{
  constructor(private gifService: GifsService){}
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;
  search(){
    const value = this.txtSearch.nativeElement.value
    if(value.trim().length === 0){return;}
    this.gifService.searchGifs(value);
    this.txtSearch.nativeElement.value= '';
  }

}
