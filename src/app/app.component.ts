import { Component } from '@angular/core';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';

  constructor(private usuarioService: UsuarioService){
    this.usuarioService.getUsuarios()
      .subscribe( resp => {
        console.log(resp);
      }, (err) => {
        console.log('Error en el App Component');
      });
  }
}
