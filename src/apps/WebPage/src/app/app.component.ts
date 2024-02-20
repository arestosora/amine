import { Component, OnDestroy } from '@angular/core';
import { LoaderService } from './services/loader.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  showLoader = false;
  private loaderSubscription: Subscription;
  title = "WebPage"

  constructor(private loaderService: LoaderService) {
    this.loaderSubscription = this.loaderService.loaderState$.subscribe((state) => {
      this.showLoader = state;
    });
  }

  ngOnDestroy() {
    this.loaderSubscription.unsubscribe();
  }
}