import {Component, Input, OnInit} from '@angular/core';
import {Produit, ProduitCategorie} from "../model/Produit";


@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent{

 @Input() produits: Array<Produit>=[];
date=new Date();
  constructor() {
  }
  imprimer() {
    window.print();
  }
  public arrondirAu5Centimes(nombre:number):number{
    let res;
      res=Math.ceil(nombre * 20) / 20;
    return res;
  }
  // @ts-ignore
  public calculPrixTtc(produit:Produit) :number{
    switch (produit.produitCategorie){
      case ProduitCategorie.AUTRE:{
        if (produit.isImporte)
          return this.arrondirAu5Centimes(produit.prixHt*1.25*produit.qauntinte);
        else return  this.arrondirAu5Centimes(produit.prixHt*1.2*produit.qauntinte);
        break;
      }
      case ProduitCategorie.LIVRE:{
        if (produit.isImporte)
          return  (this.arrondirAu5Centimes(produit.prixHt*1.15)*produit.qauntinte);
        else return  this.arrondirAu5Centimes(produit.prixHt*1.1*produit.qauntinte);
        break;
      }
      case ProduitCategorie.PREMIERNECESSITE:{
        if (produit.isImporte)
          return this.arrondirAu5Centimes(produit.prixHt*1.05*produit.qauntinte);
        else return this.arrondirAu5Centimes(produit.prixHt*produit.qauntinte);
        break;
      }
    }
  }

  public calculSommePrixHt(produits:Array<Produit>) :number{
    let sum = 0;
    for (let i = 0; i <produits.length ; i++) {
      sum=sum+produits[i].prixHt*produits[i].qauntinte;
    }
    return sum;
  }
  public calculSommePrixTtc(produits:Array<Produit>) :number{
    let sum = 0;
    for (let i = 0; i <produits.length ; i++) {
      sum=sum+this.calculPrixTtc(produits[i]);
    }
    return sum;
  }

  public calculSommeTaxes(produits:Array<Produit>) :number{

    let sum = 0;
    for (let i = 0; i <produits.length ; i++) {
      sum=sum+(this.calculPrixTtc(produits[i])-produits[i].prixHt);
    }
    return sum;
  }


}
