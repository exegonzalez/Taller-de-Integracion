#import sys, os
#sys.path.append(os.path.abspath(""))

from functionsDB.ConnectionDB import abrirconexion, cerrarconexion
from functionsDB.entity.combo import Combo
from datetime import datetime

def altacombo(combo):
    cur,con = abrirconexion()
    sql = "insert into combo(nombre, precio,fechainicio,fechafinal,descripcion,urlfoto) values('"+combo.get_nombre()+"','"+str(combo.get_precio())+"','"+combo.get_fechainicio()+"','"+combo.get_fechafinal()+"','"+combo.get_descripcion()+"','"+combo.get_urlfoto()+"')"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajacombo(combo):
    cur,con = abrirconexion()
    sql = "delete from combo where codigo= '"+str(combo.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarcombo(combo):
    cur,con = abrirconexion()
    sql = "update combo set nombre='"+combo.get_nombre()+"', precio='"+str(combo.get_precio())+"', fechainicio='"+combo.get_fechainicio()+"', fechafinal='"+combo.get_fechafinal()+"', descripcion='"+combo.get_descripcion()+"', urlfoto='"+combo.get_urlfoto()+"' where codigo='"+str(combo.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def listadocombos():
    results = []
    cur,con = abrirconexion()
    sql = "select * from combo"
    cur.execute(sql)

    columns = list(map(lambda x: x[0], cur.description))
    for row in cur.fetchall():
        results.append(dict(zip(columns, row)))
        fechainicio = results[-1]['fechainicio']
        fechafinal = results[-1]['fechafinal']
        fechainicio = datetime(fechainicio.year, fechainicio.month, fechainicio.day)
        fechafinal = datetime(fechafinal.year, fechafinal.month, fechafinal.day)
        results[-1]['fechainicio'] = fechainicio.strftime('%Y-%m-%d')
        results[-1]['fechafinal'] = fechafinal.strftime('%Y-%m-%d')

    cerrarconexion(cur,con)
    return results


def productosDeUnCombo(codigo):
    results = []
    cur,con = abrirconexion()
    sql = "select * from ProductosDeUnCombo("+str(codigo)+")"
    cur.execute(sql)

    columns = list(map(lambda x: x[0], cur.description))
    for row in cur.fetchall():
        results.append(dict(zip(columns, row)))

    cerrarconexion(cur,con)
    return results

def eliminarProductosDeUnCombo(codigoProducto,codigoCombo):
    cur,con = abrirconexion()
    sql = "delete from productoxcombo where producto='"+str(codigoProducto)+"' and combo='"+str(codigoCombo)+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def agregarProductosEnUnCombo(codigoProducto,codigoCombo):
    cur,con = abrirconexion()
    sql = "insert into productoxcombo values("+str(codigoProducto)+","+str(codigoCombo)+")"
    cur.execute(sql)
    cerrarconexion(cur,con)

"""
now = datetime.now()
comb = Combo()
comb.set_nombre("combo1")
comb.set_precio(200)
comb.set_fechainicio(str(now.year)+'-'+str(now.month)+'-'+str(now.day))  
comb.set_fechafinal(str(2030)+'-'+str(1)+'-'+str(30))
comb.set_descripcion("combo actualizado")
comb.set_codigo(2)

altacombo(comb)
bajacombo(comb)
modificarcombo(comb)
"""