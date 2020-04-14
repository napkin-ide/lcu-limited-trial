import { Application } from '@lcu/common';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class DataAppService {
    public PreviousActiveApp: Application;

    constructor(app: Application) {
        this.PreviousActiveApp = app;
    }
  }
