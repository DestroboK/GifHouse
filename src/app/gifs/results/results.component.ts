import { Component, HostListener, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent implements OnInit {
  public limit: number =9;
  get results(){
    return this.gifsService.results.slice(0,this.limit);
    
  }
  constructor(private gifsService: GifsService) { 
  }
  
  ngOnInit(): void {
    
    if (this.results.length ===0){
      this.gifsService.searchGifs('welcome');
    }
  }

  addGifs(){
    this.limit = this.limit + 9;
    console.log(this.results);
  }
}
