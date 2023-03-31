import './employees-list-item.css';
import {Component} from 'react';


class EmployeesListItem extends Component {
    constructor(props){
        super(props);
        this.state={
            increase: false,
            rise: false
        }
    }


    // уже не нужные
    onIncrease =()=>{
        this.setState(state=>({
            increase: !state.increase
        }))
    }

    addLike=()=>{
        this.setState(state=>({
            rise: !state.rise
        }))
    }
    //


   render(){
    const {name,salary,onDelete, onToggleIncrease, onToggleRise,increase,rise}=this.props;
    
    // const {increase}=this.state;
    let classNames="list-group-item";
    if(increase){
        classNames+=' increase';
    }

    // const {rise}=this.state;
    if(rise){
        classNames+=' like'
    }

    // let cookie=document.querySelectorAll('.fas fa-cookie');
    // cookie.addEventListener('click',(e)=>{ 
    //     e.className.add(' increase')
    // })

    return (
        <li className={classNames}>
            <span className="list-group-item-label"
            // onClick={this.addLike}> // было
            onClick={onToggleRise}>
            {name}
            </span>
            <input type="text" className='list-group-item-input' defaultValue={salary+'$'}/>
            <div className="threeButtons">
                <button type="button" 
                    className="btn-cookie btn-sm"
                    // onClick={this.onIncrease}> // было
                    onClick={onToggleIncrease}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button" 
                    className="btn-trash btn-sm"
                    onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>

                <i className="fas fa-star"></i>
            </div>
        </li>
    )
   }
}   

export default EmployeesListItem;