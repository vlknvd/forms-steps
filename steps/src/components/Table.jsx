const Table = ({ forms, onDelete }) => {
    return(
        <div className="table">
            <div className="table-header">
                <div className="header">
                        <div className="header-block">Дата</div>
                        <div className="header-block">Пройдено</div>
                        <div className="header-block">Действия</div>
                </div>
            </div>
            <div className="table-body">
                {forms.map((el, id) => (
                    <div className="body" key = {id}>
                        <div className="body-block">{new Date(el.nameDate).toLocaleDateString()}</div>
                        <div className="body-block">{el.namePath}</div>
                        <div className="body-block">
                            <button className="btn delete-btn" onClick={() => onDelete(el.id)}> &#10008; </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Table