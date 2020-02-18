import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppModule } from '../app.module';
import { RootObject } from '../users';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	private _lien : string = "/assets/data/users.json";
	
	constructor(private http : HttpClient) { }

	ngOnInit()
	{
	}
	
	getUser():Observable <RootObject>
	{
		return this.http.get<RootObject>(this._lien);
	}
}
