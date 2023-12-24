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
        {props.fazeres.map(fazeres  => (
            <AfazerRowItem 
                rowNumber = {fazeres.rowNumber}
                rowDescription = {fazeres.rowDescription}
                rowDesignado = {fazeres.rowDesignado}
            />
        ))}
    </tbody>
</table>

);

}
export default TodoTable