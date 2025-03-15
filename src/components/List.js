const List = ({ notes, delNote }) => {
    return (
        <ul>
            {notes.map((note, index) => (
            <li key={index} onClick={ () =>delNote(index)}>            
                    <span>{note.description}</span>                    
            </li>
            ))}
        </ul>
    );
};

export default List;