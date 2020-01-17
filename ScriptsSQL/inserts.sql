-- INSERTS --

-- Proveedores --
insert into proveedor values('3011111111', 'Proveedor A', '3 de Febrero 111', 'Concepcion del Uruguay', 'proveedora@xmail.com', '11111111');
insert into proveedor values('3022222222', 'Proveedor B', 'Tibiletti 222', 'Concepcion del Uruguay', 'proveedorb@xmail.com', '22222222');
insert into proveedor values('3033333333', 'Proveedor C', 'Ingeniero Henry 313', 'Gualeguaychu', 'proveedorc@xmail.com', '33333333');
insert into proveedor values('3044444444', 'Proveedor D', 'Mariano Moreno 414', 'Colon', 'proveedord@xmail.com', '44444444');
insert into proveedor values('3055555555', 'Proveedor E', 'Justo Jose de Urquiza 441', 'Concepcion del Uruguay', 'proveedore@xmail.com', '55555555');
insert into proveedor values('3066666666', 'Proveedor F', 'Ferrari 564', 'Colon', 'proveedorf@xmail.com', '666666666');
insert into proveedor values('3077777777', 'Proveedor G', 'Sarmiento 112', 'San jose', 'proveedorg@xmail.com', '77777777');
insert into proveedor values('3088888888', 'Proveedor H', 'Mariano Moreno 512', 'Concepcion del Uruguay', 'proveedorh@xmail.com', '88888888');
insert into proveedor values('3099999999', 'Proveedor I', '25 de Mayo 167', 'Gualeguaychu', 'proveedori@xmail.com', '99999999');
insert into proveedor values('3000000000', 'Proveedor J', 'Almafuerte 128', 'Concepcion del Uruguay', 'proveedorj@xmail.com', '00000000');


-- Tipos --
insert into tipo values(1, 'MATE');
insert into tipo values(2, 'TERMO');
insert into tipo values(3, 'BOMBILLA');
insert into tipo values(4, 'PORTATERMO');
insert into tipo values(5, 'YERBA');
insert into tipo values(6, 'OTRO');


-- Productos --
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Mate Uruguayo Calabaza', 500, 700, 'Mate Uruguayo hecho de las mejores calabazas', '3011111111', 1);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Mate Uruguayo Cuero', 500, 900, 'Mate Uruguayo de cuero; colores: negro y marron', '3011111111', 1);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Mate Madera', 500, 400, 'Mate hecho de madera de calden; colores: rosa, azul, amarillo, negro', '3022222222', 1);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Mate Uruguayo Camionero Premium', 500, 1200, 'Mates realizados con calabazas y cuero finamente seleccionados', '3033333333', 1);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Bombilla Pico Loro Tambor', 500, 295, 'Bombilla Uruguaya Pico de Loro, de acero inoxidable, tipo tambor', '3044444444', 3);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Bombilla Metalica', 500, 199, 'Bombillas metalicas de varios colores de tipo resorte', '3044444444', 3);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Yerba Marolio', 494, 100, 'Yerba Mate Marolio, Marolio le da sabor a tu vida', '3055555555', 5);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Bolso para Mate Tahg', 500, 750, 'Bolso con cierre, tipo tahg, con bolsillo frontal', '3066666666', 4);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Bolso para Mate Gamuza', 5, 859, 'Bolso porta termo negro de poliester con gamuza', '3066666666', 4);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Automate Forrado', 500, 400, 'Mate Listo Automate Forrado de Metal 500cc', '3088888888', 6);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Termo Waterdog', 500, 2100, 'Termo Waterdog de acero inoxidable, de 1 litro, tipo bala', '3099999999', 2);
insert into producto(nombre, stock, precio, descripcion, proveedor, tipo)
	values('Termo Aluminio', 500, 500, 'Termo Aluminio Doble Capa Varios Colores 1 Litro', '3099999999', 2);
insert into producto(nombre,stock,precio,descripcion,proveedor,tipo)
	values('Termo Stanley', 500, 3500, 'El mismo termo pero careta', '3099999999',2);

-- Roles --
insert into rol(nombre) values('ADMINISTRADOR GENERAL');
insert into rol(nombre) values('ADMINISTRADOR VENTAS');
insert into rol(nombre) values('ADMINISTRADOR STOCK');
insert into rol(nombre) values('CLIENTE');


