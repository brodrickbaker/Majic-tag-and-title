import {useState} from "react"

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');

    const sendEmail = (e) => {
        e.preventDefault()
        console.log(name, email, subject, body)
    }

  return (
    <main>
      <form onSubmit={sendEmail}>
        <h2>Contact Us</h2>
        <input
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        <textarea
            name='body'
            placeholder="How can we help you?"
            value={body}
            rows='5'
            cols='50'
            onChange={(e) => setBody(e.target.value)}
            required
            >
        </textarea>
        <button type="submit">Contact Us</button>
      </form>
    </main>
  )
};

export default Contact;
