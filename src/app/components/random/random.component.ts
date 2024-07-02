import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { BypassInterceptorService } from '../../services/bypass-interceptor.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrl: './random.component.css'
})
export class RandomComponent {

  result: string = '';

  constructor(private service: ApiService, private beService: BypassInterceptorService) { }

  ngOnInit(): void {
    this.service.getAuth().subscribe({
      next: (data) => {
        this.result = 'OK';
        console.log(data)
      },
      error: (error) => {
        this.result = 'KO';
        console.log(error)
      }
    })
    this.service.getRandom().subscribe();
  }
}
