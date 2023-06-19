import { Component, Output, EventEmitter } from '@angular/core';
import { SharedService } from '../../service/shared.service';
import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() parameters = new EventEmitter<any>();
  country: string = '';
  category: string = 'tecnologia';
  news: any[] = [];
  listNews: any[] = [];

  onFilterChange(category: any) {
    this.category = category;
    this.searchNews();
    this.receiveNews();
  }
  constructor(private sharedService: SharedService, private newsService: NewsService) { }

  ngOnInit() {
    this.searchNews();
    this.receiveNews();
  }

  searchNews() {
    const parameters = {
      country: this.country,
      category: this.category
    };
    this.sharedService.sendData(parameters);
  }

  receiveNews() {
    const  parameters = {
      country: this.country,
      category: this.category
    }
    this.newsService.getNews(parameters).then((data: any) => {
      this.news = data.articles;
      this.news = this.news.filter(news => news.urlToImage !== null).slice(0, 21).map(news => {
        const fecha = new Date(news.publishedAt);
        const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formattedDate = fecha.toLocaleDateString('es-ES', options as Intl.DateTimeFormatOptions);
        
        return {
          ...news,
          publishedAt: formattedDate
        };
      });
      console.log(this.news);
      this.listNews = data.articles;
      this.listNews = this.listNews.filter(listNews => listNews.urlToImage !== null).slice(20, 26).map(listNews => {
        const fecha = new Date(listNews.publishedAt);
        const options = { month: 'long', day: 'numeric', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        const formattedDate = fecha.toLocaleDateString('es-ES', options as Intl.DateTimeFormatOptions);

        return {
          ...listNews,
          publishedAt: formattedDate
        };
      });
    });
  }

  





  

}
