import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

import nextId from 'react-id-generator';

class App extends Component{

    constructor(props){
      super(props);
      this.state={
        data: [
          {name: 'Frank L.' , salary: 900, increase: false, rise: true, id: 1},
          {name: 'Kai Al' , salary: 1100, increase: true, rise: false, id: 2},
          {name: 'Qwurt M' , salary: 34200, increase:false, rise: false, id: 3 }
        ]
      }
    }


    addItem=(name,salary)=>{
      const newItem={
        name,
        salary,
        increase: false,
        rise: false,
        id: nextId('HELP')
      }

      this.setState(({data})=>{
        let newArr=[...data,newItem];
        return {
          data: newArr
        }
      })
    }


    deleteItem=(id)=>{
        this.setState(({data})=>{
          const index=data.findIndex(elem=>elem.id==id);
          // data.splice(index,1); неправильно т к напрямую state нельзя менять

          // const before=data.slice(0,index); // 1sposob
          // const after=data.slice(index+1);
          // const newArr=[...before, ...after];

          const newArr2=data.filter(item=> item.id!==id); //2sposob
          return {
            data: newArr2
          }  
        })
    }

    onToggleIncrease=(id)=>{
      // console.log(`increase ${id}`)
      // this.setState(({data})=>{
      //   const index=data.findIndex(elem=> elem.id==id)
      //   const old=data[index];
      //   const newItem={...old, increase: !old.increase} // новый объект
      //   const newArr=[...data.slice(0,index),newItem, ...data.slice(index+1)];

      //   return {
      //     data: newArr
      //   }
      // })  
        this.setState(({data})=>({ 
            data: data.map(item=>{
              if(item.id===id){
                return {...item, increase: !item.increase }
              }
              return item; // иначе
            })
        }))
    }

    onToggleRise=(id)=>{
      this.setState(({data})=>({ 
        data: data.map(item=>{
          if(item.id===id){
            return {...item, rise: !item.rise }
          }
          return item; // иначе
        })
    }))
    }

    
    render(){
      const empls=this.state.data.length;
      const increaseEmpls=this.state.data.filter(item=> item.increase).length;
      return (
        <div className='app'>
            <AppInfo employees={empls} increased={increaseEmpls}/>
    
            <div className="search-panell">
                <SearchPanel/>
                <AppFilter/>
            </div>
    
            <EmployeesList data={this.state.data}
            onDelete={this.deleteItem}
            onToggleIncrease={this.onToggleIncrease}
            onToggleRise={this.onToggleRise}/>
    
            <EmployeesAddForm
            onAdd={this.addItem}/>
            
        </div>
    
      )
    }
 
}
export default App;
