import axios from "axios";
import type { Note, NoteTag } from "../types/note";

const baseUrl = "https://notehub-public.goit.study/api/notes";
const tmdbToken = import.meta.env.VITE_NOTEHUB_TOKEN as string;

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

interface CreateNoteResponse {
  title: string;
  content: string;
  tag: NoteTag;
}

interface DeleteNoteResponse {
  id: string;
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
export const createNote = async (rest: CreateNoteResponse): Promise<Note> => {
  const res = await axios.post<Note>(baseUrl, rest, {
    headers: {
      Authorization: `Bearer ${tmdbToken}`,
    },
  });
  return res.data;
};
export const deleteNote = async (id: DeleteNoteResponse): Promise<Note> => {
  const res = await axios.delete<Note>(baseUrl + `/${id.id}`, {
        headers: {
      Authorization: `Bearer ${tmdbToken}`,
    },
  })
  return res.data
};
