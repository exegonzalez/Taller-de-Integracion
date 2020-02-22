class Comentario():

    def __init__(self, codigo=None, fecha=None, hora=None, contenido=None, usuario=None,
    producto=None):
        self.codigo = codigo
        self.fecha = fecha
        self.hora = hora
        self.contenido = contenido
        self.usuario = usuario
        self.producto = producto

    def get_codigo(self):
        return self.codigo
    
    def set_codigo(self, codigo) :
        self.codigo = codigo

    def get_fecha(self):
        return self.fecha
    
    def set_fecha(self, fecha) :
        self.fecha = fecha

    def get_hora(self):
        return self.hora
    
    def set_hora(self, hora) :
        self.hora = hora

    def get_contenido(self):
        return self.contenido
    
    def set_contenido(self, contenido) :
        self.contenido = contenido

    def get_usuario(self):
        return self.usuario
    
    def set_usuario(self, usuario) :
        self.usuario = usuario

    def get_producto(self):
        return self.producto
    
    def set_producto(self, producto) :
        self.producto = producto
