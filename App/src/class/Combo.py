class Combo():

    def __init__(self, codigo=None, precio=None, descripcion=None, tipo=None):
        self.codigo = codigo
        self.precio = precio
        self.descripcion = descripcion
        self.tipo = tipo

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

    def get_tipo(self):
        return self.tipo
    
    def set_tipo(self, tipo) :
        self.tipo = tipo

