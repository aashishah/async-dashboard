

export default function FilterPanel({ query, setQuery }) {

    function handleSearch(e) {
        setQuery(prev => ({
            ...prev,
            search: e.target.value,
            page: 1
        }));
    }

    function handleChange(e, field){
        if(field === "role"){
            setQuery(prev => ({
                ...prev,
                role: e.target.value,
                page: 1
            }));
        }
        else if(field === "status"){
            setQuery(prev => ({
                ...prev,
                status: e.target.value,
                page: 1
            }));
        }
    }


    return (
        <>
            <div className="left">
                <input
                    type="text"
                    placeholder="Filter by name or email..."
                    onChange={e => {
                        handleSearch(e);
                    }}
                />
                <select  onChange={(e) => handleChange(e, "role")}>
                    <option value="">Select a role</option>
                    <option value="Developer">Developer</option>
                    <option value="Design">Designer</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <select onChange={(e) => handleChange(e, "status")}>
                    <option value="">Select user status</option>
                    <option value="I">Inactive</option>
                    <option value="A">Active</option>
                </select>
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