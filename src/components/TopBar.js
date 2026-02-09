

export default function TopBar({ query, setQuery }) {
    return(
        <>
        <div className="bottom">
            Showing {query && query.role !== "all" ? query.role : ""} {query && query.status !== "all" ? query.status === "A" ? "Active" : "Inactive" : ""} users
        <div>
            <button onClick={() => setQuery(prev => ({ ...prev, sortOrder: prev.sortOrder === "asc" ? "desc" : "asc" }))}>
                {query.sortOrder === "asc" ? "ASCENDING" : "DESCENDING"}
            </button>
            <button onClick={() => setQuery(prev => ({ ...prev, search: "", sortBy: "name", sortOrder: "asc", page: 1, role:"all", status: "all" }))}>
                Reset Filters
            </button>
        </div>
        </div>
        {/* {filterState && "Showing " + filterState + " items only"}
        <div>
            <ul>
                {filteredItems.map(item => (<li key={item.id}>{item.id}. <b>{item.title}</b> - {item.status}</li>))}
            </ul>
        </div>
        </> */}
        </>
    )
}