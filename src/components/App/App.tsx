import NoteList from "../NoteList/NoteList";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../../services/noteService";
import { Note } from "../../types/note";
import css from "./App.module.css";

function App() {
  const [notes, setNotes] = useState<string>('');
  const [page, setPage] = useState<number>(1)
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["notes", notes, page],
    queryFn: fetchNotes(notes),
  });

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <NoteList />
        {/* Компонент SearchBox */}
        {/* Пагінація */}
        {/* Кнопка створення нотатки */}
      </header>
    </div>
  );
}

export default App;
