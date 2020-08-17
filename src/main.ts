import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'
import { makeServer } from './mock.server'

if (environment.production) {
  enableProdMode()
} else if (environment.baseURL) {
  makeServer()
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err))
