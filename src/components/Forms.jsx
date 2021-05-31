const Forms = () => {
    return (
        
        <div>
            <p className="placeholder"></p>
            <div className="container w-100">
                <div id="contact" className="m-lg-5 m-2">
                    <h1 className="mb-2">Contact</h1>
                    <hr />
                    <p className="mt-3 mb-4">Please fill out the form below to contact us.</p>
                    <form>
                        <div className="mb-4">
                            <input type="text" className="form-control p-3" placeholder="Name" />
                        </div>
                        <div className="mb-4">
                            <input type="email" className="form-control p-3" placeholder="Email" />
                        </div>
                        <div className="mb-4">
                            <textarea className="form-control p-3" placeholder="Message"></textarea>
                        </div>
                        <button className="btn btn-dark p-3 mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forms
