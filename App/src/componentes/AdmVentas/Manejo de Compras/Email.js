import React, {Component} from 'react';
import swal from 'sweetalert';
import {Redirect} from 'react-router-dom'

class Email extends Component {
  constructor(props) {
	super(props);
	this.state = { feedback: 'ID Compra: ' + this.props.venta[0].codigo + ', ID Carrito: ' + this.props.venta[0].carrito +', Total: $' + this.props.venta[0].total +
	', Fecha: ' + this.props.venta[0].fecha +', Hora: ' + this.props.venta[0].hora +', Usuario: ' + this.props.venta[0].usuario, 

	name: 'MatesJYE', email: this.props.venta[0].usuario, redireccionar: false };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {

	if(this.state.redireccionar){
        return (<Redirect to="/"/>)
      }

	return (
  	<form className="test-mailing">
    	<input type="button" value="NOTIFICAR AL CLIENTE"  className=" py-3 mt-2 btn btn--submit btn-primary btn-block" onClick={this.handleSubmit} />			
  	</form>
	)
  }

  handleChange(event) {
    this.setState({feedback: event.target.value})
  }

  handleSubmit (event) {
	const templateId = 'template_ZlTYbcOj';
	this.sendFeedback(templateId, {message_html: this.state.feedback, from_name: this.state.name, reply_to: this.state.email})
  }

  sendFeedback (templateId, variables) {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
		swal({
			title: "Correo Enviado!",
			icon: "success", 
			buttons: {
				catch: "Continuar"
			},
		  }).then((value) => {
			  switch (value) {    
				case "catch":
					this.setState({redireccionar : true})
				  break;
				default:
					this.setState({redireccionar : true})
				  break;
			  }
			});

    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
}
export default  Email;