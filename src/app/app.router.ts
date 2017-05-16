import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { Error404PageComponent } from './pages/error-404-page/error-404-page.component';

const routes: Routes = [
    {
        path: '',
        component: HomePageComponent
    },
    {
        path: ':slug/:id',
        component: PostPageComponent
    },
    {
        path: '**',
        component: Error404PageComponent
    }
    ];

export const RoutingModule = RouterModule.forRoot(routes);