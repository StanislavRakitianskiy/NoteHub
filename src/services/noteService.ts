import axios from "axios";
import type { Note } from "../types/note";

const baseUrl = "https://notehub-public.goit.study/api/notes";
const tmdbToken = import.meta.env.VITE_NOTEHUB_TOKEN as string;

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes = async (
  page?: number,
  perPage?: number,
  search?: string,
): Promise<FetchNotesResponse> => {
  const res = await axios.get<FetchNotesResponse>(baseUrl, {
    params: {
      page,
      perPage,
      search,
    },
    headers: {
      Authorization: `Bearer ${tmdbToken}`,
    },
  });
  return res.data;
};
export const createNote = () => {};
export const deleteNote = () => {};
