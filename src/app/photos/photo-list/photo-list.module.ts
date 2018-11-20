import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosListComponent } from './photos-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { PhotoModule } from '../photo/photo.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchCompoent } from './search/search.component';

@NgModule({
    declarations: [
        PhotosListComponent,
        PhotosComponent,
        LoadButtonComponent,
        FilterByDescriptionPipe,
        SearchCompoent
    ],
    imports: [
        CommonModule,
        PhotoModule,
        CardModule 
    ]
})
export class PhotoListModule {}