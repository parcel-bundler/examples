import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div>
            <h1>{{text}}</h1>
        </div>`,
    styles: [
        'h1 { font-weight: 300; }',
        'div {display: flex;justify-content: center;align-items: center;width: 100%;height: 100%;}'
    ]
})

export class MainComponent {
    text: string = 'Hello World from Angular! 📦 🚀';

    constructor() {}
}