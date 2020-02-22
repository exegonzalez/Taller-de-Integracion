import psycopg2 as dbapi

def abrirconexion():
    con = dbapi.connect("dbname='ecommerceDB' user='postgres' host='localhost' password='gimnasiadeentrerios14'")
    cur = con.cursor()
    return cur,con

def cerrarconexion(cur,con):
    con.commit()
    cur.close()
    con.close()