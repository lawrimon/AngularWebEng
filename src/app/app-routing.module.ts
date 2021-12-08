import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { OrderSuccesfullComponent } from './pages/order-succesfull/order-succesfull.component';
import { SucesscontactComponent } from './pages/sucesscontact/sucesscontact.component';
import { WeatherdazComponent } from './pages/weatherdaz/weatherdaz.component';

const routes: Routes = [  // Paths that are taken for certain Components
  {path : '',component:HomeComponent},
  {path: 'menu',component:MenuComponent},
  {path: 'menu/:id',component:MenupageComponent},
  {path: 'success',component:OrderSuccesfullComponent},
  {path: 'about', component:AboutComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'weatherz', component:WeatherdazComponent},
  {path: 'contactsucess', component:SucesscontactComponent}
];

@NgModule({ //Imported Modules that are needed
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
