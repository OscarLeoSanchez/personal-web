import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RenderBlogComponent } from './components/render-blog/render-blog.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { RenderMarkdownComponent } from './components/render-markdown/render-markdown.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PageNotFoundComponent,
    RenderBlogComponent,
    BlogComponent,
    ContactMeComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    RenderMarkdownComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'blog/:id', component: RenderBlogComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'contact', component: ContactMeComponent },
      { path: 'blog', component: BlogComponent },
      { path: 'md', component: RenderMarkdownComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
