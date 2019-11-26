import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('IASISTENCIAS')
export class Asistencias {

    @PrimaryColumn()
    IDPER: number;

    @Column("varchar2")
    NOMBRE: String;

    @Column("varchar2")
    APELLIDO: String;

    @Column("varchar2")
    DNIPER: String;

    @Column("varchar2")
    USUPER: String;

    @Column("varchar2")
    CONTRPER: String;
  
    @Column("varchar2")
    ASISTENCIAS: String;

    @Column("varchar2")
    FALTAS: String;

    @Column("varchar2")
    CABELLOANTIRREGLAMENTARIO: String;

    @Column("varchar2")
    MALVESTIDO: String;

}