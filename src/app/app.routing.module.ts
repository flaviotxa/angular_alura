import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'

import { PhotosListComponent } from './photos/photo-list/photos-list.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';
import { SignInComponent } from './home/signin/signin.component';
import { AuthGuard } from './core/auth/auth.guard';


const routes: Routes = [
    { 
        path: '', 
        component: SignInComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: 'user/:userName', 
        component: PhotosListComponent,
        resolve: {
            photos: PhotoListResolver
        }
    } ,
    { 
        path: 'p/add', 
        component: PhotoFormComponent 
    },
    { 
        path: '**', 
        component: NotFoundComponent  
    }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes) 
    ],
    exports: [
        RouterModule    
    ]
})

export class AppRoutingModule{ }

