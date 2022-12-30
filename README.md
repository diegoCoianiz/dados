# probabilidades con Dados
las mates son algo increíble, la probabilística ¡aún más! el universo ¿ se rige por casualidad o causalidad ? y si tuvieras que jugar a los dados ¿ Qué opción erigirías ?

## la situación:
Acabo de encontrarme con este twit del matemático [Pablo Groisman](https://twitter.com/pgroisma/status/1608929299427659777) donde se plantea la suigiente história, que paso a compartir con ustedes:
### el problema de Samuel Pepys.

>El 22 de noviembre de 1693, Samuel Pepys le escribió una carta nada menos que a Isaac Newton preguntándole:
¿A cuál de las siguientes opciones preferís apostar?

>A. Se tiran 6 dados, ganás si sale al menos 1 seis.

>B. Se tiran 12 dados, ganás si salen al menos 2 seis.

>C. Se tiran 18 dados, ganás si salen al menos 3 seis.

Newton le contestó con 3 cartas. En la primera le cuenta que la probabilidad de A es 1-P(ningun 6 en 6 lanzamientos) = 1 - (⅚)^6 = 0.665, la de B es 1-P(ningun 6 en 12 lanzamientos) - P(un 6 en 12 lanzamientos) = 1-(⅚)^12 -12(1/6)(⅚)^11  = 0.619, que más chico que la de A.
Para C Newton dice “En el tercer caso se puede ver que el valor es aún más bajo”.

Si bien el hecho de que A es la que tiene mayor probabilidad no es abiertamente anti intuitivo, es un poco sorprendente y cuesta a priori encontrar un argumento convincente de por qué es así.

Lo increible de todo esto, al menos para mí, es como 329 años despues podemos utilizar nuestras herramientas modernas, Javascript en este caso, para efecturar las demostraciones (y la increible precisión) de los dichos de los gigantes del pasado!

Newtwon daba 66% y 61% respectivamente para A y B. Con practicamente esa misma precisión uno podría utilizar esta app y ejecutar la función
> estadisticasPorCantidadDeOpciones_rondas(3 , 10000)

que por defecto está configurada para disparar 10.000 tiradas de dados acorde a los requistos de cada opción, pero que uno puede modificar a su antojo, y los resultados serían practicamente los dichos por el maestro!
>10000 rondas con 6 dados
ganás el  65.32 % de las veces

>10000 rondas con 12 dados
ganás el  62.050000000000004 % de las veces

>10000 rondas con 18 dados
ganás el  59.9 % de las veces
