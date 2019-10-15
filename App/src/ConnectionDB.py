import psycopg2 as dbapi

con = dbapi.connect("dbname='ecommerceDB' user='postgres' host='localhost' password='gimnasiadeentrerios14'")
cur = con.cursor()
sql = "select * from rol"
cur.execute(sql)

for fila in cur.fetchall():
    print(fila)

#sql = "insert into rol(nombre) values('ADMINISTRADOR GENERAL')"
#cur = con.cursor()
#cur.execute(sql)

cur.close()
#con.commit()
con.close()