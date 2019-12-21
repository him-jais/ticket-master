import React from 'react'
import CustomerForm from './Form'
import {connect} from 'react-redux'
import {startAddCustomer} from '../../actions/customer'

class CustomerNew extends React.Component{
    constructor(){
        super()

    }
handleSubmit=(formData)=>{

this.props.dispatch(startAddCustomer(formData,this.props))

}

    render(){
        return(<div style={{backgroundImage: "url(" + "" + ")",backgroundRepeat:'no-repeat',backgroundSize:"cover",minHeight:650,margin:0
    }} class="jumbotron jumbotron-fluid">
        <div className='container'>
            <h2>Add customer details</h2>
           <CustomerForm handleSubmit={this.handleSubmit}/>
        </div>
       </div> )
    }
}

export default connect()(CustomerNew)