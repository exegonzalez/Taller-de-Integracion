-- Triggers

-- 1. Controlar que cuando se carga una línea solo puede haber un producto o combo, no ambos --
CREATE OR REPLACE FUNCTION controlLinea() RETURNS TRIGGER AS $funcemp$
DECLARE
BEGIN
	IF ((NEW.producto is null) and (NEW.combo is not null)) THEN
		RETURN NEW;
	ELSIF ((NEW.combo is null) and (NEW.producto is not null)) THEN
		RETURN NEW;
	ELSE
		RAISE EXCEPTION 'Solo se puede tener un producto o combo por linea';
	END IF;
END; $funcemp$ LANGUAGE plpgsql;

CREATE TRIGGER triggerControlLinea BEFORE INSERT OR UPDATE ON linea
FOR EACH ROW EXECUTE PROCEDURE controlLinea();

-- 2. Controlar que para calificar un producto, se debe haber realizado una compra del mismo previamente --
CREATE OR REPLACE FUNCTION controlCalificacionCompra() RETURNS TRIGGER AS $funcemp$
DECLARE
productoCompra bigint;
BEGIN
	productoCompra:= (select count(lp.producto) from compra co, carrito ca, lineaProductos lp
	WHERE NEW.usuario=co.usuario and ca.codigo=co.carrito and ca.codigo=lp.carrito and lp.producto=NEW.producto and co.estado='FINALIZADA');
	IF (productoCompra!=0) THEN
		RETURN NEW;
	ELSE
		RAISE EXCEPTION 'Debe realizar alguna compra del producto para poder calificarlo';
	END IF;
END; $funcemp$ LANGUAGE plpgsql;

CREATE TRIGGER triggerControlCalificacionCompra BEFORE INSERT OR UPDATE ON calificacion
FOR EACH ROW EXECUTE PROCEDURE controlCalificacionCompra();

-- 3. Cuando se realiza una calificación, actualizar la calificación actual del producto --
create or replace function actualizarCalificacion() RETURNS TRIGGER AS $funcemp$
declare
	promedio float;
	calif integer;
BEGIN
	promedio:= (select avg(calificacion) from calificacion where producto=NEW.producto);
	calif:= CAST ((select ROUND(promedio)) AS integer);
	update producto set calificacion=calif where codigo=NEW.producto;
	return new;
END;$funcemp$ LANGUAGE plpgsql;

create trigger triggerActualizarCalificacion after insert or update on calificacion
for each row execute procedure actualizarCalificacion();

-- 4. Verificacion de que solamente el estado ESPERA de la compra pase a otro estado, y control de que en la actualizacion
-- no se cambien otros datos de la compra.
create or replace function cambiarEstadoCompra() RETURNS TRIGGER AS $funcemp$
declare
BEGIN
	IF (OLD.estado='CANCELADA') THEN
		RAISE EXCEPTION 'No se puede cambiar el estado de una compra cancelada';
	ELSIF (OLD.estado='FINALIZADA') THEN
		RAISE EXCEPTION 'No se puede cambiar el estado de una compra finalizada';
	ELSIF (OLD.estado='ESPERA' and OLD.total=NEW.total and OLD.fecha=NEW.fecha and OLD.hora=NEW.hora and 
		  OLD.numerotarjeta=NEW.numerotarjeta and OLD.tipotarjeta=NEW.tipotarjeta and OLD.carrito=NEW.carrito and
		  OLD.usuario=NEW.usuario) THEN
		RETURN NEW;
	ELSE
		RAISE EXCEPTION 'No se pueden cambiar los valores de la compra, solo su estado';
	END IF;
END;$funcemp$ LANGUAGE plpgsql;

create trigger triggerControlCompra BEFORE update on compra
for each row execute procedure cambiarEstadoCompra();

-- 5. Verificacion de que la cantidad de productos a comprar en una linea, sea menor o igual que el stock disponible
create or replace function cantidadProductosLinea() RETURNS TRIGGER AS $funcemp$
declare  
	cantidad integer;
	valor boolean;
BEGIN
	IF ((NEW.combo is null) and (NEW.producto is not null)) THEN
		cantidad:= (select p.stock from producto p where p.codigo=NEW.producto);
		IF(cantidad<NEW.cantidadproducto) THEN
			RAISE EXCEPTION 'La cantidad de productos a comprar excede el stock';
		ELSE
			return new;
		END IF;
	ELSIF ((NEW.producto is null) and (NEW.combo is not null)) THEN
		valor:= cantidadLineaProductosCombo(NEW.cantidadproducto, NEW.combo);
		IF(valor)THEN
			return new;
		ELSE
			RAISE EXCEPTION 'La cantidad de productos a comprar excede el stock';
		END IF;
	ELSE
		RAISE EXCEPTION 'Solo se puede tener un producto o combo por linea';
	END IF;
END;$funcemp$ LANGUAGE plpgsql;

create trigger cantidadProductosLinea BEFORE insert or update on linea
for each row execute procedure cantidadProductosLinea();

