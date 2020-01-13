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
