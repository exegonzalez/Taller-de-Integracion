from flask import Flask, jsonify, request, json, redirect, url_for
from functionsDB.entity.proveedor import Proveedor
from functionsDB.ABMProveedor import listadoproveedores, bajaproveedor, altaproveedor, modificarproveedor
from functionsDB.entity.producto import Producto
from functionsDB.ABMProducto import listadoproductos, altaproducto, bajaproducto, modificarproducto, descontarStock, debajoStock
from functionsDB.entity.usuario import Usuario
from functionsDB.ABMUsuario import obtenerusuario, bajausuario, modificarusuario, altausuario, listadousuarios
from functionsDB.entity.compra import Compra
from functionsDB.ABMCompra import listadocompras, bajacompra, altacompra, modificarcompra
from functionsDB.entity.combo import Combo
from functionsDB.ABMCombo import listadocombos, bajacombo, altacombo, modificarcombo, productosDeUnCombo, eliminarProductosDeUnCombo, agregarProductosEnUnCombo
from functionsDB.entity.comentario import Comentario
from functionsDB.ABMComentario import listadocomentarios, altacomentario
from functionsDB.entity.linea import Linea
from functionsDB.ABMLinea import altalinea, bajalinea, lineasDeUnCarrito, crearcarrito, ultimocarrito, cambiarEstadoCarrito
from functionsDB.entity.calificacion import Calificacion
from functionsDB.ABMCalificacion import altacalificacion
from flask_cors import CORS
from datetime import datetime
import mercadopago
import json

app = Flask(__name__)
CORS(app)

@app.route ('/proveedor',methods=['GET','DELETE','POST', 'PUT'])
def funcionesProveedores():
    if request.method == 'GET':
        resultado = listadoproveedores()
        return jsonify(resultado)

    if request.method == 'DELETE':
        prov = Proveedor()
        prov.set_cuit(request.args['cuit'])
        bajaproveedor(prov)
        return "ok"

    if request.method == 'PUT':
        prov = Proveedor()
        prov.set_cuit(request.args['cuit'])
        prov.set_ciudad(request.args['ciudad'])
        prov.set_email(request.args['email'])
        prov.set_direccion(request.args['direccion'])
        prov.set_telefono(request.args['telefono'])
        prov.set_nombre(request.args['nombre'])
        modificarproveedor(prov)
        return "ok"

    if request.method == 'POST':
        prov = Proveedor()
        prov.set_cuit(request.args['cuit'])
        prov.set_ciudad(request.args['ciudad'])
        prov.set_email(request.args['email'])
        prov.set_direccion(request.args['direccion'])
        prov.set_telefono(request.args['telefono'])
        prov.set_nombre(request.args['nombre'])
        altaproveedor(prov)
        return "ok"

@app.route ('/producto',methods=['GET','DELETE','POST', 'PUT', 'PATCH'])
def funcionesProductos():
    if request.method == 'GET':
        resultado = listadoproductos()
        return jsonify(resultado)

    if request.method == 'DELETE':
        prod = Producto()
        prod.set_codigo(request.args['codigo'])
        bajaproducto(prod)
        return "ok"

    if request.method == 'PUT':
        prod = Producto()
        prod.set_codigo(request.args['codigo'])
        prod.set_descripcion(request.args['descripcion'])
        prod.set_nombre(request.args['nombre'])
        prod.set_precio(request.args['precio'])
        prod.set_proveedor(request.args['proveedor'])
        prod.set_stock(request.args['stock'])
        prod.set_stockmin(request.args['stockmin'])
        prod.set_tipo(request.args['tipo'])
        prod.set_calificacion(request.args['calificacion'])
        prod.set_urlfoto(request.args['urlfoto'])
        modificarproducto(prod)
        return "ok"

    if request.method == 'POST':
        prod = Producto()
        prod.set_descripcion(request.args['descripcion'])
        prod.set_nombre(request.args['nombre'])
        prod.set_precio(request.args['precio'])
        prod.set_proveedor(request.args['proveedor'])
        prod.set_stock(request.args['stock'])
        prod.set_stockmin(request.args['stockmin'])
        prod.set_tipo(request.args['tipo'])
        prod.set_urlfoto(request.args['urlfoto'])
        altaproducto(prod)
        return "ok"

    if request.method == 'PATCH':
        resultado = debajoStock()
        return jsonify(resultado)

