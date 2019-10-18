
class Linea():

    def __init__(self, codigo=None, cantidadproducto=None, totalproducto=None, producto=None, combo=None,
    carrito=None):
        self.codigo = codigo
        self.cantidadproducto = cantidadproducto
        self.totalproducto = totalproducto
        self.producto = producto
        self.combo = combo
        self.carrito = carrito

    def get_codigo(self):
        return self.codigo
    
    def set_codigo(self, codigo) :
        self.codigo = codigo

    def get_cantidadproducto(self):
        return self.cantidadproducto
    
    def set_cantidadproducto(self, cantidadproducto) :
        self.cantidadproducto = cantidadproducto

    def get_totalproducto(self):
        return self.totalproducto
    
    def set_totalproducto(self, totalproducto) :
        self.totalproducto = totalproducto

    def get_producto(self):
        return self.producto
    
    def set_producto(self, producto) :
        self.producto = producto

    def get_combo(self):
        return self.combo
    
    def set_combo(self, combo) :
        self.combo = combo

    def get_carrito(self):
        return self.carrito
    
    def set_carrito(self, carrito) :
        self.carrito = carrito
