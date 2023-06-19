import { Component, OnInit } from '@angular/core';
import { SharedService } from './service/shared.service';
import { NewsService } from './service/news.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'personal-web';


  constructor(private sharedService: SharedService, private newsService: NewsService) { }
  ngOnInit() {
    this.sharedService.data$.subscribe(data => {
      this.newsService.getNews(data).then(data => {
        console.log(data);
      });
    });
  }

}
