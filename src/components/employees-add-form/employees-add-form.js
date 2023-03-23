
import './employees-add-form.css';

const EmpoyeesAddForm=()=>{
    return(
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form className="add-form">
                 <input type="text" 
                    className="form-control"
                    placeholder="Как зовут работника?"/>
                <input type="text" 
                    className="form-control"
                    placeholder="ЗП в $"/>
                    <button type="submit" 
                        className="btn btn-outline-light">Добавить</button>
            </form>
           
        </div>
    )
}

export default EmpoyeesAddForm;