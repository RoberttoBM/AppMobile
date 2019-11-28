import { Entity, Column, PrimaryColumn } from "typeorm";


//Uso la vista 'INOTAS' 
//para que solo los usuarios que aparezcan en esa vista 
//tengan acceso a la aplicación. :D
@Entity('INOTAS')
export class Usuario {

    @PrimaryColumn()
    IDPER: number;

    @Column("varchar2")
    NOMPER: String;

    @Column("varchar2")
    APEPER: String; 

    @Column("char")
    DNIPER: number;

    @Column("varchar2")
    USUPER: String;

    @Column("varchar2")
    CONTRPER: String;

    @Column("varchar2")
    GRAAUL: String;

    @Column("varchar2")
    SECAUL: String;
    
    @Column("varchar2")
    NOMCUR: String;

    @Column("varchar2")
    BIMESTRE1: number;

    @Column("varchar2")
    BIMESTRE2: number;

    @Column("varchar2")
    BIMESTRE3: number;

    @Column("varchar2")
    BIMESTRE4: number;

    @Column("varchar2")
    BIMESTRE5: number;

  
}