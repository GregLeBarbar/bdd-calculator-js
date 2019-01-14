# bdd-calculator-js

## STEP1: Installer cucumber.js

### Initialiser npm

```
npm init
```

### Installer cucumber.js

```
npm install cucumber
```

### Comment exécuter cucumber-js ?

```
./node_modules/.bin/cucumber-js
```

## STEP2: 1er scenario 'addition'

- Créer le dossier ```features```. 
- Créer le fichier ```addition.feature``` pour définir le 1er scénario

```
mkdir features
cd features
touch addition.feature
```

Voir le contenu ajouté au fichier ```addition.feature```

Relancer cucumber pour voir que le scénario est ```undefined```

```
./node_modules/.bin/cucumber-js
```

**IMPORTANT** 
On va pouvoir se servir du résultat de la commande pour initialiser notre scénario


Cela semble être une convention de mettre les différentes étapes dans un répertoire :
```features/step_definitions/```

```
cd features
mkdir step_definitions
cd step_definitions
touch addition_steps.js
```

On copie les différentes étapes de notre scénario dans ```addition_steps.js```

**NOTE**
On ajoute les bons import au début du fichier ```addition_steps.js```

```
./node_modules/.bin/cucumber-js
```

On a :
- 1 scenario (pending) et 3 steps 
- 3 steps (1 pending, 2 skipped)

## STEP3: créer une calculatrice et faire passer les tests

- Se placer à la racine du projet 
- Créer un répertoire ```lib```
- Dans ce répertoire créer un fichier ```calculator.js```

```
mkdir lib
cd lib 
touch calculator.js
```

Voir le contenu ajouté dans ```calculator.js```

Voir les modifications effectuées dans ```addition_steps.js```

On relance cucumber-js et les tests passent avec succès :

```
./node_modules/.bin/cucumber-js
```

1 scenario (1 passed)
3 steps (3 passed)
0m00.001s

