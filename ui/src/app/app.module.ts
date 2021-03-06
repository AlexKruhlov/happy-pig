import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FundService } from './api/service/fund.service';
import { ItemService } from './api/service/item.service';

import { AppRouting } from './app.routing';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatButtonModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatIconModule
} from '@angular/material';

import { AppComponent } from './main/app.component';
import { FundComponent } from './fund/fund.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ItemsComponent } from './items/items.component';
import { ItemFundModalComponent } from './modals/item-fund-modal/item-fund-modal.component';
import { ConvertToHigherNominalPipe } from './pipes/convertToHigherNominal.pipe';
import { HeaderComponent } from './header/header.component';
import { NewFundComponent } from './modals/new-fund/new-fund.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';
import { StatisticComponent } from './statistic/statistic.component';
import { OnlyNumberDirective } from './directives/only-number.directive';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ProductModalComponent } from './modals/product-modal/product-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    FundComponent,
    DashboardComponent,
    ItemsComponent,
    ItemFundModalComponent,
    ConvertToHigherNominalPipe,
    HeaderComponent,
    NewFundComponent,
    ConfirmModalComponent,
    StatisticComponent,
    OnlyNumberDirective,
    ProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    BrowserAnimationsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatAutocompleteModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    ItemFundModalComponent,
    NewFundComponent,
    ConfirmModalComponent,
    ProductModalComponent
  ],
  providers: [FundService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
