export enum ProduitCategorie{
  PREMIERNECESSITE,
  LIVRE,
  AUTRE
}
export class Produit{
  id!:number;
  desination!:string;
  prixHt!:number;
  qauntinte!:number;
  isImporte!:boolean;
  produitCategorie!: ProduitCategorie;



}
