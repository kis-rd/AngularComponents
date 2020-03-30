# KisMatTable

## Comment l'utiliser 

Pour utiliser mat-table, il faut lui passer un service de données qui permet:
* retourner les données à afficher de façon asynchrone
* fournir les informations sur les colonnes, lignes, formatage des données obligatoires pour un bon affichage des données

## Améliorations à faire
* definir une classe option qui peut être instanciée afin d'apporter des configurations additionnelles au tableau. pour ajouter ces configurations au tableau, la classe instanciée sera passée à la variable Input option du composant, afin d'alimenter un code qui se chargera de faire appliquer les configurations définies. 
* voir comment utiliser slice pour aider à la copie des tableaux 
* Ajouter une option qui permet définir ou non une selection pour la première ligne du tableau
* Améliorer le code de format pipe pour que il puisse creer une balise img et affecter la source lorsque le type de la colonne est une image 

## FormatDatePipe (préferer les combinaisons de plusieurs pipes à un gros pipe qui fait une très grande tâche )

# Exemple de commentaires
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024