-- Usuarios --
insert into usuario values(
	'exe.gye@gmail.com', 'Exegye', 'exe123', 1, 'Exequiel', 'Gonzalez', '25 de Agosto 231', 'Concepcion del Uruguay', '3442647543');
insert into usuario values(
	'juancurtoni@gmail.com', 'Pipa Benedeto', 'juan123', 2, 'Juan', 'Curtoni', 'San Martin 362', 'Concepcion del Uruguay', '3445536635');
insert into usuario values(
	'sanchezhernan@gmail.com', 'Hornit0', 'hernan123', 3, 'Hernan', 'Sanchez', 'J. Peron 465', 'Concepcion del Uruguay', '3445431625');
insert into usuario values(
	'lazaro@gmail.com', 'Lazaro', 'laza123', 4, 'Lazaro', 'Rodriguez', '9 de Julio 3441', 'La Plata', '2114526721');
insert into usuario values(
	'kevinchen@gmail.com', 'Kevin', 'kevin123', 4, 'Kevin', 'Chen', '12 de Octubre 552', 'Concepcion del Uruguay', '3442647543');
insert into usuario values(
	'verocafrete@gmail.com', 'Verost', 'vero123', 4, 'Veronica', 'Frete', 'J. J. Urquiza 41', 'Posadas', '3764256216');
insert into usuario values(
	'danieldorado@gmail.com', 'Puerco', 'dani123', 4, 'Daniel', 'Dorado', 'Corrientes 467', 'Cordoba', '3511232597');
insert into usuario values(
	'luisreyes@gmail.com', 'Luisito', 'luis123', 4, 'Luis', 'Reyes', '25 de Agosto 231', 'Mar del Plata', '2236548962');
insert into usuario values(
	'tamaralozano@gmail.com', 'Tami22', 'tami123', 4, 'Tamara', 'Lozano', 'Colon 668', 'Naschel', '2656332584');
insert into usuario values(
	'carlospalacios@gmail.com', 'CarlosP', 'carlos123', 4, 'Carlos', 'Palacios', '3 de Febrero 989', 'General Pico', '2302424562');

-- Combos --
insert into combo(nombre, precio, fechainicio, fechafinal, descripcion) values(
	'Combo de Mate Calabaza y bombilla Pico Loro', 995, '2009-11-13', '2010-11-13', 'Mate Uruguayo hecho de las mejores calabazas con Bombilla Uruguaya Pico de Loro, de acero inoxidable, tipo tambor');
insert into combo(nombre, precio, fechainicio, fechafinal, descripcion) values(
	'Combo de Mate Premium y bombilla Pico Loro', 1495, '2009-11-13', '2010-11-13', 'Mate realizado con calabazas y cuero finamente seleccionados con Bombilla Uruguaya Pico de Loro, de acero inoxidable, tipo tambor');
insert into combo(nombre, precio, fechainicio, fechafinal, descripcion) values(
	'Combo de Mate, Bombilla, Termo Aluminio y Bolso para Mate', 2149, '2009-11-13', '2010-11-13', 'Mate Uruguayo hecho de las mejores calabazas con Bombilla Matelica tipo resorte, Termo Aluminio Doble Capa y Bolso con cierre, tipo tahg con cierre frontal');
insert into combo(nombre, precio, fechainicio, fechafinal, descripcion) values(
	'Combo de Mate Uruguayo Cuero y Mate Uruguayo Calabaza', 1600, '2011-10-15', '2013-12-07', 'Promocion de dos Mates Uruguayos -Calabaza y Cuero-');
insert into combo(nombre, precio, fechainicio, fechafinal, descripcion) values(
	'Combo Termo Aluminio y Automate Forrado', 3900, '2010-10-12', '2015-05-01', 'Promocion de termo Aluminio mas Automate-');
insert into combo(nombre, precio, fechainicio, fechafinal, descripcion) values(
	'Combo Bolso para Mate Tahg y Yerba Marolio', 850, '2016-04-24', '2018-10-25', 'Promocion de bolso Mate Tahg y Yerba Marolio-');
