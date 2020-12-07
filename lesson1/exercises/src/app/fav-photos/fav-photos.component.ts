import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos and Images';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://www.bing.com/th?id=OIP.vb22ZTRkZqRJfGL9edHioQHaOj&w=104&h=204&c=8&rs=1&qlt=90&pid=3.1&rm=2';
  image3 = 'https://www.bing.com/th?id=OIP.YGJnhrCpzxz_DU9dCivdpQHaHb&w=86&h=92&c=8&rs=1&qlt=90&pid=3.1&rm=2';

  constructor() { }

  ngOnInit() {
  }

}