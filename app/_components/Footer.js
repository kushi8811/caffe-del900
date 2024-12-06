import { FaEnvelope, FaInstagram, FaPhoneAlt } from "react-icons/fa"; // Import icons

function Footer() {
  return (
    <footer className="bg-primary-700 py-8 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <p className="flex items-center text-sm">
                <FaEnvelope className="mr-2 text-primary-300" />
                <a
                  href="mailto:info@caffedel900.com"
                  className="text-primary-300 hover:text-primary-200"
                >
                  info@caffedel900.com
                </a>
              </p>
              <p className="flex items-center text-sm">
                <FaPhoneAlt className="mr-2 text-primary-300" />
                <a
                  href="tel:+123456789"
                  className="text-primary-300 hover:text-primary-200"
                >
                  055218390
                </a>
              </p>
              <p className="flex items-center text-sm">
                <FaInstagram className="mr-2 text-primary-300" />
                <a
                  href="https://www.instagram.com/caffe_del900firenze/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-300 hover:text-primary-200"
                >
                  @caffe_del900firenze
                </a>
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Location</h3>
            <p className="text-sm">
              Borgo Ognissanti, 3/rosso, 50123 Firenze FI
            </p>
            <a
              href="https://www.google.com/maps/place/Caff%C3%A8+Del+900+Firenze/@43.7712167,11.2446697,17z/data=!3m1!4b1!4m6!3m5!1s0x132a56ab8521a4cf:0xd2d0ff663dbd7fa2!8m2!3d43.7712167!4d11.2472393!16s%2Fg%2F1hhlsgtq7?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-300 hover:text-primary-200"
            >
              View on Google Maps
            </a>
          </div>

          {/* Social Media Links */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/caffe_del900firenze/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-300 hover:text-primary-200"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Caffè Del 900. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
