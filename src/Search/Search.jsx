function Search({setSearch, setNotes, notes, setEditNum, search}) {
    function searchText(e) {
        setSearch(e.target.value);
        setNotes(notes.map((elem) => {
            if (e.target.value === '' || elem.text.includes(e.target.value) === false) {
                return { ...elem, ...{ found: false } };
            } else {
                return { ...elem, ...{ found: true } };
            }
        }))
    }

    let searchResult = notes.map((elem, index) => {
        if (elem.found) {
            return <div className='edit__note' key={index}>
                <span >{elem.note}</span>
                <svg onClick={() => setEditNum(index)} width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"></path><path fillRule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"></path></svg>
            </div>
        } else {
            return ''
        }
    })

    return <div>
        <input value={search} placeholder='Поиск' onChange={(e) => searchText(e)} />
        {searchResult}
    </div>
}

export default Search;