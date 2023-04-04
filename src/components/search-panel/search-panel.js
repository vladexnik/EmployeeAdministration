import './search-panel.css';
import { Component } from 'react';


class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state={
            term: ''
        }
    }
    
    onUpdateSearch2=(e)=>{
        const term2=e.target.value;
        this.setState({
            term2: term2
        })
        this.props.onUpdateSearch(term2)
    }
    
    render(){
        return(
            <input
                type='text'
                className='form-control search-input'
                placeholder='Найти сотрудника'
                value={this.state.term2}
                onChange={this.onUpdateSearch2}>
            </input>
        )
    }
}

export default SearchPanel;