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

select * from ProductosDeUnCombo(1)