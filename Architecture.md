# Architecture du backend

## Structure générale

backend/src/

├── domain/

├── application/

├── infrastructure/

└── controllers/

---

## Détails des dossiers

### `domain/`
- **But** : contient le cœur métier, indépendant de Nest ou de toute infrastructure.
- **Sub-dossiers** :
  - `entities/` : définitions des entités métier (ex : `Company`, `Prospect`).
  - `ports/` : interfaces (contrats) que les adapters doivent implémenter (ex : `CompanyRepository`, `AiMessageRepository`).

---

### `application/`
- **But** : orchestration de la logique métier via les use cases. Chaque fichier correspond à un use case (ex : `FindCompaniesUseCase`).
- **Règle** : chaque use case = **une méthode publique `execute(...)`**.

---

### `infrastructure/`
- **But** : implémentations concrètes des ports et intégrations externes.
- **Sub-dossiers** :
  - `repositories/` : implémentations des ports de type repository (ex : `ExternalCompanyRepository` implémente `CompanyRepository`).

---

### `controllers/`
- **But** : adapter l’entrée HTTP vers les use cases.
- **Exemple** : `CompaniesController` appelle `FindCompaniesUseCase` et retourne les résultats.

---

### 🔹 Règles clés de l’architecture

- **Ports** : interfaces situées dans `domain/ports`  
  - Définissent **les contrats métier** (ex : `CompanyRepository`)  
  - Le domaine dépend uniquement des ports, jamais des implémentations concrètes  

- **Adapters / Infrastructure** : classes concrètes dans `infrastructure/`  
  - Implémentent les ports pour accéder aux données, API etc.  
  - Exemple : `ExternalCompanyRepository`  

- **Use Cases** : orchestrent le domaine via les ports  
  - Exposent **une seule méthode publique `execute(...)`**  
  - Ici, avec Nest.js, ce sont également des **services injectables (`@Injectable()`)**  
  - Ne connaissent pas les détails d’infrastructure  

- **Controllers** : adaptateurs d’entrée HTTP  
  - Appellent les use cases et retournent les résultats au front  
  - **Aucune logique métier** à l’intérieur
---