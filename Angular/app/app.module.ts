import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './components/Main.component';

@NgModule({
    bootstrap: [MainComponent],
    imports: [
        BrowserModule
    ],
    declarations: [
        MainComponent
    ]
})

export class AppModule {
}