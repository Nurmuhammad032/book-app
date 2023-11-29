export interface IBook {
  book: {
    author: string;
    cover: string;
    id: number;
    isbn: string;
    pages: number;
    published: number;
    title: string;
  };
  status: number;
}
