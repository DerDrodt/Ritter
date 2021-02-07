export interface Post {
  slug: string;
  metadata: Metadata;
  html: string;
}

export interface Metadata {
  dateString: string;
  date: string;
  title: string;
  description: string;
}
