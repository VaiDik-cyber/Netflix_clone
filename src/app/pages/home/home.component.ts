import { Component,OnInit} from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service: MovieApiServiceService){ }

  bannerResult: any = [];
  trendingMovieResult: any = [];
  actionMovieResult : any = [];
  adventureMovieResult : any = [];
  animationMovieResult : any = [];
  comedyMovieResult : any = [];
  documentaryMovieResult : any = [];
  sciencefictionMovieResult : any = [];
  thrillerMovieResult : any = [];


    ngOnInit(): void{
      this.bannerData();
      this.trendingMovieData();
      this.actionMovieData();
      this.adventureMovieData();
      this.animationMovieData();
      this.comdeyMovieData();
      this.documentaryMovieData();
      this.sciencefictionMovieData();
      this.thrillerMovieData();
    }
  
  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    })
  }
  trendingMovieData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult = result.results;
    })
  }
  actionMovieData(){
    this.service.fetchActionMovies().subscribe((result)=>{
      console.log(result,'actionmovie#');
      this.actionMovieResult = result.results;
    })
  }
  adventureMovieData(){
    this.service.fetchAdvantureMovies().subscribe((result)=>{
      console.log(result,'adventuremovie#');
      this.adventureMovieResult = result.results;
    })
  }
  animationMovieData(){
    this.service.fetchAnimationMovies().subscribe((result)=>{
      console.log(result,'animationmovie#');
      this.animationMovieResult = result.results;
    })
  }
  comdeyMovieData(){
    this.service.fetchComedyMovies().subscribe((result)=>{
      console.log(result,'comdeymovie#');
      this.comedyMovieResult = result.results;
    })
  }

  documentaryMovieData(){
    this.service.fetchDocumentaryMovies().subscribe((result)=>{
      console.log(result,'documentarymovie#');
      this.documentaryMovieResult= result.results;
    })
  }
  sciencefictionMovieData(){
    this.service.fetchScienceFictionMovies().subscribe((result)=>{
      console.log(result,'sci-fi-movie#');
      this.sciencefictionMovieResult = result.results;
    })
  }
  thrillerMovieData(){
    this.service.fetchThrillerMovies().subscribe((result)=>{
      console.log(result,'thrillermovie#');
      this.thrillerMovieResult = result.results;
    })
  }
}
