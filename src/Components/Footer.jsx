function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="w-[80%] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700" id="contact">
        {/* About */}
        <div>
          <h3 className="font-bold mb-3 text-lg">About</h3>
          <p className="flex items-center mb-2 hover:text-orange-600 cursoir-pointer text-base font-semibold" style={{transition: 'all 0.3s ease-in-out'}}>
            <span className="mr-2">📍</span> Your company address
          </p>
          <p className="flex items-center mb-2 hover:text-orange-600 cursoir-pointer text-base font-semibold" style={{transition: 'all 0.3s ease-in-out'}}>
            <span className="mr-2">📞</span> 02 7801 5474
          </p>
          <p className="flex items-center hover:text-orange-600 cursoir-pointer text-base font-semibold" style={{transition: 'all 0.3s ease-in-out'}}>
            <span className="mr-2">✉️</span> Admin@company.com
          </p>
          <div className="mt-8">
            <a href="https://wa.me/9328511936" target="_blank" className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">Chat on WhatsApp</a>
          </div>
        </div>

        {/* Quick Access */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Quick Access</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-orange-600 cursoir-pointer text-base font-semibold" style={{transition: 'all 0.3s ease-in-out'}}>Home</a></li>
            <li><a href="#about" className="hover:text-orange-600 cursoir-pointer text-base font-semibold" style={{transition: 'all 0.3s ease-in-out'}}>About</a></li>
            <li><a href="#products" className="hover:text-orange-600 cursoir-pointer text-base font-semibold" style={{transition: 'all 0.3s ease-in-out'}}>Products</a></li>
            <li><a href="#contact" className="hover:text-orange-600 cursoir-pointer text-base font-semibold" style={{transition: 'all 0.3s ease-in-out'}}>Contact</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Connect</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#"><i className="fab fa-facebook-f hover:text-orange-600 cursoir-pointer text-xl font-semibold" style={{transition: 'all 0.3s ease-in-out'}}></i></a>
            <a href="#"><i className="fab fa-twitter hover:text-orange-600 cursoir-pointer text-xl font-semibold" style={{transition: 'all 0.3s ease-in-out'}}></i></a>
            <a href="#"><i className="fab fa-instagram hover:text-orange-600 cursoir-pointer text-xl font-semibold" style={{transition: 'all 0.3s ease-in-out'}}></i></a>
            <a href="#"><i className="fab fa-linkedin-in hover:text-orange-600 cursoir-pointer text-xl font-semibold" style={{transition: 'all 0.3s ease-in-out'}}></i></a>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="font-bold mb-3 text-lg">Payment Methods</h3>
          <div className="flex space-x-3">
            <img src="./bhim.png" alt="MasterCard" className="h-7" />
            <img src="./phone.png" alt="American Express" className="h-7" />
            <img src="./pay.png" alt="UnionPay" className="h-7" />
            <img src="./visa.png" alt="Visa" className="h-7" />
            <img src="./Paypal.png" alt="PayPal" className="h-7" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <footer className="bg-orange-600 text-white py-4">
        <div className="w-[80%] mx-auto text-center">
          <p>© 2025 Shree Sakshi Gajanan Art. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
