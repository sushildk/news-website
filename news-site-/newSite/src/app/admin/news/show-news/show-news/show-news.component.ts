import {
  Component,
  OnInit,
} from '@angular/core';
import { allNews } from 'src/app/admin/model/newsModel.';

import { MsgServiceService } from 'src/app/shared/service/msg-service.service';
import { environment } from 'src/environments/environment';

import { NewsService } from '../../service/news.service';

@Component({
  selector: 'app-show-news',
  templateUrl: './show-news.component.html',
  styleUrls: ['./show-news.component.css']
})
export class ShowNewsComponent implements OnInit {
allNews: allNews[] =[];
imageUrl:string
  constructor(
    public newsService:NewsService,
    public msgService:MsgServiceService
  ) {
    this.imageUrl = environment.imageUrl
    // console.log('image',this.imageUrl)
   }

  ngOnInit(): void {
    this.getAllNews()
  }
  getAllNews(){
    this.newsService.get()
    .subscribe((data:any)=>{
      console.log('all news',data);
      this.allNews=data
   }
  //  ,(err:any)=>{
  //     console.log('err',err)
  //   }
    )
  }
  deleteNews(obj:any){
    console.log('obj is >>>',obj._id)
    this.newsService.remove(obj._id)
    .subscribe((data)=>{
      this.msgService.showSuccess('Deleted Room');
      this.getAllNews()
    })
  }
}
