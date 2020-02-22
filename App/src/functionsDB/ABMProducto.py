#import sys, os
#sys.path.append(os.path.abspath(""))

from functionsDB.ConnectionDB import abrirconexion, cerrarconexion
from functionsDB.entity.producto import Producto

def altaproducto(producto):
    cur,con = abrirconexion()
    sql = "insert into producto(nombre,stock,precio,stockmin,descripcion,proveedor,tipo,urlfoto) values('"+producto.get_nombre()+"','"+str(producto.get_stock())+"','"+str(producto.get_precio())+"','"+str(producto.get_stockmin())+"','"+producto.get_descripcion()+"','"+producto.get_proveedor()+"','"+str(producto.get_tipo())+"','"+producto.get_urlfoto()+"')"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajaproducto(producto):
    cur,con = abrirconexion()
    sql = "delete from producto where codigo= '"+str(producto.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarproducto(producto):
    cur,con = abrirconexion()
    sql = "update producto set nombre='"+producto.get_nombre()+"', stock='"+str(producto.get_stock())+"', precio='"+str(producto.get_precio())+"', stockmin='"+str(producto.get_stockmin())+"', descripcion='"+producto.get_descripcion()+"', calificacion='"+str(producto.get_calificacion())+"', proveedor='"+producto.get_proveedor()+"', tipo='"+str(producto.get_tipo())+"', urlfoto='"+producto.get_urlfoto()+"' where codigo='"+str(producto.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def listadoproductos():
    results = []
    cur,con = abrirconexion()
    sql = "select * from producto"
    cur.execute(sql)

    columns = list(map(lambda x: x[0], cur.description))
    for row in cur.fetchall():
        results.append(dict(zip(columns, row)))

    cerrarconexion(cur,con)
    return results

def descontarStock(cantidadproducto,codigo):
    cur,con = abrirconexion()
    sql = "select DescontarStock("+str(cantidadproducto)+","+str(codigo)+")"
    cur.execute(sql)
    cerrarconexion(cur,con)

def debajoStock():
    results = []
    cur,con = abrirconexion()
    sql = "select * from debajoStockMin"
    cur.execute(sql)

    columns = list(map(lambda x: x[0], cur.description))
    for row in cur.fetchall():
        results.append(dict(zip(columns, row)))

    cerrarconexion(cur,con)
    return results
    

"""
prod = Producto()
prod.set_descripcion("prueba")
prod.set_proveedor("1")
prod.set_stock(10)
prod.set_stockmin(2)
prod.set_tipo(1)
prod.set_precio(1000)
prod.set_calificacion(8.4)
prod.set_codigo(1)
prod.set_nombre("termo nuevo")

altaproducto(prod)
bajaproducto(prod)
modificarproducto(prod)
"""
