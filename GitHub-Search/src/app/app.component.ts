import { Component } from '@angular/core';
import { GitHubService } from './github.service';

@Component({
  selector: 'app-root',
  template: ``,
  styleUrls: ['./app.component.css'],
  providers: [GitHubService],
})
export class AppComponent {
  title = 'GitHub-Search';
  constructor(private _githubService: GitHubService) {
    this._githubService
      .getGitHubData('greg')
      .subscribe((data) => console.log(data.items));
  }
}
