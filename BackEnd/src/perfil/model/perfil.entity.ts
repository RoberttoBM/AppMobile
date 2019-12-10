import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Persona } from '../../user/model/persona.entity';

@Entity('IPERFIL')
export class Perfil {

    @PrimaryColumn()
    IDPER: number;

    @Column("varchar2")
    NOMPER: String;

    @Column("varchar2")
    APEPER: String;

    @Column("char")
    DNIPER: number;

    @Column("varchar2")
    FECHNACPER: String;

    @Column("varchar2")
    DIRPER: String;

    @Column("varchar2")
    GRAAUL: String;

    @Column("varchar2")
    SECAUL: String;

    @Column("varchar2")
    TUTOR: String;

    @Column("varchar2")
    CELULAR: String;

    @Column("varchar2")
    CORREO: String;

    @ManyToOne( type => Persona, persona => persona.perfil)
    @JoinColumn({name : "IDPER"})
    persona: Persona;






}