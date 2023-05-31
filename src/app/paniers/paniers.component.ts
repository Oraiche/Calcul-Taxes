// @ts-ignore

import {Component, OnInit} from '@angular/core';
import {Produit, ProduitCategorie} from "../model/Produit";
import {ProduitService} from "../produit.service";

@Component({
  selector: 'app-paniers',
  templateUrl: './paniers.component.html',
  styleUrls: ['./paniers.component.css']
})
export class PaniersComponent implements OnInit{

  factureAffichee = false;
   panierSelectionner: any=null;
  produitsFacture: Produit[] = [];
  ajouterProduit!: boolean;
  constructor(private ps:ProduitService) {
  }

     paniers = [
      {
        nom: 'Panier 1',
        produits: [
          {id:1,desination:"Livre",prixHt:12.49,isImporte:false,qauntinte:2,produitCategorie: ProduitCategorie.LIVRE},
          {id:1,desination:"CD misucal",prixHt:14.99,isImporte:false,qauntinte:1,produitCategorie: ProduitCategorie.AUTRE},
          {id:2,desination:"Barre chocolat",prixHt:0.85,isImporte:false,qauntinte:3, produitCategorie:ProduitCategorie.PREMIERNECESSITE}
        ]
      },
      {
        nom: 'Panier 2',
        produits: [
          {id:1,desination:"Boite chocolat",prixHt:10,isImporte:true,qauntinte:2, produitCategorie:ProduitCategorie.PREMIERNECESSITE},
          {id:1,desination:"Flacon Parfin",prixHt:47.5,isImporte:true,qauntinte:3, produitCategorie:ProduitCategorie.AUTRE},
        ]
      },
      {
        nom: 'Panier 3',
        produits: [
          {id:1,desination:"boîtes de pilules contre la migraine",prixHt:9.75,isImporte:false,qauntinte:3,produitCategorie: ProduitCategorie.PREMIERNECESSITE},
          {id:1,desination:"boites de cohocolats",prixHt:11.25,isImporte:true,qauntinte:2,produitCategorie: ProduitCategorie.PREMIERNECESSITE},
          {id:2,desination:"Flacon de Parfin",prixHt:27.99,isImporte:true,qauntinte:2, produitCategorie:ProduitCategorie.AUTRE},
          {id:2,desination:"Flacon de Parfin",prixHt:18.99,isImporte:false,qauntinte:1, produitCategorie:ProduitCategorie.AUTRE}

        ]
      }
    ];
  ngOnInit() {
  }



  handlAjouterProduit() {
    this.ajouterProduit=true;
  }
  afficherFacture(panier: any): void {
    this.factureAffichee = true;
    this.panierSelectionner=panier;
    this.produitsFacture = panier.produits;
   // this.panierSelectionner.produits.push(this.ps.getProduits())


  }
}


