import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { SearchedGIFResults, Gif } from 'src/app/interfaces/gifs.interface';
import { empty } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _apiKey: string = 'kobJNZTxawxQ6h19LCWfpNSmGzY92j8j';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'
  private _history: string[] =[];
  private lastQuery: string = '';
  public results: Gif[] = [];
  private limit: number = 50;
  get history(){
    return [...this._history]
  }

  constructor(private http: HttpClient){
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
    this.results = JSON.parse(localStorage.getItem('gifs')!) || [];

  }
  
  searchGifs(query: string){
    query = query.trim().toLocaleLowerCase();
    if(!this._history.includes(query)){
      this._history.unshift(query);
      this._history = this._history.splice(0,10);
      localStorage.setItem('history', JSON.stringify(this._history));
    }


    const params = new HttpParams()
    .set('api_key', this._apiKey)
    .set('limit', this.limit)
    .set('q', query);

    this.lastQuery = query;
    this.http.get<SearchedGIFResults>(`${this.serviceUrl}/search`, {params : params})
      .subscribe( (response) => {
        this.results = response.data;
        localStorage.setItem('gifs', JSON.stringify(this.results));
      
      })
    
  }
  deleteGifs(){
    localStorage.removeItem('history');
    this._history = JSON.parse(localStorage.getItem('history')!) || [];
  }
  
}
