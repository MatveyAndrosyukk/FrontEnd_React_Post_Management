export const getTotalPages = (xTotalCount, limit) => {
    return Math.ceil(xTotalCount / limit)
}