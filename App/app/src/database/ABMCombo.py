import sys, os
sys.path.append(os.path.abspath(""))

from ConnectionDB import abrirconexion, cerrarconexion
from src.entity.combo import Combo
from datetime import datetime

def altacombo(combo):
    cur,con = abrirconexion()
    sql = "insert into combo(nombre, precio,fechainicio,fechafinal,descripcion) values('"+combo.get_nombre()+"','"+str(combo.get_precio())+"','"+combo.get_fechainicio()+"','"+combo.get_fechafinal()+"','"+combo.get_descripcion()+"')"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajacombo(combo):
    cur,con = abrirconexion()
    sql = "delete from combo where codigo= '"+str(combo.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarcombo(combo):
    cur,con = abrirconexion()
    sql = "update combo set nombre='"+combo.get_nombre()+"', precio='"+str(combo.get_precio())+"', fechainicio='"+combo.get_fechainicio()+"', fechafinal='"+combo.get_fechafinal()+"', descripcion='"+combo.get_descripcion()+"' where codigo='"+str(combo.get_codigo())+"'"
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