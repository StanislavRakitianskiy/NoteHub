import type { Note } from "../../types/note";
import { deleteNote } from "../../services/noteService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import css from "./NoteList.module.css";

interface NoteProps {
  note: Note[];
}
interface NoteDelete {
  id: string
}

const NoteList = ({ note }: NoteProps) => {
  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: (deleteNote),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['article']})
    }
  })
  const handleDelete = (id: NoteDelete) => {
    mutation.mutate(id)
  }

  return (
    <ul className={css.list}>
      {note.map((notes) => (
        <li key={notes.id} className={css.listItem}>
          <h2 className={css.title}>{notes.title}</h2>
          <p className={css.content}>{notes.content}</p>
          <div className={css.footer}>
            <span className={css.tag}>{notes.tag}</span>
            <button className={css.button} onClick={() => handleDelete(notes)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default NoteList;
