import sys, os
sys.path.append(os.path.abspath(""))

from functionsDB.ConnectionDB import abrirconexion, cerrarconexion
from functionsDB.entity.usuario import Usuario

#import sys, os
#sys.path.append(os.path.abspath(""))
#import src.entity.usuario 

def altausuario(usuario):
    cur,con = abrirconexion()
    sql = "insert into usuario(email,nombreuser,urlfoto,rol,nombre,apellido,direccion,ciudad,telefono) values('"+usuario.get_email()+"','"+usuario.get_nombreuser()+"','"+usuario.get_urlfoto()+"',"+str(usuario.get_rol())+","+usuario.get_nombre()+","+usuario.get_apellido()+","+usuario.get_direccion()+","+usuario.get_ciudad()+","+usuario.get_telefono()+")"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajausuario(usuario):
    cur,con = abrirconexion()
    sql = "delete from usuario where email= '"+usuario.get_email()+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarusuario(usuario):
    cur,con = abrirconexion()
    sql = "update usuario set nombreuser='"+usuario.get_nombreuser()+"', urlfoto='"+usuario.get_urlfoto()+"', rol='"+str(usuario.get_rol())+"', nombre='"+usuario.get_nombre()+"', apellido='"+usuario.get_apellido()+"', direccion='"+usuario.get_direccion()+"', ciudad='"+usuario.get_ciudad()+"', telefono='"+usuario.get_telefono()+"' where email='"+usuario.get_email()+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def obtenerusuario(email):
    results = []
    cur,con = abrirconexion()
    sql = "select * from usuario where email='"+email+"'"
    cur.execute(sql)

    columns = list(map(lambda x: x[0], cur.description))
    for row in cur.fetchall():
        results.append(dict(zip(columns, row)))

    cerrarconexion(cur,con)
    return results

def listadousuarios():
    results = []
    cur,con = abrirconexion()
    sql = "select * from usuario"
    cur.execute(sql)

    columns = list(map(lambda x: x[0], cur.description))
    for row in cur.fetchall():
        results.append(dict(zip(columns, row)))

    cerrarconexion(cur,con)
    return results

#aux = obtenerusuario('exe.gye@gmail.com')
#print(aux)

"""
user = Usuario()
user.set_email("nuevo@gmail.com")
user.set_apellido("gonzalez")
user.set_ciudad("CdelU")
user.set_contrasenia("123455")
user.set_nombre("Juan")
user.set_nombreuser("holajuan")
user.set_direccion("asdsadasds")
user.set_rol(1)
user.set_telefono("111111")

print(type(user.get_apellido()))
altausuario(user)
bajausuario(user)
modificarusuario(user)
"""