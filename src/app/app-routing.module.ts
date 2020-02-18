import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ 
		path: '', redirectTo: 'home', pathMatch: 'full' 
	},
	{ 
		path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
	},
	{
		path: 'utilisateurs',
    loadChildren: () => import('./utilisateurs/utilisateurs.module').then( m => m.UtilisateursPageModule)
	},
	{
		path: 'profil',
		loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
	},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
