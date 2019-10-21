import sys, os
sys.path.append(os.path.abspath(""))

from ConnectionDB import abrirconexion, cerrarconexion
from src.entity.linea import Linea

def altalinea(linea):
    cur,con = abrirconexion()
    sql = "insert into linea(cantidadproducto,totalproducto,producto,combo,carrito) values('"+str(linea.get_cantidadproducto())+"','"+str(linea.get_totalproducto())+"','"+str(linea.get_producto())+"','"+str(linea.get_combo())+"','"+str(linea.get_carrito())+"')"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajalinea(linea):
    cur,con = abrirconexion()
    sql = "delete from linea where codigo= '"+str(linea.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarlinea(linea):
    cur,con = abrirconexion()
    sql = "update linea set cantidadproducto='"+str(linea.get_cantidadproducto())+"', totalproducto='"+str(linea.get_totalproducto())+"', producto='"+str(linea.get_producto())+"', combo='"+str(linea.get_combo())+"', carrito='"+str(linea.get_carrito())+"' where codigo='"+str(linea.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

"""
lin = Linea()
lin.set_codigo(2)
lin.set_cantidadproducto(30)
lin.set_totalproducto(2000)
lin.set_producto(2)
lin.set_combo(2)
lin.set_carrito(1)

altalinea(lin)
modificarlinea(lin)
bajalinea(lin)
"""