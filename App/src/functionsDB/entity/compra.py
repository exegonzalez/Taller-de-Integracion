class Compra():

    def __init__(self, codigo=None, total=None, fecha=None, hora=None,
    carrito=None, usuario=None, estado=None):
        self.codigo = codigo
        self.total = total
        self.fecha = fecha
        self.hora = hora
        self.carrito = carrito
        self.usuario = usuario
        self.estado = estado

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

    def get_carrito(self):
        return self.carrito
    
    def set_carrito(self, carrito) :
        self.carrito = carrito

    def get_usuario(self):
        return self.usuario
    
    def set_usuario(self, usuario) :
        self.usuario = usuario

    def get_estado(self):
        return self.estado
    
    def set_estado(self, estado) :
        self.estado = estado
