import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  tabuleiro: number[][] = [  
    [5],  
    [5],
    [5],
    [5],
    [5],
   ];  
  navios: number[][] = [
    [2],
    [2],
    [2],
  ];
  tiro: any [2];
  tentativas=0;
  acertos=0;

  constructor() { }

  ngOnInit() {    
    this.inicializaTabuleiro();
    this.iniciaNavios();

    console.log("\n");

    do{
        this.mostraTabuleiro();
        this.darTiro(this.tiro);
        this.tentativas++;

        if(this.acertou(this.tiro,this.navios)){
          this.dica(this.tiro,this.navios,this.tentativas);
          this.acertos++;
        }
        else
          this.dica(this.tiro,this.navios,this.tentativas);

        this.alteraTabuleiro(this.tiro,this.navios,this.tabuleiro);


    }while(this.acertos!=3);

    console.log("\n\n\nJogo terminado. Você acertou os 3 navios em %d tentativas", this.tentativas);
    this.mostraTabuleiro();
  }

inicializaTabuleiro(){
        for(var linha=0 ; linha < 5 ; linha++ ){
            for(var coluna=0 ; coluna < 5 ; coluna++ ){
                this.tabuleiro[linha][coluna]=-1;
            }
        }
}

mostraTabuleiro(){
    var linha, coluna;

        console.log("\t1 \t2 \t3 \t4 \t5");
        console.log("\n");

        for(linha=0 ; linha < 5 ; linha++ ){
          console.log("a",linha+1);
            for(coluna=0 ; coluna < 5 ; coluna++ ){
                if(this.tabuleiro[linha][coluna]==-1){
                  console.log("\t~");
                }else if(this.tabuleiro[linha][coluna]==0){
                  console.log("\t*");
                }else if(this.tabuleiro[linha][coluna]==1){
                  console.log("\tX");
                }

            }
            console.log("\n");
        }

}

iniciaNavios(){
   var navio, anterior;
console.log(this.navios);

  for(navio=0 ; navio < 3 ; navio++){
      this.navios[navio][0]= this.rand()%5;
      this.navios[navio][1]= this.rand()%5;

      //agora vamos checar se esse par não foi sorteado
      //se foi, so sai do do...while enquanto sortear um diferente
      for(anterior=0 ; anterior < navio ; anterior++){
          if( (this.navios[navio][0] == this.navios[anterior][0])&&(this.navios[navio][1] == this.navios[anterior][1]) )
              do{
                this.navios[navio][0]= this.rand();
                this.navios[navio][1]= this.rand();
              }while( (this.navios[navio][0] == this.navios[anterior][0])&&(this.navios[navio][1] == this.navios[anterior][1]) );
      }

  }
}

rand(){
  return Math.floor((Math.random() * 10) + 1);
}

darTiro( tiro: any [2]){
        console.log("Linha: ");
        // scanf("%d",&tiro[0]);
        // tiro[0]--;

        // printf("Coluna: ");
        // scanf("%d",&tiro[1]);
        // tiro[1]--;

}

acertou( tiro: any [2],  navios: any [][2]){
    var navio;
        for(navio=0 ; navio < 3 ; navio++){
            if( tiro[0]==navios[navio][0] && tiro[1]==navios[navio][1]){
                console.log("Você acertou o tiro (%d,%d)\n",tiro[0]+1,tiro[1]+1);
                return 1;
            }
        }
        return 0;
}

dica( tiro: any[2],  navios: any[][2], tentativa){
    var linha=0, coluna=0, fila;

        //conta quantos navios há na linha tiro[0]
        for(fila=0 ; fila < 3 ; fila++){
            if(navios[fila][0]==tiro[0])
                linha++;
            if(navios[fila][1]==tiro[1])
                coluna++;
        }

        console.log("\nDica %d: \nlinha %d -> %d navios\ncoluna %d -> %d navios\n",tentativa,tiro[0]+1,linha,tiro[1]+1,coluna);
}


alteraTabuleiro( tiro: any[2], navios: any[][2], tabuleiro: any[][5]){
  if(this.acertou(tiro,navios))
      tabuleiro[tiro[0]][tiro[1]]=1;
  else
      tabuleiro[tiro[0]][tiro[1]]=0;
}

}
