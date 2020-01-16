-- Funcion para obtener los productos de un combo
CREATE OR REPLACE FUNCTION ProductosDeUnCombo(integer) RETURNS TABLE (codigo integer, nombre varchar(70), stock integer, precio float, stockmin integer, descripcion varchar(255), calificacion integer, proveedor varchar(11), tipo integer) AS
$BODY$
DECLARE
BEGIN
	return query (select p.codigo, p.nombre, p.stock, p.precio, p.stockmin, p.descripcion, p.calificacion, p.proveedor, p.tipo
		from producto p, productoxcombo pc, combo c 
		where c.codigo=$1 and p.codigo=pc.producto  and c.codigo=pc.combo);
end
$BODY$
LANGUAGE 'plpgsql';

-- Funcion para obtener los comentarios de un producto
/*CREATE OR REPLACE FUNCTION ComentariosDeUnProducto(integer) RETURNS TABLE (codigo integer, fecha date, hora time, contenido varchar(255), usuario varchar(255), producto integer) AS
$BODY$
DECLARE
BEGIN
	return query (select c.codigo, c.fecha, c.hora, c.contenido, c.usuario, c.producto
		from comentario c 
		where c.producto=$1);
end
$BODY$
LANGUAGE 'plpgsql';*/

--Funcion para obtener los productos y combos de un carrito
CREATE OR REPLACE FUNCTION ProductosDeUnCarrito(integer) RETURNS TABLE (codigo integer, nombre varchar(255), descripcion varchar(255), preciounidad float, cantidadproducto integer, totalproducto float) AS
$BODY$
DECLARE
BEGIN
	return query (select l.codigo, p.nombre, p.descripcion, p.precio, l.cantidadproducto, l.totalproducto
		from producto p, linea l 
		where (l.carrito=$1) and (l.producto=p.codigo) and (l.producto is not null));
end
$BODY$
LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION CombosDeUnCarrito(integer) RETURNS TABLE (codigo integer, nombre varchar(255), descripcion varchar(255), preciounidad float, cantidadproducto integer, totalproducto float) AS
$BODY$
DECLARE
BEGIN
	return query (select l.codigo, c.nombre, c.descripcion, c.precio, l.cantidadproducto, l.totalproducto
		from combo c, linea l 
		where (l.carrito=$1) and (l.combo=c.codigo) and (l.combo is not null));
end
$BODY$
LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION UnionCarrito(integer) RETURNS TABLE (codigo integer, nombre varchar(255), descripcion varchar(255), preciounidad float, cantidadproducto integer, totalproducto float) AS
$BODY$
DECLARE
BEGIN
	return query ((select * from ProductosDeUnCarrito($1)) union (select * from CombosDeUnCarrito($1)));
end
$BODY$
LANGUAGE 'plpgsql';

--select * from UnionCarrito(8)