@app.route ('/cuenta',methods=['GET','DELETE','PUT','POST'])
def cuentaUsuario():
    if request.method == 'POST':
        user = Usuario()
        user.set_email(request.args['email'])
        user.set_nombreuser(request.args['nombreuser'])
        user.set_urlfoto(request.args['urlfoto'])
        user.set_rol(4)
        user.set_nombre('null')
        user.set_telefono('null')
        user.set_direccion('null')
        user.set_apellido('null')
        user.set_ciudad('null')
        altausuario(user)
        return "ok"

    if request.method == 'GET':
        resultado = obtenerusuario(request.args['email'])
        return jsonify(resultado)

    if request.method == 'DELETE':
        user = Usuario()
        user.set_email(request.args['email'])
        bajausuario(user)
        return "ok"

    if request.method == 'PUT':
        user = Usuario()
        user.set_email(request.args['email'])
        user.set_nombreuser(request.args['nombreuser'])
        user.set_urlfoto(request.args['urlfoto'])
        user.set_rol(request.args['rol'])
        user.set_nombre(request.args['nombre'])
        user.set_apellido(request.args['apellido'])
        user.set_direccion(request.args['direccion'])
        user.set_ciudad(request.args['ciudad'])
        user.set_telefono(request.args['telefono'])
        modificarusuario(user)
        return "ok"

@app.route ('/compra',methods=['GET','DELETE','POST','PUT'])
def funcionesComprasAdmin():
    if request.method == 'GET':
        resultado = listadocompras()
        return jsonify(resultado)

    if request.method == 'DELETE':
        comp = Compra()
        comp.set_carrito(request.args['carrito'])
        bajacompra(comp)
        return "ok"

    if request.method == 'POST':
        now = datetime.now()
        comp = Compra()
        comp.set_carrito(request.args['carrito'])
        comp.set_estado('ESPERA')
        comp.set_fecha(str(now.year)+'-'+str(now.month)+'-'+str(now.day))
        comp.set_hora(str(now.hour)+':'+str(now.minute)+':'+str(now.second))
        comp.set_total(request.args['total'])
        comp.set_usuario(request.args['usuario'])
        altacompra(comp)
        aux=request.args.getlist('items[]')
        items = []
        for item in aux:
            items.append(json.loads(item))        
        print(items)
        preference = {
            "items": items,
            "back_urls": {
                "success": "localhost:3000/compras",
                "failure": "",
                "pending": "",
            },
            "back_urls": {'pending': 'http://localhost:5000/finalizarcompra?carrito='+request.args['carrito'], 'success': 'http://localhost:5000/finalizarcompra?carrito='+request.args['carrito'], 'failure': 'http://localhost:5000/cancelarcompra?carrito='+request.args['carrito']},
            "auto_return": 'approved'
        }
        mp = mercadopago.MP("TEST-2010310189255433-020423-ab4183ae168fc66489c83ac9a88b909a-522644875")
        mp.sandbox_mode(True)

        preferenceResult = mp.create_preference(preference)
        url = preferenceResult["response"]["init_point"]
        return url

    if request.method == 'PUT':
        comp = Compra()
        comp.set_carrito(request.args['carrito'])
        comp.set_estado(request.args['estado'])
        modificarcompra(comp)
        return "ok"

@app.route ('/combo',methods=['GET','DELETE','POST','PUT'])
def funcionesCombo():
    if request.method == 'GET':
        resultado = listadocombos()
        return jsonify(resultado)

    if request.method == 'DELETE':
        comb = Combo()
        comb.set_codigo(request.args['codigo'])
        bajacombo(comb)
        return "ok"

    if request.method == 'POST':
        comb = Combo()
        comb.set_nombre(request.args['nombre'])
        comb.set_precio(request.args['precio'])
        comb.set_fechainicio(request.args['fechainicio'])
        comb.set_fechafinal(request.args['fechafinal'])
        comb.set_descripcion(request.args['descripcion'])
        comb.set_urlfoto(request.args['urlfoto'])
        altacombo(comb)
        return "ok"

    if request.method == 'PUT':
        comb = Combo()
        comb.set_codigo(request.args['codigo'])
        comb.set_nombre(request.args['nombre'])
        comb.set_precio(request.args['precio'])
        comb.set_fechainicio(request.args['fechainicio'])
        comb.set_fechafinal(request.args['fechafinal'])
        comb.set_descripcion(request.args['descripcion'])
        comb.set_urlfoto(request.args['urlfoto'])
        modificarcombo(comb)
        return "ok"

