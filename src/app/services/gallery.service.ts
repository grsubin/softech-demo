import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from 'src/app/config.config';
import { Gallery } from 'src/app/model/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(private _http:HttpClient) { }

  getPhotos(){
    return this._http.get<Gallery[]>(Config.albumURL);
  }
}
