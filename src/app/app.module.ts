import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { setContext } from 'apollo-link-context';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpHeaders } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { ApolloLink } from 'apollo-link';
import { ServiciosComponent } from './servicios/servicios.component';
import { ServicioComponent } from './servicio/servicio.component';
import { ServicesComponent } from './servicesc/services.component';
import { ServicioTargetComponent } from './servicio-target/servicio-target.component';
import { ProviderComponent } from './provider/provider.component';

@NgModule({
  declarations: [AppComponent, ProfileComponent, SignupComponent, ServiciosComponent,
  ServicioComponent, ServicesComponent, ServicioTargetComponent, ProviderComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule,
    ApolloModule, HttpLinkModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink ) {

    const http = httpLink.create({ uri: 'http://192.168.43.87:3000/api' });
    const middleware = new ApolloLink((operation, forward) => {

      // Check for token
      const token = localStorage.getItem('token');
      if (!token) return forward(operation);

      operation.setContext({
        headers: new HttpHeaders().set(
         'Authorization', `Bearer ${token}`
        ),
      });
      return forward(operation);
    });
    const link = middleware.concat(http);

    
    apollo.create({
      link: link,
      cache: new InMemoryCache()
      /*
      link: httpLink.create({uri: 'http://localhost:3000/api'}),
      cache: new InMemoryCache()*/
    });
    
  }
  
}
