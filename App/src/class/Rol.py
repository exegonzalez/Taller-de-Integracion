class Rol():

    def __init__(self, codigo=None, nombre=None):
        self.codigo = codigo
        self.nombre = nombre

    def get_codigo(self):
        return self.codigo

    def set_codigo(self, codigo) :
        self.codigo = codigo

    def get_nombre(self):
        return self.nombre
    
    def set_nombre(self, nombre) :
        self.nombre = nombre


    