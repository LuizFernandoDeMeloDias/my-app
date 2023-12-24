import AfazerRowItem from "./AFazerRowItem"

function TodoTable(props){
return(
<table className="table table-hover">
    <thead>
        <th scope="col">#</th>
        <th scope="col">Descrição</th>
        <th scope="col">rowDesignado</th>
    </thead>
    <tbody>
              <AfazerRowItem 
              rowNumber={props.fazeres[0].rowNumber} 
              rowDescription={props.fazeres[0].rowDescription} 
              rowDesignado={props.fazeres[0].rowDesignado} />
              
              <AfazerRowItem 
              rowNumber={props.fazeres[1].rowNumber} 
              rowDescription={props.fazeres[1].rowDescription} 
              rowDesignado={props.fazeres[1].rowDesignado} />

              <AfazerRowItem 
              rowNumber={props.fazeres[2].rowNumber} 
              rowDescription={props.fazeres[2].rowDescription} 
              rowDesignado={props.fazeres[2].rowDesignado} />
    </tbody>
</table>

);

}
export default TodoTable