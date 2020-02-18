import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-utilisateurs',
	templateUrl: './utilisateurs.page.html',
	styleUrls: ['./utilisateurs.page.scss'],
})
export class UtilisateursPage implements OnInit {

	public tabUsers = [];

	constructor(public service: DataService) {  }
	
	ngOnInit() {
		this.service.getUser().subscribe(data => (this.tabUsers = data));
		console.log(this.tabUsers);
	}
	
	infos()
	{
		console.log("vous voulez voir les infos de ");
	}
}