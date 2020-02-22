
class Usuario():

    def __init__(self, email=None, nombreuser=None, urlfoto=None, rol=None, nombre=None, apellido=None,
    direccion=None, ciudad=None, telefono=None):
        self.email = email
        self.nombreuser = nombreuser
        self.urlfoto = urlfoto
        self.rol = rol
        self.nombre = nombre
        self.apellido =  apellido
        self.direccion = direccion
        self.ciudad = ciudad      
        self.telefono = telefono

    def get_email(self):
        return self.email
    
    def set_email(self, email):
        self.email = email

    def get_nombreuser(self):
        return self.nombreuser
    
    def set_nombreuser(self, nombreuser):
        self.nombreuser = nombreuser

    def get_urlfoto(self):
        return self.urlfoto

    def set_urlfoto(self, urlfoto):
        self.urlfoto = urlfoto

    def get_rol(self):
        return self.rol
    
    def set_rol(self, rol):
        self.rol = rol

    def get_nombre(self):
        return self.nombre
    
    def set_nombre(self, nombre):
        self.nombre = nombre

    def get_apellido(self):
        return self.apellido
    
    def set_apellido(self, apellido):
        self.apellido = apellido

    def get_direccion(self):
        return self.direccion
    
    def set_direccion(self, direccion):
        self.direccion = direccion

    def get_ciudad(self):
        return self.ciudad
    
    def set_ciudad(self, ciudad):
        self.ciudad = ciudad

    def get_telefono(self):
        return self.telefono
    
    def set_telefono(self, telefono):
        self.telefono = telefono
