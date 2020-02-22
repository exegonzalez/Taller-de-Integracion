class Proveedor():

    def __init__(self, cuit=None, nombre=None, direccion=None, ciudad=None, email=None, telefono=None):
        self.cuit = cuit
        self.nombre = nombre
        self.direccion = direccion
        self.ciudad = ciudad      
        self.email = email
        self.telefono = telefono

    def get_cuit(self):
        return self.cuit

    def set_cuit(self, cuit) :
        self.cuit = cuit

    def get_nombre(self):
        return self.nombre
    
    def set_nombre(self, nombre) :
        self.nombre = nombre

    def get_direccion(self):
        return self.direccion
    
    def set_direccion(self, direccion) :
        self.direccion = direccion

    def get_ciudad(self):
        return self.ciudad
    
    def set_ciudad(self, ciudad) :
        self.ciudad = ciudad

    def get_email(self):
        return self.email
    
    def set_email(self, email) :
        self.email = email

    def get_telefono(self):
        return self.telefono
    
    def set_telefono(self, telefono) :
        self.telefono = telefono
