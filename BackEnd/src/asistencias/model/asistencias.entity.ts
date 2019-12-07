import { Entity, Column, PrimaryColumn, OneToMany, JoinColumn, ManyToMany, ManyToOne } from "typeorm";
import { Persona } from "../../user/model/persona.entity";

@Entity('IASISTENCIAS')
export class Asistencias {

    @PrimaryColumn({name: "CODMAT"})
    CODMAT: number;

    @Column("number")
    IDPER: number;

    @Column("varchar2")
    ASISTENCIAS: String;

    @Column("varchar2")
    FALTAS: String;

    @Column("varchar2")
    CB: String;

    @Column("varchar2")
    MV: String;

    @ManyToOne(type => Persona, persona => persona.asistencias)
    @JoinColumn({ name: "IDPER" })
    persona: Persona;

}