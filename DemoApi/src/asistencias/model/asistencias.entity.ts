import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('MV_LISTARASISTENCIA')
export class Asistencias {

    @PrimaryColumn()
    CODAUL: number;

    @Column("varchar2")
    NOMBRE: String;

    @Column("varchar2")
    APELLIDO: String;
  
    @Column("char")
    CANTIDAD: number;

    @Column("varchar2")
    CRITERIO: String;


}