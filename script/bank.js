var bank = [
    ['What does une bibliothèque mean ?','a libray','a house','a bakery','a shop',0],
    ['What is une patinoire?','swimming pool','ice rink','car park','book shop',1],
    ['What is un champignon ?','a carrot','a mushroom','a strawberry','an onion',1],
    ['What does un librairie mean?','a library','a bank','a bookshop','a hospital',2],
    ['Vous ........ dans un bureau?','travaille','travailles','travailler','travaillez',3],
    ['Which of these can you not drink?','citron pressé ','fleu','chocolat','eau',1],
    ['Les lettres sont ......... le tiroir dela commode?','dans','par','au','devant',0],
    ['Which is not a means of transport?','bateau','camion','parapluie','moto',2],
    ['Which is not edible?','riz','poisson','carte','poulet',2],
    ['What is deux cent vingt?','20','2','100','220',3],
    ['What is a baker shop?','une boulangerie','un timbre','une poste','un marché',0],
    ['Which is 86?','soixante seize','cinquante six','quatre vingt seize','quatre-vingt six',3],
    ['Which phrase means to go straight?','traverser' ,'tourner à gauche','tourner à droite','aller tout droit',3],
    ['Which phrase means to turn left?','traverser' ,'tourner à gauche','tourner à droite','aller tout droit',1],
    ['Which phrase means to go right?','traverser' ,'tourner à gauche','tourner à droite','aller tout droit',2],
    ['Which phrase means to go across?','traverser' ,'tourner à gauche','tourner à droite','aller tout droit',0],
    ['Which phrase means next to','à gauche','à côté de','à droite','en face de',1],
    ['Which phrase means opposite to','à gauche','à côté de','à droite','en face de',3],
    ['Which phrase means in the middle of','à côté de','au milieu de','au bout de','autor de',1],
    ['Which phrase means around','à côté de','au milieu de','au bout de','autor de',3],
    ['Which phrase means at the end of','à côté de','au milieu de','au bout de','autor de',2],
    ['Which word means often', 'quelquefois','souvent','jamais','toujours',1],
    ['Which word means sometimes', 'quelquefois','souvent','jamais','toujours',0],
    ['Which word means never', 'quelquefois','souvent','jamais','toujours',2],
    ['Which word means always', 'quelquefois','souvent','jamais','toujours',3],
    ['Which word means rarely','fréquement','pas souvent','resgulièrement','rarement',3],
    ['Which word means not often','fréquement','pas souvent','resgulièrement','rarement',1],
    ['Which word means frequently','fréquement','pas souvent','resgulièrement','rarement',0],
    ['Which word means regularly','fréquement','pas souvent','resgulièrement','rarement',2],
    ['Which word means to play','jouer','chanter','danser','écouter',0],
    ['Which word means to sing','jouer','chanter','danser','écouter',1],
    ['Which word means to listen','jouer','chanter','danser','écouter',3],
    ['Which word means to dance','jouer','chanter','danser','écouter',2],
    ['Which word means to speak','parler','étudier','regarder','lire',0],
    ['Which word means to learn','parler','étudier','regarder','lire',1],
    ['Which word means to watch','parler','étudier','regarder','lire',2],
    ['Which word means to read','parler','étudier','regarder','lire',3],
    ['Which word means mother','la mère','le père','le frère','la soeur',0],
    ['Which word means father','la mère','le père','le frère','la soeur',1],
    ['Which word means brother','la mère','le père','le frère','la soeur',2],
    ['Which word means sister','la mère','le père','le frère','la soeur',3]
]
//shuffle the question bank

function shuffle (){
    var i = bank.length, j, temp;
    while(--i>0){
        j = Math.floor(Math.random()*(i+1));
        temp = bank[j];
        bank[j]= bank[i];
        bank[i]= temp;
    }
    return bank;
}