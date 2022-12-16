const fetchSingleTransaction = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
}

export default async function detailsTransaction({ params }) {
    const { id } = params
    const transaction = await fetchSingleTransaction(id)
    return (
        <article>
            <h1>Transaction # { id }</h1>
            <h2>{ id }-{ transaction.title }</h2>
            <p>{ transaction.body }</p>
        </article>
    )
}