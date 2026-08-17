

// ==========================================
//  TABLEAU DES PRODUITS
// ==========================================

const produits = [

    {
        id: 1,
        nom: "Ordinateur portable",
        prix: 450000,
        categorie: "informatique",
        stock: 8,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
    },

    {
        id: 2,
        nom: "Smartphone",
        prix: 250000,
        categorie: "telephone",
        stock: 15,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },

    {
        id: 3,
        nom: "Casque audio",
        prix: 50000,
        categorie: "audio",
        stock: 20,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    },

    {
        id: 4,
        nom: "Montre connectée",
        prix: 85000,
        categorie: "accessoires",
        stock: 12,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
    },

    {
        id: 5,
        nom: "Clavier mécanique",
        prix: 65000,
        categorie: "informatique",
        stock: 10,
        image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
    },

    {
        id: 6,
        nom: "Souris sans fil",
        prix: 35000,
        categorie: "informatique",
        stock: 25,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },

    {
        id: 7,
        nom: "Enceinte Bluetooth",
        prix: 75000,
        categorie: "audio",
        stock: 9,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
    },

    {
        id: 8,
        nom: "Tablette",
        prix: 180000,
        categorie: "telephone",
        stock: 7,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
    },

    {
        id: 9,
        nom: "Sac à dos",
        prix: 45000,
        categorie: "accessoires",
        stock: 18,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62"
    },

    {
        id: 10,
        nom: "Appareil photo",
        prix: 380000,
        categorie: "photo",
        stock: 5,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
    }

];


// ==========================================
//  RÉCUPÉRER LE CONTENEUR HTML
// ==========================================

const conteneur = document.querySelector("#conteneur");


// ==========================================
//  AFFICHER LES PRODUITS
// ==========================================

function afficherProduits(liste) {

    // On vide le conteneur
    conteneur.innerHTML = "";

    // Si aucun produit
    if (liste.length === 0) {

        conteneur.innerHTML = `
            <p class="aucun-produit">
                Aucun produit trouvé.
            </p>
        `;

        return;
    }


    // Création des cartes
    liste.forEach(function(produit) {

        const prixReduit = produit.prix * 0.90;

        const rupture =
            produit.stock === 0
                ? `<span class="badge rupture">Rupture</span>`
                : "";


        conteneur.innerHTML += `

            <article class="carte">

                <div class="image-container">

                    <img
                        src="${produit.image}"
                        alt="${produit.nom}"
                    >

                    <span class="badge reduction">
                        -10%
                    </span>

                    ${rupture}

                </div>


                <div class="contenu">

                    <h2>
                        ${produit.nom}
                    </h2>

                    <p class="categorie">
                        ${produit.categorie}
                    </p>


                    <div class="prix">

                        <span class="ancien-prix">
                            ${produit.prix.toLocaleString("fr-FR")} FCFA
                        </span>

                        <span class="nouveau-prix">
                            ${prixReduit.toLocaleString("fr-FR")} FCFA
                        </span>

                    </div>


                    <p class="stock">
                        Stock :
                        ${produit.stock}
                    </p>

                </div>

            </article>

        `;
    });
}


// ==========================================
//  FILTRER PAR CATÉGORIE
// ==========================================

function filtrerParCategorie(categorie) {

    const resultat = produits.filter(function(produit) {

        return produit.categorie === categorie;

    });

    afficherProduits(resultat);
}


// ==========================================
//  FILTRER PAR PRIX MAXIMUM
// ==========================================

function filtrerParPrixMax(prixMax) {

    const resultat = produits.filter(function(produit) {

        return produit.prix <= prixMax;

    });

    afficherProduits(resultat);
}


// ==========================================
//  APPLIQUER UNE RÉDUCTION
// ==========================================

function appliquerReduction(pourcentage = 10) {

    const produitsReduits = produits.map(function(produit) {

        return {
            ...produit,

            prixReduit:
                produit.prix -
                (produit.prix * pourcentage / 100)
        };

    });

    return produitsReduits;
}


// ==========================================
//  CALCULER LA VALEUR TOTALE DU STOCK
// ==========================================

function calculerValeurStock() {

    const total = produits.reduce(
        function(total, produit) {

            return total +
                (produit.prix * produit.stock);

        },
        0
    );

    return total;
}


// ==========================================
// TRIER PAR PRIX CROISSANT
// ==========================================

function trierPrixCroissant() {

    const resultat = [...produits].sort(
        function(a, b) {

            return a.prix - b.prix;

        }
    );

    afficherProduits(resultat);
}


// ==========================================
// TRIER PAR PRIX DÉCROISSANT
// ==========================================

function trierPrixDecroissant() {

    const resultat = [...produits].sort(
        function(a, b) {

            return b.prix - a.prix;

        }
    );

    afficherProduits(resultat);
}


// ==========================================
//  RECHERCHER UN PRODUIT
// ==========================================

function rechercherProduit(texte) {

    const resultat = produits.filter(function(produit) {

        return produit.nom
            .toLowerCase()
            .includes(texte.toLowerCase());

    });

    afficherProduits(resultat);
}


// ==========================================
//  AFFICHER LE NOMBRE DE PRODUITS
// ==========================================

function nombreProduits() {

    return produits.length;
}


// ==========================================
// AFFICHER LES STATISTIQUES
// ==========================================

function afficherStatistiques() {

    const nombreProduits =
        document.querySelector("#nombre-produits");

    const valeurStock =
        document.querySelector("#valeur-stock");

    // Nombre total de produits
    nombreProduits.textContent = produits.length;

    // Valeur totale du stock
    const total = calculerValeurStock();

    valeurStock.textContent =
        total.toLocaleString("fr-FR") + " FCFA";
}


// ==========================================
// INITIALISATION
// ==========================================

afficherProduits(produits);
afficherStatistiques();
afficherProduits(produits);