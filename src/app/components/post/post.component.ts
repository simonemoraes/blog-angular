// importando dependencias do angular core
import { Component, OnInit } from '@angular/core';
// importando dependencias de rota
import { Router, ActivatedRoute } from '@angular/router';
// importando o provider do blog
import { BlogService } from '../../providers/blog.service';

// decorando o componente para informar como o angular deve trabalhar
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})

/* exportando a classe deste componente para ser importável por outros
arquivos (no caso, o app.module.ts)*/
export class PostComponent implements OnInit {

  post:any = {};

  constructor(
      public activatedRoute: ActivatedRoute, // instanciando a rota ativa
      public router: Router, // instanciando o roteador
      public blog: BlogService // instanciando nosso provider de blog
  ) {
    // chama a rota ativa
    this.activatedRoute
        .params  // se inscreve para quando for resolvida
        .subscribe(
            // recebe os parametros
            params => {
              // declara uma variável id baseada no parametro id da url
              let id = params['id'];
              // pego o post em questão
              this.blog.post(id)
              // quando resolvido
                  .then((post: any) => {
                    // liga os dados na view (template)
                    this.post = post;
                  })
                  // tratamento de erro
                  .catch((e) => {
                    console.error(e);
                    // força navegação para página 404
                    this.router.navigate(['/404']);
                  })
            });
  }
  ngOnInit() {
  }

}
