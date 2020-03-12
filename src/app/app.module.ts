import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SelectorTitleComponent } from './selector-title/selector-title.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchComponent } from './search/search.component';
/* import { from } from 'rxjs';
 */
@NgModule({
  declarations: [
    AppComponent,
    SelectorTitleComponent,
    SearchResultComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
