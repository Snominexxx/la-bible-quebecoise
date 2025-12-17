// Dictionnaire des mots et expressions québécoises
// À des fins éducatives seulement
const dictionnaire = [
    // === 50 MOTS ===
    {
        mot: "char",
        type: "nom masculin",
        definition: "Automobile, voiture.",
        signification: "Terme très courant au Québec pour désigner une voiture. Vient de l'anglais 'car'.",
        contexte: "Utilisé dans la vie quotidienne, dans toutes les situations informelles et même formelles au Québec.",
        exemple: "« J'ai acheté un nouveau char la semaine passée, y roule comme un rêve! »"
    },
    {
        mot: "blonde",
        type: "nom féminin",
        definition: "Petite amie, copine, conjointe.",
        signification: "Désigne la partenaire amoureuse, peu importe la couleur de ses cheveux.",
        contexte: "Utilisé couramment pour parler de sa copine ou conjointe.",
        exemple: "« Ma blonde pis moi, on s'en va au chalet en fin de semaine. »"
    },
    {
        mot: "chum",
        type: "nom masculin",
        definition: "Petit ami, copain, ou ami proche.",
        signification: "Peut désigner soit un ami, soit un partenaire amoureux selon le contexte.",
        contexte: "Très répandu dans le langage quotidien québécois.",
        exemple: "« Mon chum m'a aidé à déménager hier. C'est un vrai bon gars! »"
    },
    {
        mot: "dépanneur",
        type: "nom masculin",
        definition: "Petit commerce de proximité ouvert tard le soir.",
        signification: "Équivalent d'une épicerie de quartier ou d'un convenience store.",
        contexte: "On y achète des produits de base, des snacks, de la bière, des cigarettes.",
        exemple: "« J'vais au dépanneur chercher du lait pis des chips. »"
    },
    {
        mot: "tuque",
        type: "nom féminin",
        definition: "Bonnet d'hiver, chapeau de laine.",
        signification: "Accessoire vestimentaire essentiel pour affronter les hivers québécois.",
        contexte: "Porté durant les mois froids, de novembre à avril.",
        exemple: "« Oublie pas ta tuque, y fait frette en tabarnouche dehors! »"
    },
    {
        mot: "pogner",
        type: "verbe",
        definition: "Attraper, prendre, avoir du succès.",
        signification: "Verbe polyvalent utilisé dans plusieurs contextes différents.",
        contexte: "Peut signifier attraper quelque chose, ou avoir du succès avec les autres.",
        exemple: "« Ce gars-là pogne ben avec les filles! »"
    },
    {
        mot: "pantoute",
        type: "adverbe",
        definition: "Pas du tout, aucunement.",
        signification: "Négation emphatique typiquement québécoise.",
        contexte: "Utilisé pour renforcer une négation de manière catégorique.",
        exemple: "« J'ai pas aimé ça pantoute, c'était vraiment poche! »"
    },
    {
        mot: "frette",
        type: "adjectif",
        definition: "Froid, très froid.",
        signification: "Prononciation québécoise du mot 'froid', souvent utilisée pour exprimer un froid intense.",
        contexte: "Très courant en hiver pour décrire la température.",
        exemple: "« Y fait frette à matin, j'ai dû gratter mon char pendant 20 minutes! »"
    },
    {
        mot: "jaser",
        type: "verbe",
        definition: "Parler, discuter, bavarder.",
        signification: "Conversation amicale et décontractée.",
        contexte: "Utilisé pour décrire une conversation informelle entre amis ou connaissances.",
        exemple: "« On s'est assis sur le perron pis on a jasé pendant des heures. »"
    },
    {
        mot: "niaiser",
        type: "verbe",
        definition: "Perdre son temps, faire le fou, taquiner quelqu'un.",
        signification: "Peut signifier ne rien faire de productif ou se moquer gentiment de quelqu'un.",
        contexte: "Utilisé dans un contexte informel entre amis.",
        exemple: "« Arrête de niaiser pis viens m'aider! »"
    },
    {
        mot: "poutine",
        type: "nom féminin",
        definition: "Plat de frites, fromage en grains et sauce brune.",
        signification: "Plat emblématique de la cuisine québécoise, reconnu mondialement.",
        contexte: "Consommé comme repas rapide, souvent après une soirée arrosée.",
        exemple: "« Après le bar, on est allés manger une poutine chez Ashton. »"
    },
    {
        mot: "maganer",
        type: "verbe",
        definition: "Abîmer, fatiguer, maltraiter.",
        signification: "Endommager quelque chose ou épuiser quelqu'un.",
        contexte: "Utilisé pour des objets ou des personnes.",
        exemple: "« T'as l'air ben magané à matin, t'as-tu mal dormi? »"
    },
    {
        mot: "achaler",
        type: "verbe",
        definition: "Déranger, embêter, importuner.",
        signification: "Ennuyer quelqu'un de façon répétitive.",
        contexte: "Utilisé quand quelqu'un ou quelque chose nous dérange.",
        exemple: "« Les maringoins m'ont achalé toute la soirée au chalet! »"
    },
    {
        mot: "écœurant",
        type: "adjectif",
        definition: "Extraordinaire, excellent (sens positif) ou dégoûtant (sens négatif).",
        signification: "Mot à double sens selon le contexte et le ton.",
        contexte: "En contexte positif, exprime l'admiration. En contexte négatif, le dégoût.",
        exemple: "« Ce show-là était écœurant! La meilleure performance que j'ai vue! »"
    },
    {
        mot: "placoter",
        type: "verbe",
        definition: "Bavarder, cancaner, parler de tout et de rien.",
        signification: "Conversation légère, parfois avec des commérages.",
        contexte: "Souvent utilisé entre voisins ou amis qui échangent des nouvelles.",
        exemple: "« Les matantes placotaient dans cuisine pendant que les hommes regardaient le hockey. »"
    },
    {
        mot: "gosses",
        type: "nom féminin pluriel (vulgaire)",
        definition: "Testicules.",
        signification: "ATTENTION: Au Québec, ce mot est vulgaire! Ne pas confondre avec le français de France où il signifie 'enfants'.",
        contexte: "Mot à éviter dans les contextes formels. Peut créer des malentendus avec les Français.",
        exemple: "« Fais attention à ce mot-là quand tu parles avec des Français! »"
    },
    {
        mot: "chicane",
        type: "nom féminin",
        definition: "Dispute, querelle, conflit.",
        signification: "Désaccord ou altercation entre personnes.",
        contexte: "Utilisé pour décrire des conflits familiaux, amicaux ou autres.",
        exemple: "« Y'a eu une grosse chicane dans famille à cause de l'héritage. »"
    },
    {
        mot: "breuvage",
        type: "nom masculin",
        definition: "Boisson, quelque chose à boire.",
        signification: "Terme général pour désigner n'importe quelle boisson.",
        contexte: "Utilisé dans les restaurants et la vie quotidienne.",
        exemple: "« Voulez-vous un breuvage avec votre repas? »"
    },
    {
        mot: "bobettes",
        type: "nom féminin pluriel",
        definition: "Sous-vêtements, caleçons, culottes.",
        signification: "Terme familier pour les sous-vêtements.",
        contexte: "Utilisé dans un contexte familial ou entre amis.",
        exemple: "« J'ai oublié de mettre mes bobettes dans ma valise! »"
    },
    {
        mot: "capoter",
        type: "verbe",
        definition: "Perdre la tête, s'énerver, être très excité ou impressionné.",
        signification: "Réaction intense face à une situation, positive ou négative.",
        contexte: "Exprime une forte émotion ou une perte de contrôle.",
        exemple: "« J'ai capoté quand j'ai appris que j'avais gagné le gros lot! »"
    },
    {
        mot: "tabarnak",
        type: "juron (sacre)",
        definition: "Juron québécois très fort dérivé du mot 'tabernacle'.",
        signification: "L'un des sacres les plus puissants au Québec. Exprime la colère, la frustration ou la surprise intense.",
        contexte: "Très vulgaire. À utiliser avec grande précaution. Peut choquer.",
        exemple: "« Tabarnak! J'ai encore oublié mes clés dans le char! »"
    },
    {
        mot: "câlice",
        type: "juron (sacre)",
        definition: "Juron québécois fort dérivé du mot 'calice' (objet liturgique).",
        signification: "Sacre très courant exprimant frustration, colère ou surprise.",
        contexte: "Vulgaire. Éviter en contexte formel ou avec des inconnus.",
        exemple: "« Câlice que c'est compliqué cette affaire-là! »"
    },
    {
        mot: "crisse",
        type: "juron (sacre)",
        definition: "Juron québécois dérivé de 'Christ'.",
        signification: "Sacre courant utilisé pour exprimer diverses émotions fortes.",
        contexte: "Vulgaire mais moins fort que tabarnak. Utilisé aussi comme verbe (crisser).",
        exemple: "« Crisse que t'es bon là-dedans! »"
    },
    {
        mot: "ostie",
        type: "juron (sacre)",
        definition: "Juron québécois dérivé de 'hostie' (pain consacré).",
        signification: "Sacre courant exprimant surprise, colère ou admiration.",
        contexte: "Vulgaire. Souvent combiné avec d'autres sacres.",
        exemple: "« Ostie que c'était une bonne game de hockey! »"
    },
    {
        mot: "ciboire",
        type: "juron (sacre)",
        definition: "Juron québécois dérivé du 'ciboire' (vase sacré).",
        signification: "Sacre modéré utilisé pour exprimer frustration ou surprise.",
        contexte: "Moins fort que tabarnak ou câlice.",
        exemple: "« Ciboire, j'ai encore manqué l'autobus! »"
    },
    {
        mot: "sacrament",
        type: "juron (sacre)",
        definition: "Juron québécois dérivé de 'sacrement'.",
        signification: "Sacre modéré exprimant frustration ou emphase.",
        contexte: "Utilisé pour renforcer une affirmation.",
        exemple: "« Y fait frette en sacrament à matin! »"
    },
    {
        mot: "maudit",
        type: "juron / adjectif",
        definition: "Juron ou adjectif signifiant 'damné' ou 'maudit'.",
        signification: "Sacre plus léger, souvent utilisé comme adjectif intensificateur.",
        contexte: "Moins vulgaire, acceptable dans plus de contextes.",
        exemple: "« C'est un maudit bon restaurant ça! »"
    },
    {
        mot: "baptême",
        type: "juron (sacre)",
        definition: "Juron québécois dérivé du sacrement du baptême.",
        signification: "Sacre modéré exprimant surprise ou frustration.",
        contexte: "Moins fort que les autres sacres principaux.",
        exemple: "« Baptême, t'aurais pu me le dire avant! »"
    },
    {
        mot: "viarge",
        type: "juron (sacre)",
        definition: "Juron québécois dérivé de 'Vierge' (Marie).",
        signification: "Sacre léger exprimant surprise ou exaspération.",
        contexte: "Considéré moins vulgaire que les autres sacres.",
        exemple: "« Sainte viarge, t'as vu le prix de l'essence? »"
    },
    {
        mot: "tabarnouche",
        type: "juron atténué",
        definition: "Version adoucie de 'tabarnak'.",
        signification: "Façon de sacrer sans utiliser le vrai mot. Acceptable devant les enfants.",
        contexte: "Utilisé pour éviter de choquer tout en exprimant une émotion.",
        exemple: "« Tabarnouche, j'ai échappé mon café! »"
    },
    {
        mot: "câline",
        type: "juron atténué",
        definition: "Version adoucie de 'câlice'.",
        signification: "Façon polie de jurer sans utiliser le vrai sacre.",
        contexte: "Acceptable en présence d'enfants ou de personnes sensibles.",
        exemple: "« Câline de bine, c'est pas ma journée! »"
    },
    {
        mot: "niaiseux",
        type: "adjectif / nom",
        definition: "Idiot, stupide, imbécile.",
        signification: "Insulte légère pour quelqu'un qui fait des bêtises.",
        contexte: "Peut être affectueux entre amis ou insultant selon le ton.",
        exemple: "« Fais pas le niaiseux, tu sais très bien de quoi je parle! »"
    },
    {
        mot: "épais",
        type: "adjectif (insulte)",
        definition: "Stupide, idiot, lent d'esprit.",
        signification: "Insulte suggérant que quelqu'un manque d'intelligence.",
        contexte: "Insulte directe, peut être blessante.",
        exemple: "« T'es ben épais de pas avoir compris ça! »"
    },
    {
        mot: "cave",
        type: "nom / adjectif (insulte)",
        definition: "Idiot, imbécile, personne stupide.",
        signification: "Insulte courante au Québec pour qualifier quelqu'un de stupide.",
        contexte: "Insulte directe, assez blessante.",
        exemple: "« Quel cave! Y'a encore oublié de barrer la porte! »"
    },
    {
        mot: "colon",
        type: "nom (insulte)",
        definition: "Personne rustre, sans éducation, arriérée.",
        signification: "Insulte suggérant un manque de sophistication ou de culture.",
        contexte: "Péjoratif, suggère quelqu'un de la campagne avec des manières grossières.",
        exemple: "« Agis pas comme un colon devant ma famille! »"
    },
    {
        mot: "twit",
        type: "nom (insulte)",
        definition: "Idiot, imbécile.",
        signification: "Insulte empruntée à l'anglais, très courante au Québec.",
        contexte: "Insulte légère à modérée.",
        exemple: "« Quel twit! Y comprend jamais rien! »"
    },
    {
        mot: "poche",
        type: "adjectif",
        definition: "Nul, mauvais, de mauvaise qualité.",
        signification: "Décrit quelque chose ou quelqu'un de médiocre.",
        contexte: "Utilisé pour critiquer la qualité de quelque chose.",
        exemple: "« Ce film-là était vraiment poche, j'ai perdu mon temps! »"
    },
    {
        mot: "quétaine",
        type: "adjectif",
        definition: "Kitsch, ringard, de mauvais goût.",
        signification: "Décrit quelque chose de démodé ou de mauvais goût.",
        contexte: "Utilisé pour critiquer le style ou le goût de quelqu'un.",
        exemple: "« Ta décoration de Noël est ben quétaine! »"
    },
    {
        mot: "flanc mou",
        type: "nom masculin",
        definition: "Personne paresseuse, fainéante.",
        signification: "Quelqu'un qui évite le travail.",
        contexte: "Critique de la paresse de quelqu'un.",
        exemple: "« Arrête de faire le flanc mou pis aide-nous! »"
    },
    {
        mot: "licheux",
        type: "nom masculin",
        definition: "Lèche-bottes, flatteur.",
        signification: "Personne qui flatte excessivement pour obtenir des faveurs.",
        contexte: "Péjoratif envers les personnes serviles.",
        exemple: "« Le nouveau est un vrai licheux avec le boss! »"
    },
    {
        mot: "baveux",
        type: "nom / adjectif",
        definition: "Arrogant, fanfaron, prétentieux.",
        signification: "Quelqu'un qui se croit supérieur aux autres.",
        contexte: "Critique de l'arrogance.",
        exemple: "« Fais pas ton baveux, t'es pas meilleur que les autres! »"
    },
    {
        mot: "crosseur",
        type: "nom masculin (vulgaire)",
        definition: "Arnaqueur, menteur, tricheur.",
        signification: "Personne malhonnête qui trompe les autres.",
        contexte: "Insulte pour quelqu'un de malhonnête.",
        exemple: "« Ce vendeur-là est un vrai crosseur! »"
    },
    {
        mot: "chialeux",
        type: "nom / adjectif",
        definition: "Râleur, quelqu'un qui se plaint constamment.",
        signification: "Personne qui n'arrête pas de chialer (se plaindre).",
        contexte: "Critique de quelqu'un qui se plaint trop.",
        exemple: "« Arrête d'être chialeux, c'est pas si pire que ça! »"
    },
    {
        mot: "gratteux",
        type: "adjectif / nom",
        definition: "Avare, radin, économe à l'excès.",
        signification: "Quelqu'un qui ne veut pas dépenser son argent.",
        contexte: "Critique de l'avarice.",
        exemple: "« Y'est tellement gratteux qu'y réutilise son papier d'aluminium! »"
    },
    {
        mot: "téteux",
        type: "nom / adjectif",
        definition: "Lèche-bottes, personne qui cherche les faveurs.",
        signification: "Similaire à licheux, quelqu'un de servile.",
        contexte: "Péjoratif envers les flatteurs.",
        exemple: "« Fais pas ton téteux avec le prof! »"
    },
    {
        mot: "crotté",
        type: "adjectif",
        definition: "Sale, crasseux, mal habillé.",
        signification: "Décrit quelqu'un de négligé dans son apparence.",
        contexte: "Critique de l'hygiène ou de l'apparence.",
        exemple: "« Va te changer, t'es ben crotté! »"
    },
    {
        mot: "snoreau",
        type: "nom masculin",
        definition: "Petit voyou, délinquant.",
        signification: "Jeune qui fait des mauvais coups.",
        contexte: "Désigne un adolescent turbulent.",
        exemple: "« Les petits snoreaux du quartier ont encore fait des graffitis. »"
    },
    {
        mot: "zouave",
        type: "nom masculin",
        definition: "Idiot, personne qui fait le clown.",
        signification: "Quelqu'un qui agit de façon ridicule.",
        contexte: "Insulte légère.",
        exemple: "« Arrête de faire le zouave, c'est sérieux! »"
    },
    {
        mot: "taouin",
        type: "nom / adjectif",
        definition: "Idiot, simplet, niais.",
        signification: "Insulte suggérant un manque d'intelligence.",
        contexte: "Insulte rurale, moins courante en ville.",
        exemple: "« Fais pas le taouin, tu comprends très bien! »"
    },

    // === 50 EXPRESSIONS ===
    {
        mot: "avoir les yeux dans la graisse de bines",
        type: "expression",
        definition: "Avoir l'air fatigué, avoir les yeux bouffis ou vitreux.",
        signification: "Décrit quelqu'un qui a l'air épuisé ou qui vient de se réveiller.",
        contexte: "Utilisé le matin ou après une nuit blanche.",
        exemple: "« T'as les yeux dans la graisse de bines! T'as-tu veillé tard hier? »"
    },
    {
        mot: "attache ta tuque",
        type: "expression",
        definition: "Prépare-toi, ça va brasser!",
        signification: "Avertissement que quelque chose d'intense ou de difficile s'en vient.",
        contexte: "Utilisé avant un événement mouvementé ou une situation intense.",
        exemple: "« Attache ta tuque avec de la broche, le party va être malade à soir! »"
    },
    {
        mot: "c'est pas pire",
        type: "expression",
        definition: "C'est bien, c'est correct, c'est pas mal.",
        signification: "Façon québécoise d'exprimer une approbation modérée ou positive.",
        contexte: "Utilisé pour dire que quelque chose est satisfaisant.",
        exemple: "« Comment tu trouves mon nouveau char? — C'est pas pire pantoute! »"
    },
    {
        mot: "lâche pas la patate",
        type: "expression",
        definition: "Ne lâche pas, continue, persévère!",
        signification: "Encouragement à ne pas abandonner malgré les difficultés.",
        contexte: "Utilisé pour encourager quelqu'un qui traverse une période difficile.",
        exemple: "« Les examens sont durs, mais lâche pas la patate, t'es capable! »"
    },
    {
        mot: "être aux oiseaux",
        type: "expression",
        definition: "Être très heureux, être ravi.",
        signification: "État de bonheur intense.",
        contexte: "Utilisé pour décrire quelqu'un de très content.",
        exemple: "« Depuis qu'elle a eu sa promotion, elle est aux oiseaux! »"
    },
    {
        mot: "se faire passer un sapin",
        type: "expression",
        definition: "Se faire avoir, se faire arnaquer.",
        signification: "Être victime d'une tromperie ou d'une arnaque.",
        contexte: "Utilisé quand quelqu'un a été dupé.",
        exemple: "« Le vendeur m'a passé un sapin, le char était tout rouillé en dessous! »"
    },
    {
        mot: "parler à travers son chapeau",
        type: "expression",
        definition: "Dire n'importe quoi, parler sans savoir.",
        signification: "Parler de choses qu'on ne connaît pas vraiment.",
        contexte: "Utilisé pour critiquer quelqu'un qui s'exprime sans fondement.",
        exemple: "« Y parle à travers son chapeau, y connaît rien là-dedans! »"
    },
    {
        mot: "être vite sur ses patins",
        type: "expression",
        definition: "Être rapide à réagir, avoir l'esprit vif.",
        signification: "Quelqu'un qui comprend et réagit rapidement.",
        contexte: "Compliment pour quelqu'un de débrouillard et rapide.",
        exemple: "« Elle est vite sur ses patins, elle a trouvé la solution en deux minutes! »"
    },
    {
        mot: "péter de la broue",
        type: "expression",
        definition: "Se vanter, frimer, faire le fanfaron.",
        signification: "Quelqu'un qui exagère ses accomplissements pour impressionner.",
        contexte: "Utilisé de façon critique envers quelqu'un qui se vante trop.",
        exemple: "« Y arrête pas de péter de la broue avec son nouveau truck! »"
    },
    {
        mot: "se tirer une bûche",
        type: "expression",
        definition: "S'asseoir, prendre une chaise.",
        signification: "Invitation à s'asseoir et se joindre au groupe.",
        contexte: "Expression accueillante et chaleureuse.",
        exemple: "« Tire-toi une bûche pis viens jaser avec nous autres! »"
    },
    {
        mot: "avoir la langue à terre",
        type: "expression",
        definition: "Être épuisé, très fatigué.",
        signification: "État d'extrême fatigue physique.",
        contexte: "Après un effort intense ou une longue journée.",
        exemple: "« Après le déménagement, j'avais la langue à terre! »"
    },
    {
        mot: "coûter les yeux de la tête",
        type: "expression",
        definition: "Être très cher, coûter une fortune.",
        signification: "Prix excessivement élevé.",
        contexte: "Utilisé pour critiquer un prix exagéré.",
        exemple: "« L'épicerie coûte les yeux de la tête ces temps-ci! »"
    },
    {
        mot: "être en beau fusil",
        type: "expression",
        definition: "Être très fâché, être en colère.",
        signification: "État de grande colère.",
        contexte: "Décrit quelqu'un de vraiment furieux.",
        exemple: "« Le boss était en beau fusil quand y'a vu les chiffres de vente! »"
    },
    {
        mot: "donner son quatre pour cent",
        type: "expression",
        definition: "Démissionner, quitter son emploi.",
        signification: "Référence aux 4% de vacances payées qu'on reçoit en quittant.",
        contexte: "Utilisé dans le contexte du travail.",
        exemple: "« J'en peux plus de cette job-là, j'vas donner mon quatre pour cent! »"
    },
    {
        mot: "avoir les deux pieds dans la même bottine",
        type: "expression",
        definition: "Être maladroit, être empêtré.",
        signification: "Quelqu'un qui manque de coordination ou de débrouillardise.",
        contexte: "Critique légère envers quelqu'un de gauche.",
        exemple: "« Y'a les deux pieds dans la même bottine, y'a encore échappé son café! »"
    },
    {
        mot: "se pogner le beigne",
        type: "expression",
        definition: "Ne rien faire, paresser.",
        signification: "Perdre son temps sans rien accomplir.",
        contexte: "Critique de quelqu'un qui ne travaille pas.",
        exemple: "« Arrête de te pogner le beigne pis viens m'aider! »"
    },
    {
        mot: "être dans les patates",
        type: "expression",
        definition: "Se tromper, être dans l'erreur.",
        signification: "Avoir tort ou être complètement à côté de la plaque.",
        contexte: "Utilisé pour dire à quelqu'un qu'il a tort.",
        exemple: "« Tu penses que le Canadien va gagner la coupe? T'es dans les patates! »"
    },
    {
        mot: "faire du pouce",
        type: "expression",
        definition: "Faire de l'auto-stop.",
        signification: "Demander un lift en levant le pouce sur le bord de la route.",
        contexte: "Mode de transport alternatif.",
        exemple: "« Dans mon jeune temps, on faisait du pouce pour aller en ville. »"
    },
    {
        mot: "accouche qu'on baptise",
        type: "expression",
        definition: "Dépêche-toi, dis-le, viens-en au fait!",
        signification: "Impatience envers quelqu'un qui prend trop de temps à s'exprimer.",
        contexte: "Utilisé quand quelqu'un tourne autour du pot.",
        exemple: "« Bon, accouche qu'on baptise! C'est quoi la nouvelle? »"
    },
    {
        mot: "c'est tiguidou",
        type: "expression",
        definition: "C'est parfait, tout est correct.",
        signification: "Expression d'approbation totale.",
        contexte: "Utilisé pour confirmer que tout est en ordre.",
        exemple: "« Le rendez-vous est à 14h? C'est tiguidou! »"
    },
    {
        mot: "ça pas d'allure",
        type: "expression",
        definition: "Ça n'a pas de sens, c'est ridicule.",
        signification: "Exprime l'incrédulité face à quelque chose d'absurde.",
        contexte: "Réaction à une situation incompréhensible.",
        exemple: "« Le prix des maisons, ça pas d'allure! »"
    },
    {
        mot: "manger ses bas",
        type: "expression",
        definition: "Être très nerveux, anxieux.",
        signification: "État d'anxiété intense.",
        contexte: "Avant un événement stressant.",
        exemple: "« J'mange mes bas en attendant les résultats de l'examen! »"
    },
    {
        mot: "avoir le feu au cul",
        type: "expression (vulgaire)",
        definition: "Être très pressé, être en colère.",
        signification: "Quelqu'un qui est extrêmement pressé ou irrité.",
        contexte: "Vulgaire mais courant.",
        exemple: "« Y'a le feu au cul depuis que le boss y'a parlé! »"
    },
    {
        mot: "péter une coche",
        type: "expression",
        definition: "Perdre son calme, exploser de colère.",
        signification: "Crise de colère soudaine.",
        contexte: "Réaction excessive à une situation.",
        exemple: "« Mon père a pété une coche quand y'a vu ma note! »"
    },
    {
        mot: "péter la balloune",
        type: "expression",
        definition: "Échouer au test d'alcoolémie.",
        signification: "Se faire prendre pour conduite en état d'ébriété.",
        contexte: "Contexte de sécurité routière.",
        exemple: "« Y'a pété la balloune en revenant du party. »"
    },
    {
        mot: "virer une brosse",
        type: "expression",
        definition: "Faire la fête, boire beaucoup.",
        signification: "Soirée de beuverie.",
        contexte: "Sortie festive avec consommation d'alcool.",
        exemple: "« On a viré une méchante brosse au mariage de mon cousin! »"
    },
    {
        mot: "être chaud",
        type: "expression",
        definition: "Être ivre, être soûl.",
        signification: "Avoir bu trop d'alcool.",
        contexte: "Décrit l'état d'ivresse.",
        exemple: "« Y'est pas mal chaud, faudrait y appeler un taxi! »"
    },
    {
        mot: "être paqueté",
        type: "expression",
        definition: "Être très ivre, complètement soûl.",
        signification: "État d'ivresse avancée.",
        contexte: "Plus fort que 'être chaud'.",
        exemple: "« À la fin de la soirée, tout le monde était paqueté! »"
    },
    {
        mot: "prendre une débarque",
        type: "expression",
        definition: "Tomber, chuter, subir un échec.",
        signification: "Chute physique ou métaphorique.",
        contexte: "Accident ou échec cuisant.",
        exemple: "« J'ai pris une méchante débarque sur la glace! »"
    },
    {
        mot: "tomber en amour",
        type: "expression",
        definition: "Tomber amoureux.",
        signification: "Calque de l'anglais 'fall in love'.",
        contexte: "Début d'une relation amoureuse.",
        exemple: "« Y'est tombé en amour avec sa voisine. »"
    },
    {
        mot: "avoir du front tout le tour de la tête",
        type: "expression",
        definition: "Être effronté, avoir du culot.",
        signification: "Quelqu'un d'audacieux ou d'impudent.",
        contexte: "Critique de l'arrogance ou du sans-gêne.",
        exemple: "« Y'a du front tout le tour de la tête de me demander ça! »"
    },
    {
        mot: "être sur le piton",
        type: "expression",
        definition: "Être en forme, être alerte.",
        signification: "État de vigilance et d'énergie.",
        contexte: "Être prêt et en bonne forme.",
        exemple: "« Après mon café, j'suis sur le piton! »"
    },
    {
        mot: "ne pas être sorti du bois",
        type: "expression",
        definition: "Ne pas être tiré d'affaire.",
        signification: "Les problèmes ne sont pas terminés.",
        contexte: "Situation difficile qui perdure.",
        exemple: "« Avec ces dettes-là, on n'est pas sortis du bois! »"
    },
    {
        mot: "cogner des clous",
        type: "expression",
        definition: "Somnoler, piquer du nez.",
        signification: "Être très fatigué et s'endormir.",
        contexte: "État de fatigue extrême.",
        exemple: "« J'cognais des clous pendant le film tellement j'étais fatigué! »"
    },
    {
        mot: "avoir de l'eau dans la cave",
        type: "expression",
        definition: "Avoir un pantalon trop court.",
        signification: "Les pantalons qui arrivent au-dessus des chevilles.",
        contexte: "Taquinerie sur les vêtements.",
        exemple: "« T'as de l'eau dans la cave! Va te changer! »"
    },
    {
        mot: "se faire brasser la cage",
        type: "expression",
        definition: "Se faire secouer, se faire réprimander.",
        signification: "Recevoir une remontrance ou un choc.",
        contexte: "Quelqu'un qui reçoit une correction verbale.",
        exemple: "« Le coach y'a brassé la cage pis après ça y'a mieux joué! »"
    },
    {
        mot: "ça prend pas la tête à Papineau",
        type: "expression",
        definition: "Ce n'est pas compliqué, c'est simple.",
        signification: "Référence à Louis-Joseph Papineau, politicien brillant du 19e siècle.",
        contexte: "Pour dire que quelque chose est facile à comprendre.",
        exemple: "« Ça prend pas la tête à Papineau pour comprendre ça! »"
    },
    {
        mot: "envoye donc",
        type: "expression",
        definition: "Allez, vas-y, fais-le donc!",
        signification: "Encouragement ou incitation à agir.",
        contexte: "Pousser quelqu'un à faire quelque chose.",
        exemple: "« Envoye donc, demande-y son numéro! »"
    },
    {
        mot: "flusher quelqu'un",
        type: "expression",
        definition: "Larguer quelqu'un, mettre fin à une relation.",
        signification: "Rompre avec quelqu'un.",
        contexte: "Fin d'une relation amoureuse.",
        exemple: "« Elle l'a flushé après trois mois ensemble. »"
    },
    {
        mot: "s'en câlicer",
        type: "expression (vulgaire)",
        definition: "S'en foutre complètement.",
        signification: "Ne pas se soucier de quelque chose.",
        contexte: "Vulgaire mais très courant.",
        exemple: "« J'm'en câlice de ce qu'y pense! »"
    },
    {
        mot: "être tanné",
        type: "expression",
        definition: "En avoir assez, être fatigué de quelque chose.",
        signification: "Exaspération face à une situation.",
        contexte: "Exprime la lassitude.",
        exemple: "« J'suis tanné de répéter la même affaire! »"
    },
    {
        mot: "prendre ça cool",
        type: "expression",
        definition: "Se calmer, prendre les choses avec calme.",
        signification: "Ne pas s'énerver.",
        contexte: "Conseil de relaxation.",
        exemple: "« Prends ça cool, ça va s'arranger! »"
    },
    {
        mot: "être dans le jus",
        type: "expression",
        definition: "Être très occupé, débordé.",
        signification: "Avoir trop de travail ou de responsabilités.",
        contexte: "Contexte de travail intense.",
        exemple: "« J'peux pas t'aider là, j'suis dans le jus! »"
    },
    {
        mot: "checker ça",
        type: "expression",
        definition: "Regarder, examiner quelque chose.",
        signification: "Anglicisme très courant au Québec.",
        contexte: "Utilisé pour attirer l'attention sur quelque chose.",
        exemple: "« Checke ça, le coucher de soleil est malade! »"
    },
    {
        mot: "niaiser le poisson",
        type: "expression",
        definition: "Perdre du temps, tourner autour du pot.",
        signification: "Ne pas aller droit au but.",
        contexte: "Critique de quelqu'un qui perd du temps.",
        exemple: "« Arrête de niaiser le poisson pis dis-moi ce qui s'est passé! »"
    },
    {
        mot: "varger dans le tas",
        type: "expression",
        definition: "Frapper, attaquer sans retenue.",
        signification: "Action violente ou travail intense.",
        contexte: "Combat ou travail acharné.",
        exemple: "« Y'a vargé dans le tas pis y les a tous battus! »"
    },
    {
        mot: "se sacrer une volée",
        type: "expression (vulgaire)",
        definition: "Recevoir ou donner une raclée.",
        signification: "Se battre ou se faire battre.",
        contexte: "Contexte de bagarre.",
        exemple: "« Les deux gars se sont sacré une volée en arrière du bar. »"
    },
    {
        mot: "envoyer promener",
        type: "expression",
        definition: "Rejeter quelqu'un, dire à quelqu'un de partir.",
        signification: "Congédier quelqu'un de façon brusque.",
        contexte: "Refuser une demande ou rejeter quelqu'un.",
        exemple: "« Y m'a demandé de l'argent, je l'ai envoyé promener! »"
    },
    {
        mot: "se faire niaiser",
        type: "expression",
        definition: "Se faire avoir, se faire moquer.",
        signification: "Être la victime d'une blague ou d'une arnaque.",
        contexte: "Quelqu'un qui s'est fait duper.",
        exemple: "« J'me suis fait niaiser par le vendeur, le produit marchait même pas! »"
    },
    {
        mot: "ça dérange pas",
        type: "expression",
        definition: "Pas de problème, ça ne me dérange pas.",
        signification: "Expression de courtoisie ou d'acceptation.",
        contexte: "Réponse polie à une demande.",
        exemple: "« Tu peux prendre mon char? — Oui, oui, ça dérange pas! »"
    },

    // === 50 MOTS SUPPLÉMENTAIRES ===
    {
        mot: "minoune",
        type: "nom féminin",
        definition: "Vieille voiture en mauvais état.",
        signification: "Véhicule usé, souvent peu fiable.",
        contexte: "Terme affectueux ou moqueur pour une vieille auto.",
        exemple: "« Ma minoune a encore lâché sur l'autoroute! »"
    },
    {
        mot: "bécyk",
        type: "nom masculin",
        definition: "Bicyclette, vélo.",
        signification: "Prononciation québécoise de 'bicycle' (anglais).",
        contexte: "Utilisé couramment pour parler d'un vélo.",
        exemple: "« J'ai pogné une crevaison sur mon bécyk. »"
    },
    {
        mot: "bicycle à pétard",
        type: "nom masculin",
        definition: "Motocyclette, moto.",
        signification: "Expression humoristique pour désigner une moto.",
        contexte: "Familier et un peu démodé.",
        exemple: "« Y s'est acheté un beau bicycle à pétard pour l'été. »"
    },
    {
        mot: "barniques",
        type: "nom féminin pluriel",
        definition: "Lunettes.",
        signification: "Terme familier pour les lunettes de vue.",
        contexte: "Langage informel.",
        exemple: "« Où c'est que j'ai mis mes barniques? »"
    },
    {
        mot: "bébelles",
        type: "nom féminin pluriel",
        definition: "Jouets, objets, trucs, affaires.",
        signification: "Objets divers, souvent sans grande valeur.",
        contexte: "Peut désigner des jouets d'enfants ou des objets en général.",
        exemple: "« Ramasse tes bébelles, on s'en va! »"
    },
    {
        mot: "binnes",
        type: "nom féminin pluriel",
        definition: "Fèves au lard, haricots.",
        signification: "De l'anglais 'beans'. Plat traditionnel québécois.",
        contexte: "Cuisine traditionnelle.",
        exemple: "« Ma grand-mère fait les meilleures binnes en ville! »"
    },
    {
        mot: "bleuets",
        type: "nom masculin pluriel",
        definition: "Myrtilles sauvages.",
        signification: "Petits fruits bleus très populaires au Québec, surtout au Lac-Saint-Jean.",
        contexte: "Cueillette estivale et cuisine.",
        exemple: "« On a ramassé des bleuets au chalet pour faire une tarte. »"
    },
    {
        mot: "boisson",
        type: "nom féminin",
        definition: "Alcool, boisson alcoolisée.",
        signification: "Au Québec, 'boisson' réfère souvent spécifiquement à l'alcool.",
        contexte: "Être 'en boisson' signifie être ivre.",
        exemple: "« Y'était en boisson au party hier soir. »"
    },
    {
        mot: "bol",
        type: "nom masculin",
        definition: "Toilette, cuvette.",
        signification: "Terme familier pour les toilettes.",
        contexte: "Langage informel.",
        exemple: "« Où sont les bols ici? »"
    },
    {
        mot: "cabane à sucre",
        type: "nom féminin",
        definition: "Érablière où l'on produit le sirop d'érable.",
        signification: "Lieu emblématique de la culture québécoise au printemps.",
        contexte: "Tradition printanière avec repas copieux.",
        exemple: "« On va à la cabane à sucre en famille chaque printemps. »"
    },
    {
        mot: "camisole",
        type: "nom féminin",
        definition: "Débardeur, marcel, camisole sans manches.",
        signification: "Vêtement sans manches porté sous une chemise ou seul.",
        contexte: "Vêtement courant.",
        exemple: "« Y fait chaud, j'me mets en camisole. »"
    },
    {
        mot: "canisse",
        type: "nom féminin",
        definition: "Bouilloire électrique.",
        signification: "Terme régional pour la bouilloire.",
        contexte: "Utilisé surtout dans certaines régions.",
        exemple: "« Mets la canisse à chauffer pour le thé. »"
    },
    {
        mot: "cartable",
        type: "nom masculin",
        definition: "Classeur à anneaux.",
        signification: "Au Québec, cartable désigne un classeur, pas un sac d'école.",
        contexte: "Fourniture scolaire ou de bureau.",
        exemple: "« Range tes feuilles dans ton cartable. »"
    },
    {
        mot: "chandail",
        type: "nom masculin",
        definition: "T-shirt, maillot, pull.",
        signification: "Vêtement couvrant le haut du corps.",
        contexte: "Terme générique pour les hauts.",
        exemple: "« Mets ton chandail du Canadien pour la game! »"
    },
    {
        mot: "chaudière",
        type: "nom féminin",
        definition: "Seau, sceau.",
        signification: "Récipient avec une anse pour transporter des liquides.",
        contexte: "Utilisé pour le ménage ou la collecte d'eau d'érable.",
        exemple: "« Va chercher la chaudière pour ramasser l'eau d'érable. »"
    },
    {
        mot: "chialer",
        type: "verbe",
        definition: "Se plaindre, râler, rouspéter.",
        signification: "Exprimer son mécontentement de façon répétitive.",
        contexte: "Critique de quelqu'un qui se plaint trop.",
        exemple: "« Arrête de chialer pis fais quelque chose! »"
    },
    {
        mot: "choquer",
        type: "verbe",
        definition: "Se fâcher, s'énerver.",
        signification: "Au Québec, 'se choquer' signifie se mettre en colère.",
        contexte: "Différent du français de France où choquer signifie offenser.",
        exemple: "« Y s'est choqué quand y'a appris la nouvelle. »"
    },
    {
        mot: "coche",
        type: "nom féminin",
        definition: "Cran, niveau.",
        signification: "Utilisé dans l'expression 'péter une coche' ou 'monter d'une coche'.",
        contexte: "Indique une intensité ou un niveau.",
        exemple: "« Monte ça d'une coche, j'entends pas la musique! »"
    },
    {
        mot: "correct",
        type: "adjectif/interjection",
        definition: "OK, bien, d'accord.",
        signification: "Exprime l'approbation ou indique que tout va bien.",
        contexte: "Très courant dans la conversation.",
        exemple: "« T'es correct? — Oui, oui, j'suis correct. »"
    },
    {
        mot: "coton",
        type: "nom masculin",
        definition: "Courage, énergie, force.",
        signification: "Utilisé dans 'être au coton' (être épuisé).",
        contexte: "Exprime l'épuisement ou l'effort.",
        exemple: "« Après cette journée-là, j'étais au coton! »"
    },
    {
        mot: "crémage",
        type: "nom masculin",
        definition: "Glaçage de gâteau.",
        signification: "Couche sucrée qui recouvre un gâteau.",
        contexte: "Pâtisserie et cuisine.",
        exemple: "« Le crémage au chocolat, c'est mon préféré! »"
    },
    {
        mot: "débarbouillette",
        type: "nom féminin",
        definition: "Petite serviette, gant de toilette.",
        signification: "Carré de tissu pour se laver le visage.",
        contexte: "Salle de bain.",
        exemple: "« Passe-moi une débarbouillette pour me laver la face. »"
    },
    {
        mot: "décrissé",
        type: "adjectif (vulgaire)",
        definition: "Épuisé, détruit, en mauvais état.",
        signification: "Très fatigué ou endommagé.",
        contexte: "Vulgaire mais courant.",
        exemple: "« Mon char est tout décrissé après l'hiver. »"
    },
    {
        mot: "dispendieux",
        type: "adjectif",
        definition: "Cher, coûteux.",
        signification: "Qui coûte beaucoup d'argent.",
        contexte: "Registre plus soutenu.",
        exemple: "« C'est pas mal dispendieux ce restaurant-là! »"
    },
    {
        mot: "effoirer",
        type: "verbe",
        definition: "S'effondrer, s'écraser, échouer.",
        signification: "Tomber ou s'écrouler complètement.",
        contexte: "Utilisé pour des objets ou des personnes.",
        exemple: "« Y s'est effoiré sur le divan après la job. »"
    },
    {
        mot: "enfirouaper",
        type: "verbe",
        definition: "Tromper, arnaquer, embobiner.",
        signification: "Duper quelqu'un avec des belles paroles.",
        contexte: "Quelqu'un qui s'est fait avoir.",
        exemple: "« Y m'a enfirouapé avec ses promesses! »"
    },
    {
        mot: "face de bœuf",
        type: "nom féminin (insulte)",
        definition: "Personne à l'air bête, désagréable.",
        signification: "Quelqu'un qui a l'air fâché ou antipathique.",
        contexte: "Insulte légère.",
        exemple: "« Fais pas ta face de bœuf, souris un peu! »"
    },
    {
        mot: "faque",
        type: "conjonction",
        definition: "Donc, alors, fait que.",
        signification: "Contraction de 'ça fait que'. Très courant à l'oral.",
        contexte: "Langage parlé quotidien.",
        exemple: "« J'étais fatigué, faque j'suis resté chez nous. »"
    },
    {
        mot: "fardoches",
        type: "nom féminin pluriel",
        definition: "Broussailles, buissons, végétation dense.",
        signification: "Arbustes et plantes sauvages.",
        contexte: "Nature et forêt.",
        exemple: "« On s'est perdus dans les fardoches en arrière du chalet. »"
    },
    {
        mot: "fendant",
        type: "adjectif",
        definition: "Arrogant, prétentieux, hautain.",
        signification: "Quelqu'un qui se croit supérieur.",
        contexte: "Critique de l'attitude de quelqu'un.",
        exemple: "« Y'est ben fendant depuis qu'y'a eu sa promotion! »"
    },
    {
        mot: "fesser",
        type: "verbe",
        definition: "Frapper, cogner fort.",
        signification: "Donner un coup violent.",
        contexte: "Peut aussi signifier 'impressionner'.",
        exemple: "« Ça fesse en maudit ce drink-là! »"
    },
    {
        mot: "flo",
        type: "nom masculin",
        definition: "Enfant, gamin, jeune.",
        signification: "Terme familier pour un enfant ou adolescent.",
        contexte: "Affectueux ou légèrement moqueur.",
        exemple: "« Les flos jouent dehors dans la ruelle. »"
    },
    {
        mot: "foufounes",
        type: "nom féminin pluriel",
        definition: "Fesses, derrière.",
        signification: "Terme familier et un peu enfantin pour les fesses.",
        contexte: "Langage familier.",
        exemple: "« Tombe pas sur les foufounes! »"
    },
    {
        mot: "frencher",
        type: "verbe",
        definition: "Embrasser avec la langue, French kiss.",
        signification: "Baiser langoureux.",
        contexte: "Relations amoureuses.",
        exemple: "« Y'ont frenché toute la soirée! »"
    },
    {
        mot: "fripe",
        type: "nom féminin",
        definition: "Vêtement usagé, guenille.",
        signification: "Vieux vêtement ou tissu.",
        contexte: "Peut aussi désigner le visage fatigué.",
        exemple: "« T'as une de ces fripes à matin! »"
    },
    {
        mot: "garrocher",
        type: "verbe",
        definition: "Lancer, jeter.",
        signification: "Lancer quelque chose avec force ou sans soin.",
        contexte: "Geste brusque.",
        exemple: "« Garroche-moi les clés! »"
    },
    {
        mot: "grafigner",
        type: "verbe",
        definition: "Égratigner, griffer.",
        signification: "Faire une petite blessure superficielle.",
        contexte: "Blessure légère.",
        exemple: "« Le chat m'a grafigné le bras! »"
    },
    {
        mot: "guidoune",
        type: "nom féminin (insulte vulgaire)",
        definition: "Femme de mœurs légères, prostituée.",
        signification: "Insulte sexiste et vulgaire.",
        contexte: "Très offensant, à éviter.",
        exemple: "« Cette insulte est dégradante et ne devrait pas être utilisée. »"
    },
    {
        mot: "habitant",
        type: "nom masculin (péjoratif)",
        definition: "Personne rustre, sans manières.",
        signification: "Insulte suggérant un manque de sophistication.",
        contexte: "Péjoratif, fait référence aux fermiers d'autrefois.",
        exemple: "« Mange pas comme un habitant! »"
    },
    {
        mot: "innocent",
        type: "nom / adjectif (insulte)",
        definition: "Idiot, imbécile, niais.",
        signification: "Au Québec, innocent est une insulte signifiant stupide.",
        contexte: "Insulte courante.",
        exemple: "« Quel innocent! Y'a cru tout ce qu'on y'a dit! »"
    },
    {
        mot: "jambette",
        type: "nom féminin",
        definition: "Croc-en-jambe.",
        signification: "Action de faire tomber quelqu'un avec sa jambe.",
        contexte: "Jeux d'enfants ou mauvais coup.",
        exemple: "« Y m'a fait une jambette pis j'ai tombé! »"
    },
    {
        mot: "joke",
        type: "nom féminin",
        definition: "Blague, plaisanterie.",
        signification: "De l'anglais 'joke'. Très courant au Québec.",
        contexte: "Humour et conversation.",
        exemple: "« J'ai une bonne joke à te conter! »"
    },
    {
        mot: "lactée",
        type: "nom féminin",
        definition: "Popsicle, sucette glacée au lait.",
        signification: "Friandise glacée populaire au Québec.",
        contexte: "Snack d'été.",
        exemple: "« Va m'acheter une lactée au dépanneur! »"
    },
    {
        mot: "légume",
        type: "nom (insulte)",
        definition: "Personne inactive, amorphe.",
        signification: "Quelqu'un qui ne fait rien.",
        contexte: "Insulte légère.",
        exemple: "« Arrête de faire le légume devant la TV! »"
    },
    {
        mot: "limonade",
        type: "nom féminin",
        definition: "Boisson gazeuse type Sprite ou 7-Up.",
        signification: "Au Québec, limonade désigne un soda clair, pas du jus de citron.",
        contexte: "Différent du français de France.",
        exemple: "« J'vais prendre une limonade avec mes frites. »"
    },
    {
        mot: "liqueur",
        type: "nom féminin",
        definition: "Boisson gazeuse, soda.",
        signification: "Terme générique pour les boissons gazeuses sucrées.",
        contexte: "Ne désigne pas l'alcool au Québec.",
        exemple: "« Veux-tu une liqueur avec ton hot-dog? »"
    },
    {
        mot: "malade",
        type: "adjectif",
        definition: "Incroyable, génial, fou.",
        signification: "Sens positif pour quelque chose d'impressionnant.",
        contexte: "Langage des jeunes.",
        exemple: "« C'te show-là était malade! »"
    },
    {
        mot: "marde",
        type: "nom féminin (vulgaire)",
        definition: "Merde.",
        signification: "Prononciation québécoise de 'merde'.",
        contexte: "Vulgaire, utilisé comme juron.",
        exemple: "« Marde! J'ai oublié mon rendez-vous! »"
    },
    {
        mot: "moumoune",
        type: "nom féminin (insulte)",
        definition: "Peureux, lâche, efféminé.",
        signification: "Insulte suggérant un manque de courage. Peut être homophobe.",
        contexte: "Insulte à éviter.",
        exemple: "« Fais pas ta moumoune, c'est juste une araignée! »"
    },

    // === 50 EXPRESSIONS SUPPLÉMENTAIRES ===
    {
        mot: "avoir une face de carême",
        type: "expression",
        definition: "Avoir l'air triste, avoir mauvaise mine.",
        signification: "Visage qui exprime la tristesse ou la fatigue.",
        contexte: "Critique de l'apparence de quelqu'un.",
        exemple: "« T'as une face de carême à matin, qu'est-ce qui va pas? »"
    },
    {
        mot: "être né pour un petit pain",
        type: "expression",
        definition: "Être destiné à rester pauvre, modeste.",
        signification: "Mentalité défaitiste d'accepter sa condition.",
        contexte: "Critique de cette attitude au Québec moderne.",
        exemple: "« Y dit qu'y'est né pour un petit pain, mais moi j'y crois pas! »"
    },
    {
        mot: "avoir des bibittes",
        type: "expression",
        definition: "Avoir des problèmes, des complexes, des tracas.",
        signification: "Problèmes personnels ou psychologiques.",
        contexte: "Décrit quelqu'un avec des soucis.",
        exemple: "« Y'a des bibittes avec son ex, y'en parle tout le temps. »"
    },
    {
        mot: "c'est pas la fin du monde",
        type: "expression",
        definition: "Ce n'est pas si grave que ça.",
        signification: "Relativiser un problème.",
        contexte: "Pour calmer quelqu'un qui s'inquiète.",
        exemple: "« T'as raté ton examen? C'est pas la fin du monde, tu vas le reprendre! »"
    },
    {
        mot: "avoir le motton",
        type: "expression",
        definition: "Avoir la gorge serrée par l'émotion.",
        signification: "Être ému au point d'avoir du mal à parler.",
        contexte: "Moment émotif.",
        exemple: "« J'avais le motton quand y'a fait son discours. »"
    },
    {
        mot: "tirer la pipe",
        type: "expression",
        definition: "Taquiner, se moquer gentiment.",
        signification: "Faire des blagues à quelqu'un.",
        contexte: "Humour entre amis.",
        exemple: "« Je te tire la pipe, prends-le pas personnel! »"
    },
    {
        mot: "partir sur une balloune",
        type: "expression",
        definition: "Se soûler, faire la fête excessivement.",
        signification: "Période de beuverie intense.",
        contexte: "Fêtes et excès.",
        exemple: "« Y'est parti sur une balloune qui a duré trois jours! »"
    },
    {
        mot: "avoir les shakes",
        type: "expression",
        definition: "Trembler, avoir les mains qui tremblent.",
        signification: "Tremblements dus au stress, à l'alcool ou à la nervosité.",
        contexte: "État physique de nervosité.",
        exemple: "« J'avais les shakes tellement j'étais nerveux pour mon entrevue. »"
    },
    {
        mot: "être sur le party",
        type: "expression",
        definition: "Faire la fête, sortir beaucoup.",
        signification: "Période festive intense.",
        contexte: "Vie nocturne et sorties.",
        exemple: "« Y'est sur le party depuis qu'y'a cassé avec sa blonde. »"
    },
    {
        mot: "mettre la hache",
        type: "expression",
        definition: "Terminer, arrêter quelque chose.",
        signification: "Mettre fin à une situation ou un projet.",
        contexte: "Décision finale.",
        exemple: "« On a mis la hache dans le projet, ça marchait pas. »"
    },
    {
        mot: "revirer de bord",
        type: "expression",
        definition: "Faire demi-tour, changer de direction.",
        signification: "Changer d'avis ou de direction.",
        contexte: "Physique ou métaphorique.",
        exemple: "« On a reviré de bord quand on a vu la tempête. »"
    },
    {
        mot: "avoir les yeux plus grands que la panse",
        type: "expression",
        definition: "Se servir plus de nourriture qu'on peut en manger.",
        signification: "Vouloir plus que ce qu'on peut consommer.",
        contexte: "Au restaurant ou à table.",
        exemple: "« T'as les yeux plus grands que la panse, tu finiras jamais ton assiette! »"
    },
    {
        mot: "peter plus haut que le trou",
        type: "expression (vulgaire)",
        definition: "Se croire supérieur, avoir des prétentions.",
        signification: "Quelqu'un qui se donne des airs.",
        contexte: "Critique de la prétention.",
        exemple: "« Y pète plus haut que le trou depuis qu'y'a sa BMW. »"
    },
    {
        mot: "se faire passer sur le corps",
        type: "expression",
        definition: "Se faire maltraiter, se faire dépasser.",
        signification: "Ne pas se laisser faire.",
        contexte: "Défense de ses droits.",
        exemple: "« J'me laisserai pas passer sur le corps par personne! »"
    },
    {
        mot: "tomber dans les pommes",
        type: "expression",
        definition: "S'évanouir, perdre connaissance.",
        signification: "Perdre conscience temporairement.",
        contexte: "Malaise physique.",
        exemple: "« Y faisait tellement chaud que j'ai failli tomber dans les pommes. »"
    },
    {
        mot: "avoir la chienne",
        type: "expression",
        definition: "Avoir peur, être effrayé.",
        signification: "État de peur intense.",
        contexte: "Avant un événement stressant.",
        exemple: "« J'ai la chienne de passer mon examen de conduite. »"
    },
    {
        mot: "se paqueter la fraise",
        type: "expression",
        definition: "Se soûler, boire beaucoup.",
        signification: "S'enivrer complètement.",
        contexte: "Soirée festive.",
        exemple: "« On s'est paqueté la fraise au mariage de ma sœur! »"
    },
    {
        mot: "avoir le cœur gros",
        type: "expression",
        definition: "Être triste, avoir de la peine.",
        signification: "État de tristesse profonde.",
        contexte: "Moment de peine.",
        exemple: "« J'ai le cœur gros depuis qu'elle est partie. »"
    },
    {
        mot: "faire simple",
        type: "expression",
        definition: "Agir de façon stupide ou ridicule.",
        signification: "Comportement niais.",
        contexte: "Reproche léger.",
        exemple: "« Arrête de faire simple devant le monde! »"
    },
    {
        mot: "lâcher un call",
        type: "expression",
        definition: "Passer un coup de fil, appeler quelqu'un.",
        signification: "Anglicisme pour téléphoner.",
        contexte: "Communication.",
        exemple: "« Lâche-moi un call quand t'arrives! »"
    },
    {
        mot: "être su'l gros nerf",
        type: "expression",
        definition: "Être très nerveux, stressé.",
        signification: "État de grande nervosité.",
        contexte: "Avant un événement important.",
        exemple: "« J'suis su'l gros nerf pour ma présentation demain. »"
    },
    {
        mot: "se faire mal paraître",
        type: "expression",
        definition: "Se mettre dans l'embarras, se ridiculiser.",
        signification: "Donner une mauvaise image de soi.",
        contexte: "Situation embarrassante.",
        exemple: "« Y s'est fait mal paraître devant tout le bureau. »"
    },
    {
        mot: "pitcher quelque chose",
        type: "expression",
        definition: "Lancer quelque chose, jeter.",
        signification: "Anglicisme pour lancer.",
        contexte: "Geste physique.",
        exemple: "« Pitche-moi une bière! »"
    },
    {
        mot: "rentrer dans le mur",
        type: "expression",
        definition: "S'épuiser complètement, atteindre ses limites.",
        signification: "Burnout, épuisement total.",
        contexte: "Travail intensif.",
        exemple: "« Si tu continues de même, tu vas rentrer dans le mur. »"
    },
    {
        mot: "être sur son X",
        type: "expression",
        definition: "Être bien placé, être au bon endroit.",
        signification: "Être exactement où on doit être.",
        contexte: "Position idéale.",
        exemple: "« J'suis sur mon X ici, c'est la job parfaite pour moi. »"
    },
    {
        mot: "faire du millage",
        type: "expression",
        definition: "Durer longtemps, être rentabilisé.",
        signification: "Quelque chose qui sert beaucoup.",
        contexte: "Durabilité d'un objet.",
        exemple: "« Ce manteau-là, j'en ai fait du millage! »"
    },
    {
        mot: "s'enfarger dans les fleurs du tapis",
        type: "expression",
        definition: "Se compliquer la vie avec des détails.",
        signification: "Trébucher sur des choses insignifiantes.",
        contexte: "Critique de la procrastination ou de l'excès de détails.",
        exemple: "« Arrête de t'enfarger dans les fleurs du tapis, passe à l'action! »"
    },
    {
        mot: "avoir la couenne dure",
        type: "expression",
        definition: "Être résistant, avoir la peau dure.",
        signification: "Quelqu'un de coriace qui encaisse les coups.",
        contexte: "Résilience.",
        exemple: "« Ma grand-mère a la couenne dure, elle a traversé ben des épreuves. »"
    },
    {
        mot: "se faire griller",
        type: "expression",
        definition: "Se faire prendre, se faire attraper.",
        signification: "Être découvert en train de faire quelque chose.",
        contexte: "Situation où on se fait attraper.",
        exemple: "« Y s'est fait griller à tricher à l'examen. »"
    },
    {
        mot: "avoir les mains pleines de pouces",
        type: "expression",
        definition: "Être maladroit, gauche.",
        signification: "Quelqu'un qui n'est pas habile de ses mains.",
        contexte: "Critique de la maladresse.",
        exemple: "« Y'a les mains pleines de pouces, y casse tout ce qu'y touche! »"
    },
    {
        mot: "chauffer le char",
        type: "expression",
        definition: "Conduire la voiture.",
        signification: "Expression québécoise pour conduire.",
        contexte: "Déplacement en auto.",
        exemple: "« C'est toi qui chauffe le char à soir? »"
    },
    {
        mot: "être dans le rouge",
        type: "expression",
        definition: "Avoir des dettes, être à découvert.",
        signification: "Situation financière difficile.",
        contexte: "Finances personnelles.",
        exemple: "« J'suis dans le rouge depuis que j'ai acheté mon char. »"
    },
    {
        mot: "virer fou",
        type: "expression",
        definition: "Devenir fou, perdre la raison.",
        signification: "Perdre le contrôle de ses émotions.",
        contexte: "Réaction excessive.",
        exemple: "« Y'a viré fou quand y'a appris la nouvelle! »"
    },
    {
        mot: "être dans ses culottes",
        type: "expression",
        definition: "Être à l'aise, confiant.",
        signification: "Se sentir bien dans sa peau.",
        contexte: "Confiance en soi.",
        exemple: "« Depuis qu'y'a changé de job, y'est ben dans ses culottes. »"
    },
    {
        mot: "passer en dessous de la table",
        type: "expression",
        definition: "Faire quelque chose en cachette, au noir.",
        signification: "Transaction non déclarée.",
        contexte: "Travail au noir ou arrangement illégal.",
        exemple: "« Y s'est fait payer en dessous de la table. »"
    },
    {
        mot: "mettre ses culottes",
        type: "expression",
        definition: "Prendre ses responsabilités, s'affirmer.",
        signification: "Avoir du courage et de l'autorité.",
        contexte: "Prise de décision.",
        exemple: "« Mets tes culottes pis dis-y ce que tu penses! »"
    },
    {
        mot: "se pogner le bacon",
        type: "expression",
        definition: "Ne rien faire, paresser.",
        signification: "Variante de 'se pogner le beigne'.",
        contexte: "Critique de la paresse.",
        exemple: "« Arrête de te pogner le bacon pis aide-moi! »"
    },
    {
        mot: "aller aux vues",
        type: "expression",
        definition: "Aller au cinéma.",
        signification: "Expression traditionnelle pour le cinéma.",
        contexte: "Sortie culturelle.",
        exemple: "« On va-tu aux vues à soir? »"
    },
    {
        mot: "prendre son trou",
        type: "expression",
        definition: "Se taire, se faire petit.",
        signification: "Arrêter de parler ou de se vanter.",
        contexte: "Reproche à quelqu'un d'arrogant.",
        exemple: "« Prends ton trou, t'as pas ton mot à dire là-dedans! »"
    },
    {
        mot: "être en crisse",
        type: "expression (vulgaire)",
        definition: "Être très fâché.",
        signification: "État de grande colère.",
        contexte: "Vulgaire mais très courant.",
        exemple: "« J'suis en crisse après lui! »"
    },
    {
        mot: "en avoir plein son casse",
        type: "expression",
        definition: "En avoir assez, être exaspéré.",
        signification: "Ras-le-bol complet.",
        contexte: "Exaspération totale.",
        exemple: "« J'en ai plein mon casse de cette job-là! »"
    },
    {
        mot: "manger une volée",
        type: "expression",
        definition: "Se faire battre, recevoir une raclée.",
        signification: "Perdre un combat ou une compétition de façon cuisante.",
        contexte: "Défaite.",
        exemple: "« Le Canadien a mangé une volée hier soir, 7 à 1! »"
    },
    {
        mot: "sacrer son camp",
        type: "expression (vulgaire)",
        definition: "Partir, s'en aller, dégager.",
        signification: "Quitter un endroit rapidement.",
        contexte: "Vulgaire mais courant.",
        exemple: "« Sacre ton camp de chez nous! »"
    },
    {
        mot: "être dans le champ",
        type: "expression",
        definition: "Se tromper complètement.",
        signification: "Être totalement dans l'erreur.",
        contexte: "Critique d'une opinion erronée.",
        exemple: "« T'es dans le champ si tu penses que ça va marcher! »"
    },
    {
        mot: "se peter les bretelles",
        type: "expression",
        definition: "Se vanter, être fier de soi.",
        signification: "Afficher sa fierté de façon visible.",
        contexte: "Après un accomplissement.",
        exemple: "« Y se pete les bretelles depuis qu'y'a eu sa promotion. »"
    },
    {
        mot: "câlisser une volée",
        type: "expression (vulgaire)",
        definition: "Donner une raclée, battre quelqu'un.",
        signification: "Battre quelqu'un violemment.",
        contexte: "Très vulgaire.",
        exemple: "« Y s'est fait câlisser une volée par le bouncer. »"
    },
    {
        mot: "mets-en",
        type: "expression",
        definition: "Certainement, absolument, tu peux le dire!",
        signification: "Expression d'accord enthousiaste.",
        contexte: "Confirmation emphatique.",
        exemple: "« C'était bon le show? — Mets-en! »"
    },
    {
        mot: "en masse",
        type: "expression",
        definition: "Beaucoup, suffisamment, en abondance.",
        signification: "Grande quantité.",
        contexte: "Très courant au Québec.",
        exemple: "« Y'a de la bière en masse pour tout le monde! »"
    },
    {
        mot: "se faire flusher",
        type: "expression",
        definition: "Se faire larguer, se faire congédier.",
        signification: "Être rejeté d'une relation ou d'un emploi.",
        contexte: "Fin de relation ou d'emploi.",
        exemple: "« Y s'est fait flusher après trois semaines à sa nouvelle job. »"
    },

    // === 50 MOTS SUPPLÉMENTAIRES - TOUTES CATÉGORIES ===
    
    // --- NOMS (objets, lieux, personnes) ---
    {
        mot: "bécosse",
        type: "nom féminin",
        definition: "Toilettes extérieures, latrines.",
        signification: "De l'anglais 'backhouse'. Toilettes rudimentaires à l'extérieur.",
        contexte: "Chalet ou camping rustique.",
        exemple: "« Au vieux chalet, on avait juste une bécosse en arrière. »"
    },
    {
        mot: "sloche",
        type: "nom féminin",
        definition: "Neige fondante et sale, gadoue.",
        signification: "Mélange de neige, eau et sel sur les routes en hiver.",
        contexte: "Conditions hivernales.",
        exemple: "« Mes bottes sont pleines de sloche! »"
    },
    {
        mot: "banc de neige",
        type: "nom masculin",
        definition: "Congère, amas de neige.",
        signification: "Accumulation de neige formée par le vent ou le déneigement.",
        contexte: "Hiver québécois.",
        exemple: "« Les bancs de neige sont hauts de même cette année! »"
    },
    {
        mot: "poudrerie",
        type: "nom féminin",
        definition: "Neige soulevée par le vent, tempête de neige légère.",
        signification: "Neige qui tourbillonne dans l'air.",
        contexte: "Météo hivernale.",
        exemple: "« Y'a de la poudrerie sur l'autoroute, fais attention! »"
    },
    {
        mot: "bordée de neige",
        type: "nom féminin",
        definition: "Grosse chute de neige.",
        signification: "Tempête de neige importante.",
        contexte: "Événement météorologique.",
        exemple: "« On a eu une méchante bordée de neige la nuit passée! »"
    },
    {
        mot: "motton",
        type: "nom masculin",
        definition: "Grumeau, boule, morceau.",
        signification: "Masse compacte de quelque chose.",
        contexte: "Cuisine ou émotion (avoir le motton).",
        exemple: "« Y'a des mottons dans ta sauce! »"
    },
    {
        mot: "piasse",
        type: "nom féminin",
        definition: "Dollar, argent.",
        signification: "De 'piastre'. Unité monétaire.",
        contexte: "Transactions financières.",
        exemple: "« Ça coûte dix piasses. »"
    },
    {
        mot: "cenne",
        type: "nom féminin",
        definition: "Cent, sou.",
        signification: "De 'cent'. Petite unité monétaire.",
        contexte: "Transactions financières.",
        exemple: "« J'ai pas une cenne sur moi! »"
    },
    {
        mot: "truck",
        type: "nom masculin",
        definition: "Camion, pick-up.",
        signification: "Anglicisme très courant pour camion.",
        contexte: "Véhicules.",
        exemple: "« Y s'est acheté un gros truck Ford. »"
    },
    {
        mot: "skidoo",
        type: "nom masculin",
        definition: "Motoneige.",
        signification: "Marque devenue nom commun au Québec.",
        contexte: "Sports d'hiver et transport.",
        exemple: "« On va faire du skidoo dans le bois en fin de semaine. »"
    },
    {
        mot: "quatre-roues",
        type: "nom masculin",
        definition: "VTT, quad.",
        signification: "Véhicule tout-terrain à quatre roues.",
        contexte: "Loisirs et transport rural.",
        exemple: "« Les jeunes font du quatre-roues dans le champ. »"
    },
    {
        mot: "roulotte",
        type: "nom féminin",
        definition: "Caravane, remorque de camping.",
        signification: "Véhicule de camping tracté.",
        contexte: "Vacances et camping.",
        exemple: "« On part en roulotte pour deux semaines. »"
    },
    {
        mot: "chalet",
        type: "nom masculin",
        definition: "Maison de campagne, résidence secondaire.",
        signification: "Lieu de villégiature, souvent près d'un lac.",
        contexte: "Vacances et weekends.",
        exemple: "« On monte au chalet tous les étés. »"
    },
    {
        mot: "drave",
        type: "nom féminin",
        definition: "Flottage du bois sur les rivières.",
        signification: "Métier historique des bûcherons québécois.",
        contexte: "Histoire et folklore.",
        exemple: "« Mon arrière-grand-père faisait la drave sur la rivière. »"
    },
    {
        mot: "cégep",
        type: "nom masculin",
        definition: "Collège d'enseignement général et professionnel.",
        signification: "Niveau d'études entre le secondaire et l'université, unique au Québec.",
        contexte: "Système d'éducation.",
        exemple: "« Ma fille commence le cégep en sciences humaines. »"
    },

    // --- VERBES ---
    {
        mot: "barrer",
        type: "verbe",
        definition: "Verrouiller, fermer à clé.",
        signification: "Action de verrouiller une porte ou un véhicule.",
        contexte: "Sécurité quotidienne.",
        exemple: "« Oublie pas de barrer la porte en partant! »"
    },
    {
        mot: "débarrer",
        type: "verbe",
        definition: "Déverrouiller, ouvrir.",
        signification: "Contraire de barrer.",
        contexte: "Accès à un lieu.",
        exemple: "« Peux-tu débarrer le char? »"
    },
    {
        mot: "embarquer",
        type: "verbe",
        definition: "Monter dans un véhicule.",
        signification: "Entrer dans une voiture, un bus, etc.",
        contexte: "Transport.",
        exemple: "« Embarque dans le char, on s'en va! »"
    },
    {
        mot: "débarquer",
        type: "verbe",
        definition: "Descendre d'un véhicule.",
        signification: "Sortir d'une voiture, d'un bus, etc.",
        contexte: "Transport.",
        exemple: "« Débarque ici, j'vais aller me parker. »"
    },
    {
        mot: "parker",
        type: "verbe",
        definition: "Stationner, garer.",
        signification: "De l'anglais 'to park'.",
        contexte: "Conduite automobile.",
        exemple: "« Où c'est que j'peux parker? »"
    },
    {
        mot: "watcher",
        type: "verbe",
        definition: "Regarder, surveiller.",
        signification: "De l'anglais 'to watch'.",
        contexte: "Observation.",
        exemple: "« Watche où tu marches! »"
    },
    {
        mot: "cruiser",
        type: "verbe",
        definition: "Draguer, flirter.",
        signification: "Chercher à séduire quelqu'un.",
        contexte: "Relations amoureuses.",
        exemple: "« Y passe son temps à cruiser les filles au bar. »"
    },
    {
        mot: "gosser",
        type: "verbe",
        definition: "Bricoler, tailler, ennuyer.",
        signification: "Travailler le bois ou agacer quelqu'un.",
        contexte: "Bricolage ou irritation.",
        exemple: "« Arrête de me gosser avec tes questions! »"
    },
    {
        mot: "zigonner",
        type: "verbe",
        definition: "Perdre son temps, bricoler sans but.",
        signification: "Faire quelque chose de façon inefficace.",
        contexte: "Procrastination.",
        exemple: "« Arrête de zigonner pis finis ta job! »"
    },
    {
        mot: "beurrer",
        type: "verbe",
        definition: "Tartiner, étendre du beurre.",
        signification: "Mettre du beurre sur du pain.",
        contexte: "Cuisine.",
        exemple: "« Beurre-moi une toast s'il te plaît. »"
    },
    {
        mot: "mouiller",
        type: "verbe",
        definition: "Pleuvoir.",
        signification: "Au Québec, 'mouiller' signifie qu'il pleut.",
        contexte: "Météo.",
        exemple: "« Y mouille à siaux dehors! »"
    },
    {
        mot: "neiger",
        type: "verbe",
        definition: "Tomber de la neige.",
        signification: "Précipitations de neige.",
        contexte: "Météo hivernale.",
        exemple: "« Y neige à plein ciel! »"
    },
    {
        mot: "caller",
        type: "verbe",
        definition: "Appeler, réserver, commander.",
        signification: "De l'anglais 'to call'.",
        contexte: "Communication ou réservation.",
        exemple: "« J'vas caller un taxi. »"
    },
    {
        mot: "rusher",
        type: "verbe",
        definition: "Se dépêcher, être sous pression.",
        signification: "De l'anglais 'to rush'.",
        contexte: "Situation stressante.",
        exemple: "« On rushe pour finir le projet à temps. »"
    },
    {
        mot: "slacker",
        type: "verbe",
        definition: "Ralentir, relâcher, prendre ça mollo.",
        signification: "De l'anglais 'to slack'.",
        contexte: "Réduction d'effort.",
        exemple: "« Slacke un peu, tu vas te brûler! »"
    },

    // --- ADJECTIFS ---
    {
        mot: "cute",
        type: "adjectif",
        definition: "Mignon, adorable.",
        signification: "De l'anglais 'cute'.",
        contexte: "Compliment.",
        exemple: "« Y'est donc ben cute ce bébé-là! »"
    },
    {
        mot: "smatte",
        type: "adjectif",
        definition: "Gentil, sympathique, intelligent.",
        signification: "De l'anglais 'smart'. Peut être positif ou ironique.",
        contexte: "Compliment ou sarcasme.",
        exemple: "« T'es ben smatte de m'aider! »"
    },
    {
        mot: "rushant",
        type: "adjectif",
        definition: "Stressant, exigeant, épuisant.",
        signification: "Qui demande beaucoup d'effort.",
        contexte: "Travail ou situation difficile.",
        exemple: "« C'te job-là est rushante en maudit! »"
    },
    {
        mot: "platte",
        type: "adjectif",
        definition: "Ennuyeux, dommage, plate.",
        signification: "Quelque chose de triste ou d'ennuyant.",
        contexte: "Déception ou ennui.",
        exemple: "« C'est platte que tu puisses pas venir. »"
    },
    {
        mot: "tiguidou",
        type: "adjectif / interjection",
        definition: "Parfait, correct, OK.",
        signification: "Expression d'approbation.",
        contexte: "Accord ou satisfaction.",
        exemple: "« On se voit à 8h? Tiguidou! »"
    },
    {
        mot: "full",
        type: "adverbe / adjectif",
        definition: "Très, beaucoup, plein.",
        signification: "Intensificateur de l'anglais.",
        contexte: "Langage des jeunes.",
        exemple: "« C'était full bon le souper! »"
    },
    {
        mot: "heavy",
        type: "adjectif",
        definition: "Intense, difficile, impressionnant.",
        signification: "De l'anglais 'heavy'.",
        contexte: "Situation intense.",
        exemple: "« C'était heavy comme examen! »"
    },
    {
        mot: "flyé",
        type: "adjectif",
        definition: "Excentrique, fou, original.",
        signification: "Quelqu'un ou quelque chose de très original.",
        contexte: "Style ou personnalité.",
        exemple: "« Son outfit est pas mal flyé! »"
    },
    {
        mot: "straight",
        type: "adjectif / adverbe",
        definition: "Direct, honnête, hétérosexuel.",
        signification: "De l'anglais 'straight'.",
        contexte: "Honnêteté ou orientation.",
        exemple: "« J'te le dis straight, ça marchera pas. »"
    },
    {
        mot: "cheap",
        type: "adjectif",
        definition: "Radin, de mauvaise qualité, mesquin.",
        signification: "De l'anglais 'cheap'.",
        contexte: "Critique de l'avarice ou de la qualité.",
        exemple: "« C'est cheap de pas laisser de tip! »"
    },

    // --- SACRES ET JURONS ATTÉNUÉS ---
    {
        mot: "simonac",
        type: "juron atténué",
        definition: "Version adoucie de sacres.",
        signification: "Juron léger pour exprimer surprise ou frustration.",
        contexte: "Acceptable en public.",
        exemple: "« Simonac, j'ai encore perdu mes clés! »"
    },
    {
        mot: "bout de viarge",
        type: "juron atténué",
        definition: "Expression de frustration légère.",
        signification: "Version atténuée de jurons.",
        contexte: "Surprise ou frustration modérée.",
        exemple: "« Bout de viarge, y fait frette! »"
    },
    {
        mot: "mautadit",
        type: "juron atténué",
        definition: "Version adoucie de 'maudit'.",
        signification: "Juron léger.",
        contexte: "Frustration légère.",
        exemple: "« Mautadit que c'est compliqué! »"
    },
    {
        mot: "crime",
        type: "juron atténué",
        definition: "Version adoucie de 'crisse'.",
        signification: "Juron acceptable en public.",
        contexte: "Surprise ou frustration.",
        exemple: "« Crime, j'avais oublié ça! »"
    },
    {
        mot: "cibolac",
        type: "juron atténué",
        definition: "Version adoucie de 'ciboire'.",
        signification: "Juron léger.",
        contexte: "Frustration modérée.",
        exemple: "« Cibolac, c'est pas ma journée! »"
    },

    // --- INSULTES ---
    {
        mot: "tarla",
        type: "nom / adjectif (insulte)",
        definition: "Idiot, imbécile, niais.",
        signification: "Insulte suggérant la stupidité.",
        contexte: "Insulte directe.",
        exemple: "« Quel tarla! Y'a encore fait la même erreur! »"
    },
    {
        mot: "moron",
        type: "nom (insulte)",
        definition: "Idiot, crétin.",
        signification: "De l'anglais 'moron'.",
        contexte: "Insulte courante.",
        exemple: "« T'es un vrai moron des fois! »"
    },
    {
        mot: "sans-dessein",
        type: "nom (insulte)",
        definition: "Idiot, personne sans jugement.",
        signification: "Quelqu'un qui manque de bon sens.",
        contexte: "Insulte modérée.",
        exemple: "« Quel sans-dessein, y'a encore oublié! »"
    },
    {
        mot: "grand slack",
        type: "nom masculin (insulte)",
        definition: "Grande personne maigre et molle.",
        signification: "Insulte pour quelqu'un de grand et peu énergique.",
        contexte: "Critique physique.",
        exemple: "« Envoye le grand slack, bouge un peu! »"
    },
    {
        mot: "tata",
        type: "nom (insulte légère)",
        definition: "Idiot, niais.",
        signification: "Insulte enfantine et légère.",
        contexte: "Entre amis ou avec enfants.",
        exemple: "« Fais pas le tata! »"
    },

    // === 50 MOTS SUPPLÉMENTAIRES ===
    
    // --- NOURRITURE ET BOISSONS ---
    {
        mot: "tourtière",
        type: "nom féminin",
        definition: "Pâté à la viande traditionnel québécois.",
        signification: "Plat emblématique servi à Noël et au Jour de l'An.",
        contexte: "Cuisine traditionnelle québécoise.",
        exemple: "« Ma mère fait la meilleure tourtière du Lac-Saint-Jean! »"
    },
    {
        mot: "cipaille",
        type: "nom masculin",
        definition: "Pâté de viandes en croûte à plusieurs étages.",
        signification: "De 'sea-pie'. Plat traditionnel des fêtes.",
        contexte: "Cuisine du temps des fêtes.",
        exemple: "« Le cipaille de ma grand-mère, c'est le meilleur! »"
    },
    {
        mot: "oreilles de crisse",
        type: "nom féminin pluriel",
        definition: "Couennes de lard frites et croustillantes.",
        signification: "Spécialité servie dans les cabanes à sucre.",
        contexte: "Temps des sucres.",
        exemple: "« J'adore les oreilles de crisse avec le sirop d'érable! »"
    },
    {
        mot: "pets de sœur",
        type: "nom masculin pluriel",
        definition: "Petits gâteaux roulés à la cassonade.",
        signification: "Dessert traditionnel québécois.",
        contexte: "Pâtisserie traditionnelle.",
        exemple: "« Ma tante fait des pets de sœur pour le dessert. »"
    },
    {
        mot: "grand-père",
        type: "nom masculin",
        definition: "Boulettes de pâte cuites dans le sirop d'érable.",
        signification: "Dessert traditionnel sucré.",
        contexte: "Cabane à sucre et cuisine maison.",
        exemple: "« J'ai mangé trois grands-pères à la cabane! »"
    },
    {
        mot: "tire",
        type: "nom féminin",
        definition: "Sirop d'érable chaud versé sur la neige.",
        signification: "Friandise emblématique du temps des sucres.",
        contexte: "Cabane à sucre.",
        exemple: "« Les enfants capotent sur la tire sur la neige! »"
    },
    {
        mot: "crétons",
        type: "nom masculin pluriel",
        definition: "Pâté de porc épicé à tartiner.",
        signification: "Spécialité québécoise pour le petit-déjeuner.",
        contexte: "Petit-déjeuner traditionnel.",
        exemple: "« Des toasts avec des crétons, c'est le bonheur! »"
    },
    {
        mot: "fèves au lard",
        type: "nom féminin pluriel",
        definition: "Haricots blancs cuits avec du lard et de la mélasse.",
        signification: "Plat traditionnel copieux.",
        contexte: "Repas traditionnel.",
        exemple: "« Ma grand-mère faisait cuire ses fèves au lard dans le four à bois. »"
    },
    {
        mot: "pouding chômeur",
        type: "nom masculin",
        definition: "Gâteau avec sauce au sirop d'érable ou cassonade.",
        signification: "Dessert inventé pendant la Grande Dépression.",
        contexte: "Dessert populaire.",
        exemple: "« Le pouding chômeur, c'est mon dessert préféré! »"
    },
    {
        mot: "Jos Louis",
        type: "nom masculin",
        definition: "Gâteau industriel au chocolat avec crème.",
        signification: "Collation emblématique fabriquée par Vachon.",
        contexte: "Snack populaire.",
        exemple: "« J'avais toujours un Jos Louis dans ma boîte à lunch. »"
    },
    {
        mot: "May West",
        type: "nom féminin",
        definition: "Gâteau industriel au caramel.",
        signification: "Autre classique de Vachon.",
        contexte: "Snack populaire.",
        exemple: "« Y préfère les May West aux Jos Louis. »"
    },
    {
        mot: "steamé",
        type: "nom masculin",
        definition: "Hot-dog cuit à la vapeur.",
        signification: "Style de hot-dog typiquement montréalais.",
        contexte: "Restauration rapide.",
        exemple: "« Deux steamés all dressed s'il vous plaît! »"
    },
    {
        mot: "smoked meat",
        type: "nom masculin",
        definition: "Viande fumée, bœuf mariné et fumé.",
        signification: "Spécialité montréalaise d'origine juive.",
        contexte: "Restaurant typique.",
        exemple: "« On va manger du smoked meat chez Schwartz's. »"
    },
    
    // --- NATURE ET ANIMAUX ---
    {
        mot: "maringouin",
        type: "nom masculin",
        definition: "Moustique.",
        signification: "Insecte piqueur très présent en été.",
        contexte: "Été au Québec.",
        exemple: "« Les maringouins m'ont mangé tout rond au chalet! »"
    },
    {
        mot: "mouche à chevreuil",
        type: "nom féminin",
        definition: "Taon, grosse mouche qui pique.",
        signification: "Insecte piqueur des régions forestières.",
        contexte: "Été en forêt.",
        exemple: "« Les mouches à chevreuil sont pires que les maringouins! »"
    },
    {
        mot: "brûlot",
        type: "nom masculin",
        definition: "Petit moucheron piqueur.",
        signification: "Minuscule insecte très irritant.",
        contexte: "Été près des lacs.",
        exemple: "« Les brûlots me rendent fou au bord de l'eau! »"
    },
    {
        mot: "outarde",
        type: "nom féminin",
        definition: "Bernache du Canada, grande oie sauvage.",
        signification: "Oiseau migrateur emblématique.",
        contexte: "Migration printanière et automnale.",
        exemple: "« Les outardes s'en vont vers le sud, l'hiver s'en vient! »"
    },
    {
        mot: "achigan",
        type: "nom masculin",
        definition: "Black bass, poisson d'eau douce.",
        signification: "Poisson populaire pour la pêche sportive.",
        contexte: "Pêche au Québec.",
        exemple: "« J'ai pogné un bel achigan ce matin! »"
    },
    {
        mot: "orignal",
        type: "nom masculin",
        definition: "Élan d'Amérique.",
        signification: "Le plus grand cervidé, emblème de la faune québécoise.",
        contexte: "Chasse et nature.",
        exemple: "« Mon oncle a eu son orignal à la chasse cette année. »"
    },
    {
        mot: "chevreuil",
        type: "nom masculin",
        definition: "Cerf de Virginie.",
        signification: "Au Québec, chevreuil désigne le cerf de Virginie.",
        contexte: "Chasse et faune.",
        exemple: "« Y'a plein de chevreuils dans le bois en arrière. »"
    },
    
    // --- VÊTEMENTS ET OBJETS ---
    {
        mot: "mitaines",
        type: "nom féminin pluriel",
        definition: "Moufles, gants sans doigts séparés.",
        signification: "Gants chauds pour l'hiver.",
        contexte: "Vêtements d'hiver.",
        exemple: "« Mets tes mitaines, y fait frette! »"
    },
    {
        mot: "combine",
        type: "nom féminin",
        definition: "Sous-vêtement long une pièce.",
        signification: "Vêtement thermique pour l'hiver.",
        contexte: "Vêtements chauds.",
        exemple: "« J'mets ma combine quand y fait vraiment frette. »"
    },
    {
        mot: "bas",
        type: "nom masculin pluriel",
        definition: "Chaussettes.",
        signification: "Au Québec, 'bas' signifie chaussettes.",
        contexte: "Vêtements quotidiens.",
        exemple: "« J'trouve jamais deux bas pareils! »"
    },
    {
        mot: "gougounes",
        type: "nom féminin pluriel",
        definition: "Sandales de plage, tongs, flip-flops.",
        signification: "Chaussures d'été légères.",
        contexte: "Été et plage.",
        exemple: "« Oublie pas tes gougounes pour la piscine! »"
    },
    {
        mot: "claques",
        type: "nom féminin pluriel",
        definition: "Couvre-chaussures en caoutchouc.",
        signification: "Protection contre la pluie et la neige.",
        contexte: "Temps humide.",
        exemple: "« Mets tes claques, y mouille dehors. »"
    },
    {
        mot: "espadrilles",
        type: "nom féminin pluriel",
        definition: "Chaussures de sport, running shoes.",
        signification: "Au Québec, désigne les chaussures de sport.",
        contexte: "Sport et loisirs.",
        exemple: "« J'ai besoin de nouvelles espadrilles pour courir. »"
    },
    {
        mot: "sacoche",
        type: "nom féminin",
        definition: "Sac à main.",
        signification: "Sac porté par les femmes.",
        contexte: "Accessoire quotidien.",
        exemple: "« Où c'est que j'ai mis ma sacoche? »"
    },
    {
        mot: "lumière",
        type: "nom féminin",
        definition: "Feu de circulation.",
        signification: "Au Québec, on dit 'lumière' pour feu rouge/vert.",
        contexte: "Circulation routière.",
        exemple: "« Tourne à gauche à la prochaine lumière. »"
    },
    {
        mot: "champlure",
        type: "nom féminin",
        definition: "Robinet.",
        signification: "Terme traditionnel pour robinet.",
        contexte: "Plomberie domestique.",
        exemple: "« Ferme la champlure, tu gaspilles l'eau! »"
    },
    {
        mot: "frigidaire",
        type: "nom masculin",
        definition: "Réfrigérateur.",
        signification: "Marque devenue nom commun.",
        contexte: "Électroménagers.",
        exemple: "« Y'a plus de lait dans le frigidaire. »"
    },
    
    // --- EXPRESSIONS FAMILIÈRES ---
    {
        mot: "matante",
        type: "nom féminin",
        definition: "Tante, ou femme d'âge mûr aux goûts démodés.",
        signification: "Peut être affectueux ou légèrement moqueur.",
        contexte: "Famille ou critique du style.",
        exemple: "« Les matantes placotaient dans la cuisine. »"
    },
    {
        mot: "mononcle",
        type: "nom masculin",
        definition: "Oncle, ou homme d'âge mûr aux opinions dépassées.",
        signification: "Peut être affectueux ou péjoratif.",
        contexte: "Famille ou critique sociale.",
        exemple: "« Fais pas ton mononcle avec tes jokes plates! »"
    },
    {
        mot: "beau-frère",
        type: "nom masculin",
        definition: "Homme pas fiable, arnaqueur potentiel.",
        signification: "Expression pour quelqu'un de louche.",
        contexte: "Méfiance envers quelqu'un.",
        exemple: "« Y'a l'air d'un beau-frère, fais attention! »"
    },
    {
        mot: "pépère",
        type: "nom masculin / adjectif",
        definition: "Grand-père, ou tranquille, relax.",
        signification: "Affectueux pour grand-père, ou style calme.",
        contexte: "Famille ou description.",
        exemple: "« On a fait ça pépère, sans se presser. »"
    },
    {
        mot: "mémère",
        type: "nom féminin",
        definition: "Grand-mère, ou femme qui commérage.",
        signification: "Affectueux ou légèrement péjoratif.",
        contexte: "Famille ou critique.",
        exemple: "« Arrête de faire ta mémère! »"
    },
    {
        mot: "ratoureux",
        type: "adjectif",
        definition: "Rusé, malin, espiègle.",
        signification: "Quelqu'un qui fait des tours pendables.",
        contexte: "Description de caractère.",
        exemple: "« Les enfants sont ben ratoureux ces temps-ci! »"
    },
    {
        mot: "achalant",
        type: "adjectif",
        definition: "Agaçant, dérangeant, énervant.",
        signification: "Qui achale, qui dérange.",
        contexte: "Critique de quelqu'un.",
        exemple: "« Que t'es achalant avec tes questions! »"
    },
    {
        mot: "bardasseux",
        type: "adjectif",
        definition: "Bruyant, turbulent, agité.",
        signification: "Qui fait du bruit et du désordre.",
        contexte: "Description de comportement.",
        exemple: "« Les enfants sont bardasseux aujourd'hui! »"
    },
    {
        mot: "cotillon",
        type: "nom masculin",
        definition: "Jupon, combinaison.",
        signification: "Sous-vêtement féminin traditionnel.",
        contexte: "Vêtements anciens.",
        exemple: "« Ma grand-mère portait toujours un cotillon. »"
    },
    {
        mot: "gigon",
        type: "nom masculin",
        definition: "Jambe.",
        signification: "Terme familier pour la jambe.",
        contexte: "Langage familier.",
        exemple: "« Bouge tes gigons, on est en retard! »"
    },

    // === 50 EXPRESSIONS SUPPLÉMENTAIRES ===
    {
        mot: "avoir la face longue",
        type: "expression",
        definition: "Avoir l'air triste, déçu.",
        signification: "Visage qui montre la déception.",
        contexte: "État émotionnel.",
        exemple: "« Pourquoi t'as la face longue de même? »"
    },
    {
        mot: "faire son frais",
        type: "expression",
        definition: "Se donner des airs, être prétentieux.",
        signification: "Quelqu'un qui se croit supérieur.",
        contexte: "Critique de l'attitude.",
        exemple: "« Arrête de faire ton frais! »"
    },
    {
        mot: "partir en peur",
        type: "expression",
        definition: "S'emballer, s'exciter excessivement.",
        signification: "Réaction excessive à quelque chose.",
        contexte: "Enthousiasme ou nervosité.",
        exemple: "« Pars pas en peur, c'est juste une idée! »"
    },
    {
        mot: "se garrocher",
        type: "expression",
        definition: "Se précipiter, se lancer.",
        signification: "Agir rapidement, parfois sans réfléchir.",
        contexte: "Action impulsive.",
        exemple: "« Y s'est garroché sur le buffet! »"
    },
    {
        mot: "lâcher son fou",
        type: "expression",
        definition: "Se défouler, s'amuser follement.",
        signification: "Libérer son énergie en s'amusant.",
        contexte: "Fête ou détente.",
        exemple: "« On a lâché notre fou au party hier! »"
    },
    {
        mot: "faire la baboune",
        type: "expression",
        definition: "Bouder, faire la moue.",
        signification: "Montrer son mécontentement.",
        contexte: "Comportement boudeur.",
        exemple: "« Arrête de faire la baboune! »"
    },
    {
        mot: "être dans les patentes",
        type: "expression",
        definition: "Être impliqué dans des affaires louches.",
        signification: "Être mêlé à des histoires compliquées.",
        contexte: "Affaires douteuses.",
        exemple: "« Y'est dans les patentes pas claires. »"
    },
    {
        mot: "tirer la couverte de son bord",
        type: "expression",
        definition: "Agir de façon égoïste, prendre tout pour soi.",
        signification: "Ne penser qu'à soi-même.",
        contexte: "Critique de l'égoïsme.",
        exemple: "« Y tire toujours la couverte de son bord! »"
    },
    {
        mot: "passer du coq à l'âne",
        type: "expression",
        definition: "Changer de sujet brusquement.",
        signification: "Passer d'un sujet à l'autre sans logique.",
        contexte: "Conversation décousue.",
        exemple: "« Tu passes du coq à l'âne, j'te suis plus! »"
    },
    {
        mot: "avoir l'air d'une poule mouillée",
        type: "expression",
        definition: "Avoir l'air piteux, misérable.",
        signification: "Apparence négligée ou triste.",
        contexte: "Description de l'apparence.",
        exemple: "« T'as l'air d'une poule mouillée ce matin! »"
    },
    {
        mot: "mettre de l'eau dans son vin",
        type: "expression",
        definition: "Modérer ses exigences, faire des compromis.",
        signification: "Accepter de faire des concessions.",
        contexte: "Négociation ou conflit.",
        exemple: "« Va falloir mettre de l'eau dans ton vin! »"
    },
    {
        mot: "sauter une coche",
        type: "expression",
        definition: "Perdre le contrôle, devenir fou momentanément.",
        signification: "Crise de colère ou de folie passagère.",
        contexte: "Réaction excessive.",
        exemple: "« Y'a sauté une coche quand y'a appris la nouvelle. »"
    },
    {
        mot: "se mettre les pieds dans les plats",
        type: "expression",
        definition: "Faire une gaffe, dire quelque chose de maladroit.",
        signification: "Commettre une erreur embarrassante.",
        contexte: "Maladresse sociale.",
        exemple: "« J'me suis mis les pieds dans les plats en parlant de son ex. »"
    },
    {
        mot: "se casser la tête",
        type: "expression",
        definition: "Réfléchir intensément, se tracasser.",
        signification: "Faire un effort mental important.",
        contexte: "Résolution de problème.",
        exemple: "« Casse-toi pas la tête avec ça! »"
    },
    {
        mot: "tomber sur les nerfs",
        type: "expression",
        definition: "Irriter, énerver.",
        signification: "Agacer profondément quelqu'un.",
        contexte: "Irritation.",
        exemple: "« Y me tombe sur les nerfs avec ses questions! »"
    },
    {
        mot: "avoir le tour",
        type: "expression",
        definition: "Avoir le talent, savoir comment faire.",
        signification: "Être habile dans quelque chose.",
        contexte: "Compétence.",
        exemple: "« T'as le tour avec les enfants! »"
    },
    {
        mot: "se lever du mauvais pied",
        type: "expression",
        definition: "Être de mauvaise humeur dès le matin.",
        signification: "Commencer la journée de mauvaise humeur.",
        contexte: "Humeur matinale.",
        exemple: "« Y s'est levé du mauvais pied à matin! »"
    },
    {
        mot: "pogner les nerfs",
        type: "expression",
        definition: "Se mettre en colère, s'énerver.",
        signification: "Perdre patience.",
        contexte: "Frustration.",
        exemple: "« J'ai pogné les nerfs quand j'ai vu le compte! »"
    },
    {
        mot: "être dans le trouble",
        type: "expression",
        definition: "Avoir des ennuis.",
        signification: "Être dans une situation difficile.",
        contexte: "Problèmes.",
        exemple: "« T'es dans le trouble si ta mère découvre ça! »"
    },
    {
        mot: "faire dur",
        type: "expression",
        definition: "Avoir mauvaise apparence, être pitoyable.",
        signification: "Ne pas être à son meilleur.",
        contexte: "Apparence ou situation.",
        exemple: "« Tu fais dur à matin, t'as-tu dormi? »"
    },
    {
        mot: "prendre une marche",
        type: "expression",
        definition: "Faire une promenade.",
        signification: "Calque de l'anglais 'take a walk'.",
        contexte: "Activité physique.",
        exemple: "« J'vais prendre une marche pour me changer les idées. »"
    },
    {
        mot: "faire le saut",
        type: "expression",
        definition: "Être très surpris, sursauter.",
        signification: "Réaction de surprise.",
        contexte: "Surprise.",
        exemple: "« J'ai fait le saut quand y'est arrivé par en arrière! »"
    },
    {
        mot: "prendre le bord",
        type: "expression",
        definition: "Partir, s'en aller.",
        signification: "Quitter un endroit.",
        contexte: "Départ.",
        exemple: "« Bon, j'prends le bord, à demain! »"
    },
    {
        mot: "avoir les nerfs en boule",
        type: "expression",
        definition: "Être très nerveux, stressé.",
        signification: "État de grande nervosité.",
        contexte: "Stress.",
        exemple: "« J'ai les nerfs en boule avec tout ce qui se passe. »"
    },
    {
        mot: "se payer la traite",
        type: "expression",
        definition: "Se gâter, se faire plaisir.",
        signification: "S'offrir quelque chose de spécial.",
        contexte: "Plaisir personnel.",
        exemple: "« On s'est payé la traite au restaurant hier! »"
    },
    {
        mot: "partir pour la gloire",
        type: "expression",
        definition: "S'emballer, commencer quelque chose avec enthousiasme.",
        signification: "Se lancer dans quelque chose.",
        contexte: "Début d'action.",
        exemple: "« Le v'là parti pour la gloire avec son nouveau projet! »"
    },
    {
        mot: "se bourrer la face",
        type: "expression",
        definition: "Manger beaucoup, se goinfrer.",
        signification: "Manger avec excès.",
        contexte: "Repas copieux.",
        exemple: "« On s'est bourré la face au buffet chinois! »"
    },
    {
        mot: "avoir le bras long",
        type: "expression",
        definition: "Avoir de l'influence, des contacts.",
        signification: "Être bien connecté.",
        contexte: "Influence.",
        exemple: "« Y'a le bras long, y connaît tout le monde! »"
    },
    {
        mot: "se faire du mauvais sang",
        type: "expression",
        definition: "S'inquiéter beaucoup.",
        signification: "Être très préoccupé.",
        contexte: "Inquiétude.",
        exemple: "« Fais-toi pas du mauvais sang, ça va s'arranger! »"
    },
    {
        mot: "avoir la tête dure",
        type: "expression",
        definition: "Être têtu, entêté.",
        signification: "Ne pas écouter les conseils.",
        contexte: "Obstination.",
        exemple: "« T'as la tête dure, tu changes jamais d'idée! »"
    },
    {
        mot: "tomber pile",
        type: "expression",
        definition: "Arriver au bon moment, être exact.",
        signification: "Timing parfait.",
        contexte: "Précision.",
        exemple: "« T'es tombé pile, on allait partir! »"
    },
    {
        mot: "courir après le trouble",
        type: "expression",
        definition: "Chercher les ennuis.",
        signification: "Agir de façon à s'attirer des problèmes.",
        contexte: "Comportement risqué.",
        exemple: "« Tu cours après le trouble à sortir avec lui! »"
    },
    {
        mot: "se casser le bicycle",
        type: "expression",
        definition: "S'inquiéter pour rien, se tracasser.",
        signification: "Se faire du souci inutilement.",
        contexte: "Inquiétude excessive.",
        exemple: "« Casse-toi pas le bicycle, ça va bien aller! »"
    },
    {
        mot: "barrer les roues",
        type: "expression",
        definition: "Tourner les roues de la voiture pour stationner.",
        signification: "Mesure de sécurité en stationnement.",
        contexte: "Conduite.",
        exemple: "« Barre tes roues quand tu parkes dans une côte. »"
    },
    {
        mot: "pogner le fixe",
        type: "expression",
        definition: "Rester figé, ne pas réagir.",
        signification: "Être paralysé, ne plus bouger.",
        contexte: "Inaction.",
        exemple: "« Y'a pogné le fixe quand elle y'a annoncé la nouvelle. »"
    },
    {
        mot: "virer sur le top",
        type: "expression",
        definition: "Devenir fou, perdre la raison.",
        signification: "Perdre le contrôle mental.",
        contexte: "Folie passagère.",
        exemple: "« Y'a viré sur le top quand y'a perdu sa job. »"
    },
    {
        mot: "se revirer de bord",
        type: "expression",
        definition: "Changer d'avis, se retourner.",
        signification: "Faire volte-face.",
        contexte: "Changement de direction.",
        exemple: "« Y s'est reviré de bord à la dernière minute. »"
    },
    {
        mot: "clairer la place",
        type: "expression",
        definition: "Partir, quitter les lieux.",
        signification: "S'en aller rapidement.",
        contexte: "Départ.",
        exemple: "« Quand la police est arrivée, tout le monde a clairé la place! »"
    },
    {
        mot: "faire un flat",
        type: "expression",
        definition: "Avoir une crevaison.",
        signification: "Pneu à plat.",
        contexte: "Problème de voiture.",
        exemple: "« J'ai fait un flat sur l'autoroute! »"
    },
    {
        mot: "être aux petits oiseaux",
        type: "expression",
        definition: "Être très heureux, aux anges.",
        signification: "État de grand bonheur.",
        contexte: "Joie.",
        exemple: "« Depuis qu'elle sort avec lui, elle est aux petits oiseaux! »"
    },
    {
        mot: "se péter la fiole",
        type: "expression",
        definition: "Se casser la figure, tomber.",
        signification: "Chute ou échec.",
        contexte: "Accident.",
        exemple: "« Y s'est pété la fiole sur la glace! »"
    },
    {
        mot: "manger une claque",
        type: "expression",
        definition: "Recevoir une gifle, subir un échec.",
        signification: "Défaite ou coup reçu.",
        contexte: "Échec ou violence.",
        exemple: "« J'ai mangé une claque aux élections! »"
    },
    {
        mot: "virer de bord",
        type: "expression",
        definition: "Faire demi-tour, changer de direction.",
        signification: "Retourner en arrière.",
        contexte: "Direction.",
        exemple: "« On a viré de bord quand on a vu la tempête. »"
    },
    {
        mot: "passer proche",
        type: "expression",
        definition: "Presque arriver, frôler.",
        signification: "Manquer de peu.",
        contexte: "Évitement.",
        exemple: "« J'ai passé proche de me faire frapper! »"
    },
    {
        mot: "être assis sur son steak",
        type: "expression",
        definition: "Ne rien faire, être passif.",
        signification: "Rester inactif.",
        contexte: "Critique de la passivité.",
        exemple: "« Arrête d'être assis sur ton steak pis aide-moi! »"
    },
    {
        mot: "sacrer patience",
        type: "expression",
        definition: "Laisser tomber, abandonner.",
        signification: "Perdre patience et abandonner.",
        contexte: "Frustration.",
        exemple: "« J'ai sacré patience avec ce projet-là! »"
    },
    {
        mot: "c'est de valeur",
        type: "expression",
        definition: "C'est dommage, c'est regrettable.",
        signification: "Expression de regret.",
        contexte: "Déception.",
        exemple: "« C'est de valeur que tu puisses pas venir. »"
    },
    {
        mot: "avoir de la misère",
        type: "expression",
        definition: "Avoir de la difficulté.",
        signification: "Éprouver des problèmes.",
        contexte: "Difficulté.",
        exemple: "« J'ai de la misère à comprendre son accent. »"
    },
    {
        mot: "se pogner avec quelqu'un",
        type: "expression",
        definition: "Se disputer avec quelqu'un.",
        signification: "Avoir une altercation.",
        contexte: "Conflit.",
        exemple: "« Je me suis pogné avec mon voisin pour le bruit. »"
    },

    // === 60 MOTS SUPPLÉMENTAIRES ===
    
    // --- TRAVAIL ET MÉTIERS ---
    {
        mot: "jobine",
        type: "nom féminin",
        definition: "Petit travail, emploi temporaire.",
        signification: "Travail occasionnel ou mal payé.",
        contexte: "Emploi précaire.",
        exemple: "« J'fais des jobines en attendant de trouver une vraie job. »"
    },
    {
        mot: "ouvrage",
        type: "nom masculin",
        definition: "Travail, emploi.",
        signification: "Terme traditionnel pour le travail.",
        contexte: "Vie professionnelle.",
        exemple: "« J'ai ben de l'ouvrage à faire aujourd'hui. »"
    },
    {
        mot: "boss",
        type: "nom masculin/féminin",
        definition: "Patron, chef.",
        signification: "De l'anglais 'boss'.",
        contexte: "Milieu de travail.",
        exemple: "« Mon boss est pas mal correct avec nous autres. »"
    },
    {
        mot: "chèque de paye",
        type: "nom masculin",
        definition: "Salaire, paie.",
        signification: "Rémunération du travail.",
        contexte: "Finances personnelles.",
        exemple: "« J'attends mon chèque de paye pour payer le loyer. »"
    },
    {
        mot: "puncher",
        type: "verbe",
        definition: "Pointer, enregistrer son arrivée au travail.",
        signification: "De l'anglais 'to punch in'.",
        contexte: "Horaire de travail.",
        exemple: "« Faut que je punche à 8h demain matin. »"
    },
    {
        mot: "shift",
        type: "nom masculin",
        definition: "Quart de travail.",
        signification: "Période de travail.",
        contexte: "Horaire.",
        exemple: "« J'travaille le shift de nuit cette semaine. »"
    },
    {
        mot: "overtime",
        type: "nom masculin",
        definition: "Heures supplémentaires.",
        signification: "Travail au-delà des heures normales.",
        contexte: "Emploi.",
        exemple: "« J'ai fait du overtime pour finir le projet. »"
    },
    {
        mot: "layoff",
        type: "nom masculin",
        definition: "Mise à pied, licenciement temporaire.",
        signification: "Perte d'emploi temporaire.",
        contexte: "Chômage.",
        exemple: "« Y'a eu un layoff à l'usine cet hiver. »"
    },
    
    // --- MAISON ET QUOTIDIEN ---
    {
        mot: "balayeuse",
        type: "nom féminin",
        definition: "Aspirateur.",
        signification: "Appareil pour nettoyer les planchers.",
        contexte: "Ménage.",
        exemple: "« Passe la balayeuse dans le salon. »"
    },
    {
        mot: "laveuse",
        type: "nom féminin",
        definition: "Machine à laver le linge.",
        signification: "Électroménager pour le lavage.",
        contexte: "Buanderie.",
        exemple: "« La laveuse est en train de brasser. »"
    },
    {
        mot: "sécheuse",
        type: "nom féminin",
        definition: "Sèche-linge.",
        signification: "Appareil pour sécher le linge.",
        contexte: "Buanderie.",
        exemple: "« Mets le linge dans la sécheuse. »"
    },
    {
        mot: "poêle",
        type: "nom masculin",
        definition: "Cuisinière, fourneau.",
        signification: "Appareil pour cuisiner.",
        contexte: "Cuisine.",
        exemple: "« Y'a quelque chose qui brûle sur le poêle! »"
    },
    {
        mot: "rond",
        type: "nom masculin",
        definition: "Plaque de cuisson, élément chauffant.",
        signification: "Partie du poêle où on pose les casseroles.",
        contexte: "Cuisine.",
        exemple: "« Éteins le rond, l'eau bout! »"
    },
    {
        mot: "prélart",
        type: "nom masculin",
        definition: "Linoléum, revêtement de sol.",
        signification: "Couvre-plancher en vinyle.",
        contexte: "Revêtement de sol.",
        exemple: "« On va changer le prélart de la cuisine. »"
    },
    {
        mot: "calorifère",
        type: "nom masculin",
        definition: "Radiateur, appareil de chauffage.",
        signification: "Source de chaleur dans une pièce.",
        contexte: "Chauffage.",
        exemple: "« Monte le calorifère, y fait frette! »"
    },
    {
        mot: "fournaise",
        type: "nom féminin",
        definition: "Chaudière, système de chauffage central.",
        signification: "Appareil principal de chauffage.",
        contexte: "Chauffage résidentiel.",
        exemple: "« La fournaise vient de partir, ça va se réchauffer. »"
    },
    {
        mot: "entrée",
        type: "nom féminin",
        definition: "Allée de garage.",
        signification: "Chemin menant au garage ou à la maison.",
        contexte: "Extérieur de la maison.",
        exemple: "« J'dois déneiger l'entrée à matin. »"
    },
    {
        mot: "shed",
        type: "nom masculin/féminin",
        definition: "Cabanon, remise.",
        signification: "Petite construction pour le rangement.",
        contexte: "Cour arrière.",
        exemple: "« Les outils sont dans le shed en arrière. »"
    },
    {
        mot: "galerie",
        type: "nom féminin",
        definition: "Balcon, terrasse, véranda.",
        signification: "Espace extérieur couvert devant la maison.",
        contexte: "Architecture résidentielle.",
        exemple: "« On jase sur la galerie en buvant une bière. »"
    },
    {
        mot: "perron",
        type: "nom masculin",
        definition: "Petit escalier devant la porte d'entrée.",
        signification: "Marches menant à la porte.",
        contexte: "Entrée de la maison.",
        exemple: "« Attends-moi sur le perron, j'arrive. »"
    },
    
    // --- TRANSPORT ET ROUTE ---
    {
        mot: "brake",
        type: "nom masculin",
        definition: "Frein.",
        signification: "De l'anglais 'brake'.",
        contexte: "Mécanique automobile.",
        exemple: "« Mes brakes sont finis, faut les changer. »"
    },
    {
        mot: "bumper",
        type: "nom masculin",
        definition: "Pare-chocs.",
        signification: "De l'anglais 'bumper'.",
        contexte: "Carrosserie auto.",
        exemple: "« Y m'a rentré dans le bumper en arrière! »"
    },
    {
        mot: "muffler",
        type: "nom masculin",
        definition: "Silencieux, pot d'échappement.",
        signification: "Pièce du système d'échappement.",
        contexte: "Mécanique.",
        exemple: "« Mon muffler est percé, ça fait du bruit en masse! »"
    },
    {
        mot: "windshield",
        type: "nom masculin",
        definition: "Pare-brise.",
        signification: "Vitre avant du véhicule.",
        contexte: "Automobile.",
        exemple: "« J'ai une craque dans mon windshield. »"
    },
    {
        mot: "wiper",
        type: "nom masculin",
        definition: "Essuie-glace.",
        signification: "De l'anglais 'wiper'.",
        contexte: "Équipement auto.",
        exemple: "« Mes wipers sont usés, y font juste étendre l'eau. »"
    },
    {
        mot: "dash",
        type: "nom masculin",
        definition: "Tableau de bord.",
        signification: "De l'anglais 'dashboard'.",
        contexte: "Intérieur du véhicule.",
        exemple: "« Y'a une lumière qui s'est allumée sur le dash. »"
    },
    {
        mot: "flat",
        type: "nom masculin",
        definition: "Crevaison, pneu à plat.",
        signification: "De l'anglais 'flat tire'.",
        contexte: "Problème de pneu.",
        exemple: "« J'ai pogné un flat sur le chemin. »"
    },
    {
        mot: "gaz",
        type: "nom masculin",
        definition: "Essence.",
        signification: "Carburant pour véhicules.",
        contexte: "Ravitaillement.",
        exemple: "« Faut que j'arrête mettre du gaz. »"
    },
    {
        mot: "licence",
        type: "nom féminin",
        definition: "Permis de conduire ou plaque d'immatriculation.",
        signification: "Document ou plaque officielle.",
        contexte: "Conduite automobile.",
        exemple: "« As-tu ta licence sur toi? »"
    },
    {
        mot: "ticket",
        type: "nom masculin",
        definition: "Contravention.",
        signification: "Amende pour infraction.",
        contexte: "Infractions routières.",
        exemple: "« J'ai pogné un ticket pour excès de vitesse. »"
    },
    
    // --- SPORTS ET LOISIRS ---
    {
        mot: "game",
        type: "nom féminin",
        definition: "Partie, match.",
        signification: "Rencontre sportive.",
        contexte: "Sports.",
        exemple: "« Y'a une game du Canadien à soir! »"
    },
    {
        mot: "scorer",
        type: "verbe",
        definition: "Marquer un but, compter.",
        signification: "De l'anglais 'to score'.",
        contexte: "Sports.",
        exemple: "« Y'a scoré deux buts hier! »"
    },
    {
        mot: "puck",
        type: "nom féminin",
        definition: "Rondelle de hockey.",
        signification: "Disque utilisé au hockey.",
        contexte: "Hockey.",
        exemple: "« La puck est rentrée dans le net! »"
    },
    {
        mot: "net",
        type: "nom masculin",
        definition: "Filet, but.",
        signification: "But au hockey.",
        contexte: "Hockey.",
        exemple: "« Y'a mis la puck dans le net! »"
    },
    {
        mot: "rink",
        type: "nom masculin",
        definition: "Patinoire.",
        signification: "Surface de glace pour patiner.",
        contexte: "Sports d'hiver.",
        exemple: "« On va jouer au hockey sur le rink dehors. »"
    },
    {
        mot: "bâton",
        type: "nom masculin",
        definition: "Crosse de hockey.",
        signification: "Équipement du joueur de hockey.",
        contexte: "Hockey.",
        exemple: "« Y'a cassé son bâton sur la shot! »"
    },
    {
        mot: "shot",
        type: "nom féminin",
        definition: "Tir, lancer.",
        signification: "Action de lancer la rondelle.",
        contexte: "Hockey.",
        exemple: "« Quelle shot! Le gardien l'a même pas vue! »"
    },
    {
        mot: "coaching",
        type: "nom masculin",
        definition: "Entraînement, direction d'équipe.",
        signification: "Action d'entraîner une équipe.",
        contexte: "Sports.",
        exemple: "« Y fait du coaching pour l'équipe de son fils. »"
    },
    
    // --- ARGOT ET FAMILIER ---
    {
        mot: "bines",
        type: "nom féminin pluriel",
        definition: "Fesses, derrière.",
        signification: "Terme familier pour les fesses.",
        contexte: "Langage familier.",
        exemple: "« Tombe pas sur les bines! »"
    },
    {
        mot: "bedaine",
        type: "nom féminin",
        definition: "Ventre, bedon.",
        signification: "Gros ventre.",
        contexte: "Description physique.",
        exemple: "« Y'a une belle bedaine de bière! »"
    },
    {
        mot: "palette",
        type: "nom féminin",
        definition: "Dents de devant.",
        signification: "Incisives.",
        contexte: "Dentition.",
        exemple: "« Y'a perdu ses deux palettes en tombant! »"
    },
    {
        mot: "cocotte",
        type: "nom féminin",
        definition: "Cône de pin ou femme.",
        signification: "Terme affectueux ou fruit du conifère.",
        contexte: "Nature ou affection.",
        exemple: "« Les enfants ramassent des cocottes dans le bois. »"
    },
    {
        mot: "pitoune",
        type: "nom féminin",
        definition: "Jolie fille, belle femme.",
        signification: "Terme pour une femme attirante.",
        contexte: "Langage familier.",
        exemple: "« C'est une vraie pitoune! »"
    },
    {
        mot: "pétard",
        type: "nom masculin",
        definition: "Personne très attirante.",
        signification: "Quelqu'un de sexy.",
        contexte: "Langage familier.",
        exemple: "« Son chum est un vrai pétard! »"
    },
    {
        mot: "bum",
        type: "nom masculin",
        definition: "Voyou, clochard, paresseux.",
        signification: "Personne peu recommandable ou sans-abri.",
        contexte: "Description péjorative.",
        exemple: "« Y traîne avec des bums du quartier. »"
    },
    {
        mot: "robineux",
        type: "nom masculin",
        definition: "Alcoolique, itinérant.",
        signification: "Personne qui boit de l'alcool bon marché.",
        contexte: "Marginalité.",
        exemple: "« Y'a des robineux qui traînent dans le parc. »"
    },
    {
        mot: "quêteux",
        type: "nom masculin",
        definition: "Mendiant, personne qui demande de l'argent.",
        signification: "De 'quêter' (demander).",
        contexte: "Marginalité.",
        exemple: "« Y'a un quêteux à la sortie du métro. »"
    },
    {
        mot: "minoune",
        type: "nom féminin",
        definition: "Chat, ou vieille voiture.",
        signification: "Terme affectueux pour un chat, ou péjoratif pour une auto.",
        contexte: "Animaux ou véhicules.",
        exemple: "« Viens ici ma belle minoune! »"
    },
    {
        mot: "minou",
        type: "nom masculin",
        definition: "Chat, ou terme affectueux.",
        signification: "Petit nom pour un chat ou un être cher.",
        contexte: "Affection.",
        exemple: "« Allo mon minou! »"
    },
    {
        mot: "pitou",
        type: "nom masculin",
        definition: "Chien.",
        signification: "Terme affectueux pour un chien.",
        contexte: "Animaux domestiques.",
        exemple: "« Mon pitou est content de me voir! »"
    },
    {
        mot: "pichou",
        type: "nom masculin",
        definition: "Mocassin, chausson.",
        signification: "Chaussure souple d'intérieur.",
        contexte: "Vêtements.",
        exemple: "« Mets tes pichous, le plancher est froid. »"
    },
    {
        mot: "gugusse",
        type: "nom masculin/féminin",
        definition: "Objet quelconque, bidule, truc.",
        signification: "Chose dont on ne connaît pas le nom.",
        contexte: "Langage familier.",
        exemple: "« Passe-moi le gugusse là-bas. »"
    },
    {
        mot: "cossin",
        type: "nom masculin",
        definition: "Bidule, truc, objet inutile.",
        signification: "Chose sans grande valeur.",
        contexte: "Objets divers.",
        exemple: "« C'est quoi ce cossin-là? »"
    },
    {
        mot: "patente",
        type: "nom féminin",
        definition: "Chose, truc, invention.",
        signification: "Objet ou invention quelconque.",
        contexte: "Langage familier.",
        exemple: "« C'est quoi cette patente-là? »"
    },
    {
        mot: "affaire",
        type: "nom féminin",
        definition: "Chose, truc, machin.",
        signification: "Mot passe-partout pour désigner quelque chose.",
        contexte: "Langage quotidien.",
        exemple: "« Donne-moi l'affaire sur la table. »"
    },
    {
        mot: "bébite",
        type: "nom féminin",
        definition: "Insecte, bestiole, ou problème.",
        signification: "Petit animal ou souci.",
        contexte: "Nature ou problèmes.",
        exemple: "« Y'a une bébite sur ton bras! »"
    },
    {
        mot: "bizoune",
        type: "nom féminin (familier)",
        definition: "Pénis (langage enfantin).",
        signification: "Terme enfantin pour les parties génitales masculines.",
        contexte: "Langage des enfants.",
        exemple: "« Cache ta bizoune! »"
    },

    // === 30 EXPRESSIONS SUPPLÉMENTAIRES ===
    {
        mot: "avoir une crotte sur le cœur",
        type: "expression",
        definition: "Avoir du ressentiment, garder rancune.",
        signification: "Être rancunier envers quelqu'un.",
        contexte: "Relations interpersonnelles.",
        exemple: "« Y'a une crotte sur le cœur depuis notre chicane. »"
    },
    {
        mot: "mettre son grain de sel",
        type: "expression",
        definition: "Donner son opinion sans qu'on la demande.",
        signification: "S'immiscer dans une conversation.",
        contexte: "Interactions sociales.",
        exemple: "« Y faut toujours qu'y mette son grain de sel! »"
    },
    {
        mot: "se faire aller le mâche-patates",
        type: "expression",
        definition: "Parler beaucoup, bavarder.",
        signification: "Parler sans arrêt.",
        contexte: "Conversation.",
        exemple: "« Arrête de te faire aller le mâche-patates! »"
    },
    {
        mot: "sentir le swing",
        type: "expression",
        definition: "Sentir la sueur, avoir une odeur corporelle.",
        signification: "Dégager une mauvaise odeur.",
        contexte: "Hygiène.",
        exemple: "« Tu sens le swing, va prendre une douche! »"
    },
    {
        mot: "partir sur une go",
        type: "expression",
        definition: "Partir impulsivement, agir sur un coup de tête.",
        signification: "Décider et agir spontanément.",
        contexte: "Actions impulsives.",
        exemple: "« On est partis sur une go au chalet! »"
    },
    {
        mot: "être habillé comme la chienne à Jacques",
        type: "expression",
        definition: "Être mal habillé, avoir l'air négligé.",
        signification: "Porter des vêtements dépareillés ou laids.",
        contexte: "Apparence vestimentaire.",
        exemple: "« T'es habillé comme la chienne à Jacques, va te changer! »"
    },
    {
        mot: "bretter",
        type: "expression/verbe",
        definition: "Perdre son temps, hésiter, lambiner.",
        signification: "Ne pas être efficace, traîner.",
        contexte: "Procrastination.",
        exemple: "« Arrête de bretter pis décide-toi! »"
    },
    {
        mot: "avoir les oreilles dans le crin",
        type: "expression",
        definition: "Être de mauvaise humeur, fâché.",
        signification: "Expression venant du comportement des chevaux.",
        contexte: "Mauvaise humeur.",
        exemple: "« Parle-y pas, y'a les oreilles dans le crin! »"
    },
    {
        mot: "donner un bec",
        type: "expression",
        definition: "Donner un bisou, un petit baiser.",
        signification: "Baiser affectueux et rapide.",
        contexte: "Affection.",
        exemple: "« Donne un bec à mémère avant de partir! »"
    },
    {
        mot: "être sur la coche",
        type: "expression",
        definition: "Être à la mode, être dans le coup.",
        signification: "Être tendance, branché.",
        contexte: "Mode et tendances.",
        exemple: "« Son outfit est sur la coche! »"
    },
    {
        mot: "se taper sur les cuisses",
        type: "expression",
        definition: "Rire aux éclats.",
        signification: "Rire très fort.",
        contexte: "Humour.",
        exemple: "« On se tapait sur les cuisses tellement c'était drôle! »"
    },
    {
        mot: "avoir le caquet bas",
        type: "expression",
        definition: "Être découragé, déprimé.",
        signification: "Avoir le moral bas.",
        contexte: "État émotionnel.",
        exemple: "« Y'a le caquet bas depuis qu'y'a perdu sa job. »"
    },
    {
        mot: "se rincer l'œil",
        type: "expression",
        definition: "Regarder quelqu'un d'attirant avec plaisir.",
        signification: "Apprécier visuellement une belle personne.",
        contexte: "Attraction physique.",
        exemple: "« Y se rince l'œil à regarder passer les filles. »"
    },
    {
        mot: "faire le tour du chapeau",
        type: "expression",
        definition: "Marquer trois buts dans un match.",
        signification: "Exploit au hockey (hat trick).",
        contexte: "Hockey.",
        exemple: "« Y'a fait le tour du chapeau hier soir! »"
    },
    {
        mot: "prendre une fouille",
        type: "expression",
        definition: "Tomber, chuter.",
        signification: "Faire une chute.",
        contexte: "Accident.",
        exemple: "« J'ai pris une méchante fouille sur la glace! »"
    },
    {
        mot: "être mal pris",
        type: "expression",
        definition: "Être dans une situation difficile.",
        signification: "Avoir des ennuis, être coincé.",
        contexte: "Problèmes.",
        exemple: "« J'suis mal pris, mon char veut pas partir! »"
    },
    {
        mot: "se faire un sang de punaise",
        type: "expression",
        definition: "S'inquiéter énormément.",
        signification: "Se faire beaucoup de souci.",
        contexte: "Anxiété.",
        exemple: "« Arrête de te faire un sang de punaise! »"
    },
    {
        mot: "prendre les nerfs",
        type: "expression",
        definition: "S'énerver, perdre patience.",
        signification: "Se mettre en colère.",
        contexte: "Frustration.",
        exemple: "« J'ai pris les nerfs quand j'ai vu le dégât. »"
    },
    {
        mot: "avoir la guedille au nez",
        type: "expression",
        definition: "Avoir le nez qui coule.",
        signification: "Avoir une morve au nez.",
        contexte: "Rhume ou froid.",
        exemple: "« Mouche-toi, t'as la guedille au nez! »"
    },
    {
        mot: "être vite en affaire",
        type: "expression",
        definition: "Être rapide, efficace.",
        signification: "Quelqu'un qui agit vite.",
        contexte: "Efficacité.",
        exemple: "« T'es vite en affaire, le travail est déjà fini! »"
    },
    {
        mot: "passer au cash",
        type: "expression",
        definition: "Payer, subir les conséquences.",
        signification: "Devoir payer ou souffrir.",
        contexte: "Conséquences.",
        exemple: "« Tu vas passer au cash si tu continues de même! »"
    },
    {
        mot: "être su'a coche",
        type: "expression",
        definition: "Être en forme, être à son meilleur.",
        signification: "Être au top de sa performance.",
        contexte: "Performance.",
        exemple: "« Y'était su'a coche pendant la game! »"
    },
    {
        mot: "se faire charrier",
        type: "expression",
        definition: "Se faire taquiner, se faire niaiser.",
        signification: "Être l'objet de moqueries gentilles.",
        contexte: "Humour entre amis.",
        exemple: "« Y s'est fait charrier toute la soirée! »"
    },
    {
        mot: "câler l'orignal",
        type: "expression",
        definition: "Vomir bruyamment (après avoir trop bu).",
        signification: "Expression humoristique pour vomir.",
        contexte: "Lendemain de veille.",
        exemple: "« Y'a passé la nuit à câler l'orignal! »"
    },
    {
        mot: "se mettre sur son trente-six",
        type: "expression",
        definition: "S'habiller chic, mettre ses plus beaux vêtements.",
        signification: "Se faire beau pour une occasion.",
        contexte: "Événement spécial.",
        exemple: "« On s'est mis sur notre trente-six pour le mariage. »"
    },
    {
        mot: "avoir les bleus",
        type: "expression",
        definition: "Être déprimé, avoir le cafard.",
        signification: "Être triste.",
        contexte: "État émotionnel.",
        exemple: "« J'ai les bleus depuis que l'été est fini. »"
    },
    {
        mot: "se fendre en quatre",
        type: "expression",
        definition: "Faire beaucoup d'efforts pour quelqu'un.",
        signification: "Se donner du mal.",
        contexte: "Générosité.",
        exemple: "« Y s'est fendu en quatre pour nous aider. »"
    },
    {
        mot: "manger ses croûtes",
        type: "expression",
        definition: "Apprendre par l'expérience, souffrir pour apprendre.",
        signification: "Passer par des épreuves formatrices.",
        contexte: "Apprentissage de la vie.",
        exemple: "« Y'a mangé ses croûtes avant de réussir. »"
    },
    {
        mot: "avoir le bras cassé",
        type: "expression",
        definition: "Être paresseux, ne pas vouloir payer.",
        signification: "Ne pas être généreux ou travaillant.",
        contexte: "Critique de la paresse.",
        exemple: "« Y'a le bras cassé, y paye jamais sa tournée! »"
    },
    {
        mot: "se faire passer un char",
        type: "expression",
        definition: "Se faire tromper, arnaquer.",
        signification: "Variante de 'se faire passer un sapin'.",
        contexte: "Arnaque.",
        exemple: "« Je me suis fait passer un char avec cette affaire-là! »"
    },

    // === 60 MOTS SUPPLÉMENTAIRES ===
    
    // --- MÉTÉO ET CLIMAT ---
    {
        mot: "bordée",
        type: "nom féminin",
        definition: "Forte chute de neige.",
        signification: "Tempête de neige abondante.",
        contexte: "Météo hivernale.",
        exemple: "« On a reçu une bordée de neige la nuit passée! »"
    },
    {
        mot: "poudrerie",
        type: "nom féminin",
        definition: "Neige soulevée par le vent, rafales de neige.",
        signification: "Conditions de visibilité réduite par la neige.",
        contexte: "Météo hivernale.",
        exemple: "« La poudrerie est tellement forte qu'on voit pas la route. »"
    },
    {
        mot: "slush",
        type: "nom féminin",
        definition: "Neige fondue, gadoue.",
        signification: "Mélange d'eau et de neige sur la route.",
        contexte: "Printemps ou redoux.",
        exemple: "« J'ai les pieds trempés à cause de la slush! »"
    },
    {
        mot: "sloche",
        type: "nom féminin",
        definition: "Variante de slush, neige fondante.",
        signification: "Francisation de 'slush'.",
        contexte: "Météo.",
        exemple: "« Y'a de la sloche partout sur le trottoir. »"
    },
    {
        mot: "grêler",
        type: "verbe",
        definition: "Tomber de la grêle.",
        signification: "Précipitations de glace.",
        contexte: "Météo orageuse.",
        exemple: "« Ça grêle fort, rentre le char dans le garage! »"
    },
    {
        mot: "mouiller",
        type: "verbe",
        definition: "Pleuvoir.",
        signification: "Terme québécois pour 'pleuvoir'.",
        contexte: "Météo.",
        exemple: "« Y mouille à siau dehors! »"
    },
    {
        mot: "canicule",
        type: "nom féminin",
        definition: "Vague de chaleur intense.",
        signification: "Période de grandes chaleurs.",
        contexte: "Été.",
        exemple: "« La canicule va durer trois jours. »"
    },
    {
        mot: "humidex",
        type: "nom masculin",
        definition: "Indice d'humidité ressenti.",
        signification: "Température perçue avec l'humidité.",
        contexte: "Météo estivale.",
        exemple: "« Avec l'humidex, on ressent 40 degrés! »"
    },
    
    // --- ÉMOTIONS ET ÉTATS ---
    {
        mot: "enragé",
        type: "adjectif",
        definition: "Très en colère, furieux.",
        signification: "État de grande colère.",
        contexte: "Émotion intense.",
        exemple: "« Y'est enragé ben noir après son boss! »"
    },
    {
        mot: "fru",
        type: "adjectif (familier)",
        definition: "Frustré, fâché.",
        signification: "Contraction de 'frustré'.",
        contexte: "Émotion.",
        exemple: "« Arrête d'être fru, c'est pas grave! »"
    },
    {
        mot: "pompé",
        type: "adjectif",
        definition: "Excité, énergisé, motivé.",
        signification: "État d'excitation positive.",
        contexte: "Enthousiasme.",
        exemple: "« J'suis pompé pour la game à soir! »"
    },
    {
        mot: "down",
        type: "adjectif",
        definition: "Déprimé, triste, partant pour.",
        signification: "De l'anglais, humeur basse ou être d'accord.",
        contexte: "État émotionnel ou accord.",
        exemple: "« J'suis down pour aller au cinéma. »"
    },
    {
        mot: "stressé",
        type: "adjectif",
        definition: "Anxieux, tendu.",
        signification: "État de stress.",
        contexte: "Anxiété.",
        exemple: "« J'suis stressé pour mon examen demain. »"
    },
    {
        mot: "capotant",
        type: "adjectif",
        definition: "Incroyable, fou, intense.",
        signification: "Quelque chose qui fait 'capoter'.",
        contexte: "Réaction émotive.",
        exemple: "« C'est capotant ce qui lui est arrivé! »"
    },
    {
        mot: "débile",
        type: "adjectif",
        definition: "Incroyable, fou (positif ou négatif).",
        signification: "Intensificateur.",
        contexte: "Expression d'étonnement.",
        exemple: "« C'est débile comme c'est bon! »"
    },
    {
        mot: "malade",
        type: "adjectif",
        definition: "Extraordinaire, incroyable (slang).",
        signification: "Terme positif pour quelque chose d'impressionnant.",
        contexte: "Jeunes, slang.",
        exemple: "« Son nouveau skate est malade! »"
    },
    
    // --- NOURRITURE ET BOISSON ---
    {
        mot: "liqueur",
        type: "nom féminin",
        definition: "Boisson gazeuse.",
        signification: "Terme québécois pour 'soft drink'.",
        contexte: "Boisson.",
        exemple: "« Veux-tu une liqueur? On a du Pepsi. »"
    },
    {
        mot: "breuvage",
        type: "nom masculin",
        definition: "Boisson.",
        signification: "Terme formel pour toute boisson.",
        contexte: "Restaurant, café.",
        exemple: "« Quel breuvage voulez-vous avec votre repas? »"
    },
    {
        mot: "roteux",
        type: "nom masculin (familier)",
        definition: "Hot-dog.",
        signification: "Terme populaire pour saucisse dans un pain.",
        contexte: "Nourriture de rue.",
        exemple: "« On va manger des roteux au stade! »"
    },
    {
        mot: "steamé",
        type: "nom masculin/adjectif",
        definition: "Hot-dog cuit à la vapeur.",
        signification: "De l'anglais 'steamed'.",
        contexte: "Cuisine.",
        exemple: "« Je veux un steamé all-dressed! »"
    },
    {
        mot: "toasté",
        type: "adjectif",
        definition: "Grillé (pour le pain ou hot-dog).",
        signification: "De l'anglais 'toasted'.",
        contexte: "Cuisine.",
        exemple: "« Un hot-dog toasté s'il vous plaît! »"
    },
    {
        mot: "all-dressed",
        type: "adjectif",
        definition: "Avec toutes les garnitures.",
        signification: "De l'anglais, avec tout.",
        contexte: "Restauration rapide.",
        exemple: "« Je veux ma pizza all-dressed. »"
    },
    {
        mot: "fève",
        type: "nom féminin",
        definition: "Haricot.",
        signification: "Légumineuse.",
        contexte: "Alimentation.",
        exemple: "« Des fèves au lard, c'est typique! »"
    },
    {
        mot: "binnes",
        type: "nom féminin pluriel",
        definition: "Haricots, fèves au lard.",
        signification: "De l'anglais 'beans'.",
        contexte: "Cuisine traditionnelle.",
        exemple: "« Ma mère fait les meilleures binnes! »"
    },
    {
        mot: "oreilles de crisse",
        type: "nom féminin pluriel",
        definition: "Couenne de lard frite.",
        signification: "Plat traditionnel de la cabane à sucre.",
        contexte: "Temps des sucres.",
        exemple: "« J'adore les oreilles de crisse avec le sirop! »"
    },
    {
        mot: "tire",
        type: "nom féminin",
        definition: "Sirop d'érable bouilli versé sur la neige.",
        signification: "Friandise traditionnelle.",
        contexte: "Cabane à sucre.",
        exemple: "« On va manger de la tire sur la neige! »"
    },
    {
        mot: "galette",
        type: "nom féminin",
        definition: "Biscuit, crêpe épaisse.",
        signification: "Pâtisserie maison.",
        contexte: "Cuisine.",
        exemple: "« Ma grand-mère fait des bonnes galettes à la mélasse. »"
    },
    {
        mot: "beigne",
        type: "nom masculin",
        definition: "Beignet, donut.",
        signification: "Pâtisserie frite sucrée.",
        contexte: "Boulangerie.",
        exemple: "« On arrête au Tim pour des beignes? »"
    },
    
    // --- CORPS ET SANTÉ ---
    {
        mot: "bobos",
        type: "nom masculin pluriel",
        definition: "Petites blessures, égratignures.",
        signification: "Langage enfantin pour blessures.",
        contexte: "Enfants.",
        exemple: "« Montre-moi tes bobos, on va mettre un plaster. »"
    },
    {
        mot: "plaster",
        type: "nom masculin",
        definition: "Pansement adhésif, diachylon.",
        signification: "De l'anglais 'plaster'.",
        contexte: "Premiers soins.",
        exemple: "« Mets un plaster sur ta coupure. »"
    },
    {
        mot: "grippe",
        type: "nom féminin",
        definition: "Rhume ou influenza.",
        signification: "Maladie respiratoire.",
        contexte: "Santé.",
        exemple: "« J'ai pogné la grippe, j'suis au lit. »"
    },
    {
        mot: "mal de bloc",
        type: "nom masculin",
        definition: "Mal de tête.",
        signification: "Expression familière.",
        contexte: "Santé.",
        exemple: "« J'ai un méchant mal de bloc ce matin! »"
    },
    {
        mot: "avoir mal au cœur",
        type: "locution",
        definition: "Avoir la nausée.",
        signification: "Envie de vomir.",
        contexte: "Malaise.",
        exemple: "« J'ai mal au cœur dans l'auto. »"
    },
    {
        mot: "picote",
        type: "nom féminin",
        definition: "Varicelle.",
        signification: "Maladie infantile.",
        contexte: "Santé.",
        exemple: "« Le petit a la picote, y peut pas aller à l'école. »"
    },
    
    // --- ÉCOLE ET ÉDUCATION ---
    {
        mot: "cégep",
        type: "nom masculin",
        definition: "Collège d'enseignement général et professionnel.",
        signification: "Établissement post-secondaire québécois.",
        contexte: "Éducation.",
        exemple: "« Je fais mon cégep en sciences. »"
    },
    {
        mot: "polyvalente",
        type: "nom féminin",
        definition: "École secondaire.",
        signification: "Type d'école secondaire.",
        contexte: "Éducation.",
        exemple: "« Y va à la polyvalente du quartier. »"
    },
    {
        mot: "exam",
        type: "nom masculin",
        definition: "Examen.",
        signification: "Abréviation courante.",
        contexte: "Études.",
        exemple: "« J'ai un exam de maths demain. »"
    },
    {
        mot: "couler",
        type: "verbe",
        definition: "Échouer un examen ou un cours.",
        signification: "Ne pas réussir.",
        contexte: "Études.",
        exemple: "« J'ai coulé mon exam de français! »"
    },
    {
        mot: "scrapper",
        type: "verbe",
        definition: "Bousiller, rater, détruire.",
        signification: "De l'anglais 'scrap'.",
        contexte: "Échec ou destruction.",
        exemple: "« J'ai scrappé mon examen. »"
    },
    {
        mot: "nerd",
        type: "nom masculin/féminin",
        definition: "Intello, personne studieuse.",
        signification: "De l'anglais.",
        contexte: "École.",
        exemple: "« C'est un nerd, y'a toujours des bonnes notes. »"
    },
    
    // --- ARGENT ET COMMERCE ---
    {
        mot: "cenne",
        type: "nom féminin",
        definition: "Cent, sou.",
        signification: "Prononciation québécoise de 'cent'.",
        contexte: "Argent.",
        exemple: "« J'ai pas une cenne dans mes poches! »"
    },
    {
        mot: "piasse",
        type: "nom féminin",
        definition: "Dollar, piastre.",
        signification: "Terme familier pour dollar.",
        contexte: "Argent.",
        exemple: "« Ça coûte vingt piasses. »"
    },
    {
        mot: "cash",
        type: "nom masculin",
        definition: "Argent liquide.",
        signification: "De l'anglais.",
        contexte: "Paiement.",
        exemple: "« Tu payes-tu en cash ou par carte? »"
    },
    {
        mot: "tip",
        type: "nom masculin",
        definition: "Pourboire.",
        signification: "De l'anglais.",
        contexte: "Restaurant.",
        exemple: "« Oublie pas de laisser un tip! »"
    },
    {
        mot: "deal",
        type: "nom masculin",
        definition: "Entente, aubaine.",
        signification: "De l'anglais.",
        contexte: "Commerce.",
        exemple: "« J'ai eu un bon deal sur mon char! »"
    },
    {
        mot: "bargain",
        type: "nom masculin",
        definition: "Aubaine, bonne affaire.",
        signification: "De l'anglais 'bargain'.",
        contexte: "Achats.",
        exemple: "« C'est un vrai bargain ce prix-là! »"
    },
    {
        mot: "dépanneur",
        type: "nom masculin",
        definition: "Petite épicerie de quartier.",
        signification: "Magasin de proximité.",
        contexte: "Commerce.",
        exemple: "« Je vais au dépanneur chercher du lait. »"
    },
    {
        mot: "dep",
        type: "nom masculin",
        definition: "Abréviation de dépanneur.",
        signification: "Terme familier.",
        contexte: "Commerce.",
        exemple: "« Je reviens, je vais au dep! »"
    },
    
    // --- DIVERS ---
    {
        mot: "placeholder",
        type: "nom masculin",
        definition: "Remplacer, tenir la place.",
        signification: "De l'anglais.",
        contexte: "Travail.",
        exemple: "« C'est juste un placeholder en attendant. »"
    },
    {
        mot: "full",
        type: "adverbe",
        definition: "Très, beaucoup.",
        signification: "Intensificateur de l'anglais.",
        contexte: "Langage jeune.",
        exemple: "« C'est full cool ton nouveau cell! »"
    },
    {
        mot: "genre",
        type: "adverbe/interjection",
        definition: "Comme, environ, tu vois.",
        signification: "Mot de remplissage, hésitation.",
        contexte: "Langage oral.",
        exemple: "« C'était genre super weird. »"
    },
    {
        mot: "style",
        type: "adverbe",
        definition: "Genre, comme.",
        signification: "Mot de remplissage.",
        contexte: "Langage oral jeune.",
        exemple: "« Y m'a style ignoré toute la soirée. »"
    },
    {
        mot: "mettons",
        type: "adverbe",
        definition: "Disons, par exemple.",
        signification: "Pour introduire une hypothèse.",
        contexte: "Explication.",
        exemple: "« Mettons que t'as raison, qu'est-ce qu'on fait? »"
    },
    {
        mot: "faque",
        type: "conjonction",
        definition: "Donc, alors, fait que.",
        signification: "Contraction de 'fait que'.",
        contexte: "Langage oral.",
        exemple: "« Faque, qu'est-ce qu'on fait à soir? »"
    },
    {
        mot: "pis",
        type: "conjonction",
        definition: "Et, puis.",
        signification: "Contraction de 'puis'.",
        contexte: "Langage oral.",
        exemple: "« J'ai mangé pis j'suis parti. »"
    },
    {
        mot: "anyways",
        type: "adverbe",
        definition: "De toute façon, anyway.",
        signification: "De l'anglais.",
        contexte: "Transition.",
        exemple: "« Anyways, c'pas grave. »"
    },
    {
        mot: "whatever",
        type: "interjection",
        definition: "Peu importe, je m'en fous.",
        signification: "De l'anglais.",
        contexte: "Indifférence.",
        exemple: "« Whatever, fais ce que tu veux! »"
    },
    {
        mot: "chill",
        type: "adjectif/verbe",
        definition: "Relaxe, détendu, se détendre.",
        signification: "De l'anglais.",
        contexte: "Détente.",
        exemple: "« Sois chill, c'est pas grave! »"
    },

    // === 40 EXPRESSIONS SUPPLÉMENTAIRES ===
    {
        mot: "lâcher son fou",
        type: "expression",
        definition: "Se défouler, s'amuser sans retenue.",
        signification: "Libérer son énergie.",
        contexte: "Fête, détente.",
        exemple: "« On a lâché notre fou au party! »"
    },
    {
        mot: "péter une coche",
        type: "expression",
        definition: "Perdre son calme, exploser de colère.",
        signification: "Se mettre très en colère.",
        contexte: "Frustration.",
        exemple: "« Y'a pété une coche quand y'a vu le dégât. »"
    },
    {
        mot: "virer une brosse",
        type: "expression",
        definition: "Se saouler, faire la fête.",
        signification: "Boire beaucoup d'alcool.",
        contexte: "Fête.",
        exemple: "« On a viré une brosse hier soir! »"
    },
    {
        mot: "pogner les nerfs",
        type: "expression",
        definition: "S'énerver, se fâcher.",
        signification: "Perdre patience.",
        contexte: "Frustration.",
        exemple: "« Pogne pas les nerfs, c'était un accident! »"
    },
    {
        mot: "être dans le jus",
        type: "expression",
        definition: "Être très occupé, débordé.",
        signification: "Avoir trop de travail.",
        contexte: "Travail.",
        exemple: "« J'suis dans le jus au bureau cette semaine! »"
    },
    {
        mot: "avoir de l'eau dans cave",
        type: "expression",
        definition: "Avoir les pantalons trop courts.",
        signification: "Pantalons qui arrivent au-dessus des chevilles.",
        contexte: "Vêtements.",
        exemple: "« T'as de l'eau dans cave, tes pantalons sont trop courts! »"
    },
    {
        mot: "se faire passer un sapin",
        type: "expression",
        definition: "Se faire tromper, arnaquer.",
        signification: "Être victime d'une fraude.",
        contexte: "Arnaque.",
        exemple: "« Y s'est fait passer un sapin par le vendeur. »"
    },
    {
        mot: "coûter un bras",
        type: "expression",
        definition: "Coûter très cher.",
        signification: "Être dispendieux.",
        contexte: "Prix.",
        exemple: "« Ce char-là coûte un bras! »"
    },
    {
        mot: "ne pas avoir la langue dans sa poche",
        type: "expression",
        definition: "Être bavard, avoir la répartie facile.",
        signification: "Ne pas hésiter à parler.",
        contexte: "Personnalité.",
        exemple: "« Elle a pas la langue dans sa poche, celle-là! »"
    },
    {
        mot: "avoir le tour",
        type: "expression",
        definition: "Avoir le truc, savoir comment faire.",
        signification: "Être habile.",
        contexte: "Compétence.",
        exemple: "« Y'a le tour avec les enfants. »"
    },
    {
        mot: "c'est pas la fin du monde",
        type: "expression",
        definition: "Ce n'est pas si grave.",
        signification: "Relativiser un problème.",
        contexte: "Réconfort.",
        exemple: "« Tu l'as raté? C'est pas la fin du monde! »"
    },
    {
        mot: "ça va faire!",
        type: "expression",
        definition: "Ça suffit! Arrête!",
        signification: "Expression d'exaspération.",
        contexte: "Frustration.",
        exemple: "« Ça va faire! Arrête de chialer! »"
    },
    {
        mot: "à date",
        type: "expression",
        definition: "Jusqu'à présent, pour l'instant.",
        signification: "Jusqu'à maintenant.",
        contexte: "Temps.",
        exemple: "« À date, tout va bien. »"
    },
    {
        mot: "de même",
        type: "expression",
        definition: "Comme ça, ainsi.",
        signification: "De cette manière.",
        contexte: "Description.",
        exemple: "« Pourquoi tu fais ça de même? »"
    },
    {
        mot: "en masse",
        type: "expression",
        definition: "Beaucoup, en grande quantité.",
        signification: "Suffisamment ou plus.",
        contexte: "Quantité.",
        exemple: "« Y'a du monde en masse au party! »"
    },
    {
        mot: "une fois pour toutes",
        type: "expression",
        definition: "Définitivement, une bonne fois.",
        signification: "De manière finale.",
        contexte: "Décision.",
        exemple: "« On règle ça une fois pour toutes! »"
    },
    {
        mot: "à tous les jours",
        type: "expression",
        definition: "Chaque jour, quotidiennement.",
        signification: "Tous les jours.",
        contexte: "Fréquence.",
        exemple: "« Je fais ça à tous les jours. »"
    },
    {
        mot: "en quelque part",
        type: "expression",
        definition: "Quelque part, d'une certaine façon.",
        signification: "Dans un certain sens.",
        contexte: "Réflexion.",
        exemple: "« En quelque part, t'as raison. »"
    },
    {
        mot: "pour vrai",
        type: "expression",
        definition: "Vraiment, sérieusement.",
        signification: "Pour de vrai.",
        contexte: "Confirmation.",
        exemple: "« Tu déménages? Pour vrai? »"
    },
    {
        mot: "pas pire",
        type: "expression",
        definition: "Pas mal, assez bien.",
        signification: "Acceptable, correct.",
        contexte: "Évaluation.",
        exemple: "« Comment ça va? Pas pire, toi? »"
    },
    {
        mot: "pas pour rien",
        type: "expression",
        definition: "Ce n'est pas sans raison.",
        signification: "Il y a une bonne raison.",
        contexte: "Justification.",
        exemple: "« C'est pas pour rien qu'y est parti! »"
    },
    {
        mot: "être paqueté",
        type: "expression",
        definition: "Être très ivre.",
        signification: "Être saoul.",
        contexte: "Alcool.",
        exemple: "« Y'était paqueté ben raide à la fête. »"
    },
    {
        mot: "partir sur la go",
        type: "expression",
        definition: "Partir sur un coup de tête.",
        signification: "Décider spontanément.",
        contexte: "Spontanéité.",
        exemple: "« On est partis sur la go au Mexique! »"
    },
    {
        mot: "tomber en amour",
        type: "expression",
        definition: "Tomber amoureux.",
        signification: "Calque de l'anglais 'to fall in love'.",
        contexte: "Relations.",
        exemple: "« Y'est tombé en amour avec elle. »"
    },
    {
        mot: "faire dur",
        type: "expression",
        definition: "Avoir l'air pitoyable, être de mauvaise qualité.",
        signification: "Être dans un mauvais état.",
        contexte: "Critique.",
        exemple: "« Tu fais dur à matin! T'as pas dormi? »"
    },
    {
        mot: "faire son possible",
        type: "expression",
        definition: "Faire de son mieux.",
        signification: "Donner le maximum.",
        contexte: "Effort.",
        exemple: "« J'ai fait mon possible, mais c'était pas assez. »"
    },
    {
        mot: "se creuser les méninges",
        type: "expression",
        definition: "Réfléchir intensément.",
        signification: "Penser fort.",
        contexte: "Réflexion.",
        exemple: "« J'me suis creusé les méninges pour trouver la solution. »"
    },
    {
        mot: "avoir la chienne",
        type: "expression",
        definition: "Avoir peur.",
        signification: "Être effrayé.",
        contexte: "Peur.",
        exemple: "« J'ai la chienne de sauter en parachute! »"
    },
    {
        mot: "donner du lousse",
        type: "expression",
        definition: "Donner du mou, de la marge.",
        signification: "Être plus permissif.",
        contexte: "Flexibilité.",
        exemple: "« Donne-moi du lousse, j'finis bientôt! »"
    },
    {
        mot: "avoir du front tout le tour de la tête",
        type: "expression",
        definition: "Être effronté, avoir du culot.",
        signification: "Être très audacieux.",
        contexte: "Culot.",
        exemple: "« Y'a du front tout le tour de la tête de demander ça! »"
    },
    {
        mot: "être né pour un petit pain",
        type: "expression",
        definition: "Être destiné à rester pauvre.",
        signification: "Ne pas avoir d'ambition.",
        contexte: "Mentalité limitante.",
        exemple: "« J'suis pas né pour un petit pain, moi! »"
    },
    {
        mot: "se prendre pour un autre",
        type: "expression",
        definition: "Être prétentieux.",
        signification: "Se croire supérieur.",
        contexte: "Arrogance.",
        exemple: "« Y se prend pour un autre depuis qu'y'a eu sa promotion. »"
    },
    {
        mot: "c'est pas sorcier",
        type: "expression",
        definition: "C'est facile, pas compliqué.",
        signification: "Simple à comprendre.",
        contexte: "Facilité.",
        exemple: "« C'est pas sorcier, tu capables de le faire! »"
    },
    {
        mot: "parler à travers son chapeau",
        type: "expression",
        definition: "Dire n'importe quoi.",
        signification: "Parler sans savoir.",
        contexte: "Critique.",
        exemple: "« Y parle à travers son chapeau, y connaît rien là-dedans! »"
    },
    {
        mot: "avoir les yeux plus grands que la panse",
        type: "expression",
        definition: "Se servir plus qu'on peut manger.",
        signification: "Être trop gourmand.",
        contexte: "Nourriture.",
        exemple: "« T'as les yeux plus grands que la panse! »"
    },
    {
        mot: "se compter les cheveux",
        type: "expression",
        definition: "Se préoccuper de petits détails inutiles.",
        signification: "Perdre son temps sur des détails.",
        contexte: "Futilité.",
        exemple: "« Arrête de te compter les cheveux pis fais-le! »"
    },
    {
        mot: "partir en peur",
        type: "expression",
        definition: "S'emballer, s'exciter excessivement.",
        signification: "S'enthousiasmer trop vite.",
        contexte: "Réaction excessive.",
        exemple: "« Pars pas en peur, c'est juste une idée! »"
    },
    {
        mot: "avoir le feu au derrière",
        type: "expression",
        definition: "Être très pressé.",
        signification: "Être dans l'urgence.",
        contexte: "Empressement.",
        exemple: "« Y'a le feu au derrière, y court partout! »"
    },
    {
        mot: "se pogner le beigne",
        type: "expression",
        definition: "Ne rien faire, paresser.",
        signification: "Être inactif.",
        contexte: "Paresse.",
        exemple: "« Arrête de te pogner le beigne pis aide-moi! »"
    },
    {
        mot: "avoir les deux pieds dans la même bottine",
        type: "expression",
        definition: "Être maladroit, malhabile.",
        signification: "Manquer de coordination.",
        contexte: "Maladresse.",
        exemple: "« Y'a les deux pieds dans la même bottine, y casse tout! »"
    },

    // === 60 MOTS SUPPLÉMENTAIRES - TOUTES CATÉGORIES ===
    
    // --- SACRES ET JURONS ---
    {
        mot: "baptême",
        type: "sacre",
        definition: "Juron québécois dérivé du sacrement du baptême.",
        signification: "Exprime la frustration ou l'étonnement.",
        contexte: "Expression de colère ou surprise.",
        exemple: "« Baptême, tu m'as fait peur! »"
    },
    {
        mot: "bâtard",
        type: "sacre/insulte",
        definition: "Juron ou insulte.",
        signification: "Exprime la colère ou désigne quelqu'un de méprisable.",
        contexte: "Frustration ou insulte.",
        exemple: "« Le bâtard, y m'a coupé la route! »"
    },
    {
        mot: "mautadit",
        type: "sacre",
        definition: "Variante de 'maudit'.",
        signification: "Juron atténué.",
        contexte: "Frustration.",
        exemple: "« Mautadit que c'est compliqué! »"
    },
    {
        mot: "mosus",
        type: "sacre",
        definition: "Déformation de 'Moïse'.",
        signification: "Juron atténué.",
        contexte: "Frustration légère.",
        exemple: "« Mosus que t'es lent! »"
    },
    {
        mot: "viande à chien",
        type: "sacre/insulte",
        definition: "Expression de mépris ou de frustration.",
        signification: "Insulte ou juron.",
        contexte: "Colère.",
        exemple: "« Viande à chien, ça marche jamais! »"
    },
    {
        mot: "mautadine",
        type: "sacre",
        definition: "Version féminine atténuée de 'maudit'.",
        signification: "Juron doux.",
        contexte: "Frustration légère.",
        exemple: "« Mautadine que c'est long! »"
    },
    
    // --- INSULTES ---
    {
        mot: "sans-dessein",
        type: "insulte",
        definition: "Personne stupide, sans jugement.",
        signification: "Quelqu'un qui manque d'intelligence.",
        contexte: "Critique sévère.",
        exemple: "« Quel sans-dessein, y comprend rien! »"
    },
    {
        mot: "gnochon",
        type: "insulte",
        definition: "Idiot, imbécile.",
        signification: "Personne stupide.",
        contexte: "Insulte familière.",
        exemple: "« T'es ben gnochon de faire ça! »"
    },
    {
        mot: "taouin",
        type: "insulte",
        definition: "Niais, idiot.",
        signification: "Personne simple d'esprit.",
        contexte: "Insulte.",
        exemple: "« Arrête de faire le taouin! »"
    },
    {
        mot: "moron",
        type: "insulte",
        definition: "Idiot, imbécile.",
        signification: "De l'anglais 'moron'.",
        contexte: "Insulte directe.",
        exemple: "« T'es un vrai moron! »"
    },
    {
        mot: "cruche",
        type: "insulte",
        definition: "Personne stupide.",
        signification: "Quelqu'un de peu intelligent.",
        contexte: "Insulte.",
        exemple: "« Quelle cruche, elle comprend jamais rien! »"
    },
    {
        mot: "tata",
        type: "insulte",
        definition: "Niais, idiot.",
        signification: "Personne niaise.",
        contexte: "Insulte légère.",
        exemple: "« Fais pas ton tata! »"
    },
    
    // --- VERBES QUÉBÉCOIS ---
    {
        mot: "maganer",
        type: "verbe",
        definition: "Abîmer, user, fatiguer.",
        signification: "Endommager quelque chose ou épuiser quelqu'un.",
        contexte: "Usure ou fatigue.",
        exemple: "« Tu vas maganer ton char à rouler de même! »"
    },
    {
        mot: "barrer",
        type: "verbe",
        definition: "Verrouiller, fermer à clé.",
        signification: "Mettre le verrou.",
        contexte: "Sécurité.",
        exemple: "« Oublie pas de barrer la porte! »"
    },
    {
        mot: "débarrer",
        type: "verbe",
        definition: "Déverrouiller, ouvrir.",
        signification: "Enlever le verrou.",
        contexte: "Accès.",
        exemple: "« Débarre la porte, j'ai les mains pleines! »"
    },
    {
        mot: "beurrer",
        type: "verbe",
        definition: "Tartiner, ou flatter excessivement.",
        signification: "Mettre du beurre ou flatter.",
        contexte: "Cuisine ou manipulation.",
        exemple: "« Beurre-moi pas, j'sais ce que tu veux! »"
    },
    {
        mot: "chigner",
        type: "verbe",
        definition: "Pleurnicher, gémir.",
        signification: "Se plaindre en gémissant.",
        contexte: "Comportement enfantin.",
        exemple: "« Arrête de chigner, t'es plus un bébé! »"
    },
    {
        mot: "râler",
        type: "verbe",
        definition: "Se plaindre, rouspéter.",
        signification: "Exprimer son mécontentement.",
        contexte: "Plainte.",
        exemple: "« Y râle tout le temps pour rien. »"
    },
    {
        mot: "bougonner",
        type: "verbe",
        definition: "Grogner, maugréer.",
        signification: "Se plaindre à voix basse.",
        contexte: "Mécontentement.",
        exemple: "« Y bougonne depuis ce matin. »"
    },
    {
        mot: "zigonner",
        type: "verbe",
        definition: "Bricoler maladroitement, perdre du temps.",
        signification: "Faire quelque chose sans efficacité.",
        contexte: "Travail inefficace.",
        exemple: "« Arrête de zigonner pis fais-le comme faut! »"
    },
    {
        mot: "tripoter",
        type: "verbe",
        definition: "Toucher, manipuler.",
        signification: "Manier avec les mains.",
        contexte: "Manipulation.",
        exemple: "« Arrête de tripoter mes affaires! »"
    },
    {
        mot: "garocher",
        type: "verbe",
        definition: "Lancer, jeter.",
        signification: "Projeter quelque chose.",
        contexte: "Action de lancer.",
        exemple: "« Garoche-moi la balle! »"
    },
    
    // --- ADJECTIFS ---
    {
        mot: "croche",
        type: "adjectif",
        definition: "Tordu, malhonnête, de travers.",
        signification: "Pas droit, physiquement ou moralement.",
        contexte: "Description.",
        exemple: "« C'est croche ton affaire! »"
    },
    {
        mot: "slack",
        type: "adjectif",
        definition: "Lousse, mou, lâche.",
        signification: "Pas serré.",
        contexte: "Description physique.",
        exemple: "« Ma ceinture est trop slack. »"
    },
    {
        mot: "tight",
        type: "adjectif",
        definition: "Serré, strict, avare.",
        signification: "De l'anglais.",
        contexte: "Description.",
        exemple: "« Mon boss est tight sur les horaires. »"
    },
    {
        mot: "rushé",
        type: "adjectif",
        definition: "Pressé, stressé par le temps.",
        signification: "De l'anglais 'rushed'.",
        contexte: "Emploi du temps.",
        exemple: "« J'suis rushé, j'ai pas le temps! »"
    },
    {
        mot: "choqué",
        type: "adjectif",
        definition: "Fâché, en colère.",
        signification: "État de colère (pas surpris comme en France).",
        contexte: "Émotion.",
        exemple: "« Y'est choqué après son frère. »"
    },
    {
        mot: "tanné",
        type: "adjectif",
        definition: "Fatigué, exaspéré, en avoir marre.",
        signification: "Être las de quelque chose.",
        contexte: "Fatigue morale.",
        exemple: "« J'suis tanné de répéter! »"
    },
    {
        mot: "écoeuré",
        type: "adjectif",
        definition: "Dégoûté, exaspéré.",
        signification: "En avoir assez.",
        contexte: "Frustration extrême.",
        exemple: "« J'suis écoeuré de cette job-là! »"
    },
    {
        mot: "boqué",
        type: "adjectif",
        definition: "Buté, obstiné, bloqué.",
        signification: "Qui refuse de changer d'avis.",
        contexte: "Entêtement.",
        exemple: "« Y'est boqué, y veut rien entendre! »"
    },
    
    // --- NOMS - PERSONNES ET RELATIONS ---
    {
        mot: "mononcle",
        type: "nom masculin",
        definition: "Oncle, ou homme d'un certain âge aux idées dépassées.",
        signification: "Terme pour oncle ou péjoratif pour homme rétrograde.",
        contexte: "Famille ou critique sociale.",
        exemple: "« Y parle comme un vrai mononcle! »"
    },
    {
        mot: "matante",
        type: "nom féminin",
        definition: "Tante, ou femme aux goûts démodés.",
        signification: "Terme pour tante ou critique de goûts kitsch.",
        contexte: "Famille ou critique.",
        exemple: "« C'est décoré comme chez matante! »"
    },
    {
        mot: "pépère",
        type: "nom masculin",
        definition: "Grand-père.",
        signification: "Terme affectueux pour grand-père.",
        contexte: "Famille.",
        exemple: "« Pépère nous attend pour souper. »"
    },
    {
        mot: "mémère",
        type: "nom féminin",
        definition: "Grand-mère.",
        signification: "Terme affectueux pour grand-mère.",
        contexte: "Famille.",
        exemple: "« Mémère fait les meilleurs biscuits! »"
    },
    {
        mot: "bébé-la-la",
        type: "nom masculin",
        definition: "Personne immature, qui se plaint.",
        signification: "Quelqu'un de capricieux.",
        contexte: "Critique.",
        exemple: "« Fais pas ton bébé-la-la! »"
    },
    {
        mot: "tit-cul",
        type: "nom masculin",
        definition: "Enfant, jeune.",
        signification: "Terme familier pour un jeune.",
        contexte: "Référence à la jeunesse.",
        exemple: "« C'est juste un tit-cul, y connaît rien! »"
    },
    
    // --- NOMS - OBJETS ET CHOSES ---
    {
        mot: "bebelle",
        type: "nom féminin",
        definition: "Jouet, bibelot, babiole.",
        signification: "Objet sans grande valeur.",
        contexte: "Objets divers.",
        exemple: "« Range tes bebelles! »"
    },
    {
        mot: "cossins",
        type: "nom masculin pluriel",
        definition: "Trucs, machins, bricoles.",
        signification: "Objets divers.",
        contexte: "Désordre.",
        exemple: "« C'est quoi tous ces cossins-là? »"
    },
    {
        mot: "grément",
        type: "nom masculin",
        definition: "Équipement, attirail.",
        signification: "Ensemble d'objets nécessaires.",
        contexte: "Équipement.",
        exemple: "« As-tu tout ton grément pour la pêche? »"
    },
    {
        mot: "kit",
        type: "nom masculin",
        definition: "Ensemble, équipement complet.",
        signification: "De l'anglais.",
        contexte: "Équipement.",
        exemple: "« J'ai acheté un kit de réparation. »"
    },
    {
        mot: "stock",
        type: "nom masculin",
        definition: "Affaires, trucs, marchandise.",
        signification: "De l'anglais.",
        contexte: "Objets.",
        exemple: "« Mets ton stock dans le coffre. »"
    },
    {
        mot: "scrap",
        type: "nom féminin",
        definition: "Ferraille, rebut, déchet.",
        signification: "De l'anglais 'scrap'.",
        contexte: "Déchets.",
        exemple: "« Ce char-là, c'est de la scrap! »"
    },
    
    // --- NOMS - LIEUX ET ENDROITS ---
    {
        mot: "cabane à sucre",
        type: "nom féminin",
        definition: "Érablière où on produit le sirop d'érable.",
        signification: "Lieu traditionnel du temps des sucres.",
        contexte: "Tradition printanière.",
        exemple: "« On va à la cabane à sucre en famille! »"
    },
    {
        mot: "chalet",
        type: "nom masculin",
        definition: "Maison de campagne, résidence secondaire.",
        signification: "Lieu de vacances.",
        contexte: "Loisirs.",
        exemple: "« On passe la fin de semaine au chalet. »"
    },
    {
        mot: "cour à scrap",
        type: "nom féminin",
        definition: "Casse automobile, dépotoir.",
        signification: "Lieu où on entrepose les vieilles autos.",
        contexte: "Automobile.",
        exemple: "« Y'a trouvé la pièce à la cour à scrap. »"
    },
    {
        mot: "ruelle",
        type: "nom féminin",
        definition: "Allée derrière les maisons.",
        signification: "Passage arrière typique des villes québécoises.",
        contexte: "Urbanisme.",
        exemple: "« Les enfants jouent dans la ruelle. »"
    },
    
    // --- NOURRITURE ---
    {
        mot: "cipaille",
        type: "nom masculin",
        definition: "Pâté à étages avec viandes et pommes de terre.",
        signification: "Plat traditionnel québécois.",
        contexte: "Cuisine traditionnelle.",
        exemple: "« Ma grand-mère fait un excellent cipaille! »"
    },
    {
        mot: "ragoût de pattes",
        type: "nom masculin",
        definition: "Ragoût fait avec des pattes de porc.",
        signification: "Plat traditionnel du temps des fêtes.",
        contexte: "Noël, jour de l'An.",
        exemple: "« On mange du ragoût de pattes dans le temps des fêtes. »"
    },
    {
        mot: "cretons",
        type: "nom masculin pluriel",
        definition: "Pâté de porc haché.",
        signification: "Tartinade pour le déjeuner.",
        contexte: "Petit-déjeuner.",
        exemple: "« Du pain grillé avec des cretons, c'est bon! »"
    },
    {
        mot: "pets de sœur",
        type: "nom masculin pluriel",
        definition: "Pâtisserie roulée à la cassonade et cannelle.",
        signification: "Dessert traditionnel québécois.",
        contexte: "Dessert.",
        exemple: "« Les pets de sœur de ma mère sont les meilleurs! »"
    },
    {
        mot: "pouding chômeur",
        type: "nom masculin",
        definition: "Gâteau avec sauce au sirop d'érable.",
        signification: "Dessert québécois classique.",
        contexte: "Dessert.",
        exemple: "« Un bon pouding chômeur avec de la crème! »"
    },
    {
        mot: "Jos Louis",
        type: "nom masculin",
        definition: "Gâteau-collation au chocolat.",
        signification: "Marque populaire de gâteau emballé.",
        contexte: "Collation.",
        exemple: "« J'ai mis un Jos Louis dans ta boîte à lunch. »"
    },
    {
        mot: "May West",
        type: "nom féminin",
        definition: "Gâteau-collation similaire au Jos Louis.",
        signification: "Marque de gâteau emballé.",
        contexte: "Collation.",
        exemple: "« Je préfère les May West aux Jos Louis. »"
    },
    
    // --- ANGLICISMES COURANTS ---
    {
        mot: "checker",
        type: "verbe",
        definition: "Vérifier, regarder.",
        signification: "De l'anglais 'to check'.",
        contexte: "Vérification.",
        exemple: "« Check ça, c'est malade! »"
    },
    {
        mot: "watcher",
        type: "verbe",
        definition: "Surveiller, regarder.",
        signification: "De l'anglais 'to watch'.",
        contexte: "Surveillance.",
        exemple: "« Watch ben ça! »"
    },
    {
        mot: "focusser",
        type: "verbe",
        definition: "Se concentrer.",
        signification: "De l'anglais 'to focus'.",
        contexte: "Concentration.",
        exemple: "« Faut que je focusse sur mon travail. »"
    },
    {
        mot: "truster",
        type: "verbe",
        definition: "Faire confiance.",
        signification: "De l'anglais 'to trust'.",
        contexte: "Confiance.",
        exemple: "« Tu peux le truster, c'est mon chum. »"
    },
    {
        mot: "loader",
        type: "verbe",
        definition: "Charger (un camion, un fichier).",
        signification: "De l'anglais 'to load'.",
        contexte: "Chargement.",
        exemple: "« On a loadé le truck en 10 minutes. »"
    },
    {
        mot: "booker",
        type: "verbe",
        definition: "Réserver.",
        signification: "De l'anglais 'to book'.",
        contexte: "Réservation.",
        exemple: "« J'ai booké une table au resto. »"
    },

    // === 60 MOTS - CONJUGAISONS ET INSULTES ===
    
    // --- INSULTES QUÉBÉCOISES ---
    {
        mot: "taré",
        type: "insulte",
        definition: "Idiot, débile, fou.",
        signification: "Personne mentalement déficiente.",
        contexte: "Insulte forte.",
        exemple: "« T'es ben taré de faire ça! »"
    },
    {
        mot: "attardé",
        type: "insulte",
        definition: "Personne lente d'esprit.",
        signification: "Quelqu'un de stupide.",
        contexte: "Insulte.",
        exemple: "« Réveille, espèce d'attardé! »"
    },
    {
        mot: "colon",
        type: "insulte",
        definition: "Personne arriérée, sans classe.",
        signification: "Quelqu'un de peu raffiné.",
        contexte: "Critique de comportement.",
        exemple: "« Fais pas ton colon! »"
    },
    {
        mot: "habitant",
        type: "insulte",
        definition: "Personne rustre, non sophistiquée.",
        signification: "Terme péjoratif pour quelqu'un de campagnard.",
        contexte: "Critique sociale.",
        exemple: "« Y'a l'air d'un habitant avec son linge. »"
    },
    {
        mot: "crotté",
        type: "insulte",
        definition: "Personne sale, négligée.",
        signification: "Quelqu'un de malpropre.",
        contexte: "Critique d'hygiène.",
        exemple: "« Va te laver, t'es crotté! »"
    },
    {
        mot: "pouilleux",
        type: "insulte",
        definition: "Personne misérable, sale.",
        signification: "Quelqu'un de pauvre et négligé.",
        contexte: "Insulte méprisante.",
        exemple: "« Regarde-moi ce pouilleux! »"
    },
    {
        mot: "gratteux",
        type: "insulte",
        definition: "Personne avare, radine.",
        signification: "Quelqu'un de très économe.",
        contexte: "Critique de l'avarice.",
        exemple: "« Quel gratteux, y paye jamais rien! »"
    },
    {
        mot: "téteux",
        type: "insulte",
        definition: "Personne qui flatte pour obtenir des faveurs.",
        signification: "Lèche-bottes.",
        contexte: "Critique de comportement.",
        exemple: "« C'est un téteux, y est toujours après le boss. »"
    },
    {
        mot: "licheux",
        type: "insulte",
        definition: "Flatteur, lèche-cul.",
        signification: "Personne servile.",
        contexte: "Critique.",
        exemple: "« Arrête de faire le licheux! »"
    },
    {
        mot: "baveux",
        type: "insulte",
        definition: "Personne arrogante, qui se vante.",
        signification: "Quelqu'un de prétentieux.",
        contexte: "Critique d'attitude.",
        exemple: "« Y'est ben baveux depuis qu'y'a eu sa promotion! »"
    },
    {
        mot: "frais chié",
        type: "insulte",
        definition: "Personne prétentieuse, snob.",
        signification: "Quelqu'un qui se croit supérieur.",
        contexte: "Insulte vulgaire.",
        exemple: "« Quel frais chié, y se prend pour un autre! »"
    },
    {
        mot: "plein de marde",
        type: "insulte",
        definition: "Menteur, vantard.",
        signification: "Quelqu'un qui dit n'importe quoi.",
        contexte: "Accusation de mensonge.",
        exemple: "« T'es plein de marde, j'te crois pas! »"
    },
    {
        mot: "mange-marde",
        type: "insulte (vulgaire)",
        definition: "Insulte très grossière.",
        signification: "Terme très insultant.",
        contexte: "Insulte extrême.",
        exemple: "« Dégage, mange-marde! »"
    },
    {
        mot: "face de bœuf",
        type: "insulte",
        definition: "Personne au visage antipathique.",
        signification: "Quelqu'un de laid ou désagréable.",
        contexte: "Insulte sur l'apparence.",
        exemple: "« Regarde-moi pas avec ta face de bœuf! »"
    },
    {
        mot: "face à claques",
        type: "insulte",
        definition: "Personne au visage agaçant.",
        signification: "Quelqu'un qu'on a envie de gifler.",
        contexte: "Irritation.",
        exemple: "« Y'a une face à claques, celui-là! »"
    },
    {
        mot: "tête carrée",
        type: "insulte",
        definition: "Anglophone (terme péjoratif).",
        signification: "Terme désobligeant pour désigner un anglophone.",
        contexte: "Conflit linguistique.",
        exemple: "« C'est une tête carrée, y parle pas français. »"
    },
    {
        mot: "pissou",
        type: "insulte",
        definition: "Peureux, lâche.",
        signification: "Quelqu'un qui manque de courage.",
        contexte: "Lâcheté.",
        exemple: "« T'es ben pissou, viens te battre! »"
    },
    {
        mot: "flanc mou",
        type: "insulte",
        definition: "Personne paresseuse.",
        signification: "Quelqu'un de peu travaillant.",
        contexte: "Critique de la paresse.",
        exemple: "« Ce flanc mou-là travaille jamais! »"
    },
    {
        mot: "sans-génie",
        type: "insulte",
        definition: "Personne sans intelligence ni talent.",
        signification: "Quelqu'un de médiocre.",
        contexte: "Critique.",
        exemple: "« Quel sans-génie, y fait toujours des erreurs! »"
    },
    {
        mot: "cornichon",
        type: "insulte",
        definition: "Personne idiote, niaise.",
        signification: "Insulte légère.",
        contexte: "Moquerie.",
        exemple: "« T'es un vrai cornichon! »"
    },
    
    // --- CONJUGAISONS QUÉBÉCOISES ---
    {
        mot: "j'vas",
        type: "conjugaison",
        definition: "Je vais.",
        signification: "Forme orale de 'je vais'.",
        contexte: "Futur proche.",
        exemple: "« J'vas au dépanneur, tu veux quelque chose? »"
    },
    {
        mot: "m'as",
        type: "conjugaison",
        definition: "Je vais (forme emphatique).",
        signification: "Contraction de 'moi je vais'.",
        contexte: "Futur proche avec emphase.",
        exemple: "« M'as te montrer comment faire! »"
    },
    {
        mot: "j'suis",
        type: "conjugaison",
        definition: "Je suis.",
        signification: "Contraction orale.",
        contexte: "Verbe être.",
        exemple: "« J'suis tanné de cette job-là! »"
    },
    {
        mot: "t'es",
        type: "conjugaison",
        definition: "Tu es.",
        signification: "Contraction courante.",
        contexte: "Verbe être.",
        exemple: "« T'es-tu correct? »"
    },
    {
        mot: "y'est",
        type: "conjugaison",
        definition: "Il est.",
        signification: "Contraction orale de 'il est'.",
        contexte: "Verbe être.",
        exemple: "« Y'est parti y'a une heure. »"
    },
    {
        mot: "a l'est",
        type: "conjugaison",
        definition: "Elle est.",
        signification: "Contraction orale de 'elle est'.",
        contexte: "Verbe être.",
        exemple: "« A l'est ben fine, ta blonde! »"
    },
    {
        mot: "on est",
        type: "conjugaison",
        definition: "Nous sommes.",
        signification: "Utilisation de 'on' au lieu de 'nous'.",
        contexte: "Verbe être.",
        exemple: "« On est rendus à maison. »"
    },
    {
        mot: "sont",
        type: "conjugaison",
        definition: "Ils/Elles sont.",
        signification: "3e personne du pluriel.",
        contexte: "Verbe être.",
        exemple: "« Y sont-tu arrivés? »"
    },
    {
        mot: "j'ai-tu",
        type: "conjugaison",
        definition: "Est-ce que j'ai?",
        signification: "Question avec 'tu' interrogatif.",
        contexte: "Question.",
        exemple: "« J'ai-tu raison ou pas? »"
    },
    {
        mot: "t'as-tu",
        type: "conjugaison",
        definition: "Est-ce que tu as?",
        signification: "Question avec 'tu' interrogatif.",
        contexte: "Question.",
        exemple: "« T'as-tu fini ton travail? »"
    },
    {
        mot: "y'a-tu",
        type: "conjugaison",
        definition: "Est-ce qu'il y a? / Est-ce qu'il a?",
        signification: "Question avec 'tu' interrogatif.",
        contexte: "Question.",
        exemple: "« Y'a-tu quelqu'un icitte? »"
    },
    {
        mot: "c'est-tu",
        type: "conjugaison",
        definition: "Est-ce que c'est?",
        signification: "Question avec 'tu' interrogatif.",
        contexte: "Question.",
        exemple: "« C'est-tu vrai ça? »"
    },
    {
        mot: "j'fais",
        type: "conjugaison",
        definition: "Je fais.",
        signification: "Contraction orale.",
        contexte: "Verbe faire.",
        exemple: "« J'fais mon possible! »"
    },
    {
        mot: "j'peux",
        type: "conjugaison",
        definition: "Je peux.",
        signification: "Contraction orale.",
        contexte: "Verbe pouvoir.",
        exemple: "« J'peux pas venir à soir. »"
    },
    {
        mot: "j'veux",
        type: "conjugaison",
        definition: "Je veux.",
        signification: "Contraction orale.",
        contexte: "Verbe vouloir.",
        exemple: "« J'veux pas y aller! »"
    },
    {
        mot: "j'sais",
        type: "conjugaison",
        definition: "Je sais.",
        signification: "Contraction orale.",
        contexte: "Verbe savoir.",
        exemple: "« J'sais pas quoi faire. »"
    },
    {
        mot: "j'dis",
        type: "conjugaison",
        definition: "Je dis.",
        signification: "Contraction orale.",
        contexte: "Verbe dire.",
        exemple: "« J'dis pas le contraire! »"
    },
    {
        mot: "j'pensais",
        type: "conjugaison",
        definition: "Je pensais.",
        signification: "Imparfait contracté.",
        contexte: "Verbe penser.",
        exemple: "« J'pensais que tu venais! »"
    },
    {
        mot: "j'savais",
        type: "conjugaison",
        definition: "Je savais.",
        signification: "Imparfait contracté.",
        contexte: "Verbe savoir.",
        exemple: "« J'savais pas que t'étais là! »"
    },
    {
        mot: "j'étais",
        type: "conjugaison",
        definition: "J'étais.",
        signification: "Imparfait de être.",
        contexte: "Verbe être.",
        exemple: "« J'étais chez nous hier. »"
    },
    {
        mot: "y'était",
        type: "conjugaison",
        definition: "Il était.",
        signification: "Contraction de 'il était'.",
        contexte: "Verbe être.",
        exemple: "« Y'était pas content pantoute! »"
    },
    {
        mot: "a l'était",
        type: "conjugaison",
        definition: "Elle était.",
        signification: "Contraction de 'elle était'.",
        contexte: "Verbe être.",
        exemple: "« A l'était malade hier. »"
    },
    {
        mot: "j'aurais",
        type: "conjugaison",
        definition: "J'aurais.",
        signification: "Conditionnel de avoir.",
        contexte: "Conditionnel.",
        exemple: "« J'aurais dû rester chez nous. »"
    },
    {
        mot: "j'serais",
        type: "conjugaison",
        definition: "Je serais.",
        signification: "Conditionnel de être.",
        contexte: "Conditionnel.",
        exemple: "« J'serais venu si j'avais su! »"
    },
    {
        mot: "y'aurait",
        type: "conjugaison",
        definition: "Il y aurait / Il aurait.",
        signification: "Conditionnel.",
        contexte: "Conditionnel.",
        exemple: "« Y'aurait fallu me le dire avant! »"
    },
    {
        mot: "ça s'peut-tu",
        type: "conjugaison/expression",
        definition: "Est-ce que ça se peut?",
        signification: "Question d'incrédulité.",
        contexte: "Étonnement.",
        exemple: "« Ça s'peut-tu d'être aussi niaiseux! »"
    },
    {
        mot: "ça m'tente",
        type: "conjugaison",
        definition: "J'ai envie, ça me dit.",
        signification: "Avoir envie de faire quelque chose.",
        contexte: "Désir.",
        exemple: "« Ça m'tente pas d'y aller. »"
    },
    {
        mot: "ça m'écoeure",
        type: "conjugaison",
        definition: "Ça me dégoûte, ça m'exaspère.",
        signification: "Expression de dégoût.",
        contexte: "Frustration.",
        exemple: "« Ça m'écoeure de travailler icitte! »"
    },
    {
        mot: "envoye",
        type: "conjugaison/interjection",
        definition: "Envoie! Allez! Dépêche!",
        signification: "Impératif de 'envoyer' utilisé pour encourager.",
        contexte: "Encouragement.",
        exemple: "« Envoye, grouille-toi! »"
    },
    {
        mot: "enweille",
        type: "conjugaison/interjection",
        definition: "Variante de 'envoye'.",
        signification: "Forme plus familière.",
        contexte: "Encouragement pressant.",
        exemple: "« Enweille, on n'a pas toute la journée! »"
    },
    {
        mot: "checke",
        type: "conjugaison",
        definition: "Regarde! Vérifie!",
        signification: "Impératif de 'checker'.",
        contexte: "Ordre de regarder.",
        exemple: "« Checke ça, c'est malade! »"
    },
    {
        mot: "watche",
        type: "conjugaison",
        definition: "Regarde! Surveille!",
        signification: "Impératif de 'watcher'.",
        contexte: "Ordre de surveiller.",
        exemple: "« Watche ben ça! »"
    },
    {
        mot: "droppe",
        type: "conjugaison",
        definition: "Laisse tomber! Dépose!",
        signification: "Impératif de 'dropper'.",
        contexte: "Ordre de lâcher.",
        exemple: "« Droppe-moi au coin de la rue. »"
    },
    {
        mot: "slacke",
        type: "conjugaison",
        definition: "Ralentis! Relâche!",
        signification: "Impératif de 'slacker'.",
        contexte: "Ordre de ralentir.",
        exemple: "« Slacke un peu, t'en fais trop! »"
    },
    {
        mot: "cruise",
        type: "conjugaison",
        definition: "Se promène, flâne.",
        signification: "De l'anglais 'to cruise'.",
        contexte: "Déplacement tranquille.",
        exemple: "« On cruise sur la Main à soir. »"
    },
    {
        mot: "chill",
        type: "conjugaison",
        definition: "Relaxe, détends-toi.",
        signification: "Impératif de 'chiller'.",
        contexte: "Détente.",
        exemple: "« Chill, c'est pas grave! »"
    },
    {
        mot: "freak",
        type: "conjugaison",
        definition: "Panique, s'énerve.",
        signification: "De l'anglais 'to freak out'.",
        contexte: "Panique.",
        exemple: "« Y freak ben raide! »"
    },
    {
        mot: "rush",
        type: "conjugaison",
        definition: "Se dépêcher, presser.",
        signification: "De l'anglais 'to rush'.",
        contexte: "Empressement.",
        exemple: "« Rush pas, on a le temps. »"
    },
    {
        mot: "feel",
        type: "conjugaison/verbe",
        definition: "Ressentir, avoir envie.",
        signification: "De l'anglais 'to feel'.",
        contexte: "Émotion ou envie.",
        exemple: "« J'feel pas ça à soir. »"
    },
    {
        mot: "skip",
        type: "conjugaison",
        definition: "Sauter, éviter.",
        signification: "De l'anglais 'to skip'.",
        contexte: "Évitement.",
        exemple: "« On skip le party à soir. »"
    },

    // === 60 MOTS - VERBES, ADJECTIFS, SYNONYMES ET INSULTES ===
    
    // --- VERBES QUÉBÉCOIS ---
    {
        mot: "achaler",
        type: "verbe",
        definition: "Ennuyer, déranger, importuner.",
        signification: "Agacer quelqu'un.",
        contexte: "Dérangement.",
        exemple: "« Arrête de m'achaler, j'suis occupé! »"
    },
    {
        mot: "badtripper",
        type: "verbe",
        definition: "Angoisser, faire une mauvaise expérience.",
        signification: "De l'anglais 'bad trip'.",
        contexte: "Anxiété.",
        exemple: "« Y badtrippe depuis ce matin. »"
    },
    {
        mot: "clencher",
        type: "verbe",
        definition: "Battre, surpasser, vaincre.",
        signification: "Gagner contre quelqu'un.",
        contexte: "Compétition.",
        exemple: "« On les a clenchés 5 à 2! »"
    },
    {
        mot: "décrisser",
        type: "verbe (vulgaire)",
        definition: "Partir rapidement, dégager.",
        signification: "S'en aller vite.",
        contexte: "Départ brusque.",
        exemple: "« Décrisse de ma face! »"
    },
    {
        mot: "écrapoutir",
        type: "verbe",
        definition: "Écraser complètement, aplatir.",
        signification: "Réduire en bouillie.",
        contexte: "Destruction.",
        exemple: "« J'ai écrapoutis une bibitte avec mon pied. »"
    },
    {
        mot: "enfirouaper",
        type: "verbe",
        definition: "Tromper, arnaquer, embobiner.",
        signification: "Duper quelqu'un habilement.",
        contexte: "Arnaque.",
        exemple: "« Y s'est fait enfirouaper par le vendeur. »"
    },
    {
        mot: "foirer",
        type: "verbe",
        definition: "Échouer, rater, ne pas fonctionner.",
        signification: "Mal tourner.",
        contexte: "Échec.",
        exemple: "« Mon plan a foiré. »"
    },
    {
        mot: "gosser",
        type: "verbe",
        definition: "Bricoler, sculpter, ou énerver.",
        signification: "Travailler le bois ou agacer.",
        contexte: "Bricolage ou irritation.",
        exemple: "« Arrête de me gosser! »"
    },
    {
        mot: "jaser",
        type: "verbe",
        definition: "Parler, discuter, bavarder.",
        signification: "Converser de manière informelle.",
        contexte: "Conversation.",
        exemple: "« On va jaser autour d'un café. »"
    },
    {
        mot: "magasiner",
        type: "verbe",
        definition: "Faire du shopping, faire les boutiques.",
        signification: "Faire des achats.",
        contexte: "Commerce.",
        exemple: "« On va magasiner au centre d'achat. »"
    },
    {
        mot: "matcher",
        type: "verbe",
        definition: "Correspondre, aller ensemble.",
        signification: "De l'anglais 'to match'.",
        contexte: "Compatibilité.",
        exemple: "« Tes souliers matchent pas avec ta chemise. »"
    },
    {
        mot: "mêler",
        type: "verbe",
        definition: "Confondre, embrouiller.",
        signification: "Créer de la confusion.",
        contexte: "Confusion.",
        exemple: "« Tu me mêles avec tes explications! »"
    },
    {
        mot: "placoter",
        type: "verbe",
        definition: "Bavarder, potiner.",
        signification: "Parler de tout et de rien.",
        contexte: "Conversation légère.",
        exemple: "« On a placoté pendant des heures. »"
    },
    {
        mot: "péter",
        type: "verbe",
        definition: "Casser, exploser, ou se vanter.",
        signification: "Briser ou faire le fanfaron.",
        contexte: "Destruction ou vantardise.",
        exemple: "« Y s'est pété la gueule! »"
    },
    {
        mot: "sacrer",
        type: "verbe",
        definition: "Jurer, blasphémer, ou jeter.",
        signification: "Utiliser des sacres ou lancer.",
        contexte: "Jurons ou action de jeter.",
        exemple: "« Y sacre comme un charretier! »"
    },
    {
        mot: "slacker",
        type: "verbe",
        definition: "Ralentir, relâcher, paresser.",
        signification: "De l'anglais 'to slack'.",
        contexte: "Ralentissement.",
        exemple: "« Slacke la pédale, on va trop vite! »"
    },
    {
        mot: "switcher",
        type: "verbe",
        definition: "Changer, permuter.",
        signification: "De l'anglais 'to switch'.",
        contexte: "Changement.",
        exemple: "« J'ai switché de job le mois passé. »"
    },
    {
        mot: "varger",
        type: "verbe",
        definition: "Frapper fort, cogner.",
        signification: "Donner des coups.",
        contexte: "Violence.",
        exemple: "« Y vargeait dans le mur! »"
    },
    {
        mot: "virer",
        type: "verbe",
        definition: "Tourner, devenir, ou renvoyer.",
        signification: "Changer de direction ou d'état.",
        contexte: "Changement.",
        exemple: "« Y'a viré fou! »"
    },
    {
        mot: "zigner",
        type: "verbe",
        definition: "Hésiter, tergiverser.",
        signification: "Ne pas se décider.",
        contexte: "Indécision.",
        exemple: "« Arrête de zigner pis décide-toi! »"
    },
    
    // --- ADJECTIFS QUÉBÉCOIS ---
    {
        mot: "achalant",
        type: "adjectif",
        definition: "Énervant, agaçant.",
        signification: "Qui dérange.",
        contexte: "Irritation.",
        exemple: "« T'es ben achalant à matin! »"
    },
    {
        mot: "amanchée",
        type: "adjectif",
        definition: "Arrangée, bricolée, accoutrée.",
        signification: "Mal agencée ou habillée.",
        contexte: "Apparence.",
        exemple: "« T'es ben mal amanchée aujourd'hui! »"
    },
    {
        mot: "badlucké",
        type: "adjectif",
        definition: "Malchanceux.",
        signification: "Qui n'a pas de chance.",
        contexte: "Malchance.",
        exemple: "« Pauvre lui, y'est badlucké! »"
    },
    {
        mot: "barré",
        type: "adjectif",
        definition: "Verrouillé, fermé à clé.",
        signification: "Sous verrou.",
        contexte: "Sécurité.",
        exemple: "« La porte est barrée. »"
    },
    {
        mot: "bête",
        type: "adjectif",
        definition: "De mauvaise humeur, désagréable.",
        signification: "Antipathique.",
        contexte: "Attitude.",
        exemple: "« Y'est bête ce matin! »"
    },
    {
        mot: "cassé",
        type: "adjectif",
        definition: "Sans argent, fauché.",
        signification: "N'avoir plus d'argent.",
        contexte: "Finances.",
        exemple: "« J'suis cassé, j'ai plus une cenne! »"
    },
    {
        mot: "chaud",
        type: "adjectif",
        definition: "Ivre, saoul.",
        signification: "Sous l'effet de l'alcool.",
        contexte: "Alcool.",
        exemple: "« Y'était chaud à la fête. »"
    },
    {
        mot: "correct",
        type: "adjectif",
        definition: "Bien, acceptable, d'accord.",
        signification: "Satisfaisant.",
        contexte: "Approbation.",
        exemple: "« C'est correct, t'inquiète pas. »"
    },
    {
        mot: "croché",
        type: "adjectif",
        definition: "Malhonnête, tordu.",
        signification: "Qui manque d'intégrité.",
        contexte: "Moralité.",
        exemple: "« C'est un gars croché, fais attention! »"
    },
    {
        mot: "écœurant",
        type: "adjectif",
        definition: "Dégoûtant ou extraordinaire.",
        signification: "Répugnant ou impressionnant.",
        contexte: "Dégoût ou admiration.",
        exemple: "« C'est écœurant bon! »"
    },
    {
        mot: "épeurant",
        type: "adjectif",
        definition: "Effrayant, qui fait peur.",
        signification: "Terrifiant.",
        contexte: "Peur.",
        exemple: "« C'est épeurant ce film-là! »"
    },
    {
        mot: "fatigant",
        type: "adjectif",
        definition: "Énervant, agaçant.",
        signification: "Qui fatigue moralement.",
        contexte: "Irritation.",
        exemple: "« T'es fatigant avec tes questions! »"
    },
    {
        mot: "flyé",
        type: "adjectif",
        definition: "Excentrique, fou, original.",
        signification: "Qui sort de l'ordinaire.",
        contexte: "Originalité.",
        exemple: "« Y'est flyé ce gars-là! »"
    },
    {
        mot: "fucké",
        type: "adjectif (vulgaire)",
        definition: "Brisé, dérangé, fou.",
        signification: "En mauvais état ou étrange.",
        contexte: "État problématique.",
        exemple: "« C'est fucké ce qui s'est passé! »"
    },
    {
        mot: "gêné",
        type: "adjectif",
        definition: "Timide, mal à l'aise.",
        signification: "Qui manque d'assurance.",
        contexte: "Timidité.",
        exemple: "« Sois pas gêné, sers-toi! »"
    },
    {
        mot: "lucky",
        type: "adjectif",
        definition: "Chanceux.",
        signification: "De l'anglais 'lucky'.",
        contexte: "Chance.",
        exemple: "« T'es lucky d'avoir eu cette job! »"
    },
    {
        mot: "niaiseux",
        type: "adjectif",
        definition: "Stupide, idiot, niais.",
        signification: "Qui manque d'intelligence.",
        contexte: "Critique.",
        exemple: "« C'est niaiseux de faire ça! »"
    },
    {
        mot: "poqué",
        type: "adjectif",
        definition: "Abîmé, endommagé, amoché.",
        signification: "En mauvais état.",
        contexte: "Usure.",
        exemple: "« Mon char est poqué. »"
    },
    {
        mot: "straight",
        type: "adjectif",
        definition: "Honnête, direct, correct.",
        signification: "De l'anglais.",
        contexte: "Honnêteté.",
        exemple: "« C'est un gars straight. »"
    },
    {
        mot: "weird",
        type: "adjectif",
        definition: "Bizarre, étrange.",
        signification: "De l'anglais.",
        contexte: "Étrangeté.",
        exemple: "« C'est weird son affaire! »"
    },
    
    // --- SYNONYMES QUÉBÉCOIS ---
    {
        mot: "char",
        type: "nom masculin (synonyme)",
        definition: "Voiture, auto, automobile.",
        signification: "Synonyme québécois de voiture.",
        contexte: "Transport.",
        exemple: "« J'ai lavé mon char en fin de semaine. »"
    },
    {
        mot: "blonde",
        type: "nom féminin (synonyme)",
        definition: "Petite amie, copine.",
        signification: "Synonyme de petite amie (peu importe la couleur des cheveux).",
        contexte: "Relations.",
        exemple: "« Ma blonde pis moi on sort à soir. »"
    },
    {
        mot: "chum",
        type: "nom masculin (synonyme)",
        definition: "Petit ami, ami, copain.",
        signification: "Synonyme de copain ou petit ami.",
        contexte: "Relations.",
        exemple: "« C'est mon chum d'enfance. »"
    },
    {
        mot: "fin de semaine",
        type: "nom féminin (synonyme)",
        definition: "Week-end.",
        signification: "Synonyme français de week-end.",
        contexte: "Temps.",
        exemple: "« On se voit en fin de semaine? »"
    },
    {
        mot: "icitte",
        type: "adverbe (synonyme)",
        definition: "Ici.",
        signification: "Prononciation québécoise de 'ici'.",
        contexte: "Lieu.",
        exemple: "« Viens icitte! »"
    },
    {
        mot: "à cause que",
        type: "conjonction (synonyme)",
        definition: "Parce que.",
        signification: "Synonyme oral de 'parce que'.",
        contexte: "Explication.",
        exemple: "« J'suis resté à cause que y pleuvait. »"
    },
    {
        mot: "asteure",
        type: "adverbe (synonyme)",
        definition: "Maintenant, à cette heure.",
        signification: "Synonyme de 'maintenant'.",
        contexte: "Temps.",
        exemple: "« Qu'est-ce qu'on fait asteure? »"
    },
    {
        mot: "pantoute",
        type: "adverbe (synonyme)",
        definition: "Pas du tout.",
        signification: "Négation forte.",
        contexte: "Négation.",
        exemple: "« J'aime pas ça pantoute! »"
    },
    {
        mot: "ben",
        type: "adverbe (synonyme)",
        definition: "Bien, très.",
        signification: "Contraction de 'bien'.",
        contexte: "Intensificateur.",
        exemple: "« C'est ben correct! »"
    },
    {
        mot: "tuseul",
        type: "adverbe (synonyme)",
        definition: "Tout seul.",
        signification: "Contraction de 'tout seul'.",
        contexte: "Solitude.",
        exemple: "« Y'a fait ça tuseul. »"
    },
    
    // --- INSULTES SUPPLÉMENTAIRES ---
    {
        mot: "toton",
        type: "insulte",
        definition: "Idiot, imbécile.",
        signification: "Personne stupide.",
        contexte: "Insulte légère.",
        exemple: "« T'es un vrai toton! »"
    },
    {
        mot: "zouf",
        type: "insulte",
        definition: "Idiot, niais.",
        signification: "Personne ridicule.",
        contexte: "Insulte.",
        exemple: "« Fais pas ton zouf! »"
    },
    {
        mot: "pas de classe",
        type: "insulte",
        definition: "Personne vulgaire, sans éducation.",
        signification: "Qui manque de raffinement.",
        contexte: "Critique sociale.",
        exemple: "« Y'est pas de classe, celui-là! »"
    },
    {
        mot: "grand slack",
        type: "insulte",
        definition: "Personne grande et maladroite.",
        signification: "Dégingandé, gauche.",
        contexte: "Moquerie physique.",
        exemple: "« Regarde le grand slack qui sait pas où mettre ses bras! »"
    },
    {
        mot: "tête de pioche",
        type: "insulte",
        definition: "Personne têtue, bornée.",
        signification: "Quelqu'un d'entêté.",
        contexte: "Obstination.",
        exemple: "« Quelle tête de pioche, y veut rien comprendre! »"
    },
    {
        mot: "grand fanal",
        type: "insulte",
        definition: "Personne grande et niaise.",
        signification: "Grand dadais.",
        contexte: "Moquerie.",
        exemple: "« Regarde-moi ce grand fanal! »"
    },
    {
        mot: "grand niaiseux",
        type: "insulte",
        definition: "Idiot de grande taille ou grand idiot.",
        signification: "Insulte combinée.",
        contexte: "Insulte.",
        exemple: "« Grand niaiseux, t'as encore oublié! »"
    },
    {
        mot: "maudit innocent",
        type: "insulte",
        definition: "Espèce d'imbécile.",
        signification: "Insulte forte.",
        contexte: "Colère.",
        exemple: "« Maudit innocent, regarde ce que t'as fait! »"
    },
    {
        mot: "branleux",
        type: "insulte",
        definition: "Personne qui hésite, qui ne se décide pas.",
        signification: "Indécis chronique.",
        contexte: "Critique.",
        exemple: "« Arrête de faire le branleux pis décide-toi! »"
    },
    {
        mot: "chiâleux",
        type: "insulte",
        definition: "Personne qui se plaint sans cesse.",
        signification: "Râleur chronique.",
        contexte: "Critique.",
        exemple: "« Quel chiâleux, y'est jamais content! »"
    },

    // === 80 MOTS SUPPLÉMENTAIRES - TOUTES CATÉGORIES ===
    
    // --- SACRES ET VARIANTES ---
    {
        mot: "câlique",
        type: "sacre",
        definition: "Variante adoucie de 'câlice'.",
        signification: "Juron atténué.",
        contexte: "Frustration.",
        exemple: "« Câlique que c'est compliqué! »"
    },
    {
        mot: "tabarnouche",
        type: "sacre",
        definition: "Variante adoucie de 'tabarnak'.",
        signification: "Juron atténué.",
        contexte: "Surprise ou frustration.",
        exemple: "« Tabarnouche, j'ai oublié mes clés! »"
    },
    {
        mot: "tabarouette",
        type: "sacre",
        definition: "Variante très adoucie de 'tabarnak'.",
        signification: "Juron léger.",
        contexte: "Étonnement.",
        exemple: "« Tabarouette, t'es déjà là? »"
    },
    {
        mot: "torrieu",
        type: "sacre",
        definition: "Variante de 'tort à Dieu'.",
        signification: "Ancien juron.",
        contexte: "Juron rural.",
        exemple: "« Torrieu, c'est pas possible! »"
    },
    {
        mot: "verrat",
        type: "sacre",
        definition: "Juron dérivé du mot 'verrat' (porc mâle).",
        signification: "Expression de frustration.",
        contexte: "Colère.",
        exemple: "« En verrat que c'est long! »"
    },
    {
        mot: "sacrament",
        type: "sacre",
        definition: "Juron dérivé de 'sacrement'.",
        signification: "Expression de colère.",
        contexte: "Frustration intense.",
        exemple: "« Sacrament, tu m'as fait peur! »"
    },
    {
        mot: "cimonaque",
        type: "sacre",
        definition: "Variante de 'ciboire' combiné à 'simoniaque'.",
        signification: "Juron intense.",
        contexte: "Colère.",
        exemple: "« Cimonaque que t'es lent! »"
    },
    {
        mot: "saint-ciboire",
        type: "sacre",
        definition: "Combinaison de 'saint' et 'ciboire'.",
        signification: "Juron intensifié.",
        contexte: "Exclamation.",
        exemple: "« Saint-ciboire, regarde-moi ça! »"
    },
    
    // --- INSULTES COLORÉES ---
    {
        mot: "grand insignifiant",
        type: "insulte",
        definition: "Personne inutile et stupide.",
        signification: "Insulte forte.",
        contexte: "Mépris.",
        exemple: "« Grand insignifiant, tu sers à rien! »"
    },
    {
        mot: "épais de la yeule",
        type: "insulte (vulgaire)",
        definition: "Personne très stupide.",
        signification: "Insulte vulgaire intense.",
        contexte: "Colère.",
        exemple: "« T'es épais de la yeule, toi! »"
    },
    {
        mot: "trou de cul",
        type: "insulte (vulgaire)",
        definition: "Personne détestable.",
        signification: "Insulte vulgaire.",
        contexte: "Mépris.",
        exemple: "« Quel trou de cul celui-là! »"
    },
    {
        mot: "face de rat",
        type: "insulte",
        definition: "Personne au visage désagréable ou sournoise.",
        signification: "Insulte sur l'apparence ou le caractère.",
        contexte: "Moquerie.",
        exemple: "« Regarde-moi cette face de rat! »"
    },
    {
        mot: "maquereau",
        type: "insulte",
        definition: "Proxénète ou personne méprisable.",
        signification: "Insulte grave.",
        contexte: "Accusation.",
        exemple: "« C'est un maquereau, ce gars-là! »"
    },
    {
        mot: "guidoune",
        type: "insulte (vulgaire)",
        definition: "Femme de mœurs légères.",
        signification: "Terme très péjoratif pour une femme.",
        contexte: "Insulte sexiste.",
        exemple: "« Y sort avec une guidoune. »"
    },
    {
        mot: "plottes",
        type: "insulte (vulgaire)",
        definition: "Terme vulgaire pour désigner les femmes.",
        signification: "Insulte très grossière.",
        contexte: "Langage vulgaire.",
        exemple: "« Y pense juste aux plottes. »"
    },
    {
        mot: "péteux de broue",
        type: "insulte",
        definition: "Vantard, fanfaron.",
        signification: "Quelqu'un qui se vante.",
        contexte: "Critique.",
        exemple: "« C'est un péteux de broue, y fait juste parler! »"
    },
    {
        mot: "maudit chieux",
        type: "insulte (vulgaire)",
        definition: "Personne peureuse ou chiante.",
        signification: "Insulte vulgaire.",
        contexte: "Mépris.",
        exemple: "« Maudit chieux, tu fais juste te plaindre! »"
    },
    {
        mot: "chien sale",
        type: "insulte",
        definition: "Personne méprisable.",
        signification: "Insulte intense.",
        contexte: "Colère.",
        exemple: "« T'es un chien sale d'avoir fait ça! »"
    },
    {
        mot: "enfant de chienne",
        type: "insulte (vulgaire)",
        definition: "Équivalent de 'fils de pute'.",
        signification: "Insulte très forte.",
        contexte: "Colère extrême.",
        exemple: "« Enfant de chienne, t'as pas fait ça! »"
    },
    {
        mot: "maudite tête de cochon",
        type: "insulte",
        definition: "Personne très têtue.",
        signification: "Quelqu'un d'entêté.",
        contexte: "Obstination.",
        exemple: "« Maudite tête de cochon, écoute-moi donc! »"
    },
    
    // --- VERBES QUÉBÉCOIS ---
    {
        mot: "ambitionner",
        type: "verbe",
        definition: "Abuser, exagérer, en demander trop.",
        signification: "Profiter de la situation.",
        contexte: "Abus.",
        exemple: "« Ambitionne pas sur le pain béni! »"
    },
    {
        mot: "bardasser",
        type: "verbe",
        definition: "Faire du bruit, remuer, secouer.",
        signification: "Manipuler bruyamment.",
        contexte: "Bruit.",
        exemple: "« Arrête de bardasser dans la cuisine! »"
    },
    {
        mot: "brasser",
        type: "verbe",
        definition: "Remuer, mélanger, secouer.",
        signification: "Agiter ou disputer.",
        contexte: "Mouvement.",
        exemple: "« Brasse la sauce pour pas qu'a colle! »"
    },
    {
        mot: "caller",
        type: "verbe",
        definition: "Appeler, téléphoner, commander.",
        signification: "De l'anglais 'to call'.",
        contexte: "Communication.",
        exemple: "« Faut caller le plombier. »"
    },
    {
        mot: "chauffer",
        type: "verbe",
        definition: "Conduire un véhicule.",
        signification: "Terme québécois pour conduire.",
        contexte: "Transport.",
        exemple: "« Qui c'est qui chauffe à soir? »"
    },
    {
        mot: "cruiser",
        type: "verbe",
        definition: "Draguer, flirter.",
        signification: "De l'anglais 'to cruise'.",
        contexte: "Séduction.",
        exemple: "« Y cruise toutes les filles au bar. »"
    },
    {
        mot: "domper",
        type: "verbe",
        definition: "Laisser tomber, abandonner, larguer.",
        signification: "De l'anglais 'to dump'.",
        contexte: "Rupture.",
        exemple: "« A l'a dompé son chum hier. »"
    },
    {
        mot: "flusher",
        type: "verbe",
        definition: "Jeter, renvoyer, se débarrasser.",
        signification: "De l'anglais 'to flush'.",
        contexte: "Élimination.",
        exemple: "« Y s'est fait flusher de sa job. »"
    },
    {
        mot: "foxer",
        type: "verbe",
        definition: "Sécher les cours, faire l'école buissonnière.",
        signification: "Ne pas aller en classe.",
        contexte: "École.",
        exemple: "« Y foxe l'école aujourd'hui. »"
    },
    {
        mot: "freaker",
        type: "verbe",
        definition: "Paniquer, s'énerver.",
        signification: "De l'anglais 'to freak out'.",
        contexte: "Anxiété.",
        exemple: "« Y freake à chaque examen. »"
    },
    {
        mot: "gâcher",
        type: "verbe",
        definition: "Gaspiller, abîmer.",
        signification: "Détériorer inutilement.",
        contexte: "Gaspillage.",
        exemple: "« Gâche pas ta nourriture! »"
    },
    {
        mot: "gosser",
        type: "verbe",
        definition: "Sculpter le bois ou énerver quelqu'un.",
        signification: "Travailler ou irriter.",
        contexte: "Bricolage ou agacement.",
        exemple: "« Y gosse du bois sur la galerie. »"
    },
    {
        mot: "lâcher",
        type: "verbe",
        definition: "Arrêter, abandonner, libérer.",
        signification: "Cesser de tenir.",
        contexte: "Abandon.",
        exemple: "« Lâche-moi! »"
    },
    {
        mot: "moffer",
        type: "verbe",
        definition: "Rater, manquer, échouer.",
        signification: "De l'anglais 'to muff'.",
        contexte: "Erreur.",
        exemple: "« Y'a moffé la puck! »"
    },
    {
        mot: "parker",
        type: "verbe",
        definition: "Stationner, garer.",
        signification: "De l'anglais 'to park'.",
        contexte: "Stationnement.",
        exemple: "« Parke-toi icitte. »"
    },
    {
        mot: "pitcher",
        type: "verbe",
        definition: "Lancer, jeter, présenter.",
        signification: "De l'anglais 'to pitch'.",
        contexte: "Lancer.",
        exemple: "« Pitche-moi la balle! »"
    },
    {
        mot: "plugger",
        type: "verbe",
        definition: "Brancher, connecter.",
        signification: "De l'anglais 'to plug'.",
        contexte: "Électricité.",
        exemple: "« Plugge ton cell, y'est mort. »"
    },
    {
        mot: "rusher",
        type: "verbe",
        definition: "Se dépêcher, presser.",
        signification: "De l'anglais 'to rush'.",
        contexte: "Empressement.",
        exemple: "« Faut que je rushe pour finir. »"
    },
    {
        mot: "spotter",
        type: "verbe",
        definition: "Repérer, apercevoir.",
        signification: "De l'anglais 'to spot'.",
        contexte: "Observation.",
        exemple: "« J'ai spotté ton char dans le parking. »"
    },
    {
        mot: "staller",
        type: "verbe",
        definition: "Caler (moteur), bloquer.",
        signification: "De l'anglais 'to stall'.",
        contexte: "Mécanique.",
        exemple: "« Mon char a stallé au feu rouge. »"
    },
    {
        mot: "stocker",
        type: "verbe",
        definition: "Entreposer, ranger.",
        signification: "De l'anglais 'to stock'.",
        contexte: "Rangement.",
        exemple: "« On va stocker ça dans le garage. »"
    },
    {
        mot: "toffer",
        type: "verbe",
        definition: "Endurer, résister, tenir le coup.",
        signification: "De l'anglais 'tough'.",
        contexte: "Résistance.",
        exemple: "« J'suis pas capable de toffer ce job-là! »"
    },
    {
        mot: "tripper",
        type: "verbe",
        definition: "Aimer beaucoup, être passionné.",
        signification: "De l'anglais 'to trip'.",
        contexte: "Enthousiasme.",
        exemple: "« Je trippe sur la musique québécoise! »"
    },
    
    // --- ADJECTIFS ET DESCRIPTIONS ---
    {
        mot: "bourré",
        type: "adjectif",
        definition: "Très ivre, saoul.",
        signification: "Sous l'effet de l'alcool.",
        contexte: "Alcool.",
        exemple: "« Y'était bourré à la fête. »"
    },
    {
        mot: "blême",
        type: "adjectif",
        definition: "Très pâle.",
        signification: "Sans couleur.",
        contexte: "Apparence.",
        exemple: "« T'es ben blême, tu files-tu? »"
    },
    {
        mot: "brûlé",
        type: "adjectif",
        definition: "Épuisé, fini, cramé.",
        signification: "À bout de forces.",
        contexte: "Fatigue.",
        exemple: "« J'suis brûlé, j'ai besoin de vacances. »"
    },
    {
        mot: "capoté",
        type: "adjectif",
        definition: "Fou, délirant, passionné.",
        signification: "Très enthousiaste ou dérangé.",
        contexte: "Émotion intense.",
        exemple: "« Y'est capoté sur les chars! »"
    },
    {
        mot: "chialeux",
        type: "adjectif",
        definition: "Qui se plaint constamment.",
        signification: "Personne râleuse.",
        contexte: "Critique.",
        exemple: "« T'es ben chialeux à matin! »"
    },
    {
        mot: "cocombre",
        type: "adjectif (familier)",
        definition: "Idiot, niais.",
        signification: "Terme léger pour quelqu'un de stupide.",
        contexte: "Moquerie.",
        exemple: "« Fais pas le cocombre! »"
    },
    {
        mot: "déconnecté",
        type: "adjectif",
        definition: "Qui n'est pas au courant, dépassé.",
        signification: "Déconnecté de la réalité.",
        contexte: "Ignorance.",
        exemple: "« Y'est complètement déconnecté! »"
    },
    {
        mot: "dépareillé",
        type: "adjectif",
        definition: "Qui n'a pas son pareil, unique.",
        signification: "Incomparable.",
        contexte: "Compliment.",
        exemple: "« T'es dépareillé, toi! »"
    },
    {
        mot: "écœuré",
        type: "adjectif",
        definition: "Dégoûté, exaspéré, en avoir assez.",
        signification: "Être à bout.",
        contexte: "Frustration.",
        exemple: "« J'suis écœuré de cette situation! »"
    },
    {
        mot: "énervé",
        type: "adjectif",
        definition: "Excité, agité, stressé.",
        signification: "État de nervosité.",
        contexte: "Agitation.",
        exemple: "« Les enfants sont énervés avant Noël. »"
    },
    {
        mot: "fendant",
        type: "adjectif",
        definition: "Prétentieux, arrogant.",
        signification: "Qui se croit supérieur.",
        contexte: "Critique d'attitude.",
        exemple: "« Y'est fendant depuis qu'y'a réussi. »"
    },
    {
        mot: "fin",
        type: "adjectif",
        definition: "Gentil, aimable.",
        signification: "D'une grande gentillesse.",
        contexte: "Compliment.",
        exemple: "« T'es ben fin de m'aider! »"
    },
    {
        mot: "grognon",
        type: "adjectif",
        definition: "De mauvaise humeur, grincheux.",
        signification: "Qui grogne facilement.",
        contexte: "Humeur.",
        exemple: "« Y'est grognon quand y'a pas dormi. »"
    },
    {
        mot: "magané",
        type: "adjectif",
        definition: "Abîmé, fatigué, usé.",
        signification: "En mauvais état.",
        contexte: "Usure.",
        exemple: "« Mon dos est magané. »"
    },
    {
        mot: "mal engueulé",
        type: "adjectif (vulgaire)",
        definition: "Qui parle mal, vulgaire.",
        signification: "Qui utilise un langage grossier.",
        contexte: "Langage.",
        exemple: "« Y'est mal engueulé, celui-là! »"
    },
    {
        mot: "nervé",
        type: "adjectif",
        definition: "Énervé, irrité.",
        signification: "État de tension.",
        contexte: "Émotion.",
        exemple: "« J'suis nervé après mon boss. »"
    },
    {
        mot: "paqueté",
        type: "adjectif",
        definition: "Très ivre.",
        signification: "Saoul.",
        contexte: "Alcool.",
        exemple: "« Y'était paqueté comme un œuf! »"
    },
    {
        mot: "pogné",
        type: "adjectif",
        definition: "Coincé, inhibé, ou attrapé.",
        signification: "Bloqué physiquement ou mentalement.",
        contexte: "État.",
        exemple: "« Y'est pogné dans ses valeurs. »"
    },
    {
        mot: "ratoureux",
        type: "adjectif",
        definition: "Rusé, malicieux.",
        signification: "Qui fait des tours.",
        contexte: "Personnalité.",
        exemple: "« Y'est ratoureux, fais attention! »"
    },
    {
        mot: "ratoté",
        type: "adjectif",
        definition: "Ridé, flétri, ratatiné.",
        signification: "Qui a rétréci.",
        contexte: "Apparence.",
        exemple: "« Les pommes sont toutes ratotées. »"
    },
    {
        mot: "sauté",
        type: "adjectif",
        definition: "Fou, dérangé.",
        signification: "Qui a l'esprit dérangé.",
        contexte: "Folie.",
        exemple: "« T'es sauté de faire ça! »"
    },
    {
        mot: "smatte",
        type: "adjectif",
        definition: "Intelligent, gentil, correct.",
        signification: "De l'anglais 'smart'.",
        contexte: "Compliment.",
        exemple: "« T'es ben smatte, merci! »"
    },
    {
        mot: "smoked",
        type: "adjectif",
        definition: "Très fatigué, épuisé.",
        signification: "De l'anglais.",
        contexte: "Fatigue extrême.",
        exemple: "« J'suis smoked après ma journée. »"
    },
    {
        mot: "snowbird",
        type: "nom masculin/féminin",
        definition: "Québécois qui passe l'hiver en Floride.",
        signification: "Oiseau migrateur (humain).",
        contexte: "Voyage.",
        exemple: "« Mes parents sont des snowbirds. »"
    },
    {
        mot: "zélé",
        type: "adjectif",
        definition: "Trop enthousiaste, qui en fait trop.",
        signification: "Excessivement appliqué.",
        contexte: "Travail.",
        exemple: "« Y'est trop zélé, y fatigue tout le monde. »"
    },

    // === 100 MOTS SUPPLÉMENTAIRES - TOUTES CATÉGORIES ===
    
    // --- SACRES ET JURONS ---
    {
        mot: "saint-sacrament",
        type: "sacre",
        definition: "Juron religieux intense.",
        signification: "Expression de grande frustration.",
        contexte: "Colère.",
        exemple: "« Saint-sacrament, j'en ai assez! »"
    },
    {
        mot: "ciboulot",
        type: "sacre",
        definition: "Variante adoucie de 'ciboire'.",
        signification: "Juron léger.",
        contexte: "Surprise.",
        exemple: "« Ciboulot, t'as failli me faire tomber! »"
    },
    {
        mot: "tabarnache",
        type: "sacre",
        definition: "Variante adoucie de 'tabarnak'.",
        signification: "Juron atténué.",
        contexte: "Frustration.",
        exemple: "« Tabarnache, j'ai encore oublié! »"
    },
    {
        mot: "crisse",
        type: "sacre",
        definition: "Dérivé de 'Christ'.",
        signification: "Juron courant.",
        contexte: "Frustration ou intensificateur.",
        exemple: "« Crisse que c'est bon! »"
    },
    {
        mot: "estifi",
        type: "sacre",
        definition: "Variante de 'ostie' et 'estifit'.",
        signification: "Juron.",
        contexte: "Colère.",
        exemple: "« Estifi que t'es gossant! »"
    },
    {
        mot: "cibole",
        type: "sacre",
        definition: "Variante adoucie de 'ciboire'.",
        signification: "Juron léger.",
        contexte: "Exclamation.",
        exemple: "« Cibole, y mouille fort! »"
    },
    
    // --- INSULTES ---
    {
        mot: "tarla",
        type: "insulte",
        definition: "Idiot, imbécile.",
        signification: "Personne stupide.",
        contexte: "Insulte.",
        exemple: "« Quel tarla celui-là! »"
    },
    {
        mot: "twit",
        type: "insulte",
        definition: "Idiot, niais.",
        signification: "De l'anglais 'twit'.",
        contexte: "Insulte légère.",
        exemple: "« T'es un vrai twit! »"
    },
    {
        mot: "mongol",
        type: "insulte (offensante)",
        definition: "Terme très offensant pour quelqu'un de stupide.",
        signification: "Insulte grave et discriminatoire.",
        contexte: "Insulte très péjorative.",
        exemple: "« (Terme très offensant à éviter) »"
    },
    {
        mot: "nono",
        type: "insulte",
        definition: "Idiot, niais.",
        signification: "Personne naïve ou stupide.",
        contexte: "Insulte légère.",
        exemple: "« Fais pas ton nono! »"
    },
    {
        mot: "codinde",
        type: "insulte",
        definition: "Personne stupide, dinde.",
        signification: "Insulte légère.",
        contexte: "Moquerie.",
        exemple: "« T'es une vraie codinde! »"
    },
    {
        mot: "morviat",
        type: "insulte",
        definition: "Jeune insolent, morveux.",
        signification: "Gamin mal élevé.",
        contexte: "Critique.",
        exemple: "« P'tit morviat, respecte tes aînés! »"
    },
    {
        mot: "agrès",
        type: "insulte",
        definition: "Personne désagréable ou de mauvaise vie.",
        signification: "Individu peu recommandable.",
        contexte: "Mépris.",
        exemple: "« C'est un bel agrès celui-là! »"
    },
    {
        mot: "snoroune",
        type: "insulte",
        definition: "Femme prétentieuse ou de mœurs légères.",
        signification: "Terme péjoratif.",
        contexte: "Insulte.",
        exemple: "« C'est une vraie snoroune! »"
    },
    
    // --- VERBES ---
    {
        mot: "accoter",
        type: "verbe",
        definition: "Égaler, rivaliser avec, ou vivre en concubinage.",
        signification: "Être à la hauteur de quelqu'un.",
        contexte: "Comparaison.",
        exemple: "« Personne peut l'accoter au hockey. »"
    },
    {
        mot: "amarrer",
        type: "verbe",
        definition: "Attacher, nouer.",
        signification: "Terme maritime devenu courant.",
        contexte: "Attache.",
        exemple: "« Amarre tes souliers! »"
    },
    {
        mot: "badrer",
        type: "verbe",
        definition: "Déranger, ennuyer.",
        signification: "De l'anglais 'to bother'.",
        contexte: "Dérangement.",
        exemple: "« Badre-moi pas avec ça! »"
    },
    {
        mot: "bécoter",
        type: "verbe",
        definition: "Donner des petits baisers.",
        signification: "Embrasser affectueusement.",
        contexte: "Affection.",
        exemple: "« Y arrête pas de bécoter sa blonde. »"
    },
    {
        mot: "boquer",
        type: "verbe",
        definition: "Bouder, s'entêter.",
        signification: "Refuser de coopérer.",
        contexte: "Entêtement.",
        exemple: "« Arrête de boquer pis viens souper! »"
    },
    {
        mot: "botcher",
        type: "verbe",
        definition: "Bâcler, mal faire.",
        signification: "De l'anglais 'to botch'.",
        contexte: "Travail mal fait.",
        exemple: "« Y'a botché la job! »"
    },
    {
        mot: "boucaner",
        type: "verbe",
        definition: "Fumer (viande) ou produire de la fumée.",
        signification: "Émettre de la fumée.",
        contexte: "Fumée.",
        exemple: "« Le poêle boucane, ouvre la fenêtre! »"
    },
    {
        mot: "brailler",
        type: "verbe",
        definition: "Pleurer fort, sangloter.",
        signification: "Pleurer bruyamment.",
        contexte: "Pleurs.",
        exemple: "« Le bébé braille depuis une heure. »"
    },
    {
        mot: "caler",
        type: "verbe",
        definition: "Enfoncer, boire d'un trait, ou perdre ses cheveux.",
        signification: "Plusieurs sens selon le contexte.",
        contexte: "Divers.",
        exemple: "« Y cale une bière en 5 secondes. »"
    },
    {
        mot: "chicoter",
        type: "verbe",
        definition: "Tracasser, préoccuper.",
        signification: "Inquiéter légèrement.",
        contexte: "Souci.",
        exemple: "« Y'a quelque chose qui me chicote. »"
    },
    {
        mot: "clairer",
        type: "verbe",
        definition: "Congédier, vider, dégager.",
        signification: "De l'anglais 'to clear'.",
        contexte: "Renvoi.",
        exemple: "« Y s'est fait clairer de sa job. »"
    },
    {
        mot: "crosser",
        type: "verbe (vulgaire)",
        definition: "Arnaquer, tromper.",
        signification: "Frauder quelqu'un.",
        contexte: "Arnaque.",
        exemple: "« Y m'a crossé de 100 piasses! »"
    },
    {
        mot: "débarquer",
        type: "verbe",
        definition: "Descendre, arriver à l'improviste.",
        signification: "Sortir d'un véhicule ou arriver.",
        contexte: "Arrivée.",
        exemple: "« Y'a débarqué chez nous sans avertir. »"
    },
    {
        mot: "écarter",
        type: "verbe",
        definition: "Égarer, perdre son chemin.",
        signification: "Se perdre.",
        contexte: "Orientation.",
        exemple: "« J'me suis écarté dans le bois. »"
    },
    {
        mot: "éjarrer",
        type: "verbe",
        definition: "Écarter les jambes, s'écraser.",
        signification: "S'affaler.",
        contexte: "Position.",
        exemple: "« Y'est éjarré sur le sofa. »"
    },
    {
        mot: "embarquer",
        type: "verbe",
        definition: "Monter dans un véhicule.",
        signification: "Entrer dans un moyen de transport.",
        contexte: "Transport.",
        exemple: "« Embarque dans le char, on part! »"
    },
    {
        mot: "enfarger",
        type: "verbe",
        definition: "Trébucher, faire tomber.",
        signification: "Perdre l'équilibre.",
        contexte: "Chute.",
        exemple: "« J'me suis enfargé dans le tapis. »"
    },
    {
        mot: "frencher",
        type: "verbe",
        definition: "Embrasser avec la langue.",
        signification: "French kiss.",
        contexte: "Amour.",
        exemple: "« Y l'a frenchée au party. »"
    },
    {
        mot: "grafigner",
        type: "verbe",
        definition: "Égratigner, griffer.",
        signification: "Faire une égratignure.",
        contexte: "Blessure légère.",
        exemple: "« Le chat m'a grafigné. »"
    },
    {
        mot: "grouiller",
        type: "verbe",
        definition: "Se dépêcher, bouger.",
        signification: "Se hâter.",
        contexte: "Empressement.",
        exemple: "« Grouille-toi, on va être en retard! »"
    },
    {
        mot: "lutter",
        type: "verbe",
        definition: "Se battre, faire de la lutte.",
        signification: "Combattre physiquement.",
        contexte: "Combat.",
        exemple: "« Les enfants luttent dans le salon. »"
    },
    {
        mot: "minoucher",
        type: "verbe",
        definition: "Caresser, câliner.",
        signification: "Faire des caresses.",
        contexte: "Affection.",
        exemple: "« A passe son temps à minoucher son chat. »"
    },
    {
        mot: "mouver",
        type: "verbe",
        definition: "Déménager, bouger.",
        signification: "De l'anglais 'to move'.",
        contexte: "Déménagement.",
        exemple: "« On mouve le mois prochain. »"
    },
    {
        mot: "niquer",
        type: "verbe",
        definition: "Faire un clin d'œil (Québec), différent du sens français.",
        signification: "Cligner de l'œil.",
        contexte: "Geste.",
        exemple: "« Y m'a niqué de l'œil. »"
    },
    {
        mot: "peinturer",
        type: "verbe",
        definition: "Peindre.",
        signification: "Appliquer de la peinture.",
        contexte: "Travaux.",
        exemple: "« J'ai peinturé ma chambre en bleu. »"
    },
    {
        mot: "pitonner",
        type: "verbe",
        definition: "Appuyer sur des boutons, zapper.",
        signification: "Changer de chaîne avec la télécommande.",
        contexte: "Télévision.",
        exemple: "« Arrête de pitonner, choisis une chaîne! »"
    },
    {
        mot: "ploguer",
        type: "verbe",
        definition: "Brancher, connecter.",
        signification: "Variante de 'plugger'.",
        contexte: "Électricité.",
        exemple: "« Plogue la lampe! »"
    },
    {
        mot: "pogner",
        type: "verbe",
        definition: "Attraper, prendre, avoir du succès.",
        signification: "Saisir ou être populaire.",
        contexte: "Divers.",
        exemple: "« Y pogne avec les filles. »"
    },
    {
        mot: "revirer",
        type: "verbe",
        definition: "Retourner, renverser.",
        signification: "Tourner de l'autre côté.",
        contexte: "Mouvement.",
        exemple: "« Revire la crêpe! »"
    },
    {
        mot: "snoozer",
        type: "verbe",
        definition: "Faire une sieste, remettre l'alarme.",
        signification: "De l'anglais 'to snooze'.",
        contexte: "Sommeil.",
        exemple: "« J'ai snoozé trois fois à matin. »"
    },
    {
        mot: "tataouiner",
        type: "verbe",
        definition: "Hésiter, tourner en rond.",
        signification: "Perdre son temps.",
        contexte: "Indécision.",
        exemple: "« Arrête de tataouiner! »"
    },
    {
        mot: "tchéquer",
        type: "verbe",
        definition: "Vérifier, regarder.",
        signification: "Variante de 'checker'.",
        contexte: "Vérification.",
        exemple: "« Tchèque si la porte est barrée. »"
    },
    {
        mot: "zigonner",
        type: "verbe",
        definition: "Bricoler sans but, perdre du temps.",
        signification: "Faire n'importe quoi.",
        contexte: "Inefficacité.",
        exemple: "« Arrête de zigonner avec ça! »"
    },
    
    // --- ADJECTIFS ---
    {
        mot: "achalé",
        type: "adjectif",
        definition: "Agacé, importuné.",
        signification: "État d'irritation.",
        contexte: "Émotion.",
        exemple: "« J'suis achalé par le bruit. »"
    },
    {
        mot: "affalé",
        type: "adjectif",
        definition: "Effondré, avachi.",
        signification: "Position relâchée.",
        contexte: "Posture.",
        exemple: "« Y'est affalé sur le divan. »"
    },
    {
        mot: "attriqué",
        type: "adjectif",
        definition: "Habillé, vêtu.",
        signification: "Accoutré.",
        contexte: "Vêtements.",
        exemple: "« T'es ben attriqué pour une corvée! »"
    },
    {
        mot: "avenant",
        type: "adjectif",
        definition: "Agréable, accueillant.",
        signification: "De bonne compagnie.",
        contexte: "Personnalité.",
        exemple: "« Y'est ben avenant avec le monde. »"
    },
    {
        mot: "bavasseux",
        type: "adjectif",
        definition: "Bavard, qui parle trop.",
        signification: "Qui bavasse.",
        contexte: "Communication.",
        exemple: "« T'es ben bavasseux à soir! »"
    },
    {
        mot: "bienvenu",
        type: "adjectif",
        definition: "De rien (réponse à merci).",
        signification: "Formule de politesse.",
        contexte: "Politesse.",
        exemple: "« Merci! - Bienvenu! »"
    },
    {
        mot: "blanc",
        type: "adjectif",
        definition: "Très ivre.",
        signification: "Complètement saoul.",
        contexte: "Alcool.",
        exemple: "« Y'était blanc comme un drap! »"
    },
    {
        mot: "boutte",
        type: "adjectif/nom",
        definition: "Bout, extrémité, ou excellent.",
        signification: "Fin ou superlatif.",
        contexte: "Intensité.",
        exemple: "« C'est le boutte! (c'est le comble!) »"
    },
    {
        mot: "broche à foin",
        type: "adjectif",
        definition: "Mal fait, amateur.",
        signification: "De mauvaise qualité.",
        contexte: "Critique.",
        exemple: "« C'est une job broche à foin! »"
    },
    {
        mot: "chétif",
        type: "adjectif",
        definition: "Maigre, faible, chiche.",
        signification: "De constitution fragile.",
        contexte: "Apparence.",
        exemple: "« Y'est chétif, ce p'tit-là. »"
    },
    {
        mot: "chicanier",
        type: "adjectif",
        definition: "Qui aime se disputer.",
        signification: "Querelleur.",
        contexte: "Personnalité.",
        exemple: "« Y'est chicanier, y cherche toujours la bataille. »"
    },
    {
        mot: "cotillon",
        type: "adjectif",
        definition: "Qui court après les femmes.",
        signification: "Coureur de jupons.",
        contexte: "Comportement.",
        exemple: "« C'est un vieux cotillon. »"
    },
    {
        mot: "crampant",
        type: "adjectif",
        definition: "Très drôle, hilarant.",
        signification: "Qui fait rire aux éclats.",
        contexte: "Humour.",
        exemple: "« Y'est crampant ce gars-là! »"
    },
    {
        mot: "déparaillé",
        type: "adjectif",
        definition: "Dépareillé, qui ne va pas ensemble.",
        signification: "Mal assorti.",
        contexte: "Apparence.",
        exemple: "« Tes bas sont déparaillés. »"
    },
    {
        mot: "effoiré",
        type: "adjectif",
        definition: "Effondré, avachi.",
        signification: "Affalé mollement.",
        contexte: "Position.",
        exemple: "« Y'est effoiré dans le lazy-boy. »"
    },
    {
        mot: "endimanché",
        type: "adjectif",
        definition: "Habillé chic, comme pour le dimanche.",
        signification: "Bien vêtu.",
        contexte: "Vêtements.",
        exemple: "« T'es ben endimanché pour aller au dépanneur! »"
    },
    {
        mot: "épivardé",
        type: "adjectif",
        definition: "Dispersé, éparpillé, énervé.",
        signification: "Dans tous les sens.",
        contexte: "Désordre.",
        exemple: "« Les enfants sont épivardés à soir! »"
    },
    {
        mot: "étriqué",
        type: "adjectif",
        definition: "Serré, trop petit.",
        signification: "Qui manque d'ampleur.",
        contexte: "Vêtements.",
        exemple: "« Ton chandail est étriqué. »"
    },
    {
        mot: "grichoux",
        type: "adjectif",
        definition: "Grincheux, de mauvaise humeur.",
        signification: "Maussade.",
        contexte: "Humeur.",
        exemple: "« Y'est grichoux le matin. »"
    },
    {
        mot: "grippette",
        type: "adjectif",
        definition: "Avare, radin.",
        signification: "Qui ne veut pas dépenser.",
        contexte: "Argent.",
        exemple: "« Sois pas grippette, paye ta tournée! »"
    },
    
    // --- EXPRESSIONS ---
    {
        mot: "avoir les yeux dans la graisse de bines",
        type: "expression",
        definition: "Avoir les yeux vitreux, fatigués.",
        signification: "Être très fatigué ou sous l'effet de l'alcool.",
        contexte: "Fatigue.",
        exemple: "« T'as les yeux dans la graisse de bines, va te coucher! »"
    },
    {
        mot: "attache ta tuque",
        type: "expression",
        definition: "Prépare-toi, ça va brasser.",
        signification: "Avertissement que quelque chose d'intense arrive.",
        contexte: "Avertissement.",
        exemple: "« Attache ta tuque, ça va être rough! »"
    },
    {
        mot: "c'est pas la mer à boire",
        type: "expression",
        definition: "Ce n'est pas si difficile.",
        signification: "Relativiser une difficulté.",
        contexte: "Encouragement.",
        exemple: "« C'est pas la mer à boire, tu vas y arriver! »"
    },
    {
        mot: "cogner des clous",
        type: "expression",
        definition: "S'endormir, piquer du nez.",
        signification: "Être très fatigué.",
        contexte: "Fatigue.",
        exemple: "« Y cogne des clous devant la TV. »"
    },
    {
        mot: "être aux oiseaux",
        type: "expression",
        definition: "Être très heureux.",
        signification: "État de grande joie.",
        contexte: "Bonheur.",
        exemple: "« A l'est aux oiseaux depuis qu'a l'a eu la job! »"
    },
    {
        mot: "faut le faire",
        type: "expression",
        definition: "C'est incroyable, c'est quelque chose.",
        signification: "Marquer l'étonnement.",
        contexte: "Surprise.",
        exemple: "« Faut le faire pour être aussi niaiseux! »"
    },
    {
        mot: "manger une volée",
        type: "expression",
        definition: "Se faire battre.",
        signification: "Recevoir une raclée.",
        contexte: "Bagarre.",
        exemple: "« Y'a mangé une volée au hockey. »"
    },
    {
        mot: "ne pas être sorti du bois",
        type: "expression",
        definition: "Ne pas être tiré d'affaire.",
        signification: "Avoir encore des problèmes.",
        contexte: "Difficulté.",
        exemple: "« On n'est pas sortis du bois avec ce projet! »"
    },
    {
        mot: "partir sur une balloune",
        type: "expression",
        definition: "Se saouler, faire la fête.",
        signification: "Boire beaucoup.",
        contexte: "Fête.",
        exemple: "« Y'est parti sur une balloune hier soir. »"
    },
    {
        mot: "perdre la carte",
        type: "expression",
        definition: "Devenir confus, perdre la tête.",
        signification: "Ne plus comprendre.",
        contexte: "Confusion.",
        exemple: "« Y perd la carte des fois. »"
    },
    {
        mot: "peter la balloune",
        type: "expression",
        definition: "Échouer au test d'ivressomètre.",
        signification: "Être en état d'ébriété au volant.",
        contexte: "Conduite.",
        exemple: "« Y s'est fait arrêter, y'a pété la balloune. »"
    },
    {
        mot: "se faire passer un québec",
        type: "expression",
        definition: "Se faire tromper, arnaquer.",
        signification: "Variante de 'se faire passer un sapin'.",
        contexte: "Arnaque.",
        exemple: "« J'me suis fait passer un québec! »"
    },
    {
        mot: "se garrocher",
        type: "expression",
        definition: "Se précipiter, se lancer.",
        signification: "Aller vite.",
        contexte: "Empressement.",
        exemple: "« Y s'est garroché sur la poutine! »"
    },
    {
        mot: "se paqueter la fraise",
        type: "expression",
        definition: "Se saouler.",
        signification: "Boire beaucoup.",
        contexte: "Alcool.",
        exemple: "« Y s'est paqueté la fraise au party. »"
    },
    {
        mot: "tirer la plogue",
        type: "expression",
        definition: "Abandonner, arrêter.",
        signification: "Mettre fin à quelque chose.",
        contexte: "Abandon.",
        exemple: "« J'ai tiré la plogue sur ce projet. »"
    },
    {
        mot: "virer de bord",
        type: "expression",
        definition: "Faire demi-tour, changer d'avis.",
        signification: "Retourner sur ses pas.",
        contexte: "Changement.",
        exemple: "« Vire de bord, on a oublié le lunch! »"
    },
    
    // --- NOMS DIVERS ---
    {
        mot: "bazou",
        type: "nom masculin",
        definition: "Vieille voiture en mauvais état.",
        signification: "Tacot.",
        contexte: "Automobile.",
        exemple: "« Y roule encore avec son vieux bazou! »"
    },
    {
        mot: "bizoune",
        type: "nom féminin",
        definition: "Pénis (langage enfantin).",
        signification: "Terme enfantin.",
        contexte: "Anatomie.",
        exemple: "« Cache ta bizoune! »"
    },
    {
        mot: "champlure",
        type: "nom féminin",
        definition: "Robinet.",
        signification: "Terme ancien pour robinet.",
        contexte: "Plomberie.",
        exemple: "« Ferme la champlure, tu gaspilles l'eau! »"
    },
    {
        mot: "déjeuner",
        type: "nom masculin",
        definition: "Petit-déjeuner (repas du matin).",
        signification: "Premier repas de la journée.",
        contexte: "Repas.",
        exemple: "« Qu'est-ce que tu manges pour déjeuner? »"
    },
    {
        mot: "dîner",
        type: "nom masculin",
        definition: "Repas du midi (et non du soir).",
        signification: "Repas de midi au Québec.",
        contexte: "Repas.",
        exemple: "« On dîne-tu ensemble? »"
    },
    {
        mot: "souper",
        type: "nom masculin",
        definition: "Repas du soir.",
        signification: "Dernier repas de la journée.",
        contexte: "Repas.",
        exemple: "« Le souper est prêt! »"
    },
    {
        mot: "efface",
        type: "nom féminin",
        definition: "Gomme à effacer.",
        signification: "Outil pour effacer.",
        contexte: "École.",
        exemple: "« Passe-moi ton efface. »"
    },
    {
        mot: "finfine",
        type: "nom féminin",
        definition: "Menthe, bonbon à la menthe.",
        signification: "Fine herbe ou bonbon.",
        contexte: "Confiserie.",
        exemple: "« T'as-tu des finfines? »"
    },
    {
        mot: "garnotte",
        type: "nom féminin",
        definition: "Gravier, petites pierres.",
        signification: "Cailloux.",
        contexte: "Terrain.",
        exemple: "« Y'a de la garnotte dans l'entrée. »"
    },
    {
        mot: "guidoune",
        type: "nom féminin",
        definition: "Femme de mœurs légères.",
        signification: "Terme très péjoratif.",
        contexte: "Insulte.",
        exemple: "« (Terme offensant à éviter) »"
    },
    {
        mot: "lichette",
        type: "nom féminin",
        definition: "Petite quantité, petit peu.",
        signification: "Une toute petite portion.",
        contexte: "Quantité.",
        exemple: "« Donne-moi juste une lichette de sirop. »"
    },
    {
        mot: "mitaine",
        type: "nom féminin",
        definition: "Moufle, gant sans doigts séparés.",
        signification: "Protection pour les mains.",
        contexte: "Vêtements d'hiver.",
        exemple: "« Mets tes mitaines, y fait frette! »"
    },
    {
        mot: "moumoune",
        type: "nom féminin/masculin",
        definition: "Peureux, efféminé.",
        signification: "Terme péjoratif pour quelqu'un de lâche.",
        contexte: "Insulte.",
        exemple: "« Fais pas ta moumoune! »"
    },
    {
        mot: "nanane",
        type: "nom masculin",
        definition: "Bonbon, friandise.",
        signification: "Sucrerie.",
        contexte: "Confiserie.",
        exemple: "« Veux-tu un nanane? »"
    },
    {
        mot: "palette",
        type: "nom féminin",
        definition: "Incisives, dents de devant.",
        signification: "Dents.",
        contexte: "Anatomie.",
        exemple: "« Y'a perdu ses deux palettes! »"
    },
    {
        mot: "patate",
        type: "nom féminin",
        definition: "Pomme de terre.",
        signification: "Légume.",
        contexte: "Alimentation.",
        exemple: "« Des patates pilées avec le ragoût. »"
    },
    {
        mot: "poupoune",
        type: "nom féminin",
        definition: "Femme qui prend soin de son apparence.",
        signification: "Terme parfois péjoratif.",
        contexte: "Apparence.",
        exemple: "« C'est une vraie poupoune! »"
    },
    {
        mot: "sacoche",
        type: "nom féminin",
        definition: "Sac à main.",
        signification: "Accessoire féminin.",
        contexte: "Mode.",
        exemple: "« J'ai oublié ma sacoche au resto! »"
    },
    {
        mot: "suçon",
        type: "nom masculin",
        definition: "Sucette, lollipop.",
        signification: "Bonbon sur un bâton.",
        contexte: "Confiserie.",
        exemple: "« Les enfants mangent des suçons. »"
    },
    {
        mot: "vadrouille",
        type: "nom féminin",
        definition: "Serpillière, moppe.",
        signification: "Outil de nettoyage.",
        contexte: "Ménage.",
        exemple: "« Passe la vadrouille dans la cuisine. »"
    },

    // === 100 NOUVEAUX MOTS - TOUTES CATÉGORIES ===
    
    // --- NATURE ET ANIMAUX ---
    {
        mot: "achigan",
        type: "nom masculin",
        definition: "Poisson d'eau douce, type de perche.",
        signification: "Black bass.",
        contexte: "Pêche.",
        exemple: "« J'ai pogné un bel achigan au lac! »"
    },
    {
        mot: "barbotte",
        type: "nom féminin",
        definition: "Poisson-chat.",
        signification: "Poisson d'eau douce.",
        contexte: "Pêche.",
        exemple: "« On a mangé de la barbotte frite. »"
    },
    {
        mot: "bête puante",
        type: "nom féminin",
        definition: "Mouffette.",
        signification: "Animal qui dégage une odeur forte.",
        contexte: "Faune.",
        exemple: "« Y'a une bête puante en dessous du perron! »"
    },
    {
        mot: "brûlot",
        type: "nom masculin",
        definition: "Petit moustique qui pique fort.",
        signification: "Insecte piqueur.",
        contexte: "Nature.",
        exemple: "« Les brûlots sont pires que les maringouins! »"
    },
    {
        mot: "chevreuil",
        type: "nom masculin",
        definition: "Cerf de Virginie (pas le chevreuil européen).",
        signification: "Cervidé nord-américain.",
        contexte: "Chasse.",
        exemple: "« Mon père a pogné un chevreuil à la chasse. »"
    },
    {
        mot: "crapaud",
        type: "nom masculin",
        definition: "Grenouille ou crapaud.",
        signification: "Batracien.",
        contexte: "Nature.",
        exemple: "« Y'a des crapauds dans le marais. »"
    },
    {
        mot: "écureux",
        type: "nom masculin",
        definition: "Écureuil.",
        signification: "Prononciation québécoise.",
        contexte: "Faune.",
        exemple: "« Les écureux vident la mangeoire à oiseaux! »"
    },
    {
        mot: "mouche à chevreuil",
        type: "nom féminin",
        definition: "Taon.",
        signification: "Grosse mouche qui pique.",
        contexte: "Insectes.",
        exemple: "« Les mouches à chevreuil piquent en maudit! »"
    },
    {
        mot: "ouananiche",
        type: "nom féminin",
        definition: "Saumon d'eau douce.",
        signification: "Poisson du Lac Saint-Jean.",
        contexte: "Pêche.",
        exemple: "« La ouananiche du Lac-Saint-Jean est délicieuse. »"
    },
    {
        mot: "perchaude",
        type: "nom féminin",
        definition: "Perche, poisson d'eau douce.",
        signification: "Petit poisson commun.",
        contexte: "Pêche.",
        exemple: "« On pêche la perchaude sur la glace. »"
    },
    {
        mot: "picbois",
        type: "nom masculin",
        definition: "Pic-bois, pic (oiseau).",
        signification: "Oiseau qui pique le bois.",
        contexte: "Ornithologie.",
        exemple: "« Y'a un picbois qui cogne après l'arbre. »"
    },
    {
        mot: "siffleux",
        type: "nom masculin",
        definition: "Marmotte.",
        signification: "Rongeur qui siffle.",
        contexte: "Faune.",
        exemple: "« Y'a un siffleux dans le jardin. »"
    },
    {
        mot: "suisse",
        type: "nom masculin",
        definition: "Tamia rayé, petit écureuil rayé.",
        signification: "Chipmunk.",
        contexte: "Faune.",
        exemple: "« Les suisses sont cute mais y mangent mes tomates! »"
    },
    
    // --- MÉTÉO ET SAISONS ---
    {
        mot: "banc de neige",
        type: "nom masculin",
        definition: "Congère, accumulation de neige.",
        signification: "Neige accumulée par le vent.",
        contexte: "Hiver.",
        exemple: "« Le banc de neige bloque l'entrée! »"
    },
    {
        mot: "bourrasque",
        type: "nom féminin",
        definition: "Coup de vent soudain avec neige.",
        signification: "Rafale.",
        contexte: "Météo.",
        exemple: "« Une bourrasque nous a surpris. »"
    },
    {
        mot: "gadoue",
        type: "nom féminin",
        definition: "Boue, neige fondante sale.",
        signification: "Mélange de neige et de saleté.",
        contexte: "Printemps.",
        exemple: "« Y'a de la gadoue partout en ville. »"
    },
    {
        mot: "glacer",
        type: "verbe",
        definition: "Geler, devenir glacé.",
        signification: "Former de la glace.",
        contexte: "Hiver.",
        exemple: "« Le trottoir a glacé pendant la nuit. »"
    },
    {
        mot: "grésil",
        type: "nom masculin",
        definition: "Grêle fine, petits grains de glace.",
        signification: "Précipitation glacée.",
        contexte: "Météo.",
        exemple: "« Y tombe du grésil, attention c'est glissant! »"
    },
    {
        mot: "neiger à plein ciel",
        type: "expression",
        definition: "Neiger abondamment.",
        signification: "Forte chute de neige.",
        contexte: "Hiver.",
        exemple: "« Y neige à plein ciel dehors! »"
    },
    {
        mot: "noirceur",
        type: "nom féminin",
        definition: "Obscurité, nuit.",
        signification: "Quand il fait noir.",
        contexte: "Temps.",
        exemple: "« Rentre avant la noirceur. »"
    },
    {
        mot: "temps doux",
        type: "nom masculin",
        definition: "Redoux, température clémente en hiver.",
        signification: "Réchauffement temporaire.",
        contexte: "Météo.",
        exemple: "« Profite du temps doux, ça durera pas! »"
    },
    {
        mot: "verglas",
        type: "nom masculin",
        definition: "Glace qui recouvre les surfaces.",
        signification: "Couche de glace dangereuse.",
        contexte: "Hiver.",
        exemple: "« Fais attention au verglas sur les marches. »"
    },
    
    // --- NOURRITURE ET BOISSON ---
    {
        mot: "bagosse",
        type: "nom féminin",
        definition: "Alcool artisanal, moonshine.",
        signification: "Boisson alcoolisée maison.",
        contexte: "Alcool.",
        exemple: "« Mon grand-père faisait de la bagosse. »"
    },
    {
        mot: "baloné",
        type: "nom masculin",
        definition: "Mortadelle, bologna.",
        signification: "Charcuterie.",
        contexte: "Alimentation.",
        exemple: "« Un sandwich au baloné. »"
    },
    {
        mot: "blé d'Inde",
        type: "nom masculin",
        definition: "Maïs, épi de maïs.",
        signification: "Céréale.",
        contexte: "Alimentation.",
        exemple: "« On fait un épluchette de blé d'Inde! »"
    },
    {
        mot: "bloody caesar",
        type: "nom masculin",
        definition: "Cocktail avec jus de palourde et vodka.",
        signification: "Boisson typiquement canadienne.",
        contexte: "Alcool.",
        exemple: "« Un bloody caesar avec extra piment! »"
    },
    {
        mot: "canneberge",
        type: "nom féminin",
        definition: "Cranberry, atoca.",
        signification: "Petite baie rouge acidulée.",
        contexte: "Fruits.",
        exemple: "« De la sauce aux canneberges avec la dinde. »"
    },
    {
        mot: "caribou",
        type: "nom masculin",
        definition: "Boisson alcoolisée (vin rouge et alcool fort).",
        signification: "Boisson du temps des fêtes.",
        contexte: "Alcool.",
        exemple: "« On boit du caribou au carnaval. »"
    },
    {
        mot: "chiard",
        type: "nom masculin",
        definition: "Ragoût de pommes de terre et viande.",
        signification: "Plat traditionnel.",
        contexte: "Cuisine.",
        exemple: "« Ma mère fait un bon chiard. »"
    },
    {
        mot: "coke",
        type: "nom féminin",
        definition: "Coca-Cola ou toute boisson gazeuse brune.",
        signification: "Marque devenue générique.",
        contexte: "Boisson.",
        exemple: "« Veux-tu une coke? »"
    },
    {
        mot: "cornet",
        type: "nom masculin",
        definition: "Cône de crème glacée.",
        signification: "Contenant en gaufrette.",
        contexte: "Dessert.",
        exemple: "« Un cornet deux boules au chocolat! »"
    },
    {
        mot: "crémage",
        type: "nom masculin",
        definition: "Glaçage sur un gâteau.",
        signification: "Couche sucrée.",
        contexte: "Pâtisserie.",
        exemple: "« Le crémage du gâteau est trop sucré. »"
    },
    {
        mot: "fondue parmesan",
        type: "nom féminin",
        definition: "Fondue au fromage parmesan.",
        signification: "Plat chaud.",
        contexte: "Cuisine.",
        exemple: "« On fait une fondue parmesan à soir. »"
    },
    {
        mot: "gibelotte",
        type: "nom féminin",
        definition: "Ragoût de poisson des îles de Sorel.",
        signification: "Plat régional.",
        contexte: "Cuisine.",
        exemple: "« La gibelotte de Sorel est fameuse. »"
    },
    {
        mot: "gomme",
        type: "nom féminin",
        definition: "Gomme à mâcher, chewing-gum.",
        signification: "De l'anglais 'gum'.",
        contexte: "Confiserie.",
        exemple: "« T'as-tu de la gomme? »"
    },
    {
        mot: "grilled cheese",
        type: "nom masculin",
        definition: "Sandwich au fromage grillé.",
        signification: "Sandwich chaud.",
        contexte: "Cuisine.",
        exemple: "« J'me fais un grilled cheese pour dîner. »"
    },
    {
        mot: "jello",
        type: "nom masculin",
        definition: "Gélatine, gelée dessert.",
        signification: "Marque devenue générique.",
        contexte: "Dessert.",
        exemple: "« Y'a du jello aux fraises pour dessert. »"
    },
    {
        mot: "pain doré",
        type: "nom masculin",
        definition: "Pain perdu, French toast.",
        signification: "Pain trempé dans l'œuf et frit.",
        contexte: "Déjeuner.",
        exemple: "« Du pain doré avec du sirop d'érable. »"
    },
    {
        mot: "patate frite",
        type: "nom féminin",
        definition: "Frite, French fries.",
        signification: "Pomme de terre frite.",
        contexte: "Restauration.",
        exemple: "« Une poutine avec des patates frites croustillantes! »"
    },
    {
        mot: "pâté chinois",
        type: "nom masculin",
        definition: "Plat de viande hachée, maïs et purée.",
        signification: "Équivalent du shepherd's pie.",
        contexte: "Cuisine.",
        exemple: "« Ma mère fait le meilleur pâté chinois! »"
    },
    {
        mot: "rôties",
        type: "nom féminin pluriel",
        definition: "Toasts, pain grillé.",
        signification: "Tranches de pain grillées.",
        contexte: "Déjeuner.",
        exemple: "« Des rôties avec du beurre de pinottes. »"
    },
    {
        mot: "sous-marin",
        type: "nom masculin",
        definition: "Sandwich long, sub.",
        signification: "Type de sandwich.",
        contexte: "Restauration.",
        exemple: "« Un sous-marin italien all-dressed. »"
    },
    
    // --- VÊTEMENTS ET ACCESSOIRES ---
    {
        mot: "bobettes",
        type: "nom féminin pluriel",
        definition: "Sous-vêtements, caleçons.",
        signification: "Culotte ou slip.",
        contexte: "Vêtements.",
        exemple: "« Mets des bobettes propres! »"
    },
    {
        mot: "brassière",
        type: "nom féminin",
        definition: "Soutien-gorge.",
        signification: "Sous-vêtement féminin.",
        contexte: "Vêtements.",
        exemple: "« J'ai besoin d'une nouvelle brassière. »"
    },
    {
        mot: "calotte",
        type: "nom féminin",
        definition: "Casquette.",
        signification: "Chapeau à visière.",
        contexte: "Accessoires.",
        exemple: "« Mets ta calotte, y fait soleil. »"
    },
    {
        mot: "camisole",
        type: "nom féminin",
        definition: "Débardeur, camisole.",
        signification: "Haut sans manches.",
        contexte: "Vêtements.",
        exemple: "« Mets une camisole en dessous. »"
    },
    {
        mot: "capine",
        type: "nom féminin",
        definition: "Bonnet, chapeau de femme.",
        signification: "Couvre-chef.",
        contexte: "Vêtements.",
        exemple: "« Mets ta capine, y vente! »"
    },
    {
        mot: "claques",
        type: "nom féminin pluriel",
        definition: "Couvre-chaussures en caoutchouc.",
        signification: "Protection contre la neige.",
        contexte: "Chaussures.",
        exemple: "« Mets tes claques, y mouille dehors. »"
    },
    {
        mot: "coat",
        type: "nom masculin",
        definition: "Manteau.",
        signification: "De l'anglais 'coat'.",
        contexte: "Vêtements.",
        exemple: "« Mets ton coat, y fait frette! »"
    },
    {
        mot: "combine",
        type: "nom féminin",
        definition: "Sous-vêtement long, combinaison.",
        signification: "Vêtement d'hiver.",
        contexte: "Vêtements.",
        exemple: "« Y porte encore des combines l'hiver. »"
    },
    {
        mot: "coupe-vent",
        type: "nom masculin",
        definition: "Blouson léger.",
        signification: "Veste contre le vent.",
        contexte: "Vêtements.",
        exemple: "« Apporte ton coupe-vent, y vente au bord de l'eau. »"
    },
    {
        mot: "espadrilles",
        type: "nom féminin pluriel",
        definition: "Chaussures de sport, running shoes.",
        signification: "Sneakers.",
        contexte: "Chaussures.",
        exemple: "« Mets tes espadrilles pour courir. »"
    },
    {
        mot: "foulard",
        type: "nom masculin",
        definition: "Écharpe.",
        signification: "Accessoire pour le cou.",
        contexte: "Accessoires.",
        exemple: "« Mets ton foulard, y fait frette. »"
    },
    {
        mot: "jaquette",
        type: "nom féminin",
        definition: "Chemise de nuit.",
        signification: "Vêtement pour dormir.",
        contexte: "Vêtements.",
        exemple: "« Mets ta jaquette, c'est l'heure du dodo. »"
    },
    {
        mot: "kangourou",
        type: "nom masculin",
        definition: "Chandail à capuchon, hoodie.",
        signification: "Sweat à capuche.",
        contexte: "Vêtements.",
        exemple: "« J'ai acheté un nouveau kangourou. »"
    },
    {
        mot: "running",
        type: "nom masculin",
        definition: "Chaussure de course.",
        signification: "De l'anglais.",
        contexte: "Chaussures.",
        exemple: "« Mes runnings sont finis, faut j'en achète des neufs. »"
    },
    
    // --- EXPRESSIONS POPULAIRES ---
    {
        mot: "accouche qu'on baptise",
        type: "expression",
        definition: "Dépêche-toi de parler, dis ce que tu as à dire.",
        signification: "Impatience d'entendre quelque chose.",
        contexte: "Conversation.",
        exemple: "« Envoye, accouche qu'on baptise! »"
    },
    {
        mot: "avoir du bacon",
        type: "expression",
        definition: "Avoir de l'argent.",
        signification: "Être riche.",
        contexte: "Finances.",
        exemple: "« Y'a du bacon, lui! »"
    },
    {
        mot: "avoir la face longue",
        type: "expression",
        definition: "Avoir l'air triste, déprimé.",
        signification: "Expression de tristesse.",
        contexte: "Émotion.",
        exemple: "« T'as la face longue, qu'est-ce qui se passe? »"
    },
    {
        mot: "avoir le bec sucré",
        type: "expression",
        definition: "Aimer les sucreries.",
        signification: "Avoir la dent sucrée.",
        contexte: "Alimentation.",
        exemple: "« J'ai le bec sucré, j'adore le dessert! »"
    },
    {
        mot: "avoir le motton",
        type: "expression",
        definition: "Avoir une boule dans la gorge, être ému.",
        signification: "Être sur le point de pleurer.",
        contexte: "Émotion.",
        exemple: "« J'ai eu le motton quand y'a eu son diplôme. »"
    },
    {
        mot: "avoir les shakes",
        type: "expression",
        definition: "Trembler, avoir peur ou être en manque.",
        signification: "État de tremblements.",
        contexte: "Nervosité.",
        exemple: "« J'ai les shakes tellement j'suis nerveux. »"
    },
    {
        mot: "c'est tiguidou",
        type: "expression",
        definition: "C'est parfait, c'est correct.",
        signification: "Expression d'approbation.",
        contexte: "Accord.",
        exemple: "« On se voit à 8h? - C'est tiguidou! »"
    },
    {
        mot: "c'est pas fort fort",
        type: "expression",
        definition: "Ce n'est pas très bon/bien.",
        signification: "Critique légère.",
        contexte: "Évaluation.",
        exemple: "« Ton dessin c'est pas fort fort! »"
    },
    {
        mot: "donner du trouble",
        type: "expression",
        definition: "Causer des problèmes.",
        signification: "Créer des difficultés.",
        contexte: "Problèmes.",
        exemple: "« Mon char me donne du trouble. »"
    },
    {
        mot: "être aux petits oiseaux",
        type: "expression",
        definition: "Être très content.",
        signification: "État de grand bonheur.",
        contexte: "Bonheur.",
        exemple: "« A l'est aux petits oiseaux depuis qu'a l'a eu sa promotion. »"
    },
    {
        mot: "être comme un coq en pâte",
        type: "expression",
        definition: "Être choyé, vivre dans le confort.",
        signification: "Être très bien traité.",
        contexte: "Confort.",
        exemple: "« Chez sa mère, y'est comme un coq en pâte. »"
    },
    {
        mot: "faire changement",
        type: "expression",
        definition: "Pour changer, ça change de l'ordinaire.",
        signification: "Changement bienvenu.",
        contexte: "Nouveauté.",
        exemple: "« On sort au resto, pour faire changement! »"
    },
    {
        mot: "jeter un œil",
        type: "expression",
        definition: "Regarder rapidement, vérifier.",
        signification: "Coup d'œil.",
        contexte: "Observation.",
        exemple: "« J'vais jeter un œil sur tes devoirs. »"
    },
    {
        mot: "mêle-toi de tes affaires",
        type: "expression",
        definition: "Occupe-toi de ce qui te regarde.",
        signification: "Ne te mêle pas de ça.",
        contexte: "Reproche.",
        exemple: "« Mêle-toi de tes affaires, ça te regarde pas! »"
    },
    {
        mot: "mettre la pédale douce",
        type: "expression",
        definition: "Ralentir, y aller doucement.",
        signification: "Modérer ses actions.",
        contexte: "Modération.",
        exemple: "« Met la pédale douce sur le café! »"
    },
    {
        mot: "partir en lion finir en mouton",
        type: "expression",
        definition: "Commencer fort et finir faiblement.",
        signification: "Perdre son énergie.",
        contexte: "Performance.",
        exemple: "« Y'a parti en lion pis y'a fini en mouton. »"
    },
    {
        mot: "péter plus haut que le trou",
        type: "expression",
        definition: "Être prétentieux, se croire supérieur.",
        signification: "Vouloir plus que ses moyens.",
        contexte: "Arrogance.",
        exemple: "« Y pète plus haut que le trou, lui! »"
    },
    {
        mot: "prendre ça cool",
        type: "expression",
        definition: "Se détendre, ne pas s'énerver.",
        signification: "Rester calme.",
        contexte: "Attitude.",
        exemple: "« Prends ça cool, c'est pas grave. »"
    },
    {
        mot: "prendre le bord",
        type: "expression",
        definition: "S'en aller, partir.",
        signification: "Quitter un endroit.",
        contexte: "Départ.",
        exemple: "« Bon, j'prends le bord, bonne soirée! »"
    },
    {
        mot: "s'en sacrer",
        type: "expression",
        definition: "S'en ficher, s'en moquer.",
        signification: "Ne pas se préoccuper.",
        contexte: "Indifférence.",
        exemple: "« Y s'en sacre de ce que le monde pense. »"
    },
    {
        mot: "se casser la tête",
        type: "expression",
        definition: "Réfléchir intensément.",
        signification: "Se tourmenter pour trouver une solution.",
        contexte: "Réflexion.",
        exemple: "« Casse-toi pas la tête avec ça! »"
    },
    {
        mot: "se péter les bretelles",
        type: "expression",
        definition: "Se vanter, être fier de soi.",
        signification: "Montrer sa fierté.",
        contexte: "Fierté.",
        exemple: "« Y arrête pas de se péter les bretelles. »"
    },
    {
        mot: "se sucrer le bec",
        type: "expression",
        definition: "Manger des sucreries.",
        signification: "Se gâter avec du sucre.",
        contexte: "Alimentation.",
        exemple: "« On va se sucrer le bec à la cabane! »"
    },
    {
        mot: "tiens ton bout",
        type: "expression",
        definition: "Persévère, ne lâche pas.",
        signification: "Encouragement.",
        contexte: "Encouragement.",
        exemple: "« C'est tough mais tiens ton bout! »"
    },
    {
        mot: "tomber dans l'œil",
        type: "expression",
        definition: "Plaire à quelqu'un.",
        signification: "Attirer l'attention.",
        contexte: "Séduction.",
        exemple: "« A m'est tombée dans l'œil tout de suite. »"
    },
    {
        mot: "un coup parti",
        type: "expression",
        definition: "Tant qu'à y être.",
        signification: "Puisqu'on est lancé.",
        contexte: "Action.",
        exemple: "« Un coup parti, on fait le ménage au complet! »"
    },
    
    // --- ANGLICISMES COURANTS ---
    {
        mot: "canceller",
        type: "verbe",
        definition: "Annuler.",
        signification: "De l'anglais 'to cancel'.",
        contexte: "Annulation.",
        exemple: "« J'ai cancellé mon rendez-vous. »"
    },
    {
        mot: "chatter",
        type: "verbe",
        definition: "Bavarder en ligne.",
        signification: "De l'anglais 'to chat'.",
        contexte: "Internet.",
        exemple: "« On chatte sur Facebook. »"
    },
    {
        mot: "dealer",
        type: "verbe",
        definition: "Gérer, s'occuper de.",
        signification: "De l'anglais 'to deal'.",
        contexte: "Gestion.",
        exemple: "« J'suis pas capable de dealer avec ça. »"
    },
    {
        mot: "faker",
        type: "verbe",
        definition: "Simuler, faire semblant.",
        signification: "De l'anglais 'to fake'.",
        contexte: "Tromperie.",
        exemple: "« Y'a faké être malade. »"
    },
    {
        mot: "figurer",
        type: "verbe",
        definition: "Comprendre, déduire.",
        signification: "De l'anglais 'to figure out'.",
        contexte: "Compréhension.",
        exemple: "« J'arrive pas à figurer c'est quoi le problème. »"
    },
    {
        mot: "forwarder",
        type: "verbe",
        definition: "Transférer un courriel.",
        signification: "De l'anglais 'to forward'.",
        contexte: "Courriel.",
        exemple: "« Forwarde-moi le message. »"
    },
    {
        mot: "joiner",
        type: "verbe",
        definition: "Rejoindre, se joindre.",
        signification: "De l'anglais 'to join'.",
        contexte: "Participation.",
        exemple: "« Tu veux-tu joiner notre équipe? »"
    },
    {
        mot: "kicker",
        type: "verbe",
        definition: "Botter, donner un coup de pied.",
        signification: "De l'anglais 'to kick'.",
        contexte: "Action.",
        exemple: "« Y s'est fait kicker dehors du bar. »"
    },
    {
        mot: "timer",
        type: "verbe",
        definition: "Chronométrer.",
        signification: "De l'anglais 'to time'.",
        contexte: "Temps.",
        exemple: "« Time-moi, j'veux voir si j'suis vite. »"
    },
    {
        mot: "updater",
        type: "verbe",
        definition: "Mettre à jour.",
        signification: "De l'anglais 'to update'.",
        contexte: "Informatique.",
        exemple: "« Faut updater ton ordi. »"
    },

    // === 100 MOTS SIMPLES - VERBES, ADJECTIFS, SYNONYMES ===
    
    // --- VERBES COURANTS ---
    {
        mot: "achaler",
        type: "verbe",
        definition: "Ennuyer, agacer, déranger.",
        signification: "Importuner quelqu'un.",
        contexte: "Dérangement.",
        exemple: "« Arrête de m'achaler! »"
    },
    {
        mot: "barrer",
        type: "verbe",
        definition: "Verrouiller, fermer à clé.",
        signification: "Fermer une porte à clé.",
        contexte: "Sécurité.",
        exemple: "« Barre la porte avant de partir. »"
    },
    {
        mot: "débarrer",
        type: "verbe",
        definition: "Déverrouiller, ouvrir.",
        signification: "Contraire de barrer.",
        contexte: "Action.",
        exemple: "« Débarre la porte, j'arrive! »"
    },
    {
        mot: "barouetter",
        type: "verbe",
        definition: "Promener en voiture, transporter.",
        signification: "Balader quelqu'un.",
        contexte: "Transport.",
        exemple: "« J'ai barouetté les enfants toute la journée. »"
    },
    {
        mot: "beurrer",
        type: "verbe",
        definition: "Étaler du beurre, ou salir.",
        signification: "Tartiner ou faire des dégâts.",
        contexte: "Cuisine/Dégâts.",
        exemple: "« Beurre ton pain. » ou « Y'a beurré le plancher. »"
    },
    {
        mot: "boquer",
        type: "verbe",
        definition: "Bouder, refuser obstinément.",
        signification: "Être têtu.",
        contexte: "Comportement.",
        exemple: "« Arrête de boquer pis viens souper! »"
    },
    {
        mot: "bretter",
        type: "verbe",
        definition: "Perdre son temps, niaiser.",
        signification: "Traîner, lambiner.",
        contexte: "Temps.",
        exemple: "« Arrête de bretter pis finis ton travail! »"
    },
    {
        mot: "chialer",
        type: "verbe",
        definition: "Se plaindre, râler.",
        signification: "Rouspéter constamment.",
        contexte: "Plainte.",
        exemple: "« Y fait juste chialer! »"
    },
    {
        mot: "clairer",
        type: "verbe",
        definition: "Nettoyer, faire le ménage.",
        signification: "Débarrasser, ranger.",
        contexte: "Ménage.",
        exemple: "« Claire ta chambre! »"
    },
    {
        mot: "cogner",
        type: "verbe",
        definition: "Frapper à la porte.",
        signification: "Toquer.",
        contexte: "Action.",
        exemple: "« Y'a quelqu'un qui cogne à porte. »"
    },
    {
        mot: "crouser",
        type: "verbe",
        definition: "Draguer, courtiser.",
        signification: "Faire la cour.",
        contexte: "Séduction.",
        exemple: "« Y crouse toutes les filles du bureau. »"
    },
    {
        mot: "décrisser",
        type: "verbe",
        definition: "Partir rapidement, dégager.",
        signification: "S'en aller vite.",
        contexte: "Départ.",
        exemple: "« Décrisse de là! »"
    },
    {
        mot: "déniaser",
        type: "verbe",
        definition: "Éduquer, dégourdir quelqu'un.",
        signification: "Rendre moins naïf.",
        contexte: "Éducation.",
        exemple: "« Faut le déniaser un peu. »"
    },
    {
        mot: "écrapoutir",
        type: "verbe",
        definition: "Écraser complètement.",
        signification: "Aplatir.",
        contexte: "Action.",
        exemple: "« Y'a écrapoutit la canette. »"
    },
    {
        mot: "enfarger",
        type: "verbe",
        definition: "Trébucher, faire tomber.",
        signification: "Faire un croc-en-jambe.",
        contexte: "Chute.",
        exemple: "« J'me suis enfargé dans le tapis. »"
    },
    {
        mot: "enweiller",
        type: "verbe",
        definition: "Allez, dépêche-toi.",
        signification: "Encourager à agir vite.",
        contexte: "Encouragement.",
        exemple: "« Enweille, on va être en retard! »"
    },
    {
        mot: "fesser",
        type: "verbe",
        definition: "Frapper fort.",
        signification: "Donner un coup.",
        contexte: "Action.",
        exemple: "« Y'a fessé dans le mur. »"
    },
    {
        mot: "flusher",
        type: "verbe",
        definition: "Tirer la chasse, ou jeter quelqu'un.",
        signification: "Éliminer, rejeter.",
        contexte: "Action.",
        exemple: "« A l'a flushé son chum. »"
    },
    {
        mot: "fouiner",
        type: "verbe",
        definition: "Fureter, chercher partout.",
        signification: "Être curieux.",
        contexte: "Curiosité.",
        exemple: "« Arrête de fouiner dans mes affaires! »"
    },
    {
        mot: "garrocher",
        type: "verbe",
        definition: "Lancer, jeter.",
        signification: "Envoyer quelque chose.",
        contexte: "Action.",
        exemple: "« Garroche-moi la balle! »"
    },
    {
        mot: "gosser",
        type: "verbe",
        definition: "Bricoler, ou agacer.",
        signification: "Travailler maladroitement ou énerver.",
        contexte: "Action/Dérangement.",
        exemple: "« Y gosse sur son projet. » ou « Arrête de me gosser! »"
    },
    {
        mot: "grafigner",
        type: "verbe",
        definition: "Égratigner, griffer.",
        signification: "Faire une éraflure.",
        contexte: "Blessure.",
        exemple: "« Le chat m'a grafigné. »"
    },
    {
        mot: "maganer",
        type: "verbe",
        definition: "Abîmer, endommager, épuiser.",
        signification: "User, fatiguer.",
        contexte: "Dégradation.",
        exemple: "« T'as magané mes outils! »"
    },
    {
        mot: "mêler",
        type: "verbe",
        definition: "Confondre, embrouiller.",
        signification: "Rendre confus.",
        contexte: "Confusion.",
        exemple: "« Tu me mêles avec tes explications. »"
    },
    {
        mot: "niaiser",
        type: "verbe",
        definition: "Perdre son temps, ou se moquer.",
        signification: "Plaisanter ou traîner.",
        contexte: "Action.",
        exemple: "« Arrête de niaiser! »"
    },
    {
        mot: "péter",
        type: "verbe",
        definition: "Casser, briser.",
        signification: "Endommager.",
        contexte: "Dégât.",
        exemple: "« J'ai pété mon cell. »"
    },
    {
        mot: "pitonner",
        type: "verbe",
        definition: "Appuyer sur des boutons, zapper.",
        signification: "Utiliser une télécommande.",
        contexte: "Technologie.",
        exemple: "« Arrête de pitonner, choisis un poste! »"
    },
    {
        mot: "placoter",
        type: "verbe",
        definition: "Bavarder, jaser.",
        signification: "Parler de tout et de rien.",
        contexte: "Conversation.",
        exemple: "« On a placoté pendant des heures. »"
    },
    {
        mot: "pogner",
        type: "verbe",
        definition: "Attraper, prendre, réussir.",
        signification: "Saisir ou avoir du succès.",
        contexte: "Action.",
        exemple: "« J'ai pogné le bus. » ou « Y pogne avec les filles. »"
    },
    {
        mot: "quêter",
        type: "verbe",
        definition: "Mendier, demander.",
        signification: "Solliciter.",
        contexte: "Demande.",
        exemple: "« Y passe son temps à quêter des lifts. »"
    },
    {
        mot: "radoter",
        type: "verbe",
        definition: "Répéter sans cesse la même chose.",
        signification: "Rabâcher.",
        contexte: "Parole.",
        exemple: "« Mon grand-père radote toujours les mêmes histoires. »"
    },
    {
        mot: "ramasser",
        type: "verbe",
        definition: "Prendre, cueillir, ou réprimander.",
        signification: "Collecter ou engueuler.",
        contexte: "Action.",
        exemple: "« Y s'est fait ramasser par son boss. »"
    },
    {
        mot: "revirer",
        type: "verbe",
        definition: "Retourner, faire demi-tour.",
        signification: "Changer de direction.",
        contexte: "Mouvement.",
        exemple: "« Revire de bord! »"
    },
    {
        mot: "sacrer",
        type: "verbe",
        definition: "Jurer, blasphémer, ou jeter.",
        signification: "Dire des sacres ou lancer.",
        contexte: "Juron/Action.",
        exemple: "« Y sacre comme un charretier. » ou « Sacre ça aux vidanges! »"
    },
    {
        mot: "slacker",
        type: "verbe",
        definition: "Ralentir, relâcher.",
        signification: "Diminuer l'effort.",
        contexte: "Travail.",
        exemple: "« Slacke un peu, tu travailles trop! »"
    },
    {
        mot: "spotler",
        type: "verbe",
        definition: "Repérer, apercevoir.",
        signification: "Remarquer quelqu'un.",
        contexte: "Observation.",
        exemple: "« J'l'ai spotté au centre d'achats. »"
    },
    {
        mot: "tanner",
        type: "verbe",
        definition: "Ennuyer, fatiguer quelqu'un.",
        signification: "Importuner.",
        contexte: "Dérangement.",
        exemple: "« Tu me tannes avec tes questions! »"
    },
    {
        mot: "toffer",
        type: "verbe",
        definition: "Endurer, tenir le coup.",
        signification: "Supporter.",
        contexte: "Endurance.",
        exemple: "« J'suis pas capable de toffer ça. »"
    },
    {
        mot: "virer",
        type: "verbe",
        definition: "Tourner, devenir.",
        signification: "Changer de direction ou d'état.",
        contexte: "Changement.",
        exemple: "« Vire à gauche. » ou « Y'a viré fou! »"
    },
    {
        mot: "zigonner",
        type: "verbe",
        definition: "Bricoler maladroitement, hésiter.",
        signification: "Tâtonner.",
        contexte: "Action.",
        exemple: "« Arrête de zigonner pis décide-toi! »"
    },
    
    // --- ADJECTIFS COURANTS ---
    {
        mot: "achalant",
        type: "adjectif",
        definition: "Agaçant, énervant.",
        signification: "Qui dérange.",
        contexte: "Description.",
        exemple: "« Y'est tellement achalant! »"
    },
    {
        mot: "badlucké",
        type: "adjectif",
        definition: "Malchanceux.",
        signification: "Qui n'a pas de chance.",
        contexte: "Chance.",
        exemple: "« Chus badlucké aujourd'hui. »"
    },
    {
        mot: "bête",
        type: "adjectif",
        definition: "Désagréable, de mauvaise humeur.",
        signification: "Pas gentil.",
        contexte: "Humeur.",
        exemple: "« Y'est ben bête à matin. »"
    },
    {
        mot: "borné",
        type: "adjectif",
        definition: "Têtu, obstiné.",
        signification: "Qui refuse de changer d'avis.",
        contexte: "Caractère.",
        exemple: "« Y'est borné sans bon sens! »"
    },
    {
        mot: "braillard",
        type: "adjectif",
        definition: "Qui pleure souvent, pleurnicheur.",
        signification: "Pleurnichard.",
        contexte: "Comportement.",
        exemple: "« Arrête d'être braillard! »"
    },
    {
        mot: "bucheron",
        type: "adjectif",
        definition: "Rustique, sans manières.",
        signification: "Grossier.",
        contexte: "Comportement.",
        exemple: "« Y mange comme un bucheron. »"
    },
    {
        mot: "capotant",
        type: "adjectif",
        definition: "Fou, incroyable, excitant.",
        signification: "Qui fait capoter.",
        contexte: "Émotion.",
        exemple: "« C'est capotant ce film-là! »"
    },
    {
        mot: "chialeux",
        type: "adjectif",
        definition: "Qui se plaint tout le temps.",
        signification: "Râleur.",
        contexte: "Comportement.",
        exemple: "« Y'est trop chialeux. »"
    },
    {
        mot: "choqué",
        type: "adjectif",
        definition: "Fâché, en colère.",
        signification: "Énervé.",
        contexte: "Émotion.",
        exemple: "« Est choquée après toé. »"
    },
    {
        mot: "colon",
        type: "adjectif",
        definition: "Arriéré, pas dégourdi, campagnard.",
        signification: "Péquenaud.",
        contexte: "Insulte légère.",
        exemple: "« Fais pas ton colon! »"
    },
    {
        mot: "correct",
        type: "adjectif",
        definition: "Bien, acceptable, d'accord.",
        signification: "OK, pas de problème.",
        contexte: "Approbation.",
        exemple: "« C'est correct, t'inquiète pas. »"
    },
    {
        mot: "crasse",
        type: "adjectif",
        definition: "Sale, dégueulasse.",
        signification: "Très sale.",
        contexte: "Propreté.",
        exemple: "« Ta chambre est crasse! »"
    },
    {
        mot: "croche",
        type: "adjectif",
        definition: "Tordu, pas droit, malhonnête.",
        signification: "De travers.",
        contexte: "Description.",
        exemple: "« Le tableau est croche. » ou « Y'est croche ce gars-là. »"
    },
    {
        mot: "débile",
        type: "adjectif",
        definition: "Fou, incroyable, stupide.",
        signification: "Excessif.",
        contexte: "Exclamation.",
        exemple: "« C'est débile cette histoire-là! »"
    },
    {
        mot: "écœurant",
        type: "adjectif",
        definition: "Dégoûtant OU incroyable/génial.",
        signification: "Selon contexte: mauvais ou excellent.",
        contexte: "Émotion.",
        exemple: "« C'est écœurant bon! » ou « C'est écœurant ce qu'y fait. »"
    },
    {
        mot: "effouéré",
        type: "adjectif",
        definition: "Ébouriffé, décoiffé, excité.",
        signification: "Cheveux en désordre ou énervé.",
        contexte: "Apparence/État.",
        exemple: "« T'es ben effouéré à matin! »"
    },
    {
        mot: "épaisse",
        type: "adjectif",
        definition: "Stupide, pas intelligent.",
        signification: "Niais.",
        contexte: "Insulte.",
        exemple: "« Est épaisse celle-là! »"
    },
    {
        mot: "épeurant",
        type: "adjectif",
        definition: "Effrayant, qui fait peur.",
        signification: "Terrifiant.",
        contexte: "Peur.",
        exemple: "« Ce film-là est épeurant! »"
    },
    {
        mot: "fatigant",
        type: "adjectif",
        definition: "Agaçant, énervant.",
        signification: "Qui fatigue.",
        contexte: "Dérangement.",
        exemple: "« Y'est fatigant ce kid-là. »"
    },
    {
        mot: "fin",
        type: "adjectif",
        definition: "Gentil, aimable.",
        signification: "Agréable.",
        contexte: "Personnalité.",
        exemple: "« Y'est ben fin lui. »"
    },
    {
        mot: "flyé",
        type: "adjectif",
        definition: "Bizarre, excentrique, fou.",
        signification: "Original.",
        contexte: "Description.",
        exemple: "« Y'est flyé ce gars-là! »"
    },
    {
        mot: "fru",
        type: "adjectif",
        definition: "Frustré, fâché.",
        signification: "En colère.",
        contexte: "Émotion.",
        exemple: "« Pourquoi t'es fru? »"
    },
    {
        mot: "gossant",
        type: "adjectif",
        definition: "Agaçant, énervant.",
        signification: "Qui gosse.",
        contexte: "Dérangement.",
        exemple: "« C'est gossant ton bruit! »"
    },
    {
        mot: "gratteux",
        type: "adjectif",
        definition: "Avare, pingre.",
        signification: "Qui gratte ses sous.",
        contexte: "Argent.",
        exemple: "« Y'est gratteux sans bon sens! »"
    },
    {
        mot: "gros-jean-comme-devant",
        type: "adjectif",
        definition: "Pas plus avancé qu'avant.",
        signification: "Revenu au point de départ.",
        contexte: "Échec.",
        exemple: "« Après tout ça, j'suis gros-jean-comme-devant. »"
    },
    {
        mot: "habitant",
        type: "adjectif",
        definition: "Campagnard, arriéré.",
        signification: "Pas sophistiqué.",
        contexte: "Description.",
        exemple: "« Fais pas ton habitant! »"
    },
    {
        mot: "heavy",
        type: "adjectif",
        definition: "Intense, difficile, impressionnant.",
        signification: "Lourd émotionnellement.",
        contexte: "Intensité.",
        exemple: "« C'est heavy ce qui lui arrive. »"
    },
    {
        mot: "laitte",
        type: "adjectif",
        definition: "Laid, moche.",
        signification: "Pas beau.",
        contexte: "Apparence.",
        exemple: "« Y'est laitte ce meuble-là. »"
    },
    {
        mot: "magané",
        type: "adjectif",
        definition: "Abîmé, usé, fatigué.",
        signification: "En mauvais état.",
        contexte: "État.",
        exemple: "« Mon char est pas mal magané. »"
    },
    {
        mot: "malcommode",
        type: "adjectif",
        definition: "Difficile à vivre, désagréable.",
        signification: "De mauvais caractère.",
        contexte: "Personnalité.",
        exemple: "« Y'est malcommode ce vieux-là. »"
    },
    {
        mot: "malaisant",
        type: "adjectif",
        definition: "Gênant, embarrassant.",
        signification: "Qui met mal à l'aise.",
        contexte: "Malaise.",
        exemple: "« C'était malaisant en maudit. »"
    },
    {
        mot: "niaiseux",
        type: "adjectif",
        definition: "Stupide, idiot.",
        signification: "Pas intelligent.",
        contexte: "Insulte.",
        exemple: "« T'es ben niaiseux! »"
    },
    {
        mot: "nounoune",
        type: "adjectif",
        definition: "Naïve, niaise (féminin).",
        signification: "Stupide au féminin.",
        contexte: "Insulte.",
        exemple: "« Fais pas ta nounoune! »"
    },
    {
        mot: "ordinaire",
        type: "adjectif",
        definition: "Médiocre, pas terrible.",
        signification: "Moyen, passable.",
        contexte: "Évaluation.",
        exemple: "« Le film était ordinaire. »"
    },
    {
        mot: "pété",
        type: "adjectif",
        definition: "Cassé, brisé, ou fou.",
        signification: "En mauvais état ou dérangé.",
        contexte: "État.",
        exemple: "« Mon cell est pété. » ou « Y'est pété dans tête. »"
    },
    {
        mot: "platte",
        type: "adjectif",
        definition: "Ennuyeux, pas intéressant.",
        signification: "Pas le fun.",
        contexte: "Émotion.",
        exemple: "« C'est platte la pluie. »"
    },
    {
        mot: "poche",
        type: "adjectif",
        definition: "Nul, mauvais.",
        signification: "Pas bon.",
        contexte: "Évaluation.",
        exemple: "« Ce film-là est poche. »"
    },
    {
        mot: "poqué",
        type: "adjectif",
        definition: "Cabossé, amoché.",
        signification: "Endommagé.",
        contexte: "État.",
        exemple: "« Mon bumper est tout poqué. »"
    },
    {
        mot: "pouilleux",
        type: "adjectif",
        definition: "Misérable, sale.",
        signification: "En mauvais état.",
        contexte: "Description.",
        exemple: "« Un bar pouilleux. »"
    },
    {
        mot: "quétaine",
        type: "adjectif",
        definition: "Ringard, démodé, de mauvais goût.",
        signification: "Kitsch.",
        contexte: "Style.",
        exemple: "« C'est quétaine en maudit! »"
    },
    {
        mot: "ratoureux",
        type: "adjectif",
        definition: "Rusé, malin.",
        signification: "Qui fait des tours.",
        contexte: "Personnalité.",
        exemple: "« Y'est ratoureux ce p'tit gars-là. »"
    },
    {
        mot: "relax",
        type: "adjectif",
        definition: "Détendu, calme.",
        signification: "Pas stressé.",
        contexte: "État.",
        exemple: "« C'était une soirée ben relax. »"
    },
    {
        mot: "rough",
        type: "adjectif",
        definition: "Difficile, rude.",
        signification: "Pénible.",
        contexte: "Difficulté.",
        exemple: "« C'est rough ce qu'y vit. »"
    },
    {
        mot: "rushant",
        type: "adjectif",
        definition: "Stressant, pressé.",
        signification: "Qui met la pression.",
        contexte: "Stress.",
        exemple: "« C'est rushant au travail. »"
    },
    {
        mot: "smatte",
        type: "adjectif",
        definition: "Gentil, sympathique.",
        signification: "De l'anglais 'smart' mais sens différent.",
        contexte: "Personnalité.",
        exemple: "« Y'est smatte ce prof-là. »"
    },
    {
        mot: "straight",
        type: "adjectif",
        definition: "Honnête, direct, sobre.",
        signification: "Pas compliqué.",
        contexte: "Personnalité.",
        exemple: "« Y'est straight, lui. »"
    },
    {
        mot: "tanné",
        type: "adjectif",
        definition: "Fatigué, excédé, en avoir marre.",
        signification: "Épuisé moralement.",
        contexte: "Lassitude.",
        exemple: "« Chus tanné de cette job! »"
    },
    {
        mot: "tata",
        type: "adjectif",
        definition: "Idiot, stupide.",
        signification: "Niais.",
        contexte: "Insulte légère.",
        exemple: "« Fais pas ton tata! »"
    },
    {
        mot: "tiguidou",
        type: "adjectif",
        definition: "Parfait, correct, OK.",
        signification: "Tout va bien.",
        contexte: "Approbation.",
        exemple: "« C'est tiguidou? »"
    },
    {
        mot: "toune",
        type: "adjectif",
        definition: "Niais, simple d'esprit.",
        signification: "Pas brillant.",
        contexte: "Insulte.",
        exemple: "« Y'est toune lui! »"
    },
    {
        mot: "tough",
        type: "adjectif",
        definition: "Difficile, résistant.",
        signification: "Dur.",
        contexte: "Difficulté.",
        exemple: "« C'est tough son affaire. »"
    },
    {
        mot: "twit",
        type: "adjectif",
        definition: "Idiot, imbécile.",
        signification: "Stupide.",
        contexte: "Insulte.",
        exemple: "« T'es un twit! »"
    },
    {
        mot: "wack",
        type: "adjectif",
        definition: "Bizarre, étrange, fou.",
        signification: "Pas normal.",
        contexte: "Description.",
        exemple: "« C'est wack son histoire! »"
    },
    
    // --- SYNONYMES ET MOTS SIMPLES ---
    {
        mot: "à cette heure",
        type: "locution",
        definition: "Maintenant, à présent.",
        signification: "En ce moment.",
        contexte: "Temps.",
        exemple: "« À cette heure, on fait quoi? »"
    },
    {
        mot: "à matin",
        type: "locution",
        definition: "Ce matin.",
        signification: "Durant la matinée.",
        contexte: "Temps.",
        exemple: "« J'me suis levé de bonne heure à matin. »"
    },
    {
        mot: "à soir",
        type: "locution",
        definition: "Ce soir.",
        signification: "Durant la soirée.",
        contexte: "Temps.",
        exemple: "« On sort à soir. »"
    },
    {
        mot: "astheure",
        type: "adverbe",
        definition: "Maintenant, à présent.",
        signification: "Contraction de 'à cette heure'.",
        contexte: "Temps.",
        exemple: "« Astheure, qu'est-ce qu'on fait? »"
    },
    {
        mot: "ben",
        type: "adverbe",
        definition: "Bien, très.",
        signification: "Prononciation québécoise.",
        contexte: "Intensité.",
        exemple: "« C'est ben bon! »"
    },
    {
        mot: "bin",
        type: "adverbe",
        definition: "Bien, très (variante).",
        signification: "Autre orthographe de 'ben'.",
        contexte: "Intensité.",
        exemple: "« C'est bin correct. »"
    },
    {
        mot: "chus",
        type: "contraction",
        definition: "Je suis.",
        signification: "Forme contractée.",
        contexte: "Grammaire.",
        exemple: "« Chus fatigué. »"
    },
    {
        mot: "d'abord",
        type: "locution",
        definition: "Alors, dans ce cas.",
        signification: "Si c'est comme ça.",
        contexte: "Conclusion.",
        exemple: "« D'abord, j'm'en vais! »"
    },
    {
        mot: "en masse",
        type: "locution",
        definition: "Beaucoup, suffisamment.",
        signification: "En grande quantité.",
        contexte: "Quantité.",
        exemple: "« Y'en a en masse. »"
    },
    {
        mot: "icitte",
        type: "adverbe",
        definition: "Ici.",
        signification: "Prononciation traditionnelle.",
        contexte: "Lieu.",
        exemple: "« Viens icitte! »"
    },
    {
        mot: "j'cré ben",
        type: "locution",
        definition: "Je crois bien, je pense que oui.",
        signification: "Probablement.",
        contexte: "Opinion.",
        exemple: "« J'cré ben qu'y va pleuvoir. »"
    },
    {
        mot: "moé",
        type: "pronom",
        definition: "Moi.",
        signification: "Prononciation québécoise.",
        contexte: "Grammaire.",
        exemple: "« C'est moé qui l'a fait. »"
    },
    {
        mot: "p'tête",
        type: "adverbe",
        definition: "Peut-être.",
        signification: "Possibilité.",
        contexte: "Incertitude.",
        exemple: "« P'tête que oui, p'tête que non. »"
    },
    {
        mot: "pantoute",
        type: "adverbe",
        definition: "Pas du tout.",
        signification: "Négation forte.",
        contexte: "Négation.",
        exemple: "« J'aime pas ça pantoute! »"
    },
    {
        mot: "pis",
        type: "conjonction",
        definition: "Et, puis.",
        signification: "Mot de liaison.",
        contexte: "Grammaire.",
        exemple: "« J'ai mangé pis j'suis parti. »"
    },
    {
        mot: "quand même",
        type: "locution",
        definition: "Tout de même, malgré tout.",
        signification: "Néanmoins.",
        contexte: "Nuance.",
        exemple: "« C'est quand même bon. »"
    },
    {
        mot: "s'a",
        type: "contraction",
        definition: "Sur la.",
        signification: "Forme contractée.",
        contexte: "Grammaire.",
        exemple: "« S'a table. »"
    },
    {
        mot: "t'sé",
        type: "interjection",
        definition: "Tu sais.",
        signification: "Tic de langage.",
        contexte: "Conversation.",
        exemple: "« T'sé, c'est compliqué. »"
    },
    {
        mot: "toé",
        type: "pronom",
        definition: "Toi.",
        signification: "Prononciation québécoise.",
        contexte: "Grammaire.",
        exemple: "« C'est toé qui décides. »"
    },
    {
        mot: "tu (particule)",
        type: "particule",
        definition: "Particule interrogative.",
        signification: "Transforme une phrase en question.",
        contexte: "Grammaire.",
        exemple: "« Tu viens-tu? » « C'est-tu vrai? »"
    },
    {
        mot: "y",
        type: "pronom",
        definition: "Il, lui.",
        signification: "Pronom masculin.",
        contexte: "Grammaire.",
        exemple: "« Y'est parti. » « J'y ai dit. »"
    },
    {
        mot: "a",
        type: "pronom",
        definition: "Elle.",
        signification: "Pronom féminin.",
        contexte: "Grammaire.",
        exemple: "« A l'est belle. »"
    },

    // === 100 NOUVEAUX MOTS - VARIÉS ===
    
    // --- SACRES ET JURONS ---
    {
        mot: "batince",
        type: "sacre",
        definition: "Forme atténuée de baptême.",
        signification: "Juron léger.",
        contexte: "Frustration.",
        exemple: "« Batince que c'est long! »"
    },
    {
        mot: "bâtard",
        type: "sacre",
        definition: "Juron exprimant la frustration.",
        signification: "Équivalent de 'merde'.",
        contexte: "Frustration.",
        exemple: "« Bâtard, j'ai oublié mes clés! »"
    },
    {
        mot: "bout de viarge",
        type: "sacre",
        definition: "Forme atténuée de 'bout de vierge'.",
        signification: "Sacre exprimant la surprise.",
        contexte: "Surprise.",
        exemple: "« Bout de viarge, t'as-tu vu ça! »"
    },
    {
        mot: "câlique",
        type: "sacre",
        definition: "Forme atténuée de câlice.",
        signification: "Version adoucie.",
        contexte: "Frustration.",
        exemple: "« Câlique que ça va mal! »"
    },
    {
        mot: "christie",
        type: "sacre",
        definition: "Forme atténuée de Christ.",
        signification: "Version adoucie.",
        contexte: "Frustration.",
        exemple: "« Christie, j'suis tanné! »"
    },
    {
        mot: "cibole",
        type: "sacre",
        definition: "Forme atténuée de ciboire.",
        signification: "Version adoucie.",
        contexte: "Frustration.",
        exemple: "« Cibole, c'est pas vrai! »"
    },
    {
        mot: "crime",
        type: "sacre",
        definition: "Forme atténuée de Christ.",
        signification: "Juron léger.",
        contexte: "Surprise.",
        exemple: "« Crime que t'es vite! »"
    },
    {
        mot: "enfant de nanane",
        type: "sacre",
        definition: "Forme atténuée de 'enfant de chienne'.",
        signification: "Juron comique.",
        contexte: "Frustration légère.",
        exemple: "« Enfant de nanane, ça marche pas! »"
    },
    {
        mot: "jésus-marie-joseph",
        type: "sacre",
        definition: "Exclamation de surprise ou frustration.",
        signification: "Invocation religieuse.",
        contexte: "Surprise.",
        exemple: "« Jésus-Marie-Joseph, qu'est-ce qui se passe? »"
    },
    {
        mot: "maudit batince",
        type: "sacre",
        definition: "Juron combiné.",
        signification: "Exprime forte frustration.",
        contexte: "Frustration.",
        exemple: "« Maudit batince, j'ai encore oublié! »"
    },
    {
        mot: "mosus",
        type: "sacre",
        definition: "Forme atténuée de maudit.",
        signification: "Version adoucie.",
        contexte: "Frustration.",
        exemple: "« Mosus que c'est plate! »"
    },
    {
        mot: "sacrifice",
        type: "sacre",
        definition: "Juron religieux atténué.",
        signification: "Exprime frustration.",
        contexte: "Frustration.",
        exemple: "« Sacrifice, y fait frette! »"
    },
    {
        mot: "saint-ciboire",
        type: "sacre",
        definition: "Combinaison de sacres.",
        signification: "Juron intensifié.",
        contexte: "Frustration forte.",
        exemple: "« Saint-ciboire, c'est pas possible! »"
    },
    {
        mot: "saint-simonaque",
        type: "sacre",
        definition: "Combinaison atténuée.",
        signification: "Juron adouci.",
        contexte: "Surprise.",
        exemple: "« Saint-simonaque, y'a-tu fait ça? »"
    },
    {
        mot: "torrieux",
        type: "sacre",
        definition: "Forme atténuée de Dieu/Hostie.",
        signification: "Vieux juron.",
        contexte: "Frustration.",
        exemple: "« Torrieux, c'est ben trop cher! »"
    },
    
    // --- INSULTES ET QUALIFICATIFS ---
    {
        mot: "agrès",
        type: "insulte",
        definition: "Personne désagréable ou malcommode.",
        signification: "Individu déplaisant.",
        contexte: "Insulte.",
        exemple: "« C't'un maudit agrès! »"
    },
    {
        mot: "branleux",
        type: "insulte",
        definition: "Personne qui hésite, indécise.",
        signification: "Qui traîne, lambine.",
        contexte: "Critique.",
        exemple: "« Arrête de faire ton branleux! »"
    },
    {
        mot: "baveux",
        type: "insulte",
        definition: "Personne arrogante, prétentieuse.",
        signification: "Qui se vante.",
        contexte: "Insulte.",
        exemple: "« T'es ben baveux! »"
    },
    {
        mot: "bines",
        type: "insulte",
        definition: "Personne insignifiante.",
        signification: "Terme péjoratif.",
        contexte: "Insulte légère.",
        exemple: "« C'est rien qu'une bines. »"
    },
    {
        mot: "bloke",
        type: "insulte",
        definition: "Anglophone (péjoratif).",
        signification: "Terme désobligeant.",
        contexte: "Insulte ethnique.",
        exemple: "« Les blokes comprennent rien. »"
    },
    {
        mot: "bolé",
        type: "insulte",
        definition: "Premier de classe, intello.",
        signification: "Personne studieuse (péjoratif).",
        contexte: "Moquerie.",
        exemple: "« C'est un bolé, lui. »"
    },
    {
        mot: "bonhomme sept-heures",
        type: "nom masculin",
        definition: "Croque-mitaine, personnage effrayant.",
        signification: "Pour faire peur aux enfants.",
        contexte: "Folklore.",
        exemple: "« Le bonhomme sept-heures va venir te chercher! »"
    },
    {
        mot: "braque",
        type: "insulte",
        definition: "Personne folle, dérangée.",
        signification: "Un peu fou.",
        contexte: "Insulte.",
        exemple: "« Y'est braque ce gars-là! »"
    },
    {
        mot: "cabochon",
        type: "insulte",
        definition: "Personne têtue et stupide.",
        signification: "Tête dure.",
        contexte: "Insulte.",
        exemple: "« Fais pas ton cabochon! »"
    },
    {
        mot: "canayen",
        type: "nom masculin",
        definition: "Canadien français traditionnel.",
        signification: "Québécois de souche.",
        contexte: "Identité.",
        exemple: "« Un vrai canayen! »"
    },
    {
        mot: "cassé",
        type: "adjectif",
        definition: "Sans argent, fauché.",
        signification: "Pauvre temporairement.",
        contexte: "Finances.",
        exemple: "« Chus cassé jusqu'à ma paye. »"
    },
    {
        mot: "charlot",
        type: "insulte",
        definition: "Personne pas sérieuse, clown.",
        signification: "Qui fait le fou.",
        contexte: "Moquerie.",
        exemple: "« Fais pas ton charlot! »"
    },
    {
        mot: "chaudaille",
        type: "adjectif",
        definition: "Un peu ivre.",
        signification: "Légèrement saoul.",
        contexte: "Alcool.",
        exemple: "« Y'est un peu chaudaille. »"
    },
    {
        mot: "chenaille",
        type: "insulte",
        definition: "Personne ou chose de mauvaise qualité.",
        signification: "Camelote, racaille.",
        contexte: "Mépris.",
        exemple: "« C'est de la chenaille. »"
    },
    {
        mot: "cochon",
        type: "insulte",
        definition: "Personne sale ou perverse.",
        signification: "Malpropre ou lubrique.",
        contexte: "Insulte.",
        exemple: "« T'es ben cochon! »"
    },
    {
        mot: "cornichon",
        type: "insulte",
        definition: "Personne stupide, niaise.",
        signification: "Idiot.",
        contexte: "Insulte légère.",
        exemple: "« T'es un vrai cornichon! »"
    },
    {
        mot: "coune",
        type: "insulte",
        definition: "Personne idiote.",
        signification: "Niais.",
        contexte: "Insulte.",
        exemple: "« Fais pas ta coune! »"
    },
    {
        mot: "crotté",
        type: "adjectif",
        definition: "Sale, crasseux.",
        signification: "Couvert de saleté.",
        contexte: "Propreté.",
        exemple: "« T'es tout crotté! »"
    },
    {
        mot: "dégaine",
        type: "nom féminin",
        definition: "Allure, apparence.",
        signification: "Look général.",
        contexte: "Apparence.",
        exemple: "« T'as une drôle de dégaine! »"
    },
    {
        mot: "déparaillé",
        type: "adjectif",
        definition: "Dépareillé, mal assorti.",
        signification: "Qui ne va pas ensemble.",
        contexte: "Apparence.",
        exemple: "« Tes bas sont déparaillés. »"
    },
    {
        mot: "dépendeux de lèvre",
        type: "insulte",
        definition: "Personne triste, qui fait la gueule.",
        signification: "Air boudeur.",
        contexte: "Insulte.",
        exemple: "« Fais pas ton dépendeux de lèvre! »"
    },
    {
        mot: "désâmé",
        type: "adjectif",
        definition: "Épuisé, à bout de souffle.",
        signification: "Très fatigué.",
        contexte: "Fatigue.",
        exemple: "« Chus désâmé après cette course-là. »"
    },
    {
        mot: "dinde",
        type: "insulte",
        definition: "Femme stupide ou prétentieuse.",
        signification: "Niaise.",
        contexte: "Insulte.",
        exemple: "« C't'une vraie dinde! »"
    },
    {
        mot: "dodiche",
        type: "nom féminin",
        definition: "Femme coquette, un peu superficielle.",
        signification: "Femme maniérée.",
        contexte: "Description.",
        exemple: "« C't'une petite dodiche. »"
    },
    {
        mot: "écornifleux",
        type: "insulte",
        definition: "Personne curieuse, fouineuse.",
        signification: "Qui écoute aux portes.",
        contexte: "Critique.",
        exemple: "« T'es ben écornifleux! »"
    },
    {
        mot: "effoire",
        type: "insulte",
        definition: "Personne molle, sans énergie.",
        signification: "Avachi.",
        contexte: "Insulte.",
        exemple: "« Lève-toi, effoire! »"
    },
    {
        mot: "étranger",
        type: "nom masculin",
        definition: "Non-local, personne de l'extérieur.",
        signification: "Qui n'est pas du coin.",
        contexte: "Origine.",
        exemple: "« C'est un étranger, y vient de Montréal. »"
    },
    {
        mot: "face à fesser dedans",
        type: "expression",
        definition: "Visage désagréable, antipathique.",
        signification: "Tête qui donne envie de frapper.",
        contexte: "Insulte.",
        exemple: "« Y'a une face à fesser dedans. »"
    },
    {
        mot: "fendant",
        type: "insulte",
        definition: "Personne prétentieuse, arrogante.",
        signification: "Qui se prend pour un autre.",
        contexte: "Insulte.",
        exemple: "« Y'est fendant depuis qu'y a eu sa promotion. »"
    },
    {
        mot: "flanc mou",
        type: "insulte",
        definition: "Personne paresseuse.",
        signification: "Fainéant.",
        contexte: "Insulte.",
        exemple: "« C'est un flanc mou, y fait jamais rien. »"
    },
    {
        mot: "fou braque",
        type: "expression",
        definition: "Complètement fou.",
        signification: "Dérangé mentalement.",
        contexte: "Insulte.",
        exemple: "« Y'est fou braque! »"
    },
    {
        mot: "frais chié",
        type: "insulte",
        definition: "Personne prétentieuse.",
        signification: "Qui se croit supérieur.",
        contexte: "Insulte.",
        exemple: "« Y'est frais chié celui-là! »"
    },
    {
        mot: "galarneau",
        type: "nom masculin",
        definition: "Le soleil.",
        signification: "Personnification du soleil.",
        contexte: "Météo.",
        exemple: "« Galarneau est de sortie aujourd'hui! »"
    },
    {
        mot: "gino",
        type: "nom masculin",
        definition: "Jeune homme typé italien, macho.",
        signification: "Stéréotype.",
        contexte: "Description.",
        exemple: "« C'est un vrai gino avec son char tunné. »"
    },
    {
        mot: "gnochon",
        type: "insulte",
        definition: "Personne stupide.",
        signification: "Idiot.",
        contexte: "Insulte.",
        exemple: "« T'es un gnochon! »"
    },
    {
        mot: "grand fanal",
        type: "insulte",
        definition: "Personne très grande et maigre.",
        signification: "Grande perche.",
        contexte: "Moquerie.",
        exemple: "« Regarde le grand fanal! »"
    },
    {
        mot: "grand slack",
        type: "insulte",
        definition: "Personne grande et dégingandée.",
        signification: "Grande asperge.",
        contexte: "Moquerie.",
        exemple: "« C'est un grand slack. »"
    },
    {
        mot: "grippette",
        type: "insulte",
        definition: "Personne avare, pingre.",
        signification: "Radin.",
        contexte: "Insulte.",
        exemple: "« C't'une vraie grippette! »"
    },
    {
        mot: "guidoune",
        type: "insulte",
        definition: "Femme de mœurs légères.",
        signification: "Prostituée ou femme vulgaire.",
        contexte: "Insulte vulgaire.",
        exemple: "« A s'habille comme une guidoune. »"
    },
    
    // --- VERBES ADDITIONNELS ---
    {
        mot: "adonner",
        type: "verbe",
        definition: "Convenir, tomber bien.",
        signification: "Correspondre.",
        contexte: "Circonstance.",
        exemple: "« Ça adonne bien! »"
    },
    {
        mot: "amarrer",
        type: "verbe",
        definition: "Attacher, nouer.",
        signification: "Fixer avec une corde.",
        contexte: "Action.",
        exemple: "« Amarre tes souliers. »"
    },
    {
        mot: "badtripper",
        type: "verbe",
        definition: "Faire une mauvaise expérience, angoisser.",
        signification: "Stresser intensément.",
        contexte: "Émotion.",
        exemple: "« J'ai badtrippé toute la nuit. »"
    },
    {
        mot: "bâdrer",
        type: "verbe",
        definition: "Déranger, embêter.",
        signification: "De l'anglais 'to bother'.",
        contexte: "Dérangement.",
        exemple: "« Bâdre-moi pas avec ça. »"
    },
    {
        mot: "bambocher",
        type: "verbe",
        definition: "Faire la fête.",
        signification: "Festoyer.",
        contexte: "Fête.",
        exemple: "« On a bamboché toute la nuit. »"
    },
    {
        mot: "bizoune",
        type: "nom féminin",
        definition: "Pénis (langage enfantin).",
        signification: "Terme pour enfants.",
        contexte: "Anatomie.",
        exemple: "« Cache ta bizoune! »"
    },
    {
        mot: "blaster",
        type: "verbe",
        definition: "Critiquer violemment, détruire.",
        signification: "Démolir verbalement.",
        contexte: "Critique.",
        exemple: "« Y s'est fait blaster par son boss. »"
    },
    {
        mot: "bleeder",
        type: "verbe",
        definition: "Saigner ou purger les freins.",
        signification: "De l'anglais 'to bleed'.",
        contexte: "Mécanique/Blessure.",
        exemple: "« Faut bleeder les brakes. »"
    },
    {
        mot: "booker",
        type: "verbe",
        definition: "Réserver.",
        signification: "De l'anglais 'to book'.",
        contexte: "Réservation.",
        exemple: "« J'ai booké une table au resto. »"
    },
    {
        mot: "botcher",
        type: "verbe",
        definition: "Bâcler, mal faire.",
        signification: "De l'anglais 'to botch'.",
        contexte: "Travail.",
        exemple: "« Y'a botché sa job. »"
    },
    {
        mot: "brailler",
        type: "verbe",
        definition: "Pleurer bruyamment.",
        signification: "Pleurnicher.",
        contexte: "Émotion.",
        exemple: "« Arrête de brailler! »"
    },
    {
        mot: "breaker",
        type: "verbe",
        definition: "Casser, rompre.",
        signification: "De l'anglais 'to break'.",
        contexte: "Rupture.",
        exemple: "« Y ont breaké après 5 ans. »"
    },
    {
        mot: "brosse (prendre une)",
        type: "expression",
        definition: "Se saouler.",
        signification: "Boire excessivement.",
        contexte: "Alcool.",
        exemple: "« Y'a pris une méchante brosse hier! »"
    },
    {
        mot: "bumper",
        type: "verbe",
        definition: "Rencontrer par hasard, remplacer.",
        signification: "Croiser ou supplanter.",
        contexte: "Rencontre.",
        exemple: "« J'l'ai bumpé au centre d'achats. »"
    },
    {
        mot: "busher",
        type: "verbe",
        definition: "Pousser, forcer.",
        signification: "De l'anglais 'to push'.",
        contexte: "Action.",
        exemple: "« Bushe pas trop fort! »"
    },
    {
        mot: "caller",
        type: "verbe",
        definition: "Appeler, téléphoner, ou prédire.",
        signification: "De l'anglais 'to call'.",
        contexte: "Communication.",
        exemple: "« Caller malade. » « J'l'avais callé! »"
    },
    {
        mot: "chauffer",
        type: "verbe",
        definition: "Conduire un véhicule.",
        signification: "Piloter.",
        contexte: "Transport.",
        exemple: "« C'est qui qui chauffe à soir? »"
    },
    {
        mot: "checker",
        type: "verbe",
        definition: "Vérifier, regarder.",
        signification: "De l'anglais 'to check'.",
        contexte: "Observation.",
        exemple: "« Check ça! »"
    },
    {
        mot: "chiquer la guenille",
        type: "expression",
        definition: "Bouder, faire la gueule.",
        signification: "Être de mauvaise humeur.",
        contexte: "Humeur.",
        exemple: "« Arrête de chiquer la guenille! »"
    },
    {
        mot: "choker",
        type: "verbe",
        definition: "S'étouffer ou échouer sous la pression.",
        signification: "De l'anglais 'to choke'.",
        contexte: "Échec.",
        exemple: "« Y'a choké en finale. »"
    },
    {
        mot: "clipper",
        type: "verbe",
        definition: "Couper, tailler.",
        signification: "De l'anglais 'to clip'.",
        contexte: "Action.",
        exemple: "« Faut clipper la haie. »"
    },
    {
        mot: "crosser",
        type: "verbe",
        definition: "Arnaquer, tromper.",
        signification: "Escroquer.",
        contexte: "Tromperie.",
        exemple: "« Y m'a crossé sur le prix! »"
    },
    {
        mot: "cruiser",
        type: "verbe",
        definition: "Draguer, chercher des conquêtes.",
        signification: "De l'anglais 'to cruise'.",
        contexte: "Séduction.",
        exemple: "« Y passe son temps à cruiser. »"
    },
    {
        mot: "débourrer",
        type: "verbe",
        definition: "Se calmer, reprendre ses esprits.",
        signification: "Se détendre après excitation.",
        contexte: "Calme.",
        exemple: "« Débourre un peu! »"
    },
    {
        mot: "décâlisser",
        type: "verbe",
        definition: "Partir rapidement, démolir.",
        signification: "S'en aller ou casser.",
        contexte: "Action.",
        exemple: "« Décâlisse de là! »"
    },
    {
        mot: "défaire",
        type: "verbe",
        definition: "Battre, vaincre.",
        signification: "Gagner contre.",
        contexte: "Compétition.",
        exemple: "« On les a défaits 3-0. »"
    },
    {
        mot: "déguédiner",
        type: "verbe",
        definition: "Se dépêcher.",
        signification: "Se grouiller.",
        contexte: "Rapidité.",
        exemple: "« Déguédine! On va être en retard! »"
    },
    {
        mot: "déjammer",
        type: "verbe",
        definition: "Débloquer.",
        signification: "Libérer ce qui est coincé.",
        contexte: "Action.",
        exemple: "« Faut déjammer la porte. »"
    },
    {
        mot: "ditcher",
        type: "verbe",
        definition: "Abandonner, laisser tomber.",
        signification: "De l'anglais 'to ditch'.",
        contexte: "Abandon.",
        exemple: "« Y m'a ditché pour aller avec ses chums. »"
    },
    {
        mot: "domper",
        type: "verbe",
        definition: "Larguer, jeter.",
        signification: "De l'anglais 'to dump'.",
        contexte: "Rupture/Déchet.",
        exemple: "« A l'a dompé son chum. »"
    },
    {
        mot: "éjarrer",
        type: "verbe",
        definition: "Écarter les jambes, s'affaler.",
        signification: "S'asseoir jambes écartées.",
        contexte: "Position.",
        exemple: "« Éjarre-toi pas de même! »"
    },

    // === 100 NOUVEAUX MOTS - VARIÉS ===
    
    // --- OBJETS DU QUOTIDIEN ---
    {
        mot: "balayeuse",
        type: "nom féminin",
        definition: "Aspirateur.",
        signification: "Appareil pour nettoyer.",
        contexte: "Ménage.",
        exemple: "« Passe la balayeuse dans le salon. »"
    },
    {
        mot: "bardeau",
        type: "nom masculin",
        definition: "Tuile de toiture, ou personne folle.",
        signification: "Shingle ou fou.",
        contexte: "Construction/Insulte.",
        exemple: "« Y manque un bardeau! »"
    },
    {
        mot: "bazou",
        type: "nom masculin",
        definition: "Vieille voiture en mauvais état.",
        signification: "Tacot.",
        contexte: "Automobile.",
        exemple: "« Y roule encore dans son vieux bazou. »"
    },
    {
        mot: "bécosse",
        type: "nom féminin",
        definition: "Toilettes extérieures, latrines.",
        signification: "De l'anglais 'backhouse'.",
        contexte: "Sanitaire.",
        exemple: "« Y'avait juste des bécosses au chalet. »"
    },
    {
        mot: "bécyk",
        type: "nom masculin",
        definition: "Bicyclette, vélo.",
        signification: "Prononciation québécoise.",
        contexte: "Transport.",
        exemple: "« J'vais au travail en bécyk. »"
    },
    {
        mot: "bicycle à gaz",
        type: "nom masculin",
        definition: "Moto, motocyclette.",
        signification: "Vélo à moteur.",
        contexte: "Transport.",
        exemple: "« Y s'est acheté un bicycle à gaz. »"
    },
    {
        mot: "bol de toilette",
        type: "nom masculin",
        definition: "Cuvette des toilettes.",
        signification: "Partie de la toilette.",
        contexte: "Sanitaire.",
        exemple: "« Nettoie le bol de toilette. »"
    },
    {
        mot: "bombe",
        type: "nom féminin",
        definition: "Bouilloire.",
        signification: "Pour faire bouillir l'eau.",
        contexte: "Cuisine.",
        exemple: "« Mets la bombe sur le poêle. »"
    },
    {
        mot: "cabaret",
        type: "nom masculin",
        definition: "Plateau pour servir.",
        signification: "Plateau de service.",
        contexte: "Service.",
        exemple: "« Mets les verres sur le cabaret. »"
    },
    {
        mot: "cadran",
        type: "nom masculin",
        definition: "Réveille-matin, alarme.",
        signification: "Horloge avec alarme.",
        contexte: "Temps.",
        exemple: "« J'ai pas entendu mon cadran. »"
    },
    {
        mot: "canisse",
        type: "nom féminin",
        definition: "Bidon, jerrycan.",
        signification: "Contenant pour liquide.",
        contexte: "Contenant.",
        exemple: "« Apporte la canisse de gaz. »"
    },
    {
        mot: "catalogne",
        type: "nom féminin",
        definition: "Couverture tissée traditionnelle.",
        signification: "Couverture artisanale.",
        contexte: "Literie.",
        exemple: "« Une belle catalogne de ma grand-mère. »"
    },
    {
        mot: "champlure",
        type: "nom féminin",
        definition: "Robinet.",
        signification: "Valve pour l'eau.",
        contexte: "Plomberie.",
        exemple: "« Ferme la champlure! »"
    },
    {
        mot: "chaudière",
        type: "nom féminin",
        definition: "Seau, chaudron.",
        signification: "Récipient.",
        contexte: "Contenant.",
        exemple: "« Apporte une chaudière d'eau. »"
    },
    {
        mot: "chesterfield",
        type: "nom masculin",
        definition: "Canapé, sofa.",
        signification: "Meuble de salon.",
        contexte: "Mobilier.",
        exemple: "« Assis-toi sur le chesterfield. »"
    },
    {
        mot: "cocotte",
        type: "nom féminin",
        definition: "Cône de pin ou marmite.",
        signification: "Fruit du conifère ou casserole.",
        contexte: "Nature/Cuisine.",
        exemple: "« Ramasse des cocottes pour le feu. »"
    },
    {
        mot: "coquerelle",
        type: "nom féminin",
        definition: "Cafard, blatte.",
        signification: "Insecte nuisible.",
        contexte: "Insecte.",
        exemple: "« Y'a des coquerelles dans la cuisine! »"
    },
    {
        mot: "couverte",
        type: "nom féminin",
        definition: "Couverture.",
        signification: "Pour se couvrir.",
        contexte: "Literie.",
        exemple: "« Mets une couverte, y fait frette. »"
    },
    {
        mot: "débarbouillette",
        type: "nom féminin",
        definition: "Petite serviette pour le visage.",
        signification: "Gant de toilette.",
        contexte: "Hygiène.",
        exemple: "« Passe-moi la débarbouillette. »"
    },
    {
        mot: "dépanneur",
        type: "nom masculin",
        definition: "Petite épicerie de quartier.",
        signification: "Convenience store.",
        contexte: "Commerce.",
        exemple: "« J'vais au dépanneur chercher du lait. »"
    },
    {
        mot: "laveuse",
        type: "nom féminin",
        definition: "Machine à laver.",
        signification: "Lave-linge.",
        contexte: "Électroménager.",
        exemple: "« Mets ton linge dans la laveuse. »"
    },
    {
        mot: "lumière",
        type: "nom féminin",
        definition: "Feu de circulation.",
        signification: "Traffic light.",
        contexte: "Circulation.",
        exemple: "« Tourne à gauche à la lumière. »"
    },
    {
        mot: "maringouin",
        type: "nom masculin",
        definition: "Moustique.",
        signification: "Insecte piqueur.",
        contexte: "Insecte.",
        exemple: "« Les maringouins me mangent tout rond! »"
    },
    {
        mot: "minoune",
        type: "nom féminin",
        definition: "Vieille voiture ou chatte.",
        signification: "Auto en mauvais état ou animal.",
        contexte: "Auto/Animal.",
        exemple: "« Ma minoune veut pus partir. »"
    },
    {
        mot: "mouche à feu",
        type: "nom féminin",
        definition: "Luciole.",
        signification: "Insecte lumineux.",
        contexte: "Insecte.",
        exemple: "« Y'a des mouches à feu dans le champ. »"
    },
    {
        mot: "mouffette",
        type: "nom féminin",
        definition: "Sconse, bête puante.",
        signification: "Animal malodorant.",
        contexte: "Faune.",
        exemple: "« Une mouffette a arrosé le chien! »"
    },
    {
        mot: "nanane",
        type: "nom masculin",
        definition: "Bonbon, friandise.",
        signification: "Sucrerie.",
        contexte: "Confiserie.",
        exemple: "« Tu veux-tu des nananes? »"
    },
    {
        mot: "pâte à dent",
        type: "nom féminin",
        definition: "Dentifrice.",
        signification: "Pour se brosser les dents.",
        contexte: "Hygiène.",
        exemple: "« Y reste pus de pâte à dent. »"
    },
    {
        mot: "piasse",
        type: "nom féminin",
        definition: "Dollar, piastre.",
        signification: "Argent.",
        contexte: "Finances.",
        exemple: "« Ça coûte vingt piasses. »"
    },
    {
        mot: "piton",
        type: "nom masculin",
        definition: "Bouton, interrupteur.",
        signification: "Switch.",
        contexte: "Électricité.",
        exemple: "« Pèse sur le piton. »"
    },
    {
        mot: "plogue",
        type: "nom féminin",
        definition: "Prise électrique, fiche.",
        signification: "De l'anglais 'plug'.",
        contexte: "Électricité.",
        exemple: "« Branche la plogue. »"
    },
    {
        mot: "poêle",
        type: "nom masculin",
        definition: "Cuisinière.",
        signification: "Appareil de cuisson.",
        contexte: "Cuisine.",
        exemple: "« Le souper est sur le poêle. »"
    },
    {
        mot: "poudrerie",
        type: "nom féminin",
        definition: "Tempête de neige avec vent.",
        signification: "Blizzard léger.",
        contexte: "Météo.",
        exemple: "« Y'a de la poudrerie sur l'autoroute. »"
    },
    {
        mot: "sécheuse",
        type: "nom féminin",
        definition: "Sèche-linge.",
        signification: "Pour sécher le linge.",
        contexte: "Électroménager.",
        exemple: "« Mets le linge dans la sécheuse. »"
    },
    {
        mot: "séraphin",
        type: "nom masculin",
        definition: "Personne très avare.",
        signification: "D'après le personnage Séraphin Poudrier.",
        contexte: "Insulte.",
        exemple: "« T'es un vrai séraphin! »"
    },
    {
        mot: "slush",
        type: "nom féminin",
        definition: "Neige fondante sale.",
        signification: "Gadoue.",
        contexte: "Météo.",
        exemple: "« Y'a de la slush partout. »"
    },
    {
        mot: "tivi",
        type: "nom masculin",
        definition: "Télévision.",
        signification: "TV.",
        contexte: "Électronique.",
        exemple: "« Ouvre le tivi. »"
    },
    {
        mot: "tuque",
        type: "nom féminin",
        definition: "Bonnet d'hiver.",
        signification: "Chapeau chaud.",
        contexte: "Vêtement.",
        exemple: "« Mets ta tuque, y fait frette! »"
    },
    {
        mot: "vidanges",
        type: "nom féminin pluriel",
        definition: "Poubelles, ordures.",
        signification: "Déchets.",
        contexte: "Déchet.",
        exemple: "« Sors les vidanges. »"
    },
    {
        mot: "vire-capot",
        type: "nom masculin",
        definition: "Personne qui change d'avis ou de camp.",
        signification: "Retourne sa veste.",
        contexte: "Politique.",
        exemple: "« C't'un maudit vire-capot! »"
    },
    
    // --- EXPRESSIONS ADDITIONNELLES ---
    {
        mot: "à planche",
        type: "expression",
        definition: "À fond, à toute vitesse.",
        signification: "Au maximum.",
        contexte: "Intensité.",
        exemple: "« Y roule à planche! »"
    },
    {
        mot: "à terre",
        type: "expression",
        definition: "Épuisé, fatigué.",
        signification: "Sans énergie.",
        contexte: "Fatigue.",
        exemple: "« Chus à terre après cette journée-là. »"
    },
    {
        mot: "attache ta tuque",
        type: "expression",
        definition: "Prépare-toi, ça va brasser.",
        signification: "Attention, ça va être intense.",
        contexte: "Avertissement.",
        exemple: "« Attache ta tuque, ça va décoller! »"
    },
    {
        mot: "avoir de l'eau dans la cave",
        type: "expression",
        definition: "Avoir le pantalon trop court.",
        signification: "Pantalon qui montre les chevilles.",
        contexte: "Vêtement.",
        exemple: "« T'as de l'eau dans la cave! »"
    },
    {
        mot: "avoir des bibittes",
        type: "expression",
        definition: "Avoir des problèmes psychologiques.",
        signification: "Être un peu dérangé.",
        contexte: "Psychologie.",
        exemple: "« Y'a des bibittes, lui. »"
    },
    {
        mot: "avoir du front tout le tour de la tête",
        type: "expression",
        definition: "Être très audacieux, effronté.",
        signification: "Avoir du culot.",
        contexte: "Caractère.",
        exemple: "« T'as du front tout le tour de la tête! »"
    },
    {
        mot: "avoir la chienne",
        type: "expression",
        definition: "Avoir peur.",
        signification: "Être effrayé.",
        contexte: "Peur.",
        exemple: "« J'ai la chienne de parler en public. »"
    },
    {
        mot: "avoir la guedille au nez",
        type: "expression",
        definition: "Avoir la morve qui coule.",
        signification: "Nez qui coule.",
        contexte: "Santé.",
        exemple: "« Mouche-toi, t'as la guedille au nez. »"
    },
    {
        mot: "avoir le cœur sur la main",
        type: "expression",
        definition: "Être très généreux.",
        signification: "Personne charitable.",
        contexte: "Générosité.",
        exemple: "« A l'a le cœur sur la main. »"
    },
    {
        mot: "avoir les deux pieds dans la même bottine",
        type: "expression",
        definition: "Être maladroit, pas dégourdi.",
        signification: "Empêtré.",
        contexte: "Maladresse.",
        exemple: "« Y'a les deux pieds dans la même bottine. »"
    },
    {
        mot: "avoir les yeux dans le même trou",
        type: "expression",
        definition: "Être très fatigué ou saoul.",
        signification: "Yeux qui louchent de fatigue.",
        contexte: "Fatigue.",
        exemple: "« T'as les yeux dans le même trou! »"
    },
    {
        mot: "c'est de valeur",
        type: "expression",
        definition: "C'est dommage.",
        signification: "C'est regrettable.",
        contexte: "Regret.",
        exemple: "« C'est de valeur qu'y pleuve. »"
    },
    {
        mot: "câline de bine",
        type: "expression",
        definition: "Exclamation de surprise.",
        signification: "Forme atténuée.",
        contexte: "Surprise.",
        exemple: "« Câline de bine, t'as-tu vu ça! »"
    },
    {
        mot: "cogner des clous",
        type: "expression",
        definition: "S'endormir, somnoler.",
        signification: "Piquer du nez.",
        contexte: "Fatigue.",
        exemple: "« Y cogne des clous devant la tivi. »"
    },
    {
        mot: "comme un coq l'fun",
        type: "expression",
        definition: "Très content, excité.",
        signification: "De bonne humeur.",
        contexte: "Bonheur.",
        exemple: "« Y'est comme un coq l'fun! »"
    },
    {
        mot: "de même",
        type: "expression",
        definition: "Comme ça, de cette façon.",
        signification: "De cette manière.",
        contexte: "Explication.",
        exemple: "« C'est arrivé de même. »"
    },
    {
        mot: "donner son quatre pour cent",
        type: "expression",
        definition: "Donner son opinion sans retenue.",
        signification: "Dire ce qu'on pense.",
        contexte: "Opinion.",
        exemple: "« J'y ai donné mon quatre pour cent! »"
    },
    {
        mot: "être assis sur son steak",
        type: "expression",
        definition: "Ne rien faire, être paresseux.",
        signification: "Rester inactif.",
        contexte: "Paresse.",
        exemple: "« Arrête d'être assis sur ton steak! »"
    },
    {
        mot: "être dans la dèche",
        type: "expression",
        definition: "Être sans argent.",
        signification: "Être fauché.",
        contexte: "Finances.",
        exemple: "« Chus dans la dèche. »"
    },
    {
        mot: "être dans la lune",
        type: "expression",
        definition: "Être distrait, rêveur.",
        signification: "Ne pas être attentif.",
        contexte: "Distraction.",
        exemple: "« T'es dans la lune ou quoi? »"
    },
    {
        mot: "être dans les patates",
        type: "expression",
        definition: "Se tromper complètement.",
        signification: "Avoir tout faux.",
        contexte: "Erreur.",
        exemple: "« T'es dans les patates! »"
    },
    {
        mot: "être su'l gros nerf",
        type: "expression",
        definition: "Être énervé, sur les nerfs.",
        signification: "Très stressé.",
        contexte: "Stress.",
        exemple: "« Chus su'l gros nerf à matin. »"
    },
    {
        mot: "faire du pouce",
        type: "expression",
        definition: "Faire de l'auto-stop.",
        signification: "Demander un lift.",
        contexte: "Transport.",
        exemple: "« Y fait du pouce pour se rendre à Québec. »"
    },
    {
        mot: "faire la baboune",
        type: "expression",
        definition: "Bouder, faire la moue.",
        signification: "Être de mauvaise humeur.",
        contexte: "Humeur.",
        exemple: "« Fais pas la baboune! »"
    },
    {
        mot: "faire patate",
        type: "expression",
        definition: "Échouer.",
        signification: "Rater.",
        contexte: "Échec.",
        exemple: "« Mon projet a fait patate. »"
    },
    {
        mot: "faire son frais",
        type: "expression",
        definition: "Être prétentieux.",
        signification: "Se croire supérieur.",
        contexte: "Arrogance.",
        exemple: "« Fais pas ton frais! »"
    },
    {
        mot: "lâche pas la patate",
        type: "expression",
        definition: "Continue, persévère.",
        signification: "Ne lâche pas.",
        contexte: "Encouragement.",
        exemple: "« Lâche pas la patate, t'es capable! »"
    },
    {
        mot: "ma grand-foi du bon Dieu",
        type: "expression",
        definition: "Expression de surprise ou affirmation.",
        signification: "Je le jure.",
        contexte: "Affirmation.",
        exemple: "« Ma grand-foi du bon Dieu, c'est vrai! »"
    },
    {
        mot: "manger ses bas",
        type: "expression",
        definition: "Être très nerveux ou jaloux.",
        signification: "Ronger son frein.",
        contexte: "Nervosité.",
        exemple: "« Y mange ses bas à l'attendre. »"
    },
    {
        mot: "mon œil",
        type: "expression",
        definition: "Expression d'incrédulité.",
        signification: "Je n'y crois pas.",
        contexte: "Doute.",
        exemple: "« Y'est malade? Mon œil! »"
    },
    {
        mot: "n'importe quoi",
        type: "expression",
        definition: "C'est ridicule, absurde.",
        signification: "N'a pas de sens.",
        contexte: "Critique.",
        exemple: "« C'est n'importe quoi cette affaire-là! »"
    },
    {
        mot: "ne pas avoir inventé le bouton à quatre trous",
        type: "expression",
        definition: "Ne pas être très intelligent.",
        signification: "Pas brillant.",
        contexte: "Insulte.",
        exemple: "« Y'a pas inventé le bouton à quatre trous. »"
    },
    {
        mot: "pas à peu près",
        type: "expression",
        definition: "Beaucoup, vraiment.",
        signification: "Intensifie une affirmation.",
        contexte: "Intensité.",
        exemple: "« Y'est fatigué pas à peu près. »"
    },
    {
        mot: "pas de trouble",
        type: "expression",
        definition: "Pas de problème.",
        signification: "C'est correct.",
        contexte: "Accord.",
        exemple: "« Pas de trouble, j'men occupe. »"
    },
    {
        mot: "pas pire",
        type: "expression",
        definition: "Assez bien, correct.",
        signification: "Positif modéré.",
        contexte: "Évaluation.",
        exemple: "« Comment ça va? - Pas pire! »"
    },
    {
        mot: "péter de la broue",
        type: "expression",
        definition: "Se vanter.",
        signification: "Fanfaronner.",
        contexte: "Vantardise.",
        exemple: "« Y arrête pas de péter de la broue. »"
    },
    {
        mot: "pogner les nerfs",
        type: "expression",
        definition: "S'énerver, perdre patience.",
        signification: "Se mettre en colère.",
        contexte: "Colère.",
        exemple: "« J'ai pogné les nerfs! »"
    },
    {
        mot: "prendre une débarque",
        type: "expression",
        definition: "Tomber, subir un échec.",
        signification: "Chuter ou échouer.",
        contexte: "Chute/Échec.",
        exemple: "« Y'a pris une méchante débarque! »"
    },
    {
        mot: "se faire passer un sapin",
        type: "expression",
        definition: "Se faire arnaquer.",
        signification: "Être trompé.",
        contexte: "Arnaque.",
        exemple: "« Y s'est fait passer un sapin. »"
    },
    {
        mot: "se grouiller le cul",
        type: "expression",
        definition: "Se dépêcher.",
        signification: "Se bouger.",
        contexte: "Rapidité.",
        exemple: "« Grouille-toi le cul! »"
    },
    {
        mot: "se peter la yeule",
        type: "expression",
        definition: "Tomber violemment.",
        signification: "Se planter.",
        contexte: "Chute.",
        exemple: "« Y s'est pété la yeule en ski. »"
    },
    {
        mot: "se tirer une bûche",
        type: "expression",
        definition: "S'asseoir, prendre une chaise.",
        signification: "Prendre place.",
        contexte: "Action.",
        exemple: "« Tire-toi une bûche! »"
    },
    {
        mot: "sentir le swing",
        type: "expression",
        definition: "Sentir mauvais, la transpiration.",
        signification: "Puer.",
        contexte: "Odeur.",
        exemple: "« Tu sens le swing! »"
    },
    {
        mot: "tombe en amour",
        type: "expression",
        definition: "Tomber amoureux.",
        signification: "De l'anglais 'fall in love'.",
        contexte: "Amour.",
        exemple: "« Chus tombé en amour. »"
    },
    {
        mot: "tourner les coins ronds",
        type: "expression",
        definition: "Bâcler le travail.",
        signification: "Faire vite et mal.",
        contexte: "Travail.",
        exemple: "« Y tourne les coins ronds. »"
    },
    {
        mot: "virer une brosse",
        type: "expression",
        definition: "Se saouler.",
        signification: "Boire beaucoup.",
        contexte: "Alcool.",
        exemple: "« Y'a viré une brosse hier soir. »"
    },
    {
        mot: "y'a pas de quoi fouetter un chat",
        type: "expression",
        definition: "Ce n'est pas grave.",
        signification: "Pas important.",
        contexte: "Relativisation.",
        exemple: "« Y'a pas de quoi fouetter un chat. »"
    },
    
    // --- ADJECTIFS ET NOMS ADDITIONNELS ---
    {
        mot: "accoté",
        type: "adjectif",
        definition: "En couple sans être marié.",
        signification: "Concubinage.",
        contexte: "Relation.",
        exemple: "« Y sont accotés depuis 5 ans. »"
    },
    {
        mot: "attoké",
        type: "adjectif",
        definition: "Bien habillé, élégant.",
        signification: "Chic.",
        contexte: "Apparence.",
        exemple: "« T'es ben attoké à soir! »"
    },
    {
        mot: "bardasseux",
        type: "adjectif",
        definition: "Agité, bruyant.",
        signification: "Qui fait du bruit.",
        contexte: "Bruit.",
        exemple: "« Les enfants sont bardasseux. »"
    },
    {
        mot: "bibittes",
        type: "nom féminin pluriel",
        definition: "Insectes, ou problèmes.",
        signification: "Bestioles ou soucis.",
        contexte: "Nature/Psychologie.",
        exemple: "« Y'a des bibittes dans le jardin. »"
    },
    {
        mot: "binne",
        type: "nom féminin",
        definition: "Fève au lard.",
        signification: "Haricot.",
        contexte: "Alimentation.",
        exemple: "« Des binnes au lard. »"
    },
    {
        mot: "blonde",
        type: "nom féminin",
        definition: "Petite amie, copine.",
        signification: "Girlfriend.",
        contexte: "Relation.",
        exemple: "« C'est ma blonde. »"
    },
    {
        mot: "bobo",
        type: "nom masculin",
        definition: "Petite blessure.",
        signification: "Douleur légère.",
        contexte: "Santé.",
        exemple: "« T'as un bobo? »"
    },
    {
        mot: "bottine",
        type: "nom féminin",
        definition: "Botte courte.",
        signification: "Chaussure montante.",
        contexte: "Chaussure.",
        exemple: "« Mets tes bottines. »"
    },
    {
        mot: "boucane",
        type: "nom féminin",
        definition: "Fumée.",
        signification: "Vapeur de combustion.",
        contexte: "Feu.",
        exemple: "« Y'a de la boucane partout! »"
    },
    {
        mot: "broche à foin",
        type: "adjectif",
        definition: "Mal fait, improvisé.",
        signification: "Bâclé.",
        contexte: "Qualité.",
        exemple: "« C'est monté broche à foin. »"
    },
    {
        mot: "chum",
        type: "nom masculin",
        definition: "Ami ou petit ami.",
        signification: "Copain.",
        contexte: "Relation.",
        exemple: "« C'est mon chum. »"
    },

    // === 100 NOUVEAUX MOTS - VARIÉS ===
    
    // --- TRAVAIL ET MÉTIERS ---
    {
        mot: "backer",
        type: "verbe",
        definition: "Appuyer, soutenir quelqu'un.",
        signification: "Supporter.",
        contexte: "Travail.",
        exemple: "« Mon boss m'a backé dans ce projet. »"
    },
    {
        mot: "bosser",
        type: "verbe",
        definition: "Travailler, ou diriger.",
        signification: "Faire le boss.",
        contexte: "Travail.",
        exemple: "« Arrête de me bosser! »"
    },
    {
        mot: "clairer",
        type: "verbe",
        definition: "Renvoyer, congédier.",
        signification: "Mettre à la porte.",
        contexte: "Travail.",
        exemple: "« Y s'est fait clairer de sa job. »"
    },
    {
        mot: "foreman",
        type: "nom masculin",
        definition: "Contremaître.",
        signification: "Chef d'équipe.",
        contexte: "Travail.",
        exemple: "« Le foreman veut te voir. »"
    },
    {
        mot: "freelance",
        type: "adjectif",
        definition: "Travailleur autonome.",
        signification: "À son compte.",
        contexte: "Travail.",
        exemple: "« Y travaille freelance. »"
    },
    {
        mot: "job",
        type: "nom féminin",
        definition: "Emploi, travail.",
        signification: "De l'anglais.",
        contexte: "Travail.",
        exemple: "« J'ai trouvé une bonne job. »"
    },
    {
        mot: "jobine",
        type: "nom féminin",
        definition: "Petit travail, boulot.",
        signification: "Emploi temporaire.",
        contexte: "Travail.",
        exemple: "« Y fait des jobines. »"
    },
    {
        mot: "overtime",
        type: "nom masculin",
        definition: "Heures supplémentaires.",
        signification: "Temps additionnel.",
        contexte: "Travail.",
        exemple: "« J'ai fait de l'overtime hier. »"
    },
    {
        mot: "paye",
        type: "nom féminin",
        definition: "Salaire, paie.",
        signification: "Rémunération.",
        contexte: "Travail.",
        exemple: "« C'est jour de paye! »"
    },
    {
        mot: "puncher",
        type: "verbe",
        definition: "Pointer au travail.",
        signification: "Enregistrer son arrivée.",
        contexte: "Travail.",
        exemple: "« Faut puncher à 8h. »"
    },
    {
        mot: "rush",
        type: "nom masculin",
        definition: "Période de grande activité.",
        signification: "Coup de feu.",
        contexte: "Travail.",
        exemple: "« C'est le rush au bureau. »"
    },
    {
        mot: "shift",
        type: "nom masculin",
        definition: "Quart de travail.",
        signification: "Horaire.",
        contexte: "Travail.",
        exemple: "« J'travaille le shift de nuit. »"
    },
    {
        mot: "slack",
        type: "nom masculin",
        definition: "Période calme au travail.",
        signification: "Temps mort.",
        contexte: "Travail.",
        exemple: "« C'est slack ces temps-ci. »"
    },
    {
        mot: "stagiaire",
        type: "nom",
        definition: "Personne en stage.",
        signification: "Apprenti.",
        contexte: "Travail.",
        exemple: "« Le stagiaire apprend vite. »"
    },
    {
        mot: "tip",
        type: "nom masculin",
        definition: "Pourboire.",
        signification: "De l'anglais.",
        contexte: "Service.",
        exemple: "« Y m'a laissé un bon tip. »"
    },
    
    // --- SPORTS ET LOISIRS ---
    {
        mot: "aréna",
        type: "nom masculin",
        definition: "Patinoire couverte.",
        signification: "Centre sportif de hockey.",
        contexte: "Sport.",
        exemple: "« On joue à l'aréna à soir. »"
    },
    {
        mot: "bâton",
        type: "nom masculin",
        definition: "Crosse de hockey.",
        signification: "Équipement de hockey.",
        contexte: "Hockey.",
        exemple: "« Mon bâton est cassé. »"
    },
    {
        mot: "bleuet",
        type: "nom masculin",
        definition: "Myrtille, ou surnom des gens du Lac-Saint-Jean.",
        signification: "Petit fruit ou habitant.",
        contexte: "Fruit/Région.",
        exemple: "« Des bleuets du Lac-Saint-Jean. »"
    },
    {
        mot: "brasser la cage",
        type: "expression",
        definition: "Provoquer, déranger.",
        signification: "Créer de l'agitation.",
        contexte: "Sport/Vie.",
        exemple: "« Y'aime brasser la cage. »"
    },
    {
        mot: "cabane à sucre",
        type: "nom féminin",
        definition: "Érablière où on produit le sirop.",
        signification: "Lieu de production de sirop d'érable.",
        contexte: "Tradition.",
        exemple: "« On va à la cabane à sucre au printemps. »"
    },
    {
        mot: "caler",
        type: "verbe",
        definition: "Boire d'un trait, ou s'enfoncer.",
        signification: "Avaler vite ou couler.",
        contexte: "Boisson/Action.",
        exemple: "« Y'a calé sa bière. »"
    },
    {
        mot: "camper",
        type: "verbe",
        definition: "Faire du camping.",
        signification: "Dormir sous la tente.",
        contexte: "Loisir.",
        exemple: "« On va camper en fin de semaine. »"
    },
    {
        mot: "chalet",
        type: "nom masculin",
        definition: "Maison de campagne.",
        signification: "Résidence secondaire.",
        contexte: "Loisir.",
        exemple: "« On passe l'été au chalet. »"
    },
    {
        mot: "chambre des joueurs",
        type: "nom féminin",
        definition: "Vestiaire.",
        signification: "Local pour les sportifs.",
        contexte: "Sport.",
        exemple: "« Y'est dans la chambre des joueurs. »"
    },
    {
        mot: "draveur",
        type: "nom masculin",
        definition: "Bûcheron qui guide les billots sur l'eau.",
        signification: "Métier traditionnel.",
        contexte: "Histoire.",
        exemple: "« Mon arrière-grand-père était draveur. »"
    },
    {
        mot: "feu de camp",
        type: "nom masculin",
        definition: "Feu en plein air.",
        signification: "Pour se réchauffer ou cuire.",
        contexte: "Camping.",
        exemple: "« On fait un feu de camp à soir. »"
    },
    {
        mot: "game",
        type: "nom féminin",
        definition: "Partie, match.",
        signification: "De l'anglais.",
        contexte: "Sport.",
        exemple: "« Y'a une game des Canadiens à soir. »"
    },
    {
        mot: "goalkeeper",
        type: "nom masculin",
        definition: "Gardien de but.",
        signification: "Goaler.",
        contexte: "Hockey.",
        exemple: "« Le goalkeeper a fait 40 arrêts. »"
    },
    {
        mot: "hockey bottine",
        type: "nom masculin",
        definition: "Hockey de rue, informel.",
        signification: "Hockey sans équipement.",
        contexte: "Sport.",
        exemple: "« On joue au hockey bottine dans rue. »"
    },
    {
        mot: "motoneige",
        type: "nom féminin",
        definition: "Véhicule pour la neige, skidoo.",
        signification: "Engin motorisé.",
        contexte: "Loisir.",
        exemple: "« On fait de la motoneige en hiver. »"
    },
    {
        mot: "patiner",
        type: "verbe",
        definition: "Faire du patin, ou éviter de répondre.",
        signification: "Glisser sur glace ou esquiver.",
        contexte: "Sport/Discussion.",
        exemple: "« Y patine pour pas répondre. »"
    },
    {
        mot: "pêche blanche",
        type: "nom féminin",
        definition: "Pêche sur la glace.",
        signification: "Pêche hivernale.",
        contexte: "Loisir.",
        exemple: "« On fait de la pêche blanche sur le lac. »"
    },
    {
        mot: "période",
        type: "nom féminin",
        definition: "Tiers d'un match de hockey.",
        signification: "Division du match.",
        contexte: "Hockey.",
        exemple: "« Y reste 5 minutes à la troisième période. »"
    },
    {
        mot: "quatre-roues",
        type: "nom masculin",
        definition: "VTT, quad.",
        signification: "Véhicule tout-terrain.",
        contexte: "Loisir.",
        exemple: "« Y fait du quatre-roues dans le bois. »"
    },
    {
        mot: "rondelle",
        type: "nom féminin",
        definition: "Puck de hockey.",
        signification: "Disque de caoutchouc.",
        contexte: "Hockey.",
        exemple: "« La rondelle est dans le filet! »"
    },
    {
        mot: "zamboni",
        type: "nom masculin",
        definition: "Surfaceuse de glace.",
        signification: "Machine à nettoyer la patinoire.",
        contexte: "Hockey.",
        exemple: "« Le zamboni passe entre les périodes. »"
    },
    
    // --- FAMILLE ET RELATIONS ---
    {
        mot: "beau-frère",
        type: "nom masculin",
        definition: "Frère du conjoint, ou stéréotype d'homme sans classe.",
        signification: "Relation familiale ou péjoratif.",
        contexte: "Famille/Insulte.",
        exemple: "« Y'est habillé en beau-frère. »"
    },
    {
        mot: "bécoter",
        type: "verbe",
        definition: "Embrasser, faire des bisous.",
        signification: "Donner des becs.",
        contexte: "Affection.",
        exemple: "« Y arrêtent pas de se bécoter. »"
    },
    {
        mot: "bec",
        type: "nom masculin",
        definition: "Bisou, baiser.",
        signification: "Petit baiser.",
        contexte: "Affection.",
        exemple: "« Donne-moi un bec. »"
    },
    {
        mot: "belle-mère",
        type: "nom féminin",
        definition: "Mère du conjoint.",
        signification: "Relation familiale.",
        contexte: "Famille.",
        exemple: "« Ma belle-mère vient souper. »"
    },
    {
        mot: "catin",
        type: "nom féminin",
        definition: "Poupée.",
        signification: "Jouet d'enfant.",
        contexte: "Jouet.",
        exemple: "« A joue avec sa catin. »"
    },
    {
        mot: "chambreur",
        type: "nom masculin",
        definition: "Locataire d'une chambre.",
        signification: "Personne qui loue une pièce.",
        contexte: "Logement.",
        exemple: "« On a un chambreur au sous-sol. »"
    },
    {
        mot: "coloc",
        type: "nom",
        definition: "Colocataire.",
        signification: "Personne qui partage un logement.",
        contexte: "Logement.",
        exemple: "« Mon coloc est parti. »"
    },
    {
        mot: "créature",
        type: "nom féminin",
        definition: "Femme (vieilli ou péjoratif).",
        signification: "Terme vieillot.",
        contexte: "Personne.",
        exemple: "« C'est une belle créature. »"
    },
    {
        mot: "fréquentation",
        type: "nom féminin",
        definition: "Relation amoureuse, dating.",
        signification: "Période de cour.",
        contexte: "Relation.",
        exemple: "« Y sont en fréquentation. »"
    },
    {
        mot: "gardienne",
        type: "nom féminin",
        definition: "Baby-sitter.",
        signification: "Personne qui garde les enfants.",
        contexte: "Famille.",
        exemple: "« La gardienne arrive à 7h. »"
    },
    {
        mot: "grand-moman",
        type: "nom féminin",
        definition: "Grand-mère.",
        signification: "Terme affectueux.",
        contexte: "Famille.",
        exemple: "« Grand-moman fait des bons biscuits. »"
    },
    {
        mot: "grand-popa",
        type: "nom masculin",
        definition: "Grand-père.",
        signification: "Terme affectueux.",
        contexte: "Famille.",
        exemple: "« Grand-popa raconte des histoires. »"
    },
    {
        mot: "matante",
        type: "nom féminin",
        definition: "Tante, ou femme conservatrice.",
        signification: "Famille ou stéréotype.",
        contexte: "Famille.",
        exemple: "« Ma matante de Québec arrive. »"
    },
    {
        mot: "mononcle",
        type: "nom masculin",
        definition: "Oncle, ou homme dépassé.",
        signification: "Famille ou stéréotype.",
        contexte: "Famille.",
        exemple: "« C'est une joke de mononcle. »"
    },
    {
        mot: "mémère",
        type: "nom féminin",
        definition: "Grand-mère, ou femme commère.",
        signification: "Aînée ou cancanière.",
        contexte: "Famille.",
        exemple: "« Fais pas ta mémère! »"
    },
    {
        mot: "pépère",
        type: "nom masculin",
        definition: "Grand-père, ou tranquille.",
        signification: "Aîné ou calme.",
        contexte: "Famille/Adjectif.",
        exemple: "« On a passé une soirée pépère. »"
    },
    {
        mot: "pouponne",
        type: "nom féminin",
        definition: "Bébé, poupon.",
        signification: "Terme affectueux.",
        contexte: "Famille.",
        exemple: "« La p'tite pouponne est cute! »"
    },
    {
        mot: "ti-cul",
        type: "nom masculin",
        definition: "Jeune enfant, petit gars.",
        signification: "Enfant ou jeune.",
        contexte: "Famille.",
        exemple: "« Le ti-cul veut jouer dehors. »"
    },
    {
        mot: "veuve",
        type: "nom féminin",
        definition: "Femme dont le mari joue au hockey.",
        signification: "Veuve de hockey.",
        contexte: "Humour.",
        exemple: "« Les veuves de hockey se réunissent. »"
    },
    
    // --- ÉMOTIONS ET ÉTATS ---
    {
        mot: "abrier",
        type: "verbe",
        definition: "Couvrir, mettre une couverture.",
        signification: "Recouvrir.",
        contexte: "Action.",
        exemple: "« Abrie-toi ben. »"
    },
    {
        mot: "avoir hâte",
        type: "expression",
        definition: "Être impatient, attendre avec impatience.",
        signification: "Désirer ardemment.",
        contexte: "Émotion.",
        exemple: "« J'ai hâte aux vacances! »"
    },
    {
        mot: "badluck",
        type: "nom féminin",
        definition: "Malchance.",
        signification: "De l'anglais.",
        contexte: "Chance.",
        exemple: "« C'est la badluck! »"
    },
    {
        mot: "bleu",
        type: "adjectif",
        definition: "Triste, déprimé.",
        signification: "De l'anglais 'blue'.",
        contexte: "Émotion.",
        exemple: "« Chus bleu à soir. »"
    },
    {
        mot: "brûler",
        type: "verbe",
        definition: "Être très pressé.",
        signification: "Être en urgence.",
        contexte: "Urgence.",
        exemple: "« Ça brûle, faut partir! »"
    },
    {
        mot: "capoter",
        type: "verbe",
        definition: "Devenir fou, ou être excité.",
        signification: "Perdre la tête.",
        contexte: "Émotion.",
        exemple: "« J'ai capoté quand j'ai vu ça! »"
    },
    {
        mot: "chanter la pomme",
        type: "expression",
        definition: "Flirter, draguer.",
        signification: "Faire la cour.",
        contexte: "Séduction.",
        exemple: "« Y'est en train d'y chanter la pomme. »"
    },
    {
        mot: "chigner",
        type: "verbe",
        definition: "Pleurnicher, se plaindre.",
        signification: "Geindre.",
        contexte: "Plainte.",
        exemple: "« Arrête de chigner! »"
    },
    {
        mot: "écoeuré",
        type: "adjectif",
        definition: "Dégouté, en avoir marre.",
        signification: "Excédé.",
        contexte: "Émotion.",
        exemple: "« Chus écoeuré de cette situation. »"
    },
    {
        mot: "enragé",
        type: "adjectif",
        definition: "Très en colère.",
        signification: "Furieux.",
        contexte: "Colère.",
        exemple: "« Y'est enragé noir! »"
    },
    {
        mot: "être dans sa bulle",
        type: "expression",
        definition: "Être distrait, perdu dans ses pensées.",
        signification: "Ne pas être attentif.",
        contexte: "Distraction.",
        exemple: "« Y'est dans sa bulle. »"
    },
    {
        mot: "être su'l piton",
        type: "expression",
        definition: "Être en forme, alerte.",
        signification: "Être au top.",
        contexte: "Énergie.",
        exemple: "« Chus su'l piton à matin! »"
    },
    {
        mot: "excité comme une puce",
        type: "expression",
        definition: "Très excité, énervé.",
        signification: "Plein d'énergie.",
        contexte: "Émotion.",
        exemple: "« Y'est excité comme une puce! »"
    },
    {
        mot: "fâché noir",
        type: "expression",
        definition: "Très fâché.",
        signification: "En grande colère.",
        contexte: "Colère.",
        exemple: "« Y'est fâché noir! »"
    },
    {
        mot: "fatigué mort",
        type: "expression",
        definition: "Extrêmement fatigué.",
        signification: "Épuisé.",
        contexte: "Fatigue.",
        exemple: "« Chus fatigué mort. »"
    },
    {
        mot: "feelé",
        type: "adjectif",
        definition: "Un peu fou, bizarre.",
        signification: "Dérangé.",
        contexte: "Caractère.",
        exemple: "« Y'est pas mal feelé. »"
    },
    {
        mot: "fou comme un balai",
        type: "expression",
        definition: "Complètement fou.",
        signification: "Dérangé.",
        contexte: "Caractère.",
        exemple: "« Y'est fou comme un balai! »"
    },
    {
        mot: "gelé",
        type: "adjectif",
        definition: "Sous l'effet de drogues.",
        signification: "Intoxiqué.",
        contexte: "Drogue.",
        exemple: "« Y'est complètement gelé. »"
    },
    {
        mot: "gêné",
        type: "adjectif",
        definition: "Timide, embarrassé.",
        signification: "Mal à l'aise.",
        contexte: "Émotion.",
        exemple: "« Fais-toi pas gêné! »"
    },
    {
        mot: "mal pris",
        type: "adjectif",
        definition: "En difficulté, coincé.",
        signification: "Dans une mauvaise situation.",
        contexte: "Problème.",
        exemple: "« Chus mal pris. »"
    },
    {
        mot: "paqueté",
        type: "adjectif",
        definition: "Très saoul.",
        signification: "Ivre.",
        contexte: "Alcool.",
        exemple: "« Y'est paqueté ben raide. »"
    },
    {
        mot: "pompé",
        type: "adjectif",
        definition: "Excité, motivé.",
        signification: "Plein d'énergie.",
        contexte: "Émotion.",
        exemple: "« Chus pompé pour le show! »"
    },
    {
        mot: "rond",
        type: "adjectif",
        definition: "Saoul.",
        signification: "Ivre.",
        contexte: "Alcool.",
        exemple: "« Y'est rond comme une balle. »"
    },
    {
        mot: "saoul",
        type: "adjectif",
        definition: "Ivre.",
        signification: "Sous l'effet de l'alcool.",
        contexte: "Alcool.",
        exemple: "« Y'est saoul mort. »"
    },
    {
        mot: "stressé",
        type: "adjectif",
        definition: "Anxieux, nerveux.",
        signification: "Tendu.",
        contexte: "Émotion.",
        exemple: "« Chus stressé pour l'examen. »"
    },
    {
        mot: "su'l cul",
        type: "expression",
        definition: "Très surpris, renversé.",
        signification: "Étonné.",
        contexte: "Surprise.",
        exemple: "« Chus resté su'l cul! »"
    },
    {
        mot: "surpris",
        type: "adjectif",
        definition: "Étonné.",
        signification: "Pris au dépourvu.",
        contexte: "Émotion.",
        exemple: "« J'étais surpris de le voir. »"
    },
    {
        mot: "tombé en bas de sa chaise",
        type: "expression",
        definition: "Très surpris.",
        signification: "Stupéfait.",
        contexte: "Surprise.",
        exemple: "« J'ai tombé en bas de ma chaise! »"
    },
    {
        mot: "viré fou",
        type: "expression",
        definition: "Devenu fou.",
        signification: "A perdu la tête.",
        contexte: "Folie.",
        exemple: "« Y'a viré fou! »"
    },

    // === 100 NOUVEAUX MOTS - VARIÉS ===
    
    // --- TRANSPORT ET AUTOMOBILE ---
    {
        mot: "aubaine",
        type: "nom féminin",
        definition: "Bonne affaire, solde.",
        signification: "Prix avantageux.",
        contexte: "Commerce.",
        exemple: "« J'ai trouvé une aubaine! »"
    },
    {
        mot: "autobus",
        type: "nom masculin",
        definition: "Bus.",
        signification: "Transport en commun.",
        contexte: "Transport.",
        exemple: "« Je prends l'autobus pour aller travailler. »"
    },
    {
        mot: "brake",
        type: "nom masculin",
        definition: "Frein.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« Les brakes sont usés. »"
    },
    {
        mot: "bumper",
        type: "nom masculin",
        definition: "Pare-chocs.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« Le bumper est tout poqué. »"
    },
    {
        mot: "char",
        type: "nom masculin",
        definition: "Voiture, automobile.",
        signification: "Véhicule.",
        contexte: "Transport.",
        exemple: "« Mon char part pus. »"
    },
    {
        mot: "clutch",
        type: "nom féminin",
        definition: "Embrayage.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« La clutch est brûlée. »"
    },
    {
        mot: "dash",
        type: "nom masculin",
        definition: "Tableau de bord.",
        signification: "De l'anglais 'dashboard'.",
        contexte: "Auto.",
        exemple: "« Y'a une lumière sur le dash. »"
    },
    {
        mot: "flat",
        type: "nom masculin",
        definition: "Crevaison, pneu crevé.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« J'ai pogné un flat. »"
    },
    {
        mot: "gaz",
        type: "nom masculin",
        definition: "Essence.",
        signification: "Carburant.",
        contexte: "Auto.",
        exemple: "« Faut mettre du gaz. »"
    },
    {
        mot: "hood",
        type: "nom masculin",
        definition: "Capot.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« Ouvre le hood. »"
    },
    {
        mot: "licence",
        type: "nom féminin",
        definition: "Permis de conduire, ou plaque.",
        signification: "Document ou immatriculation.",
        contexte: "Auto.",
        exemple: "« J'ai oublié ma licence. »"
    },
    {
        mot: "lift",
        type: "nom masculin",
        definition: "Transport gratuit en voiture.",
        signification: "Covoiturage.",
        contexte: "Transport.",
        exemple: "« Tu me donnes-tu un lift? »"
    },
    {
        mot: "muffler",
        type: "nom masculin",
        definition: "Silencieux d'échappement.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« Le muffler est percé. »"
    },
    {
        mot: "parker",
        type: "verbe",
        definition: "Stationner.",
        signification: "De l'anglais 'to park'.",
        contexte: "Auto.",
        exemple: "« J'ai parké en double. »"
    },
    {
        mot: "pimp",
        type: "adjectif",
        definition: "Personnalisé, amélioré.",
        signification: "Customisé.",
        contexte: "Auto.",
        exemple: "« Son char est tout pimpé. »"
    },
    {
        mot: "rouler",
        type: "verbe",
        definition: "Conduire, avancer.",
        signification: "Se déplacer en véhicule.",
        contexte: "Transport.",
        exemple: "« On roule depuis 3 heures. »"
    },
    {
        mot: "spare",
        type: "nom masculin",
        definition: "Pneu de secours, ou surplus.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« Sors le spare du coffre. »"
    },
    {
        mot: "steering",
        type: "nom masculin",
        definition: "Volant.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« Le steering est dur. »"
    },
    {
        mot: "tank",
        type: "nom masculin",
        definition: "Réservoir d'essence.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« Le tank est vide. »"
    },
    {
        mot: "tirer",
        type: "verbe",
        definition: "Remorquer.",
        signification: "Tracter un véhicule.",
        contexte: "Auto.",
        exemple: "« Faut faire tirer mon char. »"
    },
    {
        mot: "towing",
        type: "nom masculin",
        definition: "Remorquage.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« J'ai appelé le towing. »"
    },
    {
        mot: "transmission",
        type: "nom féminin",
        definition: "Boîte de vitesses.",
        signification: "Mécanisme de changement.",
        contexte: "Auto.",
        exemple: "« La transmission est finie. »"
    },
    {
        mot: "truck",
        type: "nom masculin",
        definition: "Camion, pick-up.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« Y conduit un gros truck. »"
    },
    {
        mot: "valise",
        type: "nom féminin",
        definition: "Coffre de voiture.",
        signification: "Malle.",
        contexte: "Auto.",
        exemple: "« Mets ça dans la valise. »"
    },
    {
        mot: "wiper",
        type: "nom masculin",
        definition: "Essuie-glace.",
        signification: "De l'anglais.",
        contexte: "Auto.",
        exemple: "« Mes wipers marchent pus. »"
    },
    
    // --- MAISON ET LOGEMENT ---
    {
        mot: "appartement",
        type: "nom masculin",
        definition: "Logement.",
        signification: "Habitation.",
        contexte: "Logement.",
        exemple: "« J'ai un appartement sur Papineau. »"
    },
    {
        mot: "auvent",
        type: "nom masculin",
        definition: "Abri au-dessus d'une porte ou fenêtre.",
        signification: "Protection.",
        contexte: "Maison.",
        exemple: "« Y'a de la neige sur l'auvent. »"
    },
    {
        mot: "balcon",
        type: "nom masculin",
        definition: "Balcon ou galerie.",
        signification: "Plateforme extérieure.",
        contexte: "Maison.",
        exemple: "« Viens-tu sur le balcon? »"
    },
    {
        mot: "bloc",
        type: "nom masculin",
        definition: "Immeuble à logements.",
        signification: "Building.",
        contexte: "Logement.",
        exemple: "« Y reste dans le bloc d'en face. »"
    },
    {
        mot: "cave",
        type: "nom féminin",
        definition: "Sous-sol.",
        signification: "Basement.",
        contexte: "Maison.",
        exemple: "« Le linge est dans la cave. »"
    },
    {
        mot: "chambre de bain",
        type: "nom féminin",
        definition: "Salle de bain.",
        signification: "Bathroom.",
        contexte: "Maison.",
        exemple: "« La chambre de bain est en haut. »"
    },
    {
        mot: "chassis",
        type: "nom masculin",
        definition: "Fenêtre.",
        signification: "Ouverture vitrée.",
        contexte: "Maison.",
        exemple: "« Ferme le chassis, y fait frette. »"
    },
    {
        mot: "condo",
        type: "nom masculin",
        definition: "Condominium.",
        signification: "Appartement dont on est propriétaire.",
        contexte: "Logement.",
        exemple: "« Y s'est acheté un condo. »"
    },
    {
        mot: "cour",
        type: "nom féminin",
        definition: "Jardin arrière.",
        signification: "Backyard.",
        contexte: "Maison.",
        exemple: "« Les enfants jouent dans la cour. »"
    },
    {
        mot: "divan",
        type: "nom masculin",
        definition: "Canapé, sofa.",
        signification: "Meuble de salon.",
        contexte: "Mobilier.",
        exemple: "« Y dort sur le divan. »"
    },
    {
        mot: "entrée",
        type: "nom féminin",
        definition: "Allée de garage.",
        signification: "Driveway.",
        contexte: "Maison.",
        exemple: "« Déneige l'entrée. »"
    },
    {
        mot: "fournaise",
        type: "nom féminin",
        definition: "Chaudière, système de chauffage.",
        signification: "Furnace.",
        contexte: "Maison.",
        exemple: "« La fournaise marche pus. »"
    },
    {
        mot: "galerie",
        type: "nom féminin",
        definition: "Balcon, véranda.",
        signification: "Porch.",
        contexte: "Maison.",
        exemple: "« On jase sur la galerie. »"
    },
    {
        mot: "garde-robe",
        type: "nom féminin",
        definition: "Placard, penderie.",
        signification: "Closet.",
        contexte: "Maison.",
        exemple: "« Mets ton coat dans la garde-robe. »"
    },
    {
        mot: "loyer",
        type: "nom masculin",
        definition: "Appartement ou prix du bail.",
        signification: "Logement loué.",
        contexte: "Logement.",
        exemple: "« Mon loyer coûte cher. »"
    },
    {
        mot: "perron",
        type: "nom masculin",
        definition: "Escalier extérieur, marches d'entrée.",
        signification: "Steps.",
        contexte: "Maison.",
        exemple: "« Y'est assis sur le perron. »"
    },
    {
        mot: "plancher",
        type: "nom masculin",
        definition: "Sol, parquet.",
        signification: "Floor.",
        contexte: "Maison.",
        exemple: "« Lave le plancher. »"
    },
    {
        mot: "shed",
        type: "nom masculin",
        definition: "Cabanon, remise.",
        signification: "De l'anglais.",
        contexte: "Maison.",
        exemple: "« Les outils sont dans le shed. »"
    },
    {
        mot: "sous-sol",
        type: "nom masculin",
        definition: "Cave, niveau inférieur.",
        signification: "Basement.",
        contexte: "Maison.",
        exemple: "« Y'a un appartement au sous-sol. »"
    },
    {
        mot: "tapis",
        type: "nom masculin",
        definition: "Moquette ou tapis.",
        signification: "Carpet.",
        contexte: "Maison.",
        exemple: "« Le tapis est sale. »"
    },
    
    // --- NOURRITURE ADDITIONNELLE ---
    {
        mot: "assiette froide",
        type: "nom féminin",
        definition: "Plat de viandes froides et salades.",
        signification: "Cold cuts.",
        contexte: "Cuisine.",
        exemple: "« On mange une assiette froide à soir. »"
    },
    {
        mot: "balloune",
        type: "nom féminin",
        definition: "Ballon, ou ventre de bière.",
        signification: "Balloon ou bedaine.",
        contexte: "Objet/Corps.",
        exemple: "« Y'a une grosse balloune de bière. »"
    },
    {
        mot: "beurre de peanut",
        type: "nom masculin",
        definition: "Beurre d'arachide.",
        signification: "Peanut butter.",
        contexte: "Alimentation.",
        exemple: "« Du pain avec du beurre de peanut. »"
    },
    {
        mot: "cenne",
        type: "nom féminin",
        definition: "Cent, sou.",
        signification: "Pièce de monnaie.",
        contexte: "Argent.",
        exemple: "« J'ai pas une cenne. »"
    },
    {
        mot: "chaudron",
        type: "nom masculin",
        definition: "Casserole, marmite.",
        signification: "Pot de cuisine.",
        contexte: "Cuisine.",
        exemple: "« Mets le chaudron sur le poêle. »"
    },
    {
        mot: "chips",
        type: "nom féminin pluriel",
        definition: "Croustilles.",
        signification: "De l'anglais.",
        contexte: "Alimentation.",
        exemple: "« Un sac de chips. »"
    },
    {
        mot: "coke diète",
        type: "nom féminin",
        definition: "Coca-Cola diète.",
        signification: "Diet Coke.",
        contexte: "Boisson.",
        exemple: "« Une coke diète s'il vous plaît. »"
    },
    {
        mot: "cornet de crème glacée",
        type: "nom masculin",
        definition: "Cône de glace.",
        signification: "Ice cream cone.",
        contexte: "Dessert.",
        exemple: "« Un cornet de crème glacée au chocolat. »"
    },
    {
        mot: "déjeuner",
        type: "nom masculin",
        definition: "Petit-déjeuner.",
        signification: "Breakfast.",
        contexte: "Repas.",
        exemple: "« On déjeune à 8h. »"
    },
    {
        mot: "dîner",
        type: "nom masculin",
        definition: "Repas du midi.",
        signification: "Lunch.",
        contexte: "Repas.",
        exemple: "« C'est l'heure du dîner. »"
    },
    {
        mot: "épicerie",
        type: "nom féminin",
        definition: "Courses, ou magasin d'alimentation.",
        signification: "Groceries.",
        contexte: "Commerce.",
        exemple: "« J'vais faire l'épicerie. »"
    },
    {
        mot: "liqueur",
        type: "nom féminin",
        definition: "Boisson gazeuse.",
        signification: "Soft drink.",
        contexte: "Boisson.",
        exemple: "« Tu veux-tu une liqueur? »"
    },
    {
        mot: "lunch",
        type: "nom masculin",
        definition: "Repas apporté, boîte à lunch.",
        signification: "De l'anglais.",
        contexte: "Repas.",
        exemple: "« J'ai oublié mon lunch. »"
    },
    {
        mot: "patate pilée",
        type: "nom féminin",
        definition: "Purée de pommes de terre.",
        signification: "Mashed potatoes.",
        contexte: "Cuisine.",
        exemple: "« Des patates pilées avec de la sauce. »"
    },
    {
        mot: "pogo",
        type: "nom masculin",
        definition: "Saucisse enrobée de pâte frite.",
        signification: "Corn dog.",
        contexte: "Alimentation.",
        exemple: "« Un pogo avec de la moutarde. »"
    },
    {
        mot: "restant",
        type: "nom masculin",
        definition: "Restes de nourriture.",
        signification: "Leftovers.",
        contexte: "Cuisine.",
        exemple: "« On mange des restants à soir. »"
    },
    {
        mot: "sirop de poteau",
        type: "nom masculin",
        definition: "Faux sirop d'érable.",
        signification: "Sirop industriel.",
        contexte: "Alimentation.",
        exemple: "« C'est du sirop de poteau ça! »"
    },
    {
        mot: "souper",
        type: "nom masculin",
        definition: "Repas du soir.",
        signification: "Dinner.",
        contexte: "Repas.",
        exemple: "« Le souper est prêt! »"
    },
    {
        mot: "toast",
        type: "nom féminin",
        definition: "Rôtie, pain grillé.",
        signification: "De l'anglais.",
        contexte: "Déjeuner.",
        exemple: "« Des toasts avec du beurre. »"
    },
    {
        mot: "viande à chien",
        type: "nom féminin",
        definition: "Viande hachée bon marché.",
        signification: "Viande de mauvaise qualité.",
        contexte: "Alimentation.",
        exemple: "« C'est de la viande à chien ça! »"
    },
    
    // --- EXPRESSIONS COLORÉES ---
    {
        mot: "avoir du chemin à faire",
        type: "expression",
        definition: "Avoir beaucoup à apprendre.",
        signification: "Manquer d'expérience.",
        contexte: "Apprentissage.",
        exemple: "« T'as du chemin à faire! »"
    },
    {
        mot: "avoir la tête enflée",
        type: "expression",
        definition: "Être prétentieux.",
        signification: "Avoir la grosse tête.",
        contexte: "Caractère.",
        exemple: "« Y'a la tête enflée depuis sa promotion. »"
    },
    {
        mot: "c'est pas la fin du monde",
        type: "expression",
        definition: "Ce n'est pas grave.",
        signification: "Relativiser.",
        contexte: "Consolation.",
        exemple: "« C'est pas la fin du monde! »"
    },
    {
        mot: "c'est pas sorcier",
        type: "expression",
        definition: "C'est facile.",
        signification: "Pas compliqué.",
        contexte: "Facilité.",
        exemple: "« C'est pas sorcier, tu vas voir. »"
    },
    {
        mot: "ça a pas d'allure",
        type: "expression",
        definition: "C'est absurde, n'a pas de sens.",
        signification: "Inacceptable.",
        contexte: "Critique.",
        exemple: "« Ça a pas d'allure ce prix-là! »"
    },
    {
        mot: "ça fait la job",
        type: "expression",
        definition: "C'est suffisant.",
        signification: "Ça fonctionne.",
        contexte: "Satisfaction.",
        exemple: "« C'est pas parfait mais ça fait la job. »"
    },
    {
        mot: "ça me dit quelque chose",
        type: "expression",
        definition: "Ça me semble familier.",
        signification: "Je reconnais.",
        contexte: "Mémoire.",
        exemple: "« Ton nom, ça me dit quelque chose. »"
    },
    {
        mot: "ça prend pas la tête à Papineau",
        type: "expression",
        definition: "Pas besoin d'être un génie.",
        signification: "C'est facile à comprendre.",
        contexte: "Intelligence.",
        exemple: "« Ça prend pas la tête à Papineau! »"
    },
    {
        mot: "ça tient pas debout",
        type: "expression",
        definition: "C'est illogique.",
        signification: "Ça n'a pas de sens.",
        contexte: "Logique.",
        exemple: "« Ton histoire ça tient pas debout. »"
    },
    {
        mot: "cherche pas de midi à quatorze heures",
        type: "expression",
        definition: "Ne complique pas les choses.",
        signification: "Reste simple.",
        contexte: "Conseil.",
        exemple: "« Cherche pas de midi à quatorze heures. »"
    },
    {
        mot: "coudon",
        type: "interjection",
        definition: "Donc, alors, mais.",
        signification: "Expression de surprise ou conclusion.",
        contexte: "Conversation.",
        exemple: "« Coudon, qu'est-ce qui se passe? »"
    },
    {
        mot: "envoye donc",
        type: "expression",
        definition: "Allez, vas-y.",
        signification: "Encouragement.",
        contexte: "Encouragement.",
        exemple: "« Envoye donc, essaie-le! »"
    },
    {
        mot: "être aux oiseaux",
        type: "expression",
        definition: "Être très content.",
        signification: "Être ravi.",
        contexte: "Bonheur.",
        exemple: "« A l'est aux oiseaux! »"
    },
    {
        mot: "être de bonne heure sur le piton",
        type: "expression",
        definition: "Être matinal.",
        signification: "Se lever tôt.",
        contexte: "Matin.",
        exemple: "« T'es de bonne heure sur le piton! »"
    },
    {
        mot: "être sur son X",
        type: "expression",
        definition: "Être à son meilleur.",
        signification: "Être en forme.",
        contexte: "Performance.",
        exemple: "« Y'était sur son X hier! »"
    },
    {
        mot: "faire un fou de soi",
        type: "expression",
        definition: "Se ridiculiser.",
        signification: "Avoir l'air fou.",
        contexte: "Embarras.",
        exemple: "« J'ai fait un fou de moi. »"
    },
    {
        mot: "mets-en",
        type: "expression",
        definition: "Absolument, et comment!",
        signification: "Forte affirmation.",
        contexte: "Accord.",
        exemple: "« C'est bon? - Mets-en! »"
    },
    {
        mot: "mon Dieu Seigneur",
        type: "expression",
        definition: "Expression de surprise.",
        signification: "Oh mon Dieu.",
        contexte: "Surprise.",
        exemple: "« Mon Dieu Seigneur, qu'est-ce qui s'est passé? »"
    },
    {
        mot: "pour vrai",
        type: "expression",
        definition: "Vraiment, sérieusement.",
        signification: "For real.",
        contexte: "Affirmation.",
        exemple: "« Tu me niaises-tu? Pour vrai? »"
    },
    {
        mot: "voyons donc",
        type: "expression",
        definition: "Expression d'incrédulité ou surprise.",
        signification: "Allons donc.",
        contexte: "Surprise.",
        exemple: "« Voyons donc, c'est pas vrai! »"
    }
];

// Fonction de recherche
function search() {
    const input = document.getElementById('searchInput').value.trim().toLowerCase();
    const resultsDiv = document.getElementById('results');
    const noResultsDiv = document.getElementById('noResults');
    
    if (input === '') {
        resultsDiv.classList.add('hidden');
        noResultsDiv.classList.add('hidden');
        return;
    }

    // Chercher le mot ou expression
    const result = dictionnaire.find(item => 
        item.mot.toLowerCase() === input || 
        item.mot.toLowerCase().includes(input)
    );

    if (result) {
        displayResult(result);
        resultsDiv.classList.remove('hidden');
        noResultsDiv.classList.add('hidden');
    } else {
        document.getElementById('searchTerm').textContent = input;
        resultsDiv.classList.add('hidden');
        noResultsDiv.classList.remove('hidden');
    }
}

// Afficher le résultat
function displayResult(result) {
    document.getElementById('resultWord').textContent = result.mot;
    document.getElementById('resultType').textContent = result.type;
    document.getElementById('resultDefinition').textContent = result.definition;
    document.getElementById('resultMeaning').textContent = result.signification;
    document.getElementById('resultContext').textContent = result.contexte;
    document.getElementById('resultExample').textContent = result.exemple;
}

// Gérer la touche Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        search();
    }
}

// Mot au hasard
function randomWord() {
    const randomIndex = Math.floor(Math.random() * dictionnaire.length);
    const randomResult = dictionnaire[randomIndex];
    document.getElementById('searchInput').value = randomResult.mot;
    displayResult(randomResult);
    document.getElementById('results').classList.remove('hidden');
    document.getElementById('noResults').classList.add('hidden');
}

// Retour à l'accueil
function goHome() {
    document.getElementById('searchInput').value = '';
    document.getElementById('results').classList.add('hidden');
    document.getElementById('noResults').classList.add('hidden');
}
