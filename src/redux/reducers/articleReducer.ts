import type { AnyAction } from '@reduxjs/toolkit';
import {
    createArticleAction,
    clearArticleStatusMessageAction,
    getListOfArticlesAction,
    deleteArticleAction,
    clearArticleDeleteStatusAction,
} from '../api/ApiActions';
import type { Article, ArticleResponse } from '../types/article';

interface InitialState {
    status: string;
    articlesList: Article[];
    deleteStatus: string;
}
const initialState: InitialState = {
    status: '',
    articlesList: [],
    deleteStatus: '',
};

const articleReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case createArticleAction.type.REQUEST: {
            return {
                ...state,
                status: 'Started',
            };
        }

        case createArticleAction.type.SUCCESS: {
            if (action.payload.data.message) {
                return {
                    ...state,
                    status: action.payload.data.message,
                };
            }
            return {
                ...state,
                status: 'Article was created successfully !',
            };
        }

        case createArticleAction.type.FAILED: {
            return {
                ...state,
                status: 'Something went wrong. Try again !',
            };
        }

        case clearArticleStatusMessageAction.type.REQUEST: {
            return {
                ...state,
                status: '',
            };
        }

        case getListOfArticlesAction.type.SUCCESS: {
            if (!action.payload.articles.length) {
                return state;
            }
            const arr: Article[] = [];
            action.payload.articles.forEach((article: ArticleResponse) => {
                arr.push({
                    id: article._id,
                    name: article.name,
                    content: article.content,
                    links: article.links,
                });
            });
            return { ...state, articlesList: arr };
        }

        case deleteArticleAction.type.REQUEST: {
            return {
                ...state,
                deleteStatus: 'Started',
            };
        }

        case deleteArticleAction.type.SUCCESS: {
            const { _id, name } = action.payload.article;
            const filteredArticles = state.articlesList.filter(
                (article: Article) => article.id !== _id
            );
            return {
                ...state,
                articlesList: filteredArticles,
                deleteStatus: `Article "${
                    name as string
                }" was successfully deleted ! `,
            };
        }
        case deleteArticleAction.type.FAILED: {
            return {
                ...state,
                deleteStatus: 'Article was not deleted. Try again !',
            };
        }
        case clearArticleDeleteStatusAction.type.REQUEST: {
            return {
                ...state,
                deleteStatus: '',
            };
        }

        default: {
            return state;
        }
    }
};

export default articleReducer;
