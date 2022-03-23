import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  constructor(private gifService: GifsService) { }

  get history(){
    return this.gifService.history;
  }
  search( word: string){
    this.gifService.searchGifs(word);
  }


  ngOnInit(): void {
  }

}
