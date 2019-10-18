class Combo():

    def __init__(self, codigo=None, precio=None, fechainicio=None, fechafinal=None, descripcion=None):
        self.codigo = codigo
        self.precio = precio
        self.fechainicio = fechainicio
        self.fechafinal = fechafinal
        self.descripcion = descripcion

    def get_codigo(self):
        return self.codigo
    
    def set_codigo(self, codigo) :
        self.codigo = codigo

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

