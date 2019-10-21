import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://assets3.thrillist.com/v1/image/2754967/size/tmg-article_tall;jpeg_quality=20.jpg';
  image3 = 'https://images2.minutemediacdn.com/image/upload/c_crop,h_1065,w_1900,x_0,y_112/f_auto,q_auto,w_1100/v1565050342/shape/mentalfloss/594059-heartsbonesrescue.jpg';

  constructor() { }

  ngOnInit() {
  }

}