class Producto():

    def __init__(self, codigo=None, nombre=None, stock=None, precio=None, stockmin=None, descripcion=None, calificacion=None,
    proveedor=None, tipo=None, urlfoto=None):
        self.codigo = codigo
        self.nombre = nombre
        self.stock = stock
        self.precio = precio
        self.stockmin = stockmin
        self.descripcion = descripcion
        self.calificacion = calificacion
        self.proveedor = proveedor
        self.tipo = tipo
        self.urlfoto = urlfoto

    def get_codigo(self):
        return self.codigo
    
    def set_codigo(self, codigo) :
        self.codigo = codigo

    def get_nombre(self):
	    return self.nombre

    def set_nombre(self, nombre) :
	    self.nombre = nombre

    def get_stock(self):
        return self.stock
    
    def set_stock(self, stock) :
        self.stock = stock

    def get_precio(self):
        return self.precio
    
    def set_precio(self, precio) :
        self.precio = precio

    def get_stockmin(self):
        return self.stockmin
    
    def set_stockmin(self, stockmin) :
        self.stockmin = stockmin

    def get_descripcion(self):
        return self.descripcion
    
    def set_descripcion(self, descripcion) :
        self.descripcion = descripcion

    def get_calificacion(self):
        return self.calificacion
    
    def set_calificacion(self, calificacion) :
        self.calificacion = calificacion

    def get_proveedor(self):
        return self.proveedor
    
    def set_proveedor(self, proveedor) :
        self.proveedor = proveedor

    def get_tipo(self):
        return self.tipo
    
    def set_tipo(self, tipo) :
        self.tipo = tipo

    def get_urlfoto(self):
        return self.urlfoto
    
    def set_urlfoto(self, urlfoto) :
        self.urlfoto = urlfoto
