import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

const NoteData = () => {
  const [titles, setTitles] = useState([]);
  const [open, setOpen] = useState(false);

  // titles = SHOW titles & setTitles = GET titles/give value to first titles declaration
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:4567/becode-database-api/list_note.php"
    }).then(response => {
      setTitles(response.data[0]);
    });
  }, []);
  //^^^^^add the array there to stop the response.data from repeating WAY TOO MANY TIMES

  let openNote = () => {
    setOpen(open => !open);
  };

  const listNotes = titles.map(note => (
    <li className="noteTitles" key={note.title}>
      {open ? note.title : note.text_entry}
    </li>
  ));

  return (
    <div>
      <ul onClick={openNote} className="titlesList">
        {listNotes}
      </ul>
    </div>
  );
};

export default NoteData;