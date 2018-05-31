import { Component, OnInit } from '@angular/core';
import { Gallery } from 'src/app/model/gallery.model';
import { GalleryService } from 'src/app/services/gallery.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  values="";
  photos:Gallery[];
  photoShow:Gallery;
  pId:number;
  constructor(private _gallery:GalleryService) { }

  ngOnInit() {

    this._gallery.getPhotos().subscribe(
      data => {
        this.photos = data;
        console.log("photo Info: ", data);
      },
      error => {

        console.log("error", error);
      }
    );
  }

  onEnter(value:number){
    this.pId=value;
    for(let photo of this.photos){
      if(this.pId == photo.id){
        this.photoShow=photo;
      }
    }
  }
  // getPhotoId(id){
  //   for(let photo of this.photos){
  //     if( id == photo.id){
  //       this.photoShow=photo;
  //     }
  //   }
  // }



}
