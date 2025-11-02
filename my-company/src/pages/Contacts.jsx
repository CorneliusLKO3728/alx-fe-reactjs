
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}!`);
  };

  return (
    <div style={{ color: '#333' }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
        <input name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
        <textarea name="message" placeholder="Message" onChange={handleChange} value={formData.message}></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
export default Contact;
