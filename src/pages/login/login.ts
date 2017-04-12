import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

	loading: Loading;
	registerCredentials: {email: '', password: ''};

  constructor(private navCtrl: NavController, private navParams: NavParams, private auth: AuthService, private alertCtrl: AlertController, private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }

  public login(){
  	this.showLoading();
  	this.auth.login(this.registerCredentials).subscribe(allowed => {
  		if(allowed){
  			setTimeout(() => {
  				this.loading.dismiss();
  				this.navCtrl.setRoot(HomePage)
  			});
  		}else{
  			this.showError("AccesDenied");
  		}
  	},
  	error => {
  		this.showError(error);
  	});
  }

  showLoading(){
  	this.loading = this.loadingCtrl.create({
  		content: 'Please wait'
  	});
  	this.loading.present();
  }

  showError(text){
  	setTimeout(() => {
  		this.loading.dismiss();
  	});

  	let alert = this.alertCtrl.create({
  		title: 'Fail',
  		subTitle: text,
  		buttons: ['OK']
  	});
  	alert.present(prompt);
  }

}
