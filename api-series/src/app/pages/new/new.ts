import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SeriesService } from '../../services/series';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './new.html',
  styleUrl: './new.css',
})
export class New {

  form!: FormGroup;
  message = '';

  constructor(
    private fb: FormBuilder,
    private seriesService: SeriesService,
    private router: Router
  ) {
    
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      channel: ['', Validators.required],
      rating: [0, [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.seriesService.create(this.form.value as any).subscribe(response => {
      this.message = `Serie creada con ID: ${response.id}`;

      setTimeout(() => {
        this.router.navigate(['/home']);

      }, 5000);
    })
  }

}
