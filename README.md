# Cifrado César

## Índice

* [1. Introducción](#Introducción)
* [2. Definición de usuarios](#definición-de-usuarios)
* [3. Objetivos de usuarios en relación con el producto](#Objetivos-de-usuarios-en-relación-con-el-producto)
* [4. ¿La app es realmente una solución a su problema?](#¿la-app-es-realmente-una-solución-a-su-problema)
* [5. El proceso](#el-proceso)
* [6. ¿Cómo se utiliza la aplicación?]


## Introducción
El cifrado César es una de las herramientas más antiguas usadas en criptografía. Consiste en sustituir cada letra del abecedario por una letra desplazada un número determinado de posiciones (clave/desplazamiento). Es una técnica simple y que en la actualidad no supone una opción final para proteger información, pero funciona como base para sistemas más complejos de codificación. 

<a href="https://ibb.co/k98t7tR"><img src="https://i.ibb.co/gPTx2x5/cipher-lab-maryan.jpg" alt="cipher-lab-maryan" border="0"></a>

## Definición de usuarios 
En octubre de 2022 ocurrió una [filtración de documentos internos del Ejército mexicano a cargo de un grupo autodenominado Guacamaya](https://elpais.com/mexico/2022-10-23/el-ejercito-mexicano-ve-a-las-feministas-como-enemigas-del-estado.html), esta filtración reveló que varios grupos de activistas son vigilados por la fuerza militar, entre ellos colectivos feministas. En estos documentos, justificados como reportes de inteligencia, se identifican activistas sociales como potenciales enemigos, a la par de cárteles de droga, sindicalistas, defensores del territorio o grupos zapatistas del EZLN. Esta primera noticia se acompañó de muchas otras en las que se observaban dinámicas similares en los gobiernos de cada estado, manifestando la vigilancia excesiva que actores políticos enfrentan en contextos de inseguridad y riesgo.
Verde Aquelarre es una colectiva feminista basada en Guanajuato, Guanajuato, se dedica al acompañamiento de mujeres en situación de violencia, abortos seguros, activismo digital y la promoción de una agenda para erradicar la violencia de género en el estado de Guanajuato. Está integrada por mujeres de diversas edades con ocupaciones distintas, entre ellas, politólogas, artistas, escritoras, economistas, gestoras culturales y estudiantes. 

## Objetivos de usuarios en relación con el producto
Ante la expresa vulneración de los datos personales de muchas colectivas feministas, se vuelve elemental encontrar métodos y herramientas que procuren la seguridad y protección de sus integrantes. Código secreto Verde Aquelarre se plantea como una plataforma que permita cifrar y descrifrar los mensajes que se comparten en redes sociales entre sus integrantes. El código de desplazamiento u offset se determina mediante otra aplicación aleatoria que semanalmente otorgará un código distinto para cada una de las integrantes, por lo que las demás podrán utilizar la aplicación conociendo de antemano el código que cada una requiere para descrifrar sus mensajes.

## ¿La app es realmente una solución a su problema?
El objetivo principal de Código secreto Verde Aquelarre fue otorgar una herramienta para proteger los datos compartidos por las integrantes del colectivo. Si bien, una aplicación que cifre y descifre mensajes no representa una solución a la problemática principal relativa a la filtración de datos personales, sí es una herramienta que, acompañada de otros recursos, supone el inicio de la implementación de buenas prácticas en cuidados digitales para activistas. 

## El proceso
Desde un inicio, la planeación de la interfaz se planteó sencilla, el enfoque se basó en la comprensión de las funciones en JavaScript, tanto para el index como para el cipher. Del proceso de preadmisión comprendí que es mejor sentar objetivos realistas e ir construyendo pequeños entregables en lugar de tener grandes ambiciones desde el inicio. 

Idea original
<a href="https://ibb.co/1bg9Q01"><img src="https://i.ibb.co/KmP9h5d/IMG-0282-1.jpg" alt="IMG-0282-1" border="0"></a>


Para el paso de un entregable pequeño a uno más grande de acuerdo a los objetivos de aprendizaje, objetivos generales y criterios de aceptación mínimos del proyecto, se crearon tableros en Trello que permitieron la organización minuciosa y la formación gradual del proyecto

<a href="https://ibb.co/6tn8M6B"><img src="https://i.ibb.co/vdwhF2Y/2022-12-11.jpg" alt="2022-12-11" border="0"></a>

## ¿Cómo se utiliza la aplicación?
El código de desplazamiento u offset se determina mediante otra aplicación aleatoria que semanalmente otorgará un código distinto para cada una de las integrantes, por lo que las demás podrán utilizar la aplicación conociendo de antemano el código que cada una requiere para descrifrar sus mensajes. Ese código se ingresará en el primer input. Abajo del input se incluye el mensaje que se quiere cifrar o descifrar y que al activarse el evento click en alguno de los botones, accionará las funciones de cifrado o descifrado, respectivamente.

<a href="https://ibb.co/NY9rD0m"><img src="https://i.ibb.co/tCqzj0x/5897-A5-E5-687-E-4145-BC6-B-EB49-A7-A7-ADEF.jpg" alt="5897-A5-E5-687-E-4145-BC6-B-EB49-A7-A7-ADEF" border="0"></a>

