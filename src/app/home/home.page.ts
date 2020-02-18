import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	private login: String = "Daniels";
	private passwd: String = "unknown";

	constructor(private routeur : Router) {}

	model: any = {};
	
	connexion()
	{
		
		/*if(this.model.login != this.login || this.model.passwd != this.passwd)
		{
			console.log("Login ou mot de passe non valide");
		}
		else
		{
			console.log("connexion...");
			
		}*/
		this.routeur.navigate(['utilisateurs']);
	}
}
