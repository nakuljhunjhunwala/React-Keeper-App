import React , {useState} from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea"



function App() {

const [notes , setNotes] = useState([]);

function addNote(note) {
setNotes(
  (prev) => {
if (note.title !== "" && note.content !== "") {
  return ([...prev,
   {
    title : note.title,
    content : note.content,
  }]

  )
} else {
  return ([...prev,]
  )
}


  })}


function deleteNote(id) {
  setNotes(
    prev => {
      return (
        prev.filter(
          (note , index) => {
            return index !== id;
          }
        )
      )
    }
  )
}


  return (
<div>
    <Header />
<CreateArea
 addNote={addNote}
/>

{notes.map((note , index) => {
  return(
    <Note
    key= {index}
    id= {index}
    title={note.title}
    content={note.content}
    deleteNote={deleteNote}
    />
  ) })}


  <Footer / >
</div>
)
}

export default App;
