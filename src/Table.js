function Table(props){
    return(
        <table
            style={{
                padding: 16,
                textAlign : "center",
                backgroundColor : "grey",
                border : 4
            }}
        >
                <tr style ={{
                    backgroundColor : "aqua",
                    padding : "16"
                }}>
                    <th>
                        <h6 style={{
                            color : "black"
                        }}>
                        </h6>
                        title
                        <td>
                        {props.title}
                    </td>
 
                    </th>
                    <th>
                        artist
                        <td>
                        {props.artist}
                    </td>

                    </th>
                    <th>
                        playlist
                        <td>{props.playlist}</td>

                    </th>
                    <th>
                        liked
                        <td>
                        {props.liked}
                    </td>

                    </th>
                
                </tr>
        </table>
    )
}

export default Table;