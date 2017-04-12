import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User{
	name: string;
	email:string;

	constructor(name: string, email: string){
		this.name = name;
		this.email = email;
	}
}

@Injectable()
export class AuthService {

	currentUser: User;

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  public login(credentials){
  	if (credentials.email === null || credentials.password === null) {
  		return Observable.throw('Please insert correct credentials');
  	}else{
  		
  		return Observable.create(observer => {
  			//make post request to the backend
  			let access = (credentials.password === "pass" && credentials.email === "email");
  			this.currentUser = new User('Simon', 'saimon@example.com');
  			observer.next(access);
  			observer.complete();	
  		});
  	}
  }

  public getUserInfo() : User {
  	return this.currentUser;
  }

  public logout(){
  	return Observable.create(observer => {
  		this.currentUser = null;
  		observer.next(true);
  		observer.complete()
  	});
  }

}
