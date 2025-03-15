import './App.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { Fragment, useEffect, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

function App() {
  const [notes, setNotes ] = useState([ // Si ça bouge l'interface, c'est un state
    { done: false, description: 'Trouver un job' },
    { done: true, description: 'Apprendre React.JS' },
    { done: true, description: 'Découvrir Formacitron' },
  ]);

  // Ajout d'une méthode addNote :
  const addNote = (note) => {
    const tmpNotes = [...notes]; // On copie les Notes
    tmpNotes.push({ done: false, description: note }); // On ajoute un nouveau Note
    setNotes(tmpNotes); // On met à jour le state avec la nouvelle liste
  };

  // Ajout d'une méthode delNote :
  const delNote = (index) => {
    const tmpNotes = [...notes]; // On copie les Notes
    tmpNotes.splice(index, 1)
    setNotes(tmpNotes); // On met à jour le state avec la nouvelle liste
  }
  
  // Ajout d'une méthode majNote :
  const majNote = (index) => {
    const tmpNotes = [...notes]; // On copie les Notes
    
    majNote(tmpNotes); // On met à jour le state avec la nouvelle liste
  }

  const [loaded, setLoaded] = useState(false)
  useEffect(() => { // save
    if (loaded) localStorage.setItem('notes', JSON.stringify(notes));
  })

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("notes") || "[]");
    setNotes(data);
    setLoaded(true);
  }, [])

  return (
    <>
    <Header></Header>
    <main>
        <Form addNote={addNote} setNotes={setNotes} /> {/* On passe addNote au composant Form */}
        <h2>Notes :</h2>
        <List notes={notes} 
              delNote={delNote}
              majNote={majNote}
              setNotes={setNotes}/>            
    </main>

    <Footer />
    </>
  );
}

export default App;