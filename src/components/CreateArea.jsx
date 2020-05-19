import React , {useState} from "react";

function CreateArea(props) {

const [inputArea , setInputArea] = useState({
  title: "",
  content: "",
});

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
  event.preventDefault();
}



  return (
    <div>
      <form>
        <input
         onChange={changeHandler}
         name="title"
         placeholder="Title"
         value={inputArea.title}
        />

        <textarea
          onChange={changeHandler}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={inputArea.content}
        />
        <button onClick={clickHandler}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
