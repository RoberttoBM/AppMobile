import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { Persona } from "../../user/model/persona.entity";

@Entity('INOTAS')
export class Notas {

    @PrimaryColumn({name: "CODCUR"})
    CODCUR: number;

    @Column("number")
    IDPER: number;

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

    @ManyToOne(type=> Persona, persona => persona.notas)
    @JoinColumn({ name: "IDPER" })
    persona: Persona;

}