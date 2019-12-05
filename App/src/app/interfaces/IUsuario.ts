export interface Usuario {
    IDPER: number;
    NOMPER: String;
    APEPER: String;
    DNIPER: number;
    ESTPER: String;
    TIPPER: String;
    DIRPER: String
    USUPER: String;
    CONTRPER?: String;
    notas?: Notas[];


}

export interface Notas {

    CODCUR: number;
    IDPER: number;
    NOMCUR: String;
    BIMESTRE1: number;
    BIMESTRE2: number;
    BIMESTRE3: number;
    BIMESTRE4: number;
    BIMESTRE5: number;

}