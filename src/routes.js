import { addNoteHandler, getAllNoteHandler, getNoteByIdHandler , updateNoteHandler,deleteNoteByIdHandler} from "./handler.js";

const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandler,
  },

  {
    method: "GET",
    path: "/notes",
    handler: getAllNoteHandler,
  },

  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },

  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: updateNoteHandler,
  },

  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler
  }
];

export default routes;
