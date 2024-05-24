import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'formatFecha'
})
export class FormatFechaPipe implements PipeTransform {

transform(value: any,param1: any, param2: any,simbolo="-"): String{

    const fechaInicio=param1.split(simbolo);
    var annoI=fechaInicio[0];
    var mesI=fechaInicio[1];
    var diaI=fechaInicio[2];

    var FechInicio=diaI+"-"+mesI+"-"+annoI;

    const fechaFin=param2.split(simbolo)
    var anno=fechaFin[0];
    var mes=fechaFin[1];
    var dia=fechaFin[2];


    var FechFin=dia+"-"+mes+"-"+anno;;

        
        

    return   FechInicio +"/"+ FechFin;
    
}


}