import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'frontend';
  usuarios: any[] = []; // Array para almacenar los usuarios obtenidos

  // Inyectar HttpClient para hacer la solicitud GET al backend
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Obtener los datos del microservicio
    this.http.get<any[]>('http://localhost:3000/api/data')
      .subscribe((data) => {
        this.usuarios = data; // Asignar los datos recibidos al array usuarios
      });
  }
}
