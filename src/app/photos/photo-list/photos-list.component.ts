import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';

@Component({
  selector: 'ap-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, OnDestroy {
  
  
  photos: Photo[] = [];
  filter: string = '';
  debounce: Subject<string> = new Subject<string>();
  hasMore: Boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ){ }
  
  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params.userName;
    this.photos = this.activatedRoute.snapshot.data['photos'];
    
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  load() {
    this.photoService
      .listFromUserPaginated(this.userName, ++this.currentPage )
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if(!photos.length) this.hasMore = false;
      });
    
  }
}