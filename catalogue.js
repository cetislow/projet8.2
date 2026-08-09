const	produits	=	[
{	nom:	"Bananes",	prix:	1500,	categorie:	"fruits",	stock:	40, Image: "https://unsplash.com/fr/photos/bananes-jaunes-fczCr7MdE7U"	},
{	nom:	"Mangues",	prix:	2000,	categorie:	"fruits",	stock:	0, Image: "https://unsplash.com/fr/photos/un-tas-de-mangues-assises-les-unes-sur-les-autres-gw0_4PckI8Q"	},
{	nom:	"Ananas",	prix:	2500,	categorie:	"fruits",	stock:	15, Image: "https://unsplash.com/fr/photos/un-ananas-accroche-a-un-mur-blanc-GIAYOvIEGzw"	},
{	nom:	"Tomates",	prix:	1200,	categorie:	"legumes",	stock:	60, Image: "https://unsplash.com/fr/photos/tomate-rouge-sur-surface-de-beton-gris-OlXUUQedQyM"	},
{	nom:	"Oignons",	prix:	900,	categorie:	"legumes",	stock:	30, Image: "https://unsplash.com/fr/photos/oignon-rouge-sur-table-en-bois-brun-D9h2-RxM1rE"	},
{	nom:	"Piments",	prix:	700,	categorie:	"legumes",	stock:	25, Image: "https://unsplash.com/fr/photos/bouquet-de-piment-dDI3pSF-yK4"	},
{	nom:	"Riz	(sac	5kg)",	prix:	8500,	categorie:	"céréale",	stock:	12, Image: "https://unsplash.com/fr/photos/un-tas-de-riz-blanc-pose-sur-une-table-M5hX7319EBA"	},
{	nom:	"Huile	(1L)",	prix:	3200,	categorie:	"grasses",	stock:	20, Image: "https://unsplash.com/fr/photos/bouteille-de-burette-en-verre-transparent-uOBApnN_K7w"	},
{	nom:	"Sucre	(1kg)",	prix:	1100,	categorie:	"glucide",	stock:	0, Image: "https://unsplash.com/fr/photos/un-tas-de-morceaux-de-sucre-poses-les-uns-sur-les-autres-TXVntZ190Ao"	},
{	nom:	"Farine	(1kg)",	prix:	1300,	categorie:	"céréale",	stock:	18, Image: "https://unsplash.com/fr/photos/gobelet-en-acier-inoxydable-avec-poudre-brune-xw8pttN8MBg"	},
];
const	sortie	=	document.querySelector("#sortie");
const	synthese	=	document.querySelector("#synthese");
//	---	Filtrage	--
function	filtrerParCategorie(categorie)	{
return	produits.filter(p	=>	p.categorie	===	categorie);
}
function	filtrerParPrixMax(prixMax)	{
return	produits.filter(p	=>	p.prix	<=	prixMax);
}
//	---	Transformation	--
function	appliquerReduction(liste,	pourcentage)	{
return	liste.map(p	=>	({	...p,	prixReduit:	p.prix	*	(1	-	pourcentage	/	100)	}));
}
//	---	Agrégation	--
function	valeurTotaleStock(liste)	{
return	liste.reduce((total,	p)	=>	total	+	p.prix	*	p.stock,	0);
}
//	---	Tri	--
function	trierParPrix(liste,	ordre	=	"croissant")	{
return	[...liste].sort((a,	b)	=>	ordre	===	"croissant"	?	a.prix	-	b.prix	:	b.prix	-	a.prix);
}
//	---	Affichage	--
function	carteProduit(p)	{
const	enRupture	=	p.stock	===	0;
const	enReduction	=	p.prixReduit	!==	undefined;
return	`
<article	class="carte-produit">
${enRupture	?	'<span	class="badge-carte	rupture">Rupture	de	stock</span>'	:	""}
${enReduction	?	'<span	class="badge-carte	reduction">-10	%</span>'	:	""}
<div	class="aplat"><img src="${p.Image}" alt="${p.nom}" class="image-produit"></div>
<h3>${p.nom}</h3>
<p	class="categorie">${p.categorie}</p>
<p>
${enReduction	?	`<span	class="prix-barre">${p.prix}	FCFA</span><span	class="prix-final">${p.prixReduit.toFixed(0)}	FCFA</span>`	:	`${p.prix}	
FCFA`}
</p>
</article>
`;
}
function	afficherProduits(liste)	{
sortie.innerHTML	=	liste.map(carteProduit).join("");
synthese.textContent	=	`${liste.length}	produit(s)	affiché(s)	—	valeur	du	stock	:	${valeurTotaleStock(liste).toLocaleString()}	FCFA`;
}

afficherProduits(produits);																														
