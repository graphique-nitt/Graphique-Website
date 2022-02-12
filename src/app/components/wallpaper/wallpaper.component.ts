import { Component, OnInit } from '@angular/core';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Wallpaper, wallpaperAttributesMapping } from './wallpaper.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnInit {
  wallpapers$: Observable<Wallpaper[]>;

  id: string;
  wallpapername: string;
  creatorname: string;
  username: string;
  wallpaper: string;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) { }

  ngOnInit(): void {
    this.wallpapers$ = this.googleSheetsDbService.getActive<Wallpaper>(
      '1_NhTrKqZ7IGkHcrmkLq0g2B91iE6pdI4GaIgq0xxOpY', 'Details', wallpaperAttributesMapping, 'Active');
      console.log(this.wallpapers$);

  }
  
}
