# Willi's Burger — Chalon-sur-Saône

Site vitrine statique pour **Willi's Burger**, 33 place de Beaune à Chalon-sur-Saône.

> **Projet de démonstration non officiel.** Ce site n'est pas édité par le restaurant. Il a été réalisé à partir d'informations publiques (Google Maps, Le JSL, Info-Chalon, boutique officielle) pour proposer une direction artistique et une vitrine web. Le logo et les photos appartiennent à Willi's Burger.

## Aperçu

- Une page d'accueil complète : hero, carte, histoire, avis, infos pratiques.
- Une direction artistique inspirée du logo : diner américain rétro, brun profond, crème, rouge tomate, jaune moutarde, typographies slab + script.
- 100 % HTML / CSS / JavaScript vanilla, sans framework ni build.
- Polices auto-hébergées (Alfa Slab One, Barlow, Yellowtail).
- Responsive, accessible (skip link, focus visible, contrastes, `prefers-reduced-motion`).
- SEO : métadonnées, Open Graph, JSON-LD `Restaurant`, sitemap, robots.txt.
- Déploiement GitHub Pages via GitHub Actions.

## Structure

```text
willis-burger-chalon/
├── index.html
├── 404.html
├── mentions-legales.html
├── assets/
│   ├── css/
│   │   ├── fonts.css
│   │   └── style.css
│   ├── fonts/
│   ├── img/
│   └── js/
│       └── main.js
├── .github/workflows/deploy.yml
├── robots.txt
├── sitemap.xml
├── site.webmanifest
└── README.md
```

## Lancer le site en local

Ouvrir `index.html` dans un navigateur, ou lancer un petit serveur statique :

```bash
python -m http.server 8080
```

Puis ouvrir <http://localhost:8080>.

## Déploiement

Le workflow `.github/workflows/deploy.yml` publie le site sur GitHub Pages à chaque push sur `main`.

- **Site en ligne :** <https://casifox.github.io/willis-burger-chalon/>
- **Dépôt :** <https://github.com/Casifox/willis-burger-chalon>

## Sources et date des informations

Informations relevées le **13 novembre 2026** :

- Google Maps — fiche « Restaurant Willi's Burger Chalon-sur-Saône » (note 4,8/5, 72 avis, horaires, photos).
- Boutique officielle Fülle — carte, prix, horaires, allergènes, suppléments.
- Le JSL, 9 avril 2026 — ouverture, parcours de Luca Perana, pain Nicot, produits, abonnement.
- Le JSL, 16 janvier 2026 — fermeture du Neptune (1978–2026).
- Info-Chalon, 6 avril 2026 — présentation du projet et du concept.
- Pages Jaunes / INSEE — adresse, téléphone, SIREN, SIRET.
- Uber Eats, Too Good To Go, Instagram, TikTok — offres et avis.

Les prix, horaires et notes peuvent évoluer. Avant une mise en production réelle, il faut les faire valider par le restaurant.

## Crédits

- Logo et photos : Willi's Burger.
- Polices : Alfa Slab One, Barlow, Yellowtail — SIL Open Font License.
- Design et code : Casifox.

## Licence

Le code est publié sous licence MIT (voir `LICENSE`). Cette licence ne couvre pas la marque, le logo ni les photos de Willi's Burger.
