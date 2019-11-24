import sys, os
sys.path.append(os.path.abspath(""))

from ConnectionDB import abrirconexion, cerrarconexion
from src.entity.comentario import Comentario
from datetime import datetime

def altacomentario(comentario):
    cur,con = abrirconexion()
    sql = "insert into comentario(fecha,hora,contenido,usuario,producto) values('"+comentario.get_fecha()+"','"+comentario.get_hora()+"','"+comentario.get_contenido()+"','"+comentario.get_usuario()+"','"+str(comentario.get_producto())+"')"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajacomentario(comentario):
    cur,con = abrirconexion()
    sql = "delete from comentario where codigo= '"+str(comentario.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarcomentario(comentario):
    cur,con = abrirconexion()
    sql = "update comentario set fecha='"+comentario.get_fecha()+"', hora='"+comentario.get_hora()+"', contenido='"+comentario.get_contenido()+"', usuario='"+comentario.get_usuario()+"', producto='"+str(comentario.get_producto())+"' where codigo='"+str(comentario.get_codigo())+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)


now = datetime.now()
coment = Comentario()
coment.set_codigo(12)
coment.set_fecha(str(now.year)+'-'+str(now.month)+'-'+str(now.day))
coment.set_hora(str(20)+':'+str(12)+':'+str(now.second))
coment.set_contenido('mensaje de error')
coment.set_usuario("exe.gye@gmail.com")
coment.set_producto(2)

#altacomentario(coment)
#modificarcomentario(coment)
bajacomentario(coment)
