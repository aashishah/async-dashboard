import { useState } from "react";

export default function AddUserModal({ setUsers }) {

    const [onOpen, setOnOpen] = useState(false);

    const [formData, setFormData] = useState({
        id: null,
        name: "",
        email: "",
        status: "",
        age: "",
        role: "Developer"
    });

    const [submissionStatus, setSubmissionStatus] = useState(false);


    function handleChange(event, fieldName) {
        setFormData({ ...formData, [fieldName]: event.target.value });
    }

    function submitForm() {
        setSubmissionStatus(true);
        setTimeout(() => {
            console.log("Form submitted:", formData);
            setUsers(prev => [...prev, formData]);
            setSubmissionStatus(false);
        }, 3000);
    }

    return (<>
    {onOpen ? <div className="open-form"><span>Add New User</span><button onClick={() => setOnOpen(false)}>Close Form</button></div> : <button onClick={() => setOnOpen(true)}>Add New User</button>}
    {onOpen &&
    
    <form className="form-submission" onSubmit={(e) => {
        e.preventDefault();
        submitForm();
        setFormData({
            id: null,
            name: "",
            email: "",
            status: "",
            age: "",
            role: "Developer"
        });
    }}>
        <div><span>Name*  </span><input type="text" name="name" value={formData.name} placeholder="Name" minLength={3} onChange={e => handleChange(e, "name")} disabled={submissionStatus} />
        </div>

        <div><span>Email*  </span><input type="email" name="email" value={formData.email} placeholder="Email" onChange={e => handleChange(e, "email")} disabled={submissionStatus} />
        </div>
        <div><span>Status*  </span><input type="text" name="status" value={formData.status} placeholder="Status" maxLength={1} onChange={e => handleChange(e, "status")} disabled={submissionStatus} />
        </div>
        <div>
            <span>Age*    </span><input type="text" name="age" value={formData.age} placeholder="Age" onChange={e => handleChange(e, "age")} disabled={submissionStatus} />
        </div>
        <div>
            <span>ID*     </span><input type="number" name="id" value={formData.id} placeholder="id" onChange={e => handleChange(e, "id")} disabled={submissionStatus} />
        </div>
        <div>

            <span>Role*  </span><select name="roles" onChange={e => handleChange(e, "role")} disabled={submissionStatus}>
                <option name="roles" value="developer">Developer</option>
                <option name="roles" value="designer">Designer</option>
                <option name="roles" value="manager">Manager</option>
            </select>
        </div>
        <button type="submit" disabled={submissionStatus}>Submit</button>
        {submissionStatus ? <p color='red'>Adding User, please wait</p> : null}
    </form>}
    </>)
}