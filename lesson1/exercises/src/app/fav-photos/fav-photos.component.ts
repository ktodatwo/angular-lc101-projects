import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'And now some pictures of ducks:';
  image1 = 'https://s3.amazonaws.com/newhobbyfarms.com/wp-content/uploads/2016/08/24105037/ducks-garden-2-Dog-Farm-Flickr-600x347.jpg';
  image2 = 'https://www.treehugger.com/thmb/aOmgLLmSXABYpnuiPvPwrM9SZc8=/1365x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/duckling-close-up-500315849-572917c93df78ced1f0b99ec.jpg';
  image3 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/how-to-keep-ducks-call-ducks-1615457181.jpg?resize=640:*';

  constructor() { }

  ngOnInit() {
  }

}