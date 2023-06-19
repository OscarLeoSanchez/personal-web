import { Component } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {

  blogs: any;
  constructor(private restService: RestService) { }
  // apiContentfull = 'CFPAT-6k50EV3zDfrjvt-WO882P4yyS1t3CrQbHZPRIlBStGw'

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const url = 'http://127.0.0.1:5001/datos';
    this.restService.getPost(url).subscribe((data: any) => {
      this.blogs = data;
      console.log(this.blogs);
    }
    );
  }

}
