export interface Metadata {
  title: string;
  description: string;
  author: Author[];
  rowsPerPage: number;
  locale: string;
  copyright: string;
}

interface Author{
  id: string,
  bio: string,
  contacts: Contacts,
}

interface Contacts {
  email: string,
  github: string,
}