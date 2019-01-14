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

Résultat:

- 1 scenario (1 passed)
- 3 steps (3 passed)

## STEP4: ajouter la multiplication et faire passer les tests

**Attention**
J'ai rencontré un problème d'ambiguité !

En effet, au début j'avais la feature suivante :

```
Scenario: Mutiplication of 2 numbers
    Given the numbers 2 and 2
    When they are multiplied together
    Then should the result be 4
```

Résultat: 

- 2 scenarios (2 ambiguous)
- 6 steps (4 ambiguous, 2 skipped)

Le problème vient des lignes 2 et 4 de l'exemple au-dessus.
J'ai levé l'ambiguité en modifiant un peu les 2 phrases en question.


Si on veut ne lancer que 1 scenario : 

```
./node_modules/.bin/cucumber-js ./features/addition.feature
```

Pour voir les fichiers modifiés :

https://github.com/GregLeBarbar/bdd-calculator-js/compare/step3...step4


## STEP5: Scénario "outline"

Ajout d'scénario ```Scenario Outline``` dans ```addition.feature```
permettant de tester plusieurs fonctionnalités grâce à l'utilisation des 
```Data Tables```

Résultat:
- 6 scenarios (6 passed)
- 18 steps (18 passed)

https://github.com/GregLeBarbar/bdd-calculator-js/compare/step4...step5


## STEP6: Les hooks

- Ajout du fichier ```hooks.js```
- Ajout de console.log() pour comprendre le cycle d'exécution des hooks

Résultat :

```
Inside BeforeALL Hook
Inside Before Hook
.@Given the numbers 1 and 3
.@When they are added together
.@Then should the result be 4
.Inside After Hook
.Inside Before Hook
.@Given the numbers 1 and 2
.@When they are added together
.@Then should the result be 3
.Inside After Hook
.Inside Before Hook
.@Given the numbers 2 and 3
.@When they are added together
.@Then should the result be 5
.Inside After Hook
.Inside Before Hook
.@Given the numbers 4 and 2
.@When they are added together
.@Then should the result be 6
.Inside After Hook
.Inside Before Hook
.@Given the numbers 3 and 3
.@When they are added together
.@Then should the result be 6
.Inside After Hook
.Inside Before Hook
.@Given the numbers 2 and 2 for multiplication
.@When they are multiplied together
.@Then should the result of multiplication be 4
.Inside After Hook
.Inside AfterALL Hook


6 scenarios (6 passed)
18 steps (18 passed)
```

https://github.com/GregLeBarbar/bdd-calculator-js/compare/step5...step6


## STEP7: Les tags

- Ajout du tag 'outline'
- Lancer tous les tests taggués 'outline' ```./node_modules/.bin/cucumber-js --tags '@outline'```
- Lancer tous les tests sauf ceux taggués 'outline'```./node_modules/.bin/cucumber-js --tags 'not @outline'```

https://github.com/GregLeBarbar/bdd-calculator-js/compare/step6...step7