@app.route ('/productoxcombo',methods=['GET','DELETE','POST'])
def funcionesProductoXCombo():
    if request.method == 'GET':
        resultado = productosDeUnCombo(request.args['codigo'])
        return jsonify(resultado)

    if request.method == 'DELETE':
        eliminarProductosDeUnCombo(request.args['producto'],request.args['combo'])
        return 'ok'

    if request.method == 'POST':
        agregarProductosEnUnCombo(request.args['producto'],request.args['combo'])
        return "ok"

@app.route ('/usuario',methods=['GET','PUT'])
def funcionesUsuarios():
    if request.method == 'GET':
        resultado = listadousuarios()
        return jsonify(resultado)

    if request.method == 'PUT':
        user = Usuario()
        user.set_email(request.args['email'])
        user.set_nombreuser(request.args['nombreuser'])
        user.set_urlfoto(request.args['urlfoto'])
        user.set_rol(request.args['rol'])
        user.set_nombre(request.args['nombre'])
        user.set_apellido(request.args['apellido'])
        user.set_direccion(request.args['direccion'])
        user.set_ciudad(request.args['ciudad'])
        user.set_telefono(request.args['telefono'])
        modificarusuario(user)
        return "ok"

@app.route ('/comentario',methods=['GET','POST'])
def funcionesComentarios():
    if request.method == 'GET':
        resultado = listadocomentarios()
        return jsonify(resultado)
    
    if request.method == 'POST':
        now = datetime.now()
        coment = Comentario()
        coment.set_contenido(request.args['contenido'])
        coment.set_fecha(str(now.year)+'-'+str(now.month)+'-'+str(now.day))
        coment.set_hora(str(now.hour)+':'+str(now.minute)+':'+str(now.second))
        coment.set_producto(request.args['producto'])
        coment.set_usuario(request.args['usuario'])
        altacomentario(coment)
        return "ok"

@app.route ('/linea',methods=['GET','POST','DELETE'])
def funcionesLineas():
    if request.method == 'GET':
        resultado = lineasDeUnCarrito(request.args['carrito'])
        return jsonify(resultado)

    if request.method == 'POST':
        lin = Linea()
        lin.set_cantidadproducto(request.args['cantidadproducto'])
        lin.set_totalproducto(request.args['totalproducto'])
        lin.set_producto(request.args['producto'])
        lin.set_combo(request.args['combo'])
        lin.set_carrito(request.args['carrito'])
        altalinea(lin)
        return "ok"

    if request.method == 'DELETE':
        lin = Linea()
        lin.set_codigo(request.args['codigo'])
        bajalinea(lin)
        return 'ok'

@app.route ('/carrito',methods=['GET','POST','PUT'])
def funcionesCarrito():
    if request.method == 'GET':
        resultado = ultimocarrito()
        return jsonify(resultado)

    if request.method == 'POST':
        crearcarrito()
        resultado = ultimocarrito()
        return resultado
    
@app.route ('/calificacion',methods=['POST'])
def funcionesCalificacion():
    if request.method == 'POST':
        now = datetime.now()
        calif = Calificacion()
        calif.set_calificacion(request.args['calificacion'])
        calif.set_fecha(str(now.year)+'-'+str(now.month)+'-'+str(now.day))
        calif.set_hora(str(now.hour)+':'+str(now.minute)+':'+str(now.second))
        calif.set_producto(request.args['producto'])
        calif.set_usuario(request.args['usuario'])
        altacalificacion(calif)
        return "ok"

@app.route ('/finalizarcompra',methods=['GET'])
def funcionesFinalizarCompra():
    if request.method == 'GET':
        crearcarrito()
        id = request.args['carrito']
        comp = Compra()
        comp.set_carrito(id)
        comp.set_estado('FINALIZADA')
        lineas = lineasDeUnCarrito(request.args['carrito'])
        productos = []
        combos = []
        for linea in lineas:
            if(linea['combo']== None):
                productos.append(linea)
            else:
                combos.append(linea)    
        for producto in productos:
            descontarStock(producto['cantidadproducto'],producto['codigoproducto'])
        for combo in combos:
            listaproductos = productosDeUnCombo(combo['codigoproducto'])
            for prodCombo in listaproductos:
                descontarStock(combo['cantidadproducto'],prodCombo['codigo'])
        modificarcompra(comp)
        cambiarEstadoCarrito(id)
        return redirect("http://localhost:3000/", code=302)

@app.route ('/cancelarcompra',methods=['GET'])
def funcionesCancelarCompra():
    if request.method == 'GET':
        id = request.args['carrito']
        comp = Compra()
        comp.set_carrito(id)
        bajacompra(comp)
        return redirect("http://localhost:3000/", code=302)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

  
