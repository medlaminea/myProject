import React, { useRef } from 'react'
import axios from 'axios'

const Contact = () => {

    const FullName = useRef()
    const Email = useRef()
    const Message = useRef()

    function SendMessage(e) {
        e.preventDefault()
        const data = {
            FullName: FullName.current.value,
            Email: Email.current.value,
            Message: Message.current.value,
        }

        axios.post("http://localhost:3005/Contact", data)

        FullName.current.value = ""
        Email.current.value = ""
        Message.current.value = ""
    }

    return (
        <div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center py-4 my-4">
                        <h1>Have Some Question?</h1>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md 5 d-flex justify-content-center">
                        <img src="/assets/images/contact.png" alt="Contact Us" height="300px" width="300px" />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div class="mb-3">
                                <label for="exampleForm" class="form-label">Full Name</label>
                                <input type="text" ref={FullName} class="form-control" id="exampleForm" placeholder="John Smith"/>
</div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" ref={Email} class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
                                <div class="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                                    <textarea class="form-control" ref={Message} id="exampleFormControlTextarea1" rows="5"></textarea>
                                </div>
                                <button type="submit" onClick={SendMessage} class="btn btn-outline-primary">Send Message</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
            )
}

            export default Contact
