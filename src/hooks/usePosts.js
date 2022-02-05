import {useMemo} from "react";

export const usePosts = (filter, posts) => {
    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        } else {
            return posts
        }
    }, [filter.sort, posts])

    const searchedAndSortedPosts = useMemo(() => {
        if (filter.query) {
            return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
        } else {
            return sortedPosts
        }
    }, [filter.query, sortedPosts])

    return searchedAndSortedPosts;
}