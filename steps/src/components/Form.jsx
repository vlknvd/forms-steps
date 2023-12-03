import { useState } from "react";
import shortid from "shortid";


const Form = ({ onAdd }) => {

    const [form, setForm] = useState({
        nameDate: '',
        namePath: '',
    })

    const handleClick = (e) => {
        e.preventDefault();
        const item = {
            id: shortid.generate(),
            nameDate: form.nameDate,
            namePath: Number(form.namePath),
        };

        onAdd(item);
        setForm({ nameDate: '', namePath: '' });
    }

    const handleNameChange = ({target}) => {
        const {name, value} = target;
        setForm(prevForm => ({...prevForm, [name]: value}))
    }

    return (
        <div>
            <form className="form" onSubmit={handleClick}>
                <div className="form-header">
                    <div className="form-header-date">
                        <label htmlFor="date">Дата</label>
                        <input type="date" className="input-date" id="date" onChange={handleNameChange} value={form.nameDate} name="nameDate" required/>
                    </div>
                    <div className="form-header-path">
                        <label htmlFor="path">Пройдено км</label>
                        <input type="number" className="input-path" id="path" onChange={handleNameChange} value={form.namePath} name="namePath" required/>
                    </div>
                    <div className="form-header-button">
                        <button className="button">OK</button>
                    </div>
                </div>
            </form>
        </div>     
    )
}

export default Form