import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { fetchNotes } from "../../services/noteService";
import NoteList from "../NoteList/NoteList";
import css from "./App.module.css";

function App() {
  const [topic, setTopic] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState(12);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false)

  const { data, isLoading } = useQuery({
    queryKey: ["article", page, perPage],
    queryFn: () => fetchNotes(page, perPage),
    placeholderData: keepPreviousData,
  });

  const totalPage: number = data?.totalPages ?? 1;
  const handleOnPageChange = (newChange: number) => {
    setPage(newChange);
  };

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {totalPage > 1 && (
          <Pagination
            currentPage={page}
            totalPage={totalPage}
            onPageChange={handleOnPageChange}
          />
        )}
        <button className={css.button} onClick={openModal}>Create note +</button>
      </header>
      {isLoading && <p>Loading ...</p>}
      {data && data.notes.length > 0 && <NoteList note={data.notes} />}
      {/* Компонент SearchBox */}
      {/* Кнопка створення нотатки */}
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}

export default App;
