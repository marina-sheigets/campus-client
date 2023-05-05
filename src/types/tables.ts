import type { Article } from '../redux/types/article';

export interface ArticleTable extends Article {
    selected: boolean;
}
