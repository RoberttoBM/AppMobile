import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('INOTAS')
export class Notas {

    @PrimaryColumn()
    CODCUR: number

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

}