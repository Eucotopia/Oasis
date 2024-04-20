import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RootState} from "@/app/store";
import {ResultResponse} from "@/types";

export type TagType = {
    id: number,
    name: string
}
export const tagApi = createApi({
    reducerPath: 'tagApi',
    tagTypes: ['TagApi'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8080/tag',
        prepareHeaders: (headers, {getState}) => {
            // By default, if we have a token in the store, let's use that for authenticated requests
            const authorization = (getState() as RootState).auth.currentUser?.authorization
            if (authorization) {
                headers.set('Authorization', `Bearer ${authorization}`)
            }
            return headers
        },
    }),
    endpoints: (builder) => ({
        // get all tags
        getTags: builder.query<ResultResponse<TagType[]>, void>({
            query: () => ``,
            transformResponse: (response: { data: ResultResponse<TagType[]> }, meta, arg) => response.data,
            transformErrorResponse: (
                response: { status: string | number },
                meta,
                arg
            ) => response.status,
        }),
        addTag: builder.mutation<ResultResponse<String>, string[]>({
            query: (tags) => ({
                url: ``,
                method: 'POST',
                body: tags
            }),
        })
    }),
})

export const {useGetTagsQuery, useAddTagMutation} = tagApi