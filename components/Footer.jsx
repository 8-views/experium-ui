import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from 'lucide-react'
import Image from 'next/image';

import { experiumImageUrl } from '@/utils/common'
export default function Footer() {
  return (
    <footer className="bg-darkblue text-white">
      <div className="container  max-w-7xl  mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="mb-8 w-[50%]">
              <div className="flex-shrink-0 mb-8">
                <Link href="/" className="flex items-center">
                  <Image
                    src={experiumImageUrl('footer-logo.svg')}
                    alt={"experium Logo"}
                    width={110}
                    height={42}
                    className="object-contain"
                  />
                </Link>
              </div>
              <p className="text-white text-sm leading-relaxed">
                Experium is India's largest eco-tourism destination, blending nature with luxury.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-sm   underline font-semibold text-white uppercase tracking-widest mb-4">
              Quick Links:
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-white hover:text-white transition-colors text-sm">
                  Events & Spaces
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/terms" className="text-white hover:text-white transition-colors text-sm">
                  Terms and Condition
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white hover:text-white transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-white text-sm">+91 123 456 7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-white flex-shrink-0" />
                <span className="text-white text-sm">info@experiumecopark.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-white flex-shrink-0 mt-0.5" />
                <span className="text-white text-sm leading-relaxed">
                  Proddutur Village Road, Near Pragathi Resorts, Chilkur, Hyderabad
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-center text-white text-sm">
            © 2025. All rights reserved @Designed by 8views
          </p>
        </div>
      </div>
    </footer>
  )
}
