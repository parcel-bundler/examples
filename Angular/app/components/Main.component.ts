import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{text}}</h1>'
})

export class MainComponent implements OnInit {
    text: String = 'Hello world';

    constructor() {

    }

    ngOnInit() {
        console.log('Main component initialised');
    }
}