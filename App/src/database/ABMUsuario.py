from ConnectionDB import abrirconexion, cerrarconexion

def altausuario(usuario):
    cur,con = abrirconexion()
    sql = "insert into usuario(email,nombreuser,contrasenia,rol,nombre,apellido,direccion,ciudad,telefono) values(usuario.email,usuario.nombreuser,usuario.contrasenia,CLIENTE,usuario.nombre,usuario.apellido,usuario.direccion,usuario.ciudad,usuario.telefono)"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajausuario(usuario):
    cur,con = abrirconexion()
    sql = "delete from usuario where email=usuario.email"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarusuario(usuario):
    cur,con = abrirconexion()
    sql = "update usuario set nombreuser=usuario.nombreuser, contrasenia=usuario.contrasenia, rol=usuario.rol, nombre=usuario.nombre,apellido=usuario.apellido, direccion=usuario.direccion, ciudad=usuario.ciudad, telefono=usuario.telefono where email=usuario.email"
    cur.execute(sql)
    cerrarconexion(cur,con)
