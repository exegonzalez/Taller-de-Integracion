import psycopg2 as dbapi

def abrirconexion():
    con = dbapi.connect("dbname='ecommerceDB' user='postgres' host='localhost' password='gimnasiadeentrerios14'")
    cur = con.cursor()
    return cur,con

#sql = "select * from rol"
#cur.execute(sql)

#for fila in cur.fetchall():
#    print(fila)

#sql = "insert into rol(nombre) values('ADMINISTRADOR GENERAL')"
#cur = con.cursor()
#cur.execute(sql)

#con.commit()

def cerrarconexion(cur,con):
    con.commit()
    cur.close()
    con.close()