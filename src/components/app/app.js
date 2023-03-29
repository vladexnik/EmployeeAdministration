import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App(){

  // let cookie=document.querySelector('.fas fa-cookie');
  // cookie.addEventListener('click', ()=>{
  //   {className=""}
  // })  
  const data=[
    {name: 'Frank L.' , salary: 900, increase: false, id: 1},
    {name: 'Kai Al' , salary: 1100, increase: true, id: 2},
    {name: 'Qwurt M' , salary: 34200, increase:false, id: 3 }
  ];


  return (
    <div className='app'>
        <AppInfo/>

        <div className="search-panell">
            <SearchPanel/>
            <AppFilter/>
        </div>

        <EmployeesList data={data}/>

        <EmployeesAddForm/>
        
    </div>

  )
}
export default App;
