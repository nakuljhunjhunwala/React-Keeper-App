import React , {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

const [inputArea , setInputArea] = useState({
  title: "",
  content: "",
});


const [expand , setExpand] = useState(false);


function changeHandler(event) {
  const {name , value } = event.target;
  setInputArea((prev) =>{
    return {
      ...prev,
      [name]:value,
    }
  });
}

function clickHandler(event){
  props.addNote(inputArea);
  setInputArea({
    title: "",
    content: "",
  })

    setExpand(false);
  event.preventDefault();
}


function expanded() {
  setExpand(true);
}


  return (
    <div>
      <form className="create-note">
        {expand && <input
         onChange={changeHandler}
         name="title"
         placeholder="Title"
         value={inputArea.title}
        />}

        <textarea
          onChange={changeHandler}
          onClick={expanded}
          name="content"
          placeholder="Take a note..."
          rows={expand ? 3 : 1}
          value={inputArea.content}

        />
        <Zoom in={expand}>
        <Fab onClick={clickHandler} ><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
