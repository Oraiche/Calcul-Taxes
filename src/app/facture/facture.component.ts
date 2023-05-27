import {Component, Input, OnInit} from '@angular/core';
import {Produit, ProduitCategorie} from "../model/Produit";



@Component({
  selector: 'app-facture',
  templateUrl: './facture.component.html',
  styleUrls: ['./facture.component.css']
})
export class FactureComponent{

 @Input() produits: Array<Produit>=[];   //liste des produits a afficher
date=new Date();
  constructor() {
  }
  imprimer() {
    window.print();
  }
  public arrondirAu5Centimes(nombre:number):number{    // fonction qui renvoie l arroundi au 5 Centimes d un nombre donner
    let res;
      res=Math.ceil(nombre * 20) / 20;
    return res;
  }
  // @ts-ignore
  public calculPrixTtc(produit:Produit) :number{     //Calcul de prixTTC Total d un produit
    switch (produit.produitCategorie){
      case ProduitCategorie.AUTRE:{                  // Le cacul est arroundi au 5 centimes
        if (produit.isImporte)
          return this.arrondirAu5Centimes(produit.prixHt*1.25*produit.qauntinte);
        else return  this.arrondirAu5Centimes(produit.prixHt*1.2*produit.qauntinte);   // Calcul des taxes suivant la categorie du produit et le boolen Is Importe
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

  public calculSommePrixHt(produits:Array<Produit>) :number{      //Calcul de la somme des prixHt d une liste de produit
    let sum = 0;
    for (let i = 0; i <produits.length ; i++) {                   // Le cacul est arroundi au 5 centimes
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

  public calculSommeTaxes(produits:Array<Produit>) :number{      // Calcul de la somme des Taxes d une liste de produits

    let sum = 0;
    for (let i = 0; i <produits.length ; i++) {
      sum=sum+(this.calculPrixTtc(produits[i])-produits[i].prixHt);
    }
    return sum;
  }


}
