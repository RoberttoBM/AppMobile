import { Entity, Column, PrimaryColumn } from "typeorm";


//Uso la vista 'IASISTENCIAS' 
//para que solo los usuarios que aparezcan en esa vista 
//tengan acceso a la aplicación. :D
@Entity('IASISTENCIAS')
export class Usuario {

    @PrimaryColumn()
    IDPER: number;

    @Column("varchar2")
    NOMBRE: string;

    @Column("varchar2")
    APELLIDO: string; 

    @Column("char")
    DNIPER: String;

    @Column("varchar")
    USUPER: String;

    @Column("varchar")
    CONTRPER: String;

    @Column("varchar")
    ASISTENCIAS: String;

    @Column("varchar")
    FALTAS: String;
    
    @Column("varchar")
    CABELLOANTIRREGLAMENTARIO: String;

    @Column("varchar")
    MALVESTIDO: String;

  
}