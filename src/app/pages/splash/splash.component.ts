import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css',
})
export class SplashComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    //
  }

  ngOnInit(): void {
    const redirectTo = this.route.snapshot.queryParamMap.get('redirectTo') || '/products';

    setTimeout(() => {
      this.router.navigateByUrl(redirectTo);
    }, 3000); 
  }
}
