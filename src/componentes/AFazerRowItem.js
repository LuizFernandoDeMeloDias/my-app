function AfazerRowItem(props){

return(
    <tr>
        <th scope="row">{props.rowNumber}</th>
        <td>{props.rowDescription}</td>
        <td>{props.rowDesignado}</td>
    </tr>
);
}
export default AfazerRowItem;