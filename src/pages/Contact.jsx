export const Contact = () => {
  const handleFormSubmit = (formData) => {
    console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
          <input
            type="text"
            required
            autoComplete="off"
            placeholder="Enter Your Name"
            name="username"
            className="form-control"
          />
          <input
            type="email"
            required
            autoComplete="off"
            placeholder="Enter Your Email"
            name="email"
            className="form-control"
          />
          <textarea
            name="message"
            className="form-control"
            rows="10"
            placeholder="Enter Your Message"
            required
            autoComplete="false"
          ></textarea>
          <button type="submit" value="send">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
