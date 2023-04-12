export interface CreateArticleType {
    name: string;
    content: string;
    links: string[];
}

export interface Article {
    id: string;
    name: string;
    links: string[];
    content: string;
}

export interface ArticleResponse {
    content: string;
    links: string[];
    name: string;
    __v: number;
    _id: string;
}
