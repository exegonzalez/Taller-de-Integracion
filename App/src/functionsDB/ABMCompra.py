#import sys, os
#sys.path.append(os.path.abspath(""))

from functionsDB.ConnectionDB import abrirconexion, cerrarconexion
from functionsDB.entity.compra import Compra
from datetime import datetime

def altacompra(compra):
    cur,con = abrirconexion()
    sql = "insert into compra(total,fecha,hora,carrito,usuario,estado) values("+str(compra.get_total())+",'"+compra.get_fecha()+"','"+compra.get_hora()+"',"+str(compra.get_carrito())+",'"+compra.get_usuario()+"','"+compra.get_estado()+"')"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajacompra(compra):
    cur,con = abrirconexion()
    sql = "delete from compra where carrito= '"+str(compra.get_carrito())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarcompra(compra):
    cur,con = abrirconexion()
    sql = "update compra set estado='"+compra.get_estado()+"' where carrito='"+str(compra.get_carrito())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def listadocompras():
    results = []
    cur,con = abrirconexion()
    sql = "select * from compra"
    cur.execute(sql)

    columns = list(map(lambda x: x[0], cur.description))
    for row in cur.fetchall():
        # print(type(row[2]), type(row[3]))
        results.append(dict(zip(columns, row)))
        fecha = results[-1]['fecha']
        hora = results[-1]['hora']
        fecha = datetime(fecha.year, fecha.month, fecha.day)
        hora = datetime(fecha.year, fecha.month, fecha.day, hora.hour, hora.minute, hora.second)
        results[-1]['fecha'] = fecha.strftime('%Y-%m-%d')
        results[-1]['hora'] = hora.strftime('%H:%M:%S')

    cerrarconexion(cur,con)
    return results

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
comp.set_estado("ESPERA")

altacompra(comp)
modificarcompra(comp)
bajacompra(comp)
"""