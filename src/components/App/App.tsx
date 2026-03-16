import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNotes } from "../../services/noteService";
import NoteList from "../NoteList/NoteList";
import css from "./App.module.css";

function App() {
const [topic, setTopic] = useState<string>('');
const [page, setPage] = useState<number>(1);
const [perPage, setPerPage] = useState(12);

const {data, isLoading} = useQuery({
  queryKey: ['article', page, perPage],
  queryFn: () => fetchNotes(page, perPage)
})

const totalPage: number = data?.totalPages ?? 1;
const handleOnPageChange = (newChange: number) => {
  setPage(newChange)
}

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {isLoading && <p>Loading ...</p>}
        {data && data.notes.length > 0 && <NoteList note={data.notes} />}
        {/* Компонент SearchBox */}
        {/* {totalPage > 1 && <Pagination currentPage={page} totalPage={perPage} onPageChange={handleOnPageChange} />} */}
        {/* Кнопка створення нотатки */}
      </header>
    </div>
  );
}

export default App;
