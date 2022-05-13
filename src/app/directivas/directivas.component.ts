import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {
  propertyToCheck=1;
  boolToCheck=true;
  birthday=new Date ();
  aprobo:boolean=false;
  div1:boolean=true;
  first!:string;
  nombre!:string;
  apellido!:string;
  estudiantes=[
    {nombre:'Micaela',
    nota:7,
    curso: 'Angular',
    Aprobo:true,
    },
    {nombre: 'Juan',
    nota:10,
    curso: 'React',
    Aprobo:true,
  },
    {nombre:'Josefina',
    nota:3,
    curso: 'Vue',
    Aprobo: false,
  },
    {nombre:'Lucas',
    nota:4,
    curso:'.NET',
    Aprobo:false,
   },
   {nombre:'Lucía',
    nota:8,
    curso:'#C',
    Aprobo:true,
   },
   {nombre:'Marcelo',
    nota:6,
    curso:'Java',
    Aprobo:true,
   },
   {nombre:'Lourdes',
    nota:2,
    curso:'Phyton',
    Aprobo:false,
   }
  ]

    edad!:number;

  constructor() { }

  ngOnInit(): void {
  }
  div1Function(){
    this.div1=true;  
  } 
  div2Function(){
  
  this.div1=false;

}
}
