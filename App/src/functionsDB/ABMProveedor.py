#import sys, os
#sys.path.append(os.path.abspath(""))
#print(os.path.abspath(""))
from functionsDB.ConnectionDB import abrirconexion, cerrarconexion
from functionsDB.entity.proveedor import Proveedor

def altaproveedor(proveedor):
    cur,con = abrirconexion()
    sql = "insert into proveedor(cuit,nombre,direccion,ciudad,email,telefono) values('"+proveedor.get_cuit()+"','"+proveedor.get_nombre()+"','"+proveedor.get_direccion()+"','"+proveedor.get_ciudad()+"','"+proveedor.get_email()+"','"+proveedor.get_telefono()+"')"
    cur.execute(sql)
    cerrarconexion(cur,con)

def bajaproveedor(proveedor):
    cur,con = abrirconexion()
    sql = "delete from proveedor where cuit= '"+proveedor.get_cuit()+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def modificarproveedor(proveedor):
    cur,con = abrirconexion()
    sql = "update proveedor set nombre='"+proveedor.get_nombre()+"', direccion='"+proveedor.get_direccion()+"', ciudad='"+proveedor.get_ciudad()+"', email='"+proveedor.get_email()+"', telefono='"+proveedor.get_telefono()+"' where cuit='"+proveedor.get_cuit()+"'"
    cur.execute(sql)
    cerrarconexion(cur,con)

def listadoproveedores():
    results = []
    cur,con = abrirconexion()
    sql = "select * from proveedor"
    cur.execute(sql)

    columns = list(map(lambda x: x[0], cur.description))
    for row in cur.fetchall():
        results.append(dict(zip(columns, row)))

    cerrarconexion(cur,con)
    return results

"""
prov = Proveedor()
prov.set_cuit("1")
prov.set_ciudad("cdelu")
prov.set_direccion("hola123")
prov.set_email("prueba@gmail.com")
prov.set_telefono("2332442")
prov.set_nombre("cambio")

altaproveedor(prov)
bajaproveedor(prov)
modificarproveedor(prov)
"""
