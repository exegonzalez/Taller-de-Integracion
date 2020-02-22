class Calificacion():

    def __init__(self, calificacion=None, fecha=None, hora=None, usuario=None,
    producto=None):
        self.calificacion = calificacion
        self.fecha = fecha
        self.hora = hora
        self.usuario = usuario
        self.producto = producto

    def get_calificacion(self):
        return self.calificacion
    
    def set_calificacion(self, calificacion) :
        self.calificacion = calificacion

    def get_fecha(self):
        return self.fecha
    
    def set_fecha(self, fecha) :
        self.fecha = fecha

    def get_hora(self):
        return self.hora
    
    def set_hora(self, hora) :
        self.hora = hora
        
    def get_usuario(self):
        return self.usuario
    
    def set_usuario(self, usuario) :
        self.usuario = usuario

    def get_producto(self):
        return self.producto
    
    def set_producto(self, producto) :
        self.producto = producto
