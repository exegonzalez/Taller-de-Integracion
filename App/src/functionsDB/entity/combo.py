class Combo():

    def __init__(self, codigo=None, nombre=None, precio=None, fechainicio=None, fechafinal=None, descripcion=None,
    urlfoto=None):
        self.codigo = codigo
        self.nombre = nombre
        self.precio = precio
        self.fechainicio = fechainicio
        self.fechafinal = fechafinal
        self.descripcion = descripcion
        self.urlfoto = urlfoto

    def get_codigo(self):
        return self.codigo
    
    def set_codigo(self, codigo) :
        self.codigo = codigo

    def get_nombre(self):
      return self.nombre

    def set_nombre(self, nombre) :
        self.nombre = nombre

    def get_precio(self):
        return self.precio

    def set_precio(self, precio) :
        self.precio = precio

    def get_descripcion(self):
        return self.descripcion

    def set_descripcion(self, descripcion) :
        self.descripcion = descripcion

    def get_fechainicio(self):
        return self.fechainicio

    def set_fechainicio(self, fechainicio) :
        self.fechainicio = fechainicio

    def get_fechafinal(self):
        return self.fechafinal

    def set_fechafinal(self, fechafinal) :
        self.fechafinal = fechafinal

    def get_urlfoto(self):
        return self.urlfoto

    def set_urlfoto(self, urlfoto) :
        self.urlfoto = urlfoto
