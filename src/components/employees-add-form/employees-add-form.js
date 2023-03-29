import { Component } from 'react';
import './employees-add-form.css';

class EmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            salary: ''
        }
    }

    onValueChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form">
                    {/* управляемые компоненты value={} */}
                    <input type="text" 
                        className="form-control"
                        placeholder="Как зовут работника?"
                        name="name"
                        value={this.state.name}
                        onChange={this.onValueChange}/>
                    <input type="text" 
                        className="form-control"
                        placeholder="ЗП в $"
                        name="salary"
                        value={this.state.salary}
                        onChange={this.onValueChange}/>
                    <button type="submit" 
                        className="btn btn-outline-light">Добавить</button>
                </form>
               
            </div>
        )
    }
}

export default EmployeesAddForm;