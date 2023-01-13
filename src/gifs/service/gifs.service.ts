import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsRespond, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

private apiKey: string="t3XYK7ZaBhWPbOd6ojA91rHzW3ah8wL8"
private serviceUrl:string='https://api.giphy.com/v1/gifs'

public resultado:Gif[]=[];

private _historial:string[]=[];

get historial(){

  return [...this._historial];
}

constructor(private http:HttpClient) {
  this._historial=JSON.parse(localStorage.getItem('historial')!) || [];
  this.resultado=JSON.parse(localStorage.getItem('resultado')!) || [];
}

 buscargGifs(query:string){
  query=query.trim().toLocaleLowerCase();

  if(!this._historial.includes(query)){
    this._historial.unshift(query);
    this._historial= this._historial.splice(0,10)

    localStorage.setItem('historial',JSON.stringify(this._historial))
  }

  console.log(this._historial)
  const params= new HttpParams()
    .set('apiKey', this.apiKey)
    .set('limit','10')
    .set('q',query);


  this.http.get<SearchGifsRespond>(`${this.serviceUrl}/search`,{params})
    .subscribe((resp) =>{
      console.log(resp.data)
      this.resultado=resp.data
      localStorage.setItem('resultado',JSON.stringify(this.resultado));
    })

}




}
