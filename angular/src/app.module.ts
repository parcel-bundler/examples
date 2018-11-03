import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './components/Main.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    bootstrap: [
        MainComponent
    ],
    declarations: [
        MainComponent
    ]
})

export class AppModule {
}