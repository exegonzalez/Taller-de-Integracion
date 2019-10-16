class Compra():

    def __init__(self, codigo=None, total=None, fecha=None, hora=None, numerotarjeta=None, tipotarjeta=None,
    seguimiento=None, carrito=None, usuario=None):
        self.codigo = codigo
        self.total = total
        self.fecha = fecha
        self.hora = hora
        self.numerotarjeta = numerotarjeta
        self.tipotarjeta = tipotarjeta
        self.seguimiento = seguimiento
        self.carrito = carrito
        self.usuario = usuario

    def get_codigo(self):
        return self.codigo
    
    def set_codigo(self, codigo) :
        self.codigo = codigo

    def get_total(self):
        return self.total

    def set_total(self, total) :
        self.total = total

    def get_fecha(self):
        return self.fecha
    
    def set_fecha(self, fecha) :
        self.fecha = fecha

    def get_hora(self):
        return self.hora
    
    def set_hora(self, hora) :
        self.hora = hora

    def get_numerotarjeta(self):
        return self.numerotarjeta
    
    def set_numerotarjeta(self, numerotarjeta) :
        self.numerotarjeta = numerotarjeta

    def get_tipotarjeta(self):
        return self.tipotarjeta
    
    def set_tipotarjeta(self, tipotarjeta) :
        self.tipotarjeta = tipotarjeta

    def get_seguimiento(self):
        return self.seguimiento
    
    def set_seguimiento(self, seguimiento) :
        self.seguimiento = seguimiento

    def get_carrito(self):
        return self.carrito
    
    def set_carrito(self, carrito) :
        self.carrito = carrito

    def get_usuario(self):
        return self.usuario
    
    def set_usuario(self, usuario) :
        self.usuario = usuario
