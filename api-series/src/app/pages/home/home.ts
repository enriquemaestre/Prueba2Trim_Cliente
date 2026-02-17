import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../services/series';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{

  series: any []= [];
  loading = true;

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getAll().subscribe(response => {
      console.log('RESPUESTA API:', response);  // 👈 IMPORTANTE

      this.series = response;
      this.loading = false;
    }
    );
  }

}
