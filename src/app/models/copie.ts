export interface CopieCP {
    idCop: number;
    idEtudiant: number;
    idMatiere: number;
  }
  
  export interface Copie {
    idCopie: CopieCP;
    noteInitiale: number;
    noteVerifProf: number | null;
    faute: boolean;
  }
  