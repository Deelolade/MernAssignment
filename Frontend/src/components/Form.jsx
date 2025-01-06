import React, { useState } from 'react'

const Form = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phone: "",
        age: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/user", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(formData)
            })
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            if (response.ok) {
                const result = await response.json();
                alert('User created successfully!');
                setFormData({ name: "", email: "", age: "", phone: "", })
            } else {
                console.error('Error:', response.statusText);
                alert('Failed to submit the form try again.');
            }

        } catch (error) {
            console.log("error:", error)

        }
    }
    return (
        <div className=''>
            <div className="hero  min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left ml-8">
                        <h1 className="text-5xl font-bold text-center text-black">Login now!</h1>
                        <p className="py-6 text-center text-black">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, consectetur asperiores odit molestiae ut autem adipisci, error maiores enim expedita cum. Culpa, hic eius neque voluptas inventore blanditiis atque velit!
                        </p>
                    </div>
                    <div className="card bg-base-300 rounded-xl w-full max-w-sm shrink-0 shadow-2xl">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label" htmlFor="username">
                                    <span className="label-text text-lg">Name</span>
                                </label>
                                <input type="text" name='username' placeholder="Enter User's name" className="input input-bordered bg-white" required onChange={handleChange} value={formData.username} />
                            </div>
                            <div className="form-control">
                                <label className="label" htmlFor="email">
                                    <span className="label-text text-lg">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter user's Email" className="input input-bordered bg-whit" required onChange={handleChange} value={formData.email} />
                            </div>
                            <div className="form-control">
                                <label className="label" htmlFor="phone">
                                    <span className="label-text text-lg">Phone Number</span>
                                </label>
                                <input type="text" placeholder="Enter user's Phone number" name='phone' className="input input-bordered bg-white" required onChange={handleChange} value={formData.phone} />
                            </div>
                            <div className="form-control">
                                <label className="label" htmlFor="age">
                                    <span className="label-text text-lg">Age</span>
                                </label>
                                <input type="text" name='age' placeholder="Enter user's age" className="input input-bordered bg-white" required onChange={handleChange} value={formData.age} />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type='submit'>Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Form
