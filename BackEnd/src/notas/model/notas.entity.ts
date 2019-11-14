import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('NOTAS')
export class Notas {

    @PrimaryColumn()
    CODMAT: number;

    @Column("varchar2")
    ESTUDIANTE: String;

    @Column("varchar2")
    SECCIONES: String;
  
    @Column("varchar2")
    NOMCUR: String;

    @Column("number")
    BIMESTRE1: number;

    @Column("number")
    BIMESTRE2: number;

    @Column("number")
    BIMESTRE3: number;

    @Column("number")
    BIMESTRE4: number;

    @Column("number")
    BIMESTRE5: number;

}