// Bootstrap the application
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Local dependancies
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);