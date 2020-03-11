import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { SelectorTitleComponent } from './selector-title/selector-title.component';
import { SearchResultComponent } from './search-result/search-result.component';
/* import { from } from 'rxjs';
 */
@NgModule({
  declarations: [
    AppComponent,
    SelectorTitleComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
