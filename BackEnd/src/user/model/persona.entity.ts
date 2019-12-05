import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import { Notas } from "../../notas/model/notas.entity";

@Entity('PERSONA')
export class Persona {

    @PrimaryColumn()
    IDPER: number;

    @Column("varchar2")
    NOMPER: String;

    @Column("varchar2")
    APEPER: String; 

    @Column("char")
    DNIPER: number;

    @Column("char")
    ESTPER: String;

    @Column("char")
    TIPPER: String;

    @Column("varchar2")
    DIRPER: String;

    @Column("varchar2")
    USUPER: String;

    @Column("varchar2")
    CONTRPER: String;

    @OneToMany(type => Notas, notas => notas.persona)
    notas: Notas[]; 

    
  
}