'use strict';

angular.module('myApp', [])
  .controller('MovieController', function($scope, $http) {
    var pendingTask;

      $scope.movies =
              [
                {
                  MovieTitle: 'Black Mass',
                  ReleaseDate: new Date('2015', '08', '18'),
                  Cover: 'img/black-mass.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Dirigida por Scott Cooper, Black Mass llega para formar parte de la familia de las películas gangster, al narrar la historia real del infame mafioso Whitey Bulger de Boston. Aunque falla en ciertos aspectos de la narrativa, e incluso le hace falta esa chispa de emoción, también logra triunfar en ciertas escenas, que muchas veces pasan a ser terroríficas al solo pensar de que todo esto sucedio en realidad. Johnny Depp es el estelar, brindando una de sus mejores actuaciones de los últimos años, saliendo por fin de ese vacío de roles coloridos e insoportables para encarnar verdaderamente a un ser atormentado y completamente desagradable. Extraordinaria actuación, pero no pienso que sea digna de una nominación al oscar. Que mas puedo decir, Johnny Depp no es el único que se destaca, la película esta llena de buenas actuaciones, especialmente por parte de sus compañeros de la mafia. Joel Edgerton realiza un excelente trabajo como detective. Sin embargo hay papeles como el de Benedict Cumberbatch que al final no me convencieron. La presencia femenina no fue muy sobresaliente tampoco. Con lo que respecta a cinematografia y direccion, todo estuvo bien. Mi único problema es que la película carece de emoción, deja algo así como un vacío en lo que en realidad es una historia interesante. Sobresalen dos escenas sensacionales, una siendo que use como imagen y otra siendo Johnny Depp intimidando a una mujer. En realidad ambas transmiten ese poder y desagrado por el personaje, algo que hace completamente eficaz a las escenas. Pros: actuaciones en general, sobre todo la de Johnny Depp, escenas antes mencionadas, la violencia. Cons: ciertos puntos de la narrativa, no posee emoción sustancial ni profundidad."
                },

                {
                  MovieTitle: 'Enemy',
                  ReleaseDate: new Date('2015', '02', '14'),
                  Cover: 'img/enemy.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Denis Villeneuve trae esta valiente adaptación de la obra literaria ganadora del premio Nobel The Double de Jose Saramago.Cabe destacar que es este tipo de película cuya finalidad es dejar que el espectador saque su propia interpretación o simplemente que utilice su mente para descubrir el verdadero mensaje. Por lo cual es necesario mencionar que no es una película para cualquiera y a muchos no les va a gustar. Con subtonos eroticos, mucho simbolismo y escenas que dejan mas a la imaginación, puede ser algo desafiante hasta para los espectadores mas expertos.Sacando la confusa temática de los dopplegangers y el erotismo, estamos frente a una gran obra cinematográfica, en especial por lo valiente que fue el director en adaptarlo. Tenemos tomas complejas, bellas imágenes y una excelente actuación por parte de Jake Gyllenhaal, que a pesar de interpretar dos personajes fisicamente idénticos, logra actuar lo suficientemente bien para lograr distinguirlos, siendo para mi esta una de sus mejores actuaciones. En conclusión, Enemy es una película que todo amante del cine debería ver, y es otro escalón para cementar a Denis Villeneuve como uno de los mejores directores actuales. Aunque confusa, es lo suficientemente corta como para verla varias veces e interpretarla de diversas maneras, un buen ejercicio para los amantes del cine. Pros: Jake Gyllenhaal, las tomas, el tono en general.Cons: un poco lento al principio"
                },

                {
                  MovieTitle: 'Everest',
                  ReleaseDate: new Date('2015', '08', '10'),
                  Cover: 'img/everest.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Everest es un película que narra la catástrofe que sobrellevaron un grupo de alpinistas al escalar el monte en 1996. Entrar a esta película pensando que será un Day After Tomorrow o un 2012 es un error, porque a pesar de los trailers, toda la catástrofe que ocurre es muy realista, punto que para mi es un plus. Con un elenco sumamente sobresaliente, vemos a Jason Clarke, Jake Gyllenhaal, Kiera Knightley, Josh Brolin, John Hawkes y Sam Worthington. Al ser todoos estas estrellas de cine no podemos deducir quien sobrevivira. Everest es la película que te dará ganas de escalar cualquier montaña, pero algo si puedo asegurar y es que no la volvería a ver. Con 2 horas justas de duración, hay momentos en que la narrativa se torna sumamente lenta y aburrida, no obstante hay también hay momentos en que el tiempo avanza extremadamente rápido. La cinematografía es lo suficientemente buena como para transportarte al Everest, y la música, a mi parecer lo mejor de la película, complemente perfectamente. Me agrada también que incluyan la cultura de Nepal. En conclusión Everest es una película de supervivencia, a baja escala en eventos, pero a alta escala en locaciones y actores. En momentos puede parecer tediosa, sin embargo, al igual que escalar una montaña, es algo que todo cinefilo debe hacer, en este caso ver, aunque sea una vez en la vida. pros: cinematografia, elenco, score musical. Cons: tediosa a momentos, muchas veces sobre saturada por su elenco, la velocidad de la narración."

                },

                {
                  MovieTitle: 'The Gift',
                  ReleaseDate: new Date('2015', '08', '11'),
                  Cover: 'img/the-gift.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "The Gift es una grata sorpresa, un thriller psicológico que en principio piensas que es todo lo cliché, sin embargo sorprende con una excelente historia, solidas actuaciones y una fuerte dirección. Felicitaciones a Joel Edgerton que dirigió, escribió y actuó en la película. Sobresaliendo en todos estos ámbitos, por lo cual esta en mi radar con respecto a sus próximos proyectos. \n\n\nTengo que aceptar que entre a esta pelicula con una idea diferente a lo que al final realmente termino siendo la historia. En parte me agrada que sea una idea original, es decir no esta basada ni en un libro, ni en una historia real ni en un cómic, cosa que es reconfortante. Las actuaciones fueron buenas, Joel Edgerton con esa aura de creep, y sorpresivamente Jason Bateman, en lo que parece ser la mejor actuación de su carrera, logra trascender su sello de comediante y domina un rol dramático casi a la perfección.Rebecca Hall también realiza un solido trabajo. \nPara ser su primera vez como director, Edgerton sabe precisamente lo que hace, realizando tomas lentas que aumenta el sentimiento de inquietud y complementan la oscura trama. En conclusión, The Gift es un excelente thriller psicológico que te dejará pensando acerca de su sorprendente desenlace y de tus acciones.Un fuerte inicio en la dirección de Edgerton y una de las películas mas sobresalientes del 2015."

                },

                {
                  MovieTitle: 'Rashomon',
                  ReleaseDate: new Date('1950', '08', '18'),
                  Cover: 'img/rashomon.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Comienzo diciendo que las películas actuales no serian nada sin los ejemplos de joyas clasicas como lo es Rashomon, al verla instantáneamente pude ver como varias películas han tomado la narrativa, que de hecho fue la primera narrativa de este tipo en el cine, y el trabajo de cámara. Rashomon es una película corta, con una trama simple pero a la vez densa, un pequeño elenco y locaciones sencillas. no obstante es lo que se considera una de las mejores películas hechas. La historia se centra en el asesinato de un samurai, y es narrada por cuatro personas implicadas desde su punto de vista. Cada relato es completamente diferente al anterior. Te intriga y te dejara pensando que relato es el correcto. El trabajo de cámara es espectacular, y para mi lo mejor de la película. Sorprendentemente continua superando a muchas películas actuales en este ámbito. En fin, Rashomon es una joya del cine y una obra de arte cuya influencia aun se nota en el cine actual. Seria un pecado para un amante del cine no ver esta pelicula, por lo cual la recomiendo."

                },

                {
                  MovieTitle: 'Cop Car',
                  ReleaseDate: new Date('2015', '08', '20'),
                  Cover: 'img/cop-car.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Jon Watts nos entrega un thriller con excelentes actuaciones. Cop Car nos hace ver la transposición de la inocencia de los niños y la maldad y oscuridad que cubre a la edad adulta. Con excelentes tomas y un ambiente de incomodidad que te transporta a través de la película. Sin embargo pasa un momento en que se siente completamente vacía, por lo cual perderás la atención. Con pocas explicaciones acerca de lo que sucede, la historia que en verdad es bastante simple, se torna poco interesante. No obstante hacia el final de la pelicula, el sentimiento que al principio era algo agridulce se torna completamente oscuro y macabro, dejando un ambiente de incomodidad, cosa que realmente que me gusto. Kevin Bacon realiza un buen trabajo, no sobresaliente, pero lo suficientemente intenso para convencerte de su personaje. Los dos niños realizan un buen trabajo, que aunque en momentos fallan, transmiten ese throwback a la infancia y a la inocencia que alguna ves todos tuvimos. En fin Cop Car es una thriller corto (87 min) que aunque imperfecta logra su cometido. Me gustaría decir que los mas sobresaliente y lo que vendió esta película como una buena película de domingo por la mañana fueron las excelentes tomas de un panorama desolado Pros: Kevin bacon, cinematografia, el final. Cons: inconsistencias narrativas, ciertas fallas en el ritmo de la historia. "

                },

                {
                  MovieTitle: 'The Sacrament',
                  ReleaseDate: new Date('2013', '08', '18'),
                  Cover: 'img/the-sacrament.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Explorando un poco las peliculas independientes, termine con The Sacrament, y la verdad que me dejo sorprendido. En primera instancia me gustaría decir que esta película puede afectar la sensibilidad de algunas personas, porque en realidad toca temas sumamente delicados y algunas escenas pueden en realidad dejar a la audiencia perturbada, no por la violencia si no por el acto en si. Es sorprendente lo bien que esta filmada esta película, y me alegra como le dan un enfoque diferente al famoso found-footage. Tener claro que los personajes principales son documentalistas investigando este \x22paraiso hippie\x22, y lo que me gusta es que siempre se filma desde una cámara del equipo. El escenario es excelentemente fabricado, e incluso los extras le dan ese sentimiento de incomodidad a la pelicula. Los actores principales actuan lo suficientemente bien para lograr convencerte, e incluso sentir temor por ellos. Pero sin duda la mejor actuación cae sobre Gene Jones, o mas conocido como Padre, que realiza un espectacular papel de líder, siendo carismático y terrorífico. La primera mitad de la película en lo que a mi concierne es perfecta, te brinda el suficiente suspenso para mantenerte enganchado. Mi problema con la película son los últimos cuarenta minutos, en donde pienso que todo pasa de manera muy rápida, quitándole esa magia e inquietud que desde el principio te captura. No daré detalles para no arruinar la pelicula, pero si dire que esta basada en un evento que en realidad sucedió, lo cual hace a la pelicla aun mas perturbante. The Sacrament no es una película de miedo clásica, pero lo suficiente efectiva para erizar a cualquiera. No es para todos, pero es en realidad una obra cinematográfica que esta bien filmada y que puede quedar para la posteridad. Pros: el primer acto, la actuación de Gene Jones, la cinematografia. Contra: el desenlace apresurado"

                },

                {
                  MovieTitle: 'Kenke',
                  ReleaseDate: new Date('2015', '06', '18'),
                  Cover: 'img/kenke.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "En un principio me gustaría felicitar por el esfuerzo a las personas que hicieron este film, se que hacer una película no es fácil y requiere muchos gastos. en segundo lugar me gustaría que sepan que todas mis criticas son con respeto y de manera constructiva. La verdad es que la historia es lo suficientemente interesante para engancharte, sin embargo mi problema es que la historia se desvía en múltiples partes y trata de tocar múltiples temas, los cuales nunca retoma, en este intento la película nunca despega, y por lo tanto siento que la trama es prácticamente inexistente. Siento que agregaban eventos, que por su importancia, deberían haber cambiado completamente la trama de la pelicula, pero enrealidad no habia desarrollo ni del trama ni de los personajes. Así como agregaban escenas que no tenian importancia alguna. En la actuación, hubo papeles que me parecían extremadamente forzados, y muchas veces no sabian sus lineas. Sin embargo hubo actuaciones fluidas. Lo que mas me incomoda y es la mayor queja de la película es el trabajo cámara . Siento que para ser un largometraje y para ser exhibida en cines, las tomas en las que la imagen se tornaban borrosas, o mal enfocadas o los acercamiento exagerados deberían ser mínimos. Se que como dicen sus póster, esto no es Hollywood es Panama, pero aun así debieron poner más enfoque en corregir a estos defectos que arruinan la experiencia cinematografica. Doy un reconocimiento a una escena que me pareció extremadamente graciosa, y en verdad los felicito por la jocosidad y la inclusión de la jerga panameña. También doy reconocimiento a la música. Los incito que sigan haciendo películas para que mejoren. Pues soy testigo de que en Panamá hay buen cine y mucho talento. "

                },

                {
                  MovieTitle: 'Indigenous',
                  ReleaseDate: new Date('2015', '03', '18'),
                  Cover: 'img/indigenous.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Indigenous aka Chupacabra (2014), En preámbulo de que mas tarde veré la película kenke. Decidí ver una película que fue filmada en Panamá, mas no por panameños. La película va así, un grupo de jóvenes, todos salidos de portada de revista, viajan a Panamá a divertirse en la playa, pero deciden ir a una cascada en medio de Darien, en donde se encuentran al Chupacabra. Si quieren ver todos los clichés estereotipos de las películas de miedo pueden ver cualquier otra cosa, si quieren ver una hora de gente corriendo por el bosque esta es la elección. Definitivamente no hay nada que sobresalga, nada que resalte. Los personajes unidimensionales, con expresiones y relaciones forzadas y las clásicas decisiones erradas, harán que desees que \x22el chupacabra\x22 se los coma, sin embargo ni las muertes resultan entretenidas. Doy el pro de que no es una película que intenta ser mas de lo que es, se mantiene grounded en el tema del chupacabra. No obstante no creo que estar casi una hora en el bosque con los personajes sea divertido, y mas si es de noche y comienzan a correr y pierdes el hilo de las acciones. Hay escenas que ni siquiera se porque están en el producto final. Son demasiado raras que resultan graciosas. Los panameños nisiquiera son panameños, pero eso seria estar buscan errores un poco mas por el escrutinio. el chupacabra resulta ser lo único aceptable de la película. Aunque muy poco original, asemejándose a las criaturas de la película The Descent, resulta ser efectivo en los predecibles jumpscares, e incluso grotesco con un bueno toque de gore. En fin la película falla tanto como en entretener como en asustar, siendo de esas peliculas que veras una vez en tu vida y no recordaras mas nunca, definitivamente una perdida de tiempo. Por mi parte siento que el director desaprovecho las grandes oportunidades cinematográficas que pudo obtener en Panama, dedicándose a filmar la mayoría del tiempo en un bosque que puede asemejarse a cualquier otro del mundo, y relegando a un plano secundario y solo de introducción las vistas mas reconocibles del país."

                },

                {
                  MovieTitle: 'Spy',
                  ReleaseDate: new Date('2015', '05', '18'),
                  Cover: 'img/spy.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Anoche vi por segunda ves Spy, y pense en hacerle review. Tengo que aceptar estaba esceptico cuando la fui a ver por primera vez, ya que no soy fanatico de Melissa Mccarthy, porque su humor siempre me parece el mio, ademas que pense que no se iba a llevar bien con el cliche de las peliculas de espias. Por alguna circunstancia la fui a ver, y valla que quede sorprendido. Ante mis ojos no solo fue una excelente pelicula, sino que a pesar de mi predisposicion, la disfrute y mucho. Es este tipo de pelicula con ese humor brillante, y que dura durante toda la pelicula, y tambien posee una buena dosis de accion y sangre, y lo digo enserio a veces no hay restricciones en la violencia, punto que me sorprendio. Melissa Mccarthy logra convencerme por primera vez con una autentica actuacion. Y ella es complementada con Jason Statham (de las mejores cosas de la pelicula) y Rose Byrne. Aunque es predecible y cae a veces en el cliche espia, logra su cometido, que es hacer reir y hacerte pasar un muy buen momento. Sin duda una de las peliculas que me ha sorprendido mas en este 2015. En conclusion Spy es una excelente adicion a las peliculas de accion y comedia, siendo por mucho una de las mas graciosas del 2015. Sin duda la volvere a ver en un futuro. Pros: actuacion no odiosa de Melissa Mccarthy, JASON FUCKING STATHAM, buena acción. Cons: un poco predecible, cae en el cliché algunas veces."

                },

                {
                  MovieTitle: 'Ted 2',
                  ReleaseDate: new Date('2015', '08', '18'),
                  Cover: 'img/ted2.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Bueno, es de esperarse, Ted 2 no es de esas películas que serán un clásico en un futuro o inspiraran a directores a ser los siguientes alfred hitchcock, sin embargo es un buen rato para reirse. No es un humor universal, lo cual es un negativo para esta película, Muchas escenas son a modo de sketch, tipico de family guy, y muchas veces se quedan corto en el humor. Pero puedo decir que ciertas escenas me dejaron llorando de la risa, no obstante no es un humor para todo el mundo. Muchas personas pueden salir ofendidas por que en verdad se burlan de temas delicados. Sentí a Mark Wahlberg un poco ausente en la pelicula, aunque paso todo el tiempo en pantalla. Amanda Seyfried fracasa en reemplazar a Mila Kunis. Lo demás es un poco nulo. Me gustaría resaltar una escena. Es sumamente divertida y que dejara fascinados a los amantes de la cultura pop por la cantidad de referencias que posee. En conclusión Ted 2 falla en superar a su predecesor, pero igual puede ser un buen rato si no tienes nada mas que ver. Cabe destacar que para entender muchos de los chistes debes haber visto la primera parte. Pros: los cameos, Comic-con, la escena del stand up comedy Cons: no se siente la misma intensidad de los actores, muchos chistes quedan en el aire."

                },

                {
                  MovieTitle: 'Mission: Impossible - Rogue Nation',
                  ReleaseDate: new Date('2015', '08', '17'),
                  Cover: 'img/mi-rogue-nation.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "No cabe duda que este ha sido un excelente año para el mundo del cine, en especial a lo que refiere a las franquicias. Las películas de misión imposible son aquellas a las cuales vas a pasar un buen rato viviendo la acción al limite. Rogue Nation logra cementar una buena serie de películas, no siendo la mejor del grupo, pero entrega. Si sentí que con respecto a las anteriores hay menos escenas edgys, ósea si hay muy buena dosis de acción, pero no hay ninguna escena que se quede plasmada como en las otras. Tom Cruise es como un pez en el agua, sabemos que es una estrella de acción y no decepciona, teniendo en cuenta de que realiza todos sus stunts. Simon Pegg regresa como Benji, algo que es extraordinario, porque da un toque de humor en medio de tanta adrenalina. Rebecca Fergunson encarna a la femme fatale de la película, nunca dejándote saber si confiar en ella o no, siendo uno de los plus de esta movie. El villano fue para mi un problema, aunque no estuvo ausente no lo sentí lo suficientemente amenazante, y su voz no ayudaba. En cierto punto la película se vuelve predecible y puede hacerte perder la atención, pero no lo suficiente para aburrirte. En conclusión, Rogue Nation es una buena película de acción para pasara el rato y una buena adición a la franquicia de mision imposible. Pros: Tom Cruise, Simon Pegg, Rebecca Fergunson, la escena del avion, Cons: el villano y su voz..."

                },
				{
				  MovieTitle: 'The Martian',
                  ReleaseDate: new Date('2015', '10', '05'),
                  Cover: 'img/the-martian.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Anoche vi la nueva película épica de Ridley Scott, The Martian y puedo decir que aunque es mejor que la película promedio, no me parece nada especial.Como sabemos Ridley siempre que hace una película la hace de manera descomunal. En esta ópera espacial el director vuelve al espacio, esta vez con una historia mas cálida y reconfortable. Marte luce espectacular, aun así cuando solo visualizamos enormes paisajes desolados. En la tierra es que la película muestra un poco su debilidad, pero no por mucho, debido al increíble elenco que esta a cargo. Matt Damon nos deja claro que es un excelente actor, siendo un carismático naufrago en el espacio, y por si solo logra dejar esta película en alto. El reparto esta lleno de caras conocidas, que en realidad nunca sobresalen. Hubo escenas que realmente me fascinaron, específicamente una en la cual escuchamos a la excelente Starman de David Bowie. No obstante siento que The Martian es una película muy bien hecha pero sin nada nuevo que ofrecer, es buena para pasar el rato pero no algo sumamente sobresaliente. Ridley Scott encuentra nuevamente su camino, tras un par de películas que en realidad no llegaron a brillar. Esperemos que este maestro siga ofreciendo excelentes películas. En conclusión The Martian es una entrada sólida, con excelente soundtrack y cinematografía, a la colección de Ridley Scott, y una buena adaptación de una historia que mezcla supervivencia y la esperanza en la humanidad, resaltando que no todo es malo. Lejos de ser una obra maestra, es una entretenida película para pasar el rato."
					
					
				},
				
				{
				  MovieTitle: 'Rushmore',
                  ReleaseDate: new Date('1998', '10', '05'),
                  Cover: 'img/rushmore.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "La primera película del destacado Wes Anderson sirve de introducción para lo que en un futuro será una carrera memorable e icónica. Presentando el estilo inconfundible del director, el cast que es recurrente en casi todas sus películas, la cinematografía mágica y excéntrica y el humor particular, Rushmore es inolvidable, y considero que es una de las mejores películas del director. Cabe destacar que esta es de las películas más badass y cool que he visto. Uso esas palabras, porque precisamente es esto. Escena tras escena no puedo dejar de pensar lo brillante y lo creativo que es Wes Anderson. La película es liderada por el carismático Jason Schwartzman, que toma el papel de un estudiante talentoso en muchas cosas menos en lo académico, que prontamente se enamora de una maestra (Olivia Williams), sin embargo en la ecuación entra Bill Murray, que forma un triángulo amoroso, que trae un fuerte e hilarante conflicto. Las tomas son hermosas, utilizando estilos interesantes y paletas de colores hermosas. El soundtrack es único y excelente, impregnando al film de este ambiente indie. En conclusión, Rushmore es una película iconica, hilarante, memorable y extremadamente bien hecha. El inicio de una excelente carrera y el de una buena experiencia para el espectador. Brillante a su propio modo y definitivamente algo que volvería a ver."
					
				},
				
				{
				  MovieTitle: 'Sicario',
                  ReleaseDate: new Date('2015', '10', '03'),
                  Cover: 'img/sicario.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Que puedo decir, no todo en las peliculas es color de rosas. Sicario es cruda, violenta y realista, y justo por esto logra ser efectiva y marca el inicio de la carrera de los oscars 2016. Denis Villeneuve vuelve a crear una obra maestra del cine, aunque lenta en ciertos puntos (muy lenta), la cinematografía y las tomas excepcionales logran entretenerte. La historia de Sicario, es lo que yo considero una trama simple. Es una guerra contra el cartel mexicano de drogas, una guerra que no tiene reglas y Kate Macer, interpretada por Emily Blunt, queda involucrada, sabiendo en un fondo que todo lo que hacen no esta bien. Emily Blunt entrega una de las mejores, sino es que la mejor actuación de su carrera. Lastima que sea completamente opacada por su contraparte interpretada por Benicio del Toro. Josh Brolin, al que hemos visto en todos lados este año, lo logra de nuevo, siendo un personaje carismático, gracioso y despreciable. La música forma punto clave de esta película, ya que aumenta ese sentimiento de tensión, muy bien desarrollada, a lo largo de las escenas. Hubo cosas que enrealidad me encantaron, como por ejemplo una escena a la que entran a ciudad Juarez. Esta escena esta tan bien filmada, tomas aéreas impresionantes que siguen a la caravana a lo largo de la peligrosa ciudad, aumentando la tensión de que algo pronto va a pasar. Y el increíble acto final, que te dejara sintiéndote tan sucio como los protagonistas. En conclusión, Sicario es una terrorífica película que expone la realidad de la guerra contra las drogas. Es sombría y violenta, pero a su medida, porque sabe donde parar. Con actuaciones extraordinarias, en especial por parte de Benicio del Toro. Y una dirección que pone a Denis Villeneuve como uno de los mejores directores actuales."
					
				},
				{
				  MovieTitle: 'Pixels',
                  ReleaseDate: new Date('2015', '10', '09'),
                  Cover: 'img/pixels.png',
                  Likes: 0,
                  Dislikes: 0,
                  Review: "Esta película es claramente lo que se considera una idea totalmente desperdiciada. Quien no ha soñado con ver a los videojuegos cobrar vida en la pantalla grande. Pero bueno, no era que pensara que iba a ser una buena pelicula. Tras muchos años el estudio Happy Madison y Adam Sandler han sido sinónimo de películas que no son buenas. Esta es una clara estrategia de marketing en el cual atraen a la audiencia joven con videojuegos coloridos y a los adultos con nostalgia, que en ciertas, pero muy pocas escenas, puedes sentir. La realidad es que Pixels es una película mas del montón que carece tanto de carisma, diversión o emoción alguna y que probablemente no recuerdes nunca mas en tu vida. Se puede decir que la comedia por la cual se caracteriza Sandler ha sido atenuada para los espectadores mas pequeños, lo cual resulto en que mi persona ni siquiera mostrara una sonrisa. El elenco que acompaña es casi nulo, con personajes para nada agradables, y lo siento Peter Dinklage, aunque eres excelente en Game of Thrones, en esta eres completamente odioso. Kevin James hace un trabajo regular, con respecto a sus papeles en otras películas. Pero me gustaria resaltar los puntos positivos de esta pelicula, los cuales son que los personajes de videojuegos de verdad tienen un poco de encanto, y enrealidad quieres terminar de verla para ver que cameos y easter eggs puedes encontrar. Pero por cada punto bueno de esta pelicula, hay diez malos. En completo desagrado con lo que hicieron con Q*bert. En conclusión Pixels es una película que no entretiene y deja mucho que desear, una idea que en manos correctas pudo ser realmente buena. Con comedia vacía, personajes poco memorables y una historia no muy emocionada, queda condenada como una de las peores películas (me refiero a películas de gran distribución) del 2015 y destinada al olvido."
					
				}

              ];

      $scope.tomatoIcon = 'img/tomate1.png';
      $scope.rottenIcon = 'img/rotten.png';
      $scope.freshIcon = 'img/cert_fresh.png';


    if ($scope.search === undefined) {
      $scope.search = "Enemy";

      fetch();
    }

    $scope.change = function() {
      if (pendingTask) {
        clearTimeout(pendingTask);
      }
      pendingTask = setTimeout(fetch, 800);
    };

    function fetch() {
      $http.get("http://www.omdbapi.com/?t=" + $scope.search + "&tomatoes=true&plot=full")
        .success(function(response) {
          $scope.details = response;

        });

      $http.get("http://www.omdbapi.com/?s=" + $scope.search)
        .success(function(response) {
          $scope.related = response;
        });
    }

    $scope.update = function(movie) {
      $scope.search = movie.Title;
      $scope.change();
    };

    $scope.select = function() {
      this.setSelectionRange(0, this.value.length);
    }

      $scope.numLimit=200;
      $scope.readMore=function(movie){
        $scope.numLimit=10000;
      };

      $scope.cerrar=function(movie){
        $scope.numLimit=200;
      };

  });

var edwin = angular.module("edwinApp", []);