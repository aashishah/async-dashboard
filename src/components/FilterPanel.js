

export default function FilterPanel({ query, setQuery }) {
    const setFilterState = (value) => {
        setQuery(prev => ({ ...prev, role: value, page: 1 }));
    }



    return(
        <>
        <div className="bottom">
        <input
          type="text"
          placeholder="Filter by name or email..."
          value={filterText}
          onChange={e => {
            // setFilterText(e.target.value);
            // setCurrentPage(1); // reset page on filter
          }}
        />
        </div>
        <div>
            <button onClick = {() => setFilterState("")}>All</button> <button  onClick = {() => setFilterState("open")}>Open Only</button>
            <button  onClick = {() => setFilterState("closed")}>Closed Only</button>
        </div>
        {filterState && "Showing " + filterState + " items only"}
        <div>
            <ul>
                {filteredItems.map(item => (<li key={item.id}>{item.id}. <b>{item.title}</b> - {item.status}</li>))}
            </ul>
        </div>
        </>
    )
}