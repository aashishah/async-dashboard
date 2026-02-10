export default function Pagination({ query, setQuery, totalPages }) {

  return (
    <div className="pagination">
      <button
        disabled={query.page === 1}
        onClick={() => setQuery({ ...query, page: query.page - 1 })}
      >
        Prev
      </button>

      <span>{query.page} / {totalPages}</span>

      <button
        disabled={query.page === totalPages}
        onClick={() => setQuery({ ...query, page: query.page + 1 })}
      >
        Next
      </button>
    </div>
  );
}