insert into combo(nombre, precio, fechainicio, fechafinal, descripcion) values(
	'Combo Mate Uruguayo Calabaza y Yerba Marolio', 800, '2005-02-15', '2010-05-14', 'Promocion de mate Uruguayo Calabaza y Yerba Marolio-');
insert into combo(nombre, precio, fechainicio, fechafinal, descripcion) values(
	'Combo Mate Uruguayo Calabaza y Termo Stanley', 4200, '2017-09-20', '2018-01-12', 'Promocion de mate Uruguayo Calabaza y Termo Stanley-');
insert into combo(nombre, precio, fechainicio, fechafinal, descripcion) values(
	'Combo Bombilla Metalica y Termo Aluminio', 699, '2013-08-14', '2019-12-12', 'Promocion de bombilla Melatica y Termo Aluminio-');
insert into combo(nombre, precio, fechainicio, fechafinal, descripcion) values(
	'Combo Mate Madera y Yerba Marolio', 500, '2015-11-24', '2017-04-06', 'Promocion de mate Madera y Yerba Marolio-');


-- ProductoxCombo --
insert into productoxcombo values(1, 1);
insert into productoxcombo values(5, 1);
insert into productoxcombo values(4, 2);
insert into productoxcombo values(5, 2);
insert into productoxcombo values(1, 3);
insert into productoxcombo values(6, 3);
insert into productoxcombo values(12, 3);
insert into productoxcombo values(8, 3);
insert into productoxcombo values(1, 4); 
insert into productoxcombo values(2, 4);
insert into productoxcombo values(10,5);
insert into productoxcombo values(12,5);
insert into productoxcombo values(7,6);
insert into productoxcombo values(8,6);
insert into productoxcombo values(7,7);
insert into productoxcombo values(1,7);
insert into productoxcombo values(1,8);
insert into productoxcombo values(13,8);
insert into productoxcombo values(12,9);
insert into productoxcombo values(6,9);
insert into productoxcombo values(7,10);
insert into productoxcombo values(3,10);


-- Comentario -- 
insert into comentario(fecha, hora, contenido, usuario, producto) values(
	'2019-10-14', '12:30:42', 'Producto de excelente calidad, muy recomendado', 'exe.gye@gmail.com',4);
insert into comentario(fecha, hora, contenido, usuario, producto) values(
	'2019-08-14', '22:10:00', 'El producto funciona correctamente', 'juancurtoni@gmail.com',2);
insert into comentario(fecha, hora, contenido, usuario, producto) values(
	'2017-02-03', '05:30:22', 'Producto de buena calidad a un precio barato', 'lazaro@gmail.com',8);
insert into comentario(fecha, hora, contenido, usuario, producto) values(
	'2018-12-01', '16:57:29', 'El producto no era lo que esperaba', 'luisreyes@gmail.com',11);
insert into comentario(fecha, hora, contenido, usuario, producto) values(
	'2019-09-11', '08:02:57', 'Buen producto', 'carlospalacios@gmail.com',6);
insert into comentario(fecha, hora, contenido, usuario, producto) values(
	'2018-04-24', '22:05:20', 'Excelente calidad', 'exe.gye@gmail.com',1);
insert into comentario(fecha, hora, contenido, usuario, producto) values(
	'2011-03-30', '01:40:40', 'Demasiado caro el producto', 'carlospalacios@gmail.com',6);
insert into comentario(fecha, hora, contenido, usuario, producto) values(
	'2014-02-01', '09:29:50', 'Producto super recomendado', 'verocafrete@gmail.com',7);
insert into comentario(fecha, hora, contenido, usuario, producto) values(
	'2016-10-25', '19:04:20', 'El producto llego a tiempo y sin problemas', 'sanchezhernan@gmail.com',11);
insert into comentario(fecha, hora, contenido, usuario, producto) values(
	'2015-01-30', '02:49:13', 'El producto llego una semana mas tarde', 'juancurtoni@gmail.com',5);

-- Carrito --
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));
insert into carrito values (nextval('carrito_codigo_seq'));

