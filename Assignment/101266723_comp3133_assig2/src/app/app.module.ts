import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { BookedHistoryComponent } from './user/booked-history/booked-history.component';

import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    UserComponent,
    AdminUserComponent,
    BookedHistoryComponent,
  ],
  imports: [
    ApolloModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    BrowserModule,
    MatRadioModule,
    MatCardModule,
    FormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'http://localhost:4000/graphql',
          }),
        };
      },
      deps: [HttpLink],
    },
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
