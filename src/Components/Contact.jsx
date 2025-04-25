function Contact() {
    return (
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-600 mb-8">Contact Us</h2>
          <p className="text-lg text-gray-700 mb-6">Have questions or want to place an order? Reach out to us!</p>
          <div className="max-w-lg mx-auto">
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> +91 12345 67890</p>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> info@shreesakshigajananart.com</p>
            <p className="text-gray-700 mb-2"><strong>Address:</strong> 123, Main Market, Mumbai, Maharashtra</p>
          </div>
          <div className="mt-8">
            <a href="https://wa.me/9328511936" target="_blank" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">Chat on WhatsApp</a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Contact;