

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
                <span>SEARCH</span>
                <input
                    type="text"
                    placeholder="Filter by name or email..."
                    onChange={e => {
                        handleSearch(e);
                    }}
                />
                <span>FILTER</span>
                <select  onChange={(e) => handleChange(e, "role")}>
                    <option value="all">Select a role</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                    <option value="Marketing">Marketing</option>
                </select>
                <select onChange={(e) => handleChange(e, "status")}>
                    <option value="all">Select user status</option>
                    <option value="I">Inactive</option>
                    <option value="A">Active</option>
                </select>
            </div>
        </>
    )
}