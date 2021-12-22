# GestionCultivosBackFrontCrud

Programa realizado en react para el control de cultivos de la empresa cultivos la planicie .

Plataforma Sistema de Gestión de Cultivos

La empresa de cultivos Cultivos La Planicie SAS desea automatizar a través de un sistema de información la siembra y recolección de cultivos. La compañía puede tener hasta X diferentes tipos de cultivos y cada uno de ellos debe ser parametrizable de la siguiente forma:
1.	Área destinada para el cultivo (en hectáreas).
2.	Cantidad de semillas necesarias por hectárea.
3.	Tiempo del cultivo en semanas.
4.	Cantidad de metros cúbicos de agua necesarias para el riego por semana
5.	Kilogramos de fertilizantes necesarios por hectárea por semana
6.	Tiempo necesario para realizar la recolección por hectárea
7.	Kilogramos recolectados del producto por hectárea
Se desea realizar un programador de cultivos, que permita ingresar los parámetros base para que generen las fechas de inicio y fin de cada cultivo, basado en el área y la cantidad de cosecha que se desea recoger.
Los tipos de usuarios que debe manejar el sistema son administrador, usuario de configuración, y usuario de gestión.
Un usuario de configuración debe estar en la capacidad de:

●	Registrar predios indicando el área del mismo, su ubicación (latitud y longitud), y un código único de identificación.

●	Asignar predios a usuarios de gestión.

●	Crear los tipos de cultivos

●	Configurar los parámetros de valor metro cúbico de agua, valor de cada semilla y valor del kilogramo de fertilizante.
Un usuario de gestión debe estar en la capacidad de:

●	Asignar el área destinada para el cultivo (en hectáreas) de un predio de su propiedad.

●	Configurar los tipos de cultivo a cada área, indicando para cada uno los siguientes datos:

○	Tipo de cultivo (descripción)
○	Cantidad de semillas necesarias por hectárea.
○	Tiempo del cultivo en semanas.
○	Cantidad de metros cúbicos de agua necesarias para el riego por semana
○	Cantidad de fertilizantes necesarios por hectárea por semana
○	Tiempo necesario para realizar la recolección por hectárea
○	Kilogramos recolectados del producto por hectárea
○	Tiempo de espera en días para la próxima siembra.

●	Programar la fecha de siembra de un cultivo.

●	Programar la recogida de la siembra de un cultivo.
Consideraciones del sistema:

●	Se deben calcular los costos totales del cultivo (suma de los gastos en semillas, agua, y fertilizantes).

●	No se puede configurar un cultivo en un predio si existe una cosecha vigente o si aún no ha concluido el tiempo de espera para la próxima siembra.
Un administrador se encarga de gestionar los usuarios internos y además ejerce control total de la plataforma.

Notas:
●	Los datos suministrados por los usuarios deben cumplir la política de privacidad de datos vigente, es decir las contraseñas de los usuarios deben almacenarse de forma cifrada y la conexión al servidor debe realizarse de forma segura.

●	La base de datos debe ser no relacional.

●	Se debe utilizar una arquitectura desacoplada, es decir, una API back end y un front end que consuma dicha API.

●	La API back end debe estar desarrollada en Express.js

●	El front end debe estar desarrollado en React.js

●	Se debe utilizar Bootstrap como librería CSS  para manejar los estilos de su aplicación.



