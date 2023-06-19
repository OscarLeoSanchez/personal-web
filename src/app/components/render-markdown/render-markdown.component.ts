import { Component } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';
@Component({
  selector: 'app-render-markdown',
  templateUrl: './render-markdown.component.html',
  styleUrls: ['./render-markdown.component.css']
})
export class RenderMarkdownComponent {

  constructor(private restService: RestService) { }

  blog: any;

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    const url = 'http://127.0.0.1:5001/blog/2';
    this.restService.getPost(url).subscribe((data: any) => {
      this.blog = data;
      console.log(this.blog);
    });
  }
}
