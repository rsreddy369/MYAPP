import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BMIComponent } from './bmi/bmi.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventComponent } from './event/event.component';
import { StudentsComponent } from './students/students.component';
import { CarcompanyComponent } from './carcompany/carcompany.component';
import { DiceGameComponent } from './dice-game/dice-game.component';
import { PipesComponent } from './pipes/pipes.component';
import { BalancePipe } from './balance.pipe';
import { ShoppingComponent } from './shopping/shopping.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {HttpClientModule} from '@angular/common/http';
import { BankaccountsComponent } from './bankaccounts/bankaccounts.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { EmailComponent } from './email/email.component';
import { ReloadComponent } from './reload/reload.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateBankaccountsComponent } from './create-bankaccounts/create-bankaccounts.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';
import { BankAccountDetailsComponent } from './bank-account-details/bank-account-details.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductComponent } from './product/product.component';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsModule } from './about-us/about-us.module';
import { TodoComponent } from './todo/todo.component';
import { TypeTodoComponent } from './type-todo/type-todo.component';
import { ViewTodoComponent } from './view-todo/view-todo.component';
import { DisplayTodoComponent } from './display-todo/display-todo.component';
import { CalcComponent } from './calc/calc.component';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';
import { OperationsComponent } from './operations/operations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    WelcomeComponent,
    HomeComponent,
    DataBindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BMIComponent,
    DirectivesComponent,
    EventComponent,
    StudentsComponent,
    CarcompanyComponent,
    DiceGameComponent,
    PipesComponent,
    BalancePipe,
    ShoppingComponent,
    VehicleComponent,
    BankaccountsComponent,
    FlipkartComponent,
    EmailComponent,
    ReloadComponent,
    CreateVehicleComponent,
    CreateBankaccountsComponent,
    CreateUserComponent,
    EmployeeDetailsComponent,
    VehicleDetailsComponent,
    BankAccountDetailsComponent,
    ParentComponent,
    ChildComponent,
    ProductComponent,
    NavComponent,
    CartComponent,
    TodoComponent,
    TypeTodoComponent,
    ViewTodoComponent,
    DisplayTodoComponent,
    CalcComponent,
    InputComponent,
    ResultComponent,
    OperationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AboutUsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