-- Linea -- 
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(6, 2400, 3, null, 2);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(3, 4485, null, 2, 1);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(20, 3980, 6, null, 3);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(1, 995, null, 1, 1);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(3, 995, 13, null, 1);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(5, 2000, 10, null, 4);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(10, 7000, 1, null, 3);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(30, 3000, 7, null, 5);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(4, 8596, null, 3, 6);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(15, 24000, null, 4, 6);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(18, 16200, 2, null, 3);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(4, 24000, 5, null, 6);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(15, 24000, null, 6, 7);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(8, 24000, 7, null, 7);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(15, 24000, null, 7, 8);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(1, 24000, 11, null, 8);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(15, 24000, null, 8, 9);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(8, 24000, 4, null, 9);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(15, 24000, null, 10, 10);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(4, 24000, 2, null, 10);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(7, 24000, 2, null, 11);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(3, 5500, 3, null, 12);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(6, 600, 7, null, 13);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(5, 600, 7, null, 14);
insert into linea(cantidadproducto, totalproducto, producto, combo, carrito) values(5, 600, 1, null, 14);

-- Compra --
-- Se insertan como finalizadas para poder realizar las calificaciones
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	2400,'2019-04-24', '09:22:11', '3000000022222222', 'VISA', 2,'exe.gye@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	5480,'2010-06-12', '22:06:59', '9999888877776666', 'VISA', 1,'juancurtoni@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	27180,'2017-11-28', '15:42:10', '1111222233334444', 'MASTERCARD', 3,'lazaro@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	2000,'2014-04-03', '19:30:46', '2222333344449999', 'MASTERCARD', 4,'exe.gye@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	3000,'2018-06-22', '10:20:37', '4444555544445555', 'NARANJA', 5,'danieldorado@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	32596,'2019-02-24', '02:24:19', '9999222211110000', 'NARANJA', 6,'luisreyes@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	27180,'2015-10-31', '07:14:49', '8888444499992222', 'CABAL', 7,'juancurtoni@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	2000,'2016-08-14', '20:56:11', '1111333311112222', 'CABAL', 8,'juancurtoni@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	2000,'2019-01-02', '23:11:00', '5555333322221111', 'VISA', 9,'carlospalacios@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	2400,'2017-05-12', '13:48:15', '4444000044440000', 'MASTERCARD', 10,'kevinchen@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	2000,'2018-12-12', '11:42:15', '4422000011114444', 'MASTERCARD', 11,'exe.gye@gmail.com', 'FINALIZADA');
insert into compra(total, fecha, hora, numerotarjeta, tipotarjeta, carrito, usuario, estado) values(
	3290,'2014-05-22', '19:30:11', '4422999912214488', 'MASTERCARD', 12,'kevinchen@gmail.com', 'FINALIZADA');

-- Calificacion --
insert into calificacion(calificacion, fecha, hora, usuario, producto) values(
	5,'2019-01-06','20:10:33','exe.gye@gmail.com',3);
insert into calificacion(calificacion, fecha, hora, usuario, producto) values(
	4,'2019-02-14','10:22:13','carlospalacios@gmail.com',4);
insert into calificacion(calificacion, fecha, hora, usuario, producto) values(
	5,'2017-05-22','15:10:33','juancurtoni@gmail.com',13);
insert into calificacion(calificacion, fecha, hora, usuario, producto) values(
	4,'2015-02-13','14:13:12','lazaro@gmail.com',6);
insert into calificacion(calificacion, fecha, hora, usuario, producto) values(
	1,'2018-01-24','19:04:55','danieldorado@gmail.com',7);
insert into calificacion(calificacion, fecha, hora, usuario, producto) values(
	2,'2015-06-11','04:14:44','exe.gye@gmail.com',10);
insert into calificacion(calificacion, fecha, hora, usuario, producto) values(
	5,'2016-12-24','23:59:10','juancurtoni@gmail.com',7);
insert into calificacion(calificacion, fecha, hora, usuario, producto) values(
	5,'2016-12-24','23:59:10','juancurtoni@gmail.com',11);
insert into calificacion(calificacion, fecha, hora, usuario, producto) values(
	5,'2016-12-24','23:59:10','kevinchen@gmail.com',2);
insert into calificacion(calificacion, fecha, hora, usuario, producto) values(
	5,'2018-11-21','21:02:16','exe.gye@gmail.com',2);
