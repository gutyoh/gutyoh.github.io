/**
 * Created by Hermann on 25-Sep-15.
 */
edwin.controller('MainController', ['$scope', function($scope) {
    $scope.title = 'Edwin Arauz';
    $scope.promo = 'Doctor y cin�filo';
    $scope.background = "http://38.media.tumblr.com/875b5eeb5b1efa37d2e9d36fbad836d3/tumblr_mzczesVrZD1rimr6yo1_1280.jpg"
    $scope.movies =
        [
            {
                name: 'Black Mass',
                releaseDate: new Date('2015', '08', '18'),
                cover: 'img/black-mass.png',
                likes: 0,
                dislikes: 0,
                review: "Dirigida por Scott Cooper, Black Mass llega para formar parte de la familia de las pel�culas gangster, al narrar la historia real del infame mafioso Whitey Bulger de Boston. Aunque falla en ciertos aspectos de la narrativa, e incluso le hace falta esa chispa de emoci�n, tambi�n logra triunfar en ciertas escenas, que muchas veces pasan a ser terror�ficas al solo pensar de que todo esto sucedio en realidad. Johnny Depp es el estelar, brindando una de sus mejores actuaciones de los �ltimos a�os, saliendo por fin de ese vac�o de roles coloridos e insoportables para encarnar verdaderamente a un ser atormentado y completamente desagradable. Extraordinaria actuaci�n, pero no pienso que sea digna de una nominaci�n al oscar. Que mas puedo decir, Johnny Depp no es el �nico que se destaca, la pel�cula esta llena de buenas actuaciones, especialmente por parte de sus compa�eros de la mafia. Joel Edgerton realiza un excelente trabajo como detective. Sin embargo hay papeles como el de Benedict Cumberbatch que al final no me convencieron. La presencia femenina no fue muy sobresaliente tampoco. Con lo que respecta a cinematografia y direccion, todo estuvo bien. Mi �nico problema es que la pel�cula carece de emoci�n, deja algo as� como un vac�o en lo que en realidad es una historia interesante. Sobresalen dos escenas sensacionales, una siendo que use como imagen y otra siendo Johnny Depp intimidando a una mujer. En realidad ambas transmiten ese poder y desagrado por el personaje, algo que hace completamente eficaz a las escenas. Pros: actuaciones en general, sobre todo la de Johnny Depp, escenas antes mencionadas, la violencia. Cons: ciertos puntos de la narrativa, no posee emoci�n sustancial ni profundidad."
            },

            {
                name: 'Enemy',
                releaseDate: new Date('2015', '02', '14'),
                cover: 'img/enemy.png',
                likes: 0,
                dislikes: 0,
                review: "Denis Villeneuve trae esta valiente adaptaci�n de la obra literaria ganadora del premio Nobel The Double de Jose Saramago.Cabe destacar que es este tipo de pel�cula cuya finalidad es dejar que el espectador saque su propia interpretaci�n o simplemente que utilice su mente para descubrir el verdadero mensaje. Por lo cual es necesario mencionar que no es una pel�cula para cualquiera y a muchos no les va a gustar. Con subtonos eroticos, mucho simbolismo y escenas que dejan mas a la imaginaci�n, puede ser algo desafiante hasta para los espectadores mas expertos.Sacando la confusa tem�tica de los dopplegangers y el erotismo, estamos frente a una gran obra cinematogr�fica, en especial por lo valiente que fue el director en adaptarlo. Tenemos tomas complejas, bellas im�genes y una excelente actuaci�n por parte de Jake Gyllenhaal, que a pesar de interpretar dos personajes fisicamente id�nticos, logra actuar lo suficientemente bien para lograr distinguirlos, siendo para mi esta una de sus mejores actuaciones. En conclusi�n, Enemy es una pel�cula que todo amante del cine deber�a ver, y es otro escal�n para cementar a Denis Villeneuve como uno de los mejores directores actuales. Aunque confusa, es lo suficientemente corta como para verla varias veces e interpretarla de diversas maneras, un buen ejercicio para los amantes del cine. Pros: Jake Gyllenhaal, las tomas, el tono en general.Cons: un poco lento al principio"
            },

            {
                name: 'Everest',
                releaseDate: new Date('2015', '08', '18'),
                cover: 'img/everest.png',
                likes: 0,
                dislikes: 0,
                review: "Everest es un pel�cula que narra la cat�strofe que sobrellevaron un grupo de alpinistas al escalar el monte en 1996. Entrar a esta pel�cula pensando que ser� un Day After Tomorrow o un 2012 es un error, porque a pesar de los trailers, toda la cat�strofe que ocurre es muy realista, punto que para mi es un plus. Con un elenco sumamente sobresaliente, vemos a Jason Clarke, Jake Gyllenhaal, Kiera Knightley, Josh Brolin, John Hawkes y Sam Worthington. Al ser todoos estas estrellas de cine no podemos deducir quien sobrevivira. Everest es la pel�cula que te dar� ganas de escalar cualquier monta�a, pero algo si puedo asegurar y es que no la volver�a a ver. Con 2 horas justas de duraci�n, hay momentos en que la narrativa se torna sumamente lenta y aburrida, no obstante hay tambi�n hay momentos en que el tiempo avanza extremadamente r�pido. La cinematograf�a es lo suficientemente buena como para transportarte al Everest, y la m�sica, a mi parecer lo mejor de la pel�cula, complemente perfectamente. Me agrada tambi�n que incluyan la cultura de Nepal. En conclusi�n Everest es una pel�cula de supervivencia, a baja escala en eventos, pero a alta escala en locaciones y actores. En momentos puede parecer tediosa, sin embargo, al igual que escalar una monta�a, es algo que todo cinefilo debe hacer, en este caso ver, aunque sea una vez en la vida. pros: cinematografia, elenco, score musical. Cons: tediosa a momentos, muchas veces sobre saturada por su elenco, la velocidad de la narraci�n."

            }

        ];
    $scope.plusOne = function(index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function(index) {
        $scope.products[index].dislikes += 1;
    };

    $scope.numLimit=200;
    $scope.readMore=function(movie){
        $scope.numLimit=10000;
    };

    $scope.cerrar=function(movie){
        $scope.numLimit=200;
    };

}]);