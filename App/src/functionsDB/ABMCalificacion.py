#import sys, os
#sys.path.append(os.path.abspath(""))

from functionsDB.ConnectionDB import abrirconexion, cerrarconexion
from functionsDB.entity.calificacion import Calificacion
from datetime import datetime

def altacalificacion(calificacion):
    cur,con = abrirconexion()
    sql = "insert into calificacion(calificacion,fecha,hora,usuario,producto) values("+str(calificacion.get_calificacion())+",'"+calificacion.get_fecha()+"','"+calificacion.get_hora()+"','"+calificacion.get_usuario()+"',"+str(calificacion.get_producto())+")"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajacalificacion(calificacion):
    cur,con = abrirconexion()
    sql = "delete from calificacion where producto= "+str(calificacion.get_producto())+" and usuario= '"+calificacion.get_usuario()+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarcalificacion(calificacion):
    cur,con = abrirconexion()
    sql = "update calificacion set calificacion="+str(calificacion.get_calificacion())+", fecha='"+calificacion.get_fecha()+"', hora='"+calificacion.get_hora()+"' where producto= "+str(calificacion.get_producto())+" and usuario= '"+calificacion.get_usuario()+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

"""
now = datetime.now()
calif = Calificacion()
calif.set_calificacion(4)
calif.set_fecha(str(now.year)+'-'+str(now.month)+'-'+str(now.day))
calif.set_hora(str(10)+':'+str(30)+':'+str(now.second))
calif.set_usuario("danieldorado@gmail.com")
calif.set_producto(7)
"""
#altacalificacion(calif)
#modificarcalificacion(calif)
#bajacalificacion(calif)
