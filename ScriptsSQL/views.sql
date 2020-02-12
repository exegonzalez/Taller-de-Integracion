-- Vistas --

-- 2. Dado un combo, ver cuantos se vendieron en el periodo que estuvo disponible -- 
CREATE VIEW lineaCombos AS SELECT * FROM linea WHERE combo is not null;

-- 4. Proveedor que provee más productos --
CREATE VIEW proveedorMasProductos AS SELECT p.proveedor, COUNT(p.proveedor) AS productos_provistos
FROM producto p GROUP BY p.proveedor ORDER BY productos_provistos DESC LIMIT 1;

-- 5. Listado de productos que pertenecen a más de un combo --
CREATE VIEW productosMuchosCombos AS SELECT distinct pxc1.producto FROM productoxcombo pxc1, productoxcombo pxc2
WHERE pxc1.producto=pxc2.producto and pxc1.combo!=pxc2.combo;

-- 6. Producto más solicitado o vendido durante cierto periodo --
CREATE VIEW lineaProductos AS SELECT * FROM linea WHERE producto is not null;

-- 7. Listado de productos que estan por debajo del stock minimo disponible --
CREATE VIEW debajoStockMin AS SELECT p.codigo, p.nombre, p.stock, p.precio, p.stockmin, p.descripcion, p.calificacion, p.tipo, p.proveedor FROM producto p where p.stock < p.stockmin;

