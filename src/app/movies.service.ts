import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }

  getApis(searchword:string,date:string):Observable<any>
  {
     return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${searchword}/${date}?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  moviedetail(id:string):Observable<any>
  {

    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  tvDetail(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
  personDetail(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=f1aca93e54807386df3f6972a5c33b50`)
  }
}
