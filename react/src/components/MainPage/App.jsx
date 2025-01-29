
import './App.css'

function App() {

  return (
    <main>
      <h2>Visit Us</h2>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6151.72376049736!2d-76.98334832348853!3d39.562721807173084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c8386e6e0a76ed%3A0x5a6dfa1fd560ea45!2sMain%20street%20profesional%20building%2C%20447%20E%20Main%20St%2C%20Westminster%2C%20MD%2021157!5e0!3m2!1sen!2sus!4v1738029533942!5m2!1sen!2sus" 
       width="600" 
       height="450" 
       style={{border:0, borderRadius:"5px", marginTop:'20px'}} 
       loading="lazy" 
       referrerPolicy="no-referrer-when-downgrade"></iframe>
    </main>
  )
}

export default App
