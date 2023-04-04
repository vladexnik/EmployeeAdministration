import "./app-filter.css";


const AppFilter=(props)=>{
  const buttonsData=[
    {nameFilter: 'all', label:'Все сотрудники '},
    {nameFilter: 'more1k', label:'ЗП больше 1000$'},
    {nameFilter: 'rise', label:'На повышение'},
    
  ];

const buttons=buttonsData.map(({nameFilter,label})=>{
    const active=props.filter === nameFilter; // active true если ===
    const clazz=active ? 'btn-light' : 'btn-outline-light';

    return(
            <button className={`btn ${clazz}`}
                     type="button"
                     key={nameFilter}
                     onClick={()=> props.onfilterSelect(nameFilter)}>
                       {label}
            </button>
    )
})


    return(
        <div className="btn-group">
          {buttons}
            {/* <button className="btn btn-light"
                     type="button">
                       Все сотрудники 
            </button>
            <button className="btn btn-outline-primary"
                     type="button">
                       На повышение
            </button>
            <button className="btn btn-outline-light"
                     type="button"
                     onInput={onFilter1k}>
                       ЗП больше 1000$
            </button> */}
        </div>
    )
}

export default AppFilter;