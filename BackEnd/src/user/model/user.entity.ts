import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity('PERSONA')
export class Usuario {

    @PrimaryColumn()
    IDPER: number;

    @Column("varchar2", { length: 100 })
    NOMPER: string;

    @Column("varchar2", { length: 100 })
    APEPER: string;

    @Column("char", { length: 8 })
    DNIPER: String;

    @Column("varchar2", { length: 150 })
    PARPER: String;

    @Column("varchar2", { length: 150 })
    CORPER: String;

    @Column("char", { length: 6 })
    IDUBI: String;

    @Column("char", { length: 1 })
    SEXPER: String;
    
    @Column("varchar2", { length: 350 })
    DIRPER: String;

    @Column("char", { length: 1 })
    ESTPER: String;

    @Column("char", { length: 9 })
    CELPER: String;

    @Column("varchar", {length: 50 })
    USUPER: String;

    @Column("varchar", {length: 50 })
    CONTRPER: String;

}