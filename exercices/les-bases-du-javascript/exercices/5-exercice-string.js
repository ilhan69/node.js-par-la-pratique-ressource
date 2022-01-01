//Remplacer les # par le nombre de # accolés les un au autre
const input1 = '##### ## # ######';

//expect('5 2 1 6');



//Trouver le nombre de nombre premier dans l'interval 0 au nombre entrer en input
const input2 = 11;

//expect('5');



//ordonner les nombres du caclul dans l'ordre croissant
const input3 = '3+5+2';

//expect('2+3+5');



//ordonner les nombres du caclul dans l'ordre croissant
const input4 = 'AAACGATCTTGCGATCC';

//expect('5 5 3 4');



//déterminer si le mot contient plus de voyelle que de consonne
const input5 = 'developpeur';

//expect('consonants');



//verifier pour chaque chiffre du nombre, si soustraire le chiffre par 9 donne un nouveau chiffre plus petit, ci cela est vrai le conserver
const input6 = 160;

//expect('130');



//prendre la diagonale 11 2 5 1 de la matrice. Pour chacune des valeurs de chacune des ligne faire la sommes de la valeur + la valeur de la diagonale.
const input7 = ['2 7 6 11', 
                '5 8 2 1', 
                '3 5 7 9', 
                '1 3 9 4'];


//expect([ '13 18 17 22', 
//         '7 10 4 3', 
//         '8 10 12 14', 
//         '2 4 10 5' ]);



//reproduire la figure 
const width = 15;
const numberOfTriangles = 12;

const input9 = '# # ~ @';
const inputs = input9.split(' ');
const leftSide = inputs[0];
const rightSide = inputs[1];
const bottomSide = inputs[2];
const fill = inputs[3];


//expect(['
//#              #              #              #              #              #              #              #              #              #              #              #
//##             ##             ##             ##             ##             ##             ##             ##             ##             ##             ##             ##
//#@#            #@#            #@#            #@#            #@#            #@#            #@#            #@#            #@#            #@#            #@#            #@#
//#@@#           #@@#           #@@#           #@@#           #@@#           #@@#           #@@#           #@@#           #@@#           #@@#           #@@#           #@@#
//#@@@#          #@@@#          #@@@#          #@@@#          #@@@#          #@@@#          #@@@#          #@@@#          #@@@#          #@@@#          #@@@#          #@@@#
//#@@@@#         #@@@@#         #@@@@#         #@@@@#         #@@@@#         #@@@@#         #@@@@#         #@@@@#         #@@@@#         #@@@@#         #@@@@#         #@@@@#
//#@@@@@#        #@@@@@#        #@@@@@#        #@@@@@#        #@@@@@#        #@@@@@#        #@@@@@#        #@@@@@#        #@@@@@#        #@@@@@#        #@@@@@#        #@@@@@#
//#@@@@@@#       #@@@@@@#       #@@@@@@#       #@@@@@@#       #@@@@@@#       #@@@@@@#       #@@@@@@#       #@@@@@@#       #@@@@@@#       #@@@@@@#       #@@@@@@#       #@@@@@@#
//#@@@@@@@#      #@@@@@@@#      #@@@@@@@#      #@@@@@@@#      #@@@@@@@#      #@@@@@@@#      #@@@@@@@#      #@@@@@@@#      #@@@@@@@#      #@@@@@@@#      #@@@@@@@#      #@@@@@@@#
//#@@@@@@@@#     #@@@@@@@@#     #@@@@@@@@#     #@@@@@@@@#     #@@@@@@@@#     #@@@@@@@@#     #@@@@@@@@#     #@@@@@@@@#     #@@@@@@@@#     #@@@@@@@@#     #@@@@@@@@#     #@@@@@@@@#
//#@@@@@@@@@#    #@@@@@@@@@#    #@@@@@@@@@#    #@@@@@@@@@#    #@@@@@@@@@#    #@@@@@@@@@#    #@@@@@@@@@#    #@@@@@@@@@#    #@@@@@@@@@#    #@@@@@@@@@#    #@@@@@@@@@#    #@@@@@@@@@#
//#@@@@@@@@@@#   #@@@@@@@@@@#   #@@@@@@@@@@#   #@@@@@@@@@@#   #@@@@@@@@@@#   #@@@@@@@@@@#   #@@@@@@@@@@#   #@@@@@@@@@@#   #@@@@@@@@@@#   #@@@@@@@@@@#   #@@@@@@@@@@#   #@@@@@@@@@@#
//#@@@@@@@@@@@#  #@@@@@@@@@@@#  #@@@@@@@@@@@#  #@@@@@@@@@@@#  #@@@@@@@@@@@#  #@@@@@@@@@@@#  #@@@@@@@@@@@#  #@@@@@@@@@@@#  #@@@@@@@@@@@#  #@@@@@@@@@@@#  #@@@@@@@@@@@#  #@@@@@@@@@@@#
//#@@@@@@@@@@@@# #@@@@@@@@@@@@# #@@@@@@@@@@@@# #@@@@@@@@@@@@# #@@@@@@@@@@@@# #@@@@@@@@@@@@# #@@@@@@@@@@@@# #@@@@@@@@@@@@# #@@@@@@@@@@@@# #@@@@@@@@@@@@# #@@@@@@@@@@@@# #@@@@@@@@@@@@#
//']);