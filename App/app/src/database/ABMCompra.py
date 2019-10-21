import sys, os
sys.path.append(os.path.abspath(""))

from ConnectionDB import abrirconexion, cerrarconexion
from src.entity.compra import Compra
from datetime import datetime

def altacompra(compra):
    cur,con = abrirconexion()
    sql = "insert into compra(total,fecha,hora,numerotarjeta,tipotarjeta,carrito,usuario) values('"+str(compra.get_total())+"','"+compra.get_fecha()+"','"+compra.get_hora()+"','"+compra.get_numerotarjeta()+"','"+compra.get_tipotarjeta()+"','"+str(compra.get_carrito())+"','"+compra.get_usuario()+"')"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajacompra(compra):
    cur,con = abrirconexion()
    sql = "delete from compra where codigo= '"+str(compra.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarcompra(compra):
    cur,con = abrirconexion()
    sql = "update compra set total='"+str(compra.get_total())+"', fecha='"+compra.get_fecha()+"', hora='"+compra.get_hora()+"', numerotarjeta='"+compra.get_numerotarjeta()+"', tipotarjeta='"+compra.get_tipotarjeta()+"', carrito='"+str(compra.get_carrito())+"', usuario='"+compra.get_usuario()+"' where codigo='"+str(compra.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

"""
now = datetime.now()
comp = Compra()
comp.set_codigo(1)
comp.set_fecha(str(now.year)+'-'+str(now.month)+'-'+str(now.day))
comp.set_hora(str(10)+':'+str(57)+':'+str(now.second)) 
comp.set_numerotarjeta("2222-222")
comp.set_tipotarjeta("mastercard debito")
comp.set_total(4000)
comp.set_carrito(1)
comp.set_usuario("nuevo@gmail.com")

altacompra(comp)
modificarcompra(comp)
bajacompra(comp)
"""