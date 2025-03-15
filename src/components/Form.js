import { useState } from 'react';

const Form = ({ addNote }) => {
    // On récupère "addNote" via les props
    const [note, setNote] = useState(''); // On ajoute un "state pour gérer ce qui est entré dans le champ"

    // On créé une fonction déclenchée lors du submit du formulaire
    const handleAddNote = (e) => {
        e.preventDefault();
        addNote(note); // On ajoute le Note à App en appelant la méthode addNote
        setNote(''); // On efface le contenu du champ
    }
    
    return (
        <form onSubmit={handleAddNote}> {/* On capte l'événement submit */}
            <input
             type="text"
             placeholder="Entrez votre note ici"
             value={note}
             onChange={(e) => {
                setNote(e.target.value);
             }}
             />

            <button>Ajouter</button>
        </form>    
        )
    }

export default Form;