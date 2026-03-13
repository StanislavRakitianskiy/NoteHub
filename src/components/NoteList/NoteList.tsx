import css from "./NoteList.module.css";
import type { Note } from "../../types/note";

interface NoteProps {
  note: Note[];
}

const NoteList = ({note}: NoteProps) => {
  return (
    <ul className={css.list}>
      {note.map((notes) => (
        <li key={notes.id} className={css.listItem}>
          <h2 className={css.title}>{notes.title}</h2>
          <p className={css.content}>{notes.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{notes.tag}</span>
            <button className={css.button}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default NoteList