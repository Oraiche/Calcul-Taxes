export enum ProduitCategorie{     // Definition des constantes ProduitCategories sous fome d un Enum
  PREMIERNECESSITE,
  LIVRE,
  AUTRE
}
export class Produit{            // Definition de model Produit
  id!:number;
  desination!:string;
  prixHt!:number;
  qauntinte!:number;
  isImporte!:boolean;
  produitCategorie!: ProduitCategorie;



}
