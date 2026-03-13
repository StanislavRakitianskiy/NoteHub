import axios from "axios";
import type { Note } from "../types/note";

const baseUrl = "https://notehub-public.goit.study/api/notes";
const tmdbToken = import.meta.env.VITE_NOTEHUB_TOKEN as string;

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
interface FetchNotesParams {
    page?: number;
    search?: string;
}

export const fetchNotes = async ({page = 1, search = ''}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const res = await axios.get<FetchNotesResponse>(baseUrl, {
    params: {
        page,
        search,
    }, 
    headers: {
        Authorization: `Bearer ${tmdbToken}`,
    }
  })
  return res.data
};
export const createNote = () => {};
export const deleteNote = () => {};
