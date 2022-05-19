import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { HomeComponent } from './components/home/home/home.component';
import { BindingComponent } from './components/bindings/binding/binding.component';
import { TwoWayBindingComponent } from './components/bindings/two-way-binding/two-way-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './components/interactions/parent/parent/parent.component';
import { ChildComponent } from './components/interactions/child/child/child.component';
import { TemplateformComponent } from './components/forms/template-driven/templateform/templateform.component';
import { NumberComponent } from './components/number/number/number.component';
import { NumberParentComponent } from './components/number/number-parent/number-parent.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { DateComponent } from './components/services-usage/date/date.component';
import { DirectiveUsageComponent } from './components/directive-usage/directive-usage/directive-usage.component';
import { StructuralComponent } from './components/directive-usage/structural/structural.component';
import { BuiltInPipesComponent } from './components/pipes/built-in-pipes/built-in-pipes.component';
import { SqrtPipe } from './pipes/sqrt';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    BindingComponent,
    TwoWayBindingComponent,
    ParentComponent,
    ChildComponent,
    TemplateformComponent,
    NumberComponent,
    NumberParentComponent,
    ReactiveFormsComponent,
    DateComponent,
    DirectiveUsageComponent,
    StructuralComponent,
    BuiltInPipesComponent,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
