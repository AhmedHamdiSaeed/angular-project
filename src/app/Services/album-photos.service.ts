import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumPhotosService {

  constructor( private myClient:HttpClient) { }

  private BaseUrl="  http://localhost:3000/photos";
  GetAlbumPhotos(Albumid:any){
    return this.myClient.get(this.BaseUrl+"?albumId="+Albumid);
  }
}
