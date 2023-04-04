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

    onSubmit = (e) => {
        e.preventDefault(); // для отправки формы, е - синтетическое событие
        if(this.state.name != '' && this.state.salary>100) {
        this.props.onAdd(this.state.name, this.state.salary);
        
        // устанавливает значения после сабмита
        this.setState({
            name: '',
            salary: ''
        })
        }
        else return;
        
    }
    render(){
        return(
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form className="add-form"
                onSubmit={this.onSubmit}>
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
                        className="btn btn-outline-light"
                        >Добавить</button>
                </form>
               
            </div>
        )
    }
}

export default EmployeesAddForm;