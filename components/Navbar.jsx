'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Search, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Button from './Button';
import { experiumImageUrl } from '@/utils/common'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const navItems = [
        { name: 'About Us', href: '/about-us' },
        {
            name: 'Attractions',
            href: '/attractions',
            hasDropdown: true,
            dropdownItems: [
                { name: 'Botanical Gardens', href: '/botanical-gardens' },
                { name: 'adventure & fun', href: '/adventure-fun' },
                { name: 'upcoming', href: '/upcoming' },
                // { name: 'Careers', href: '/careers' },
            ]
        },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Stay', href: '/stay' },
        { name: 'Events & Spaces', href: '/events' },
        // { name: 'Stay', href: '/stay' },

    ];

    return (
        // <nav className="bg-black/85 sticky top-0 z-50 backdrop-blur-sm">
        <nav className="bg-white fixed right-0 left-0 top-0 z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0 ">
                        <Link href="/" className="flex items-center">
                            <Image
                                src={experiumImageUrl('logo.svg')}
                                alt={"Aparna Logo"}
                                width={110}
                                height={42}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-baseline space-x-1">
                            {navItems.map((item, index) => (
                                <div key={index} className="relative">
                                    {item.hasDropdown ? (
                                        <div className="relative">
                                            <button
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                className="text-black uppercase hover:text-blueColor px-3 py-2 text-base flex items-center transition-colors duration-200"
                                            >
                                                {item.name}
                                                <ChevronDown className="ml-1 h-4 w-4" />
                                            </button>

                                            {isDropdownOpen && (
                                                <div className="absolute right-0 mt-2 w-48  rounded-md shadow-lg py-1 z-50">
                                                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                        <Link
                                                            key={dropdownIndex}
                                                            href={dropdownItem.href}
                                                            className="block px-4 py-2 border-b border-gray-200 last:border-b-0 text-black uppercase hover:bg-gray-100 hover:text-gray-900"
                                                            onClick={() => setIsDropdownOpen(false)}
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className="text-black uppercase hover:text-blueColor px-3 py-2 text-base  transition-colors duration-200"
                                        >
                                            {item.name}
                                        </Link>
                                    )}
                                </div>
                            ))}

                            <Link href="/contact">
                                <Button className='clear-btn'>
                                    CLUB
                                </Button>
                            </Link>
                            &nbsp;
                            &nbsp;
                            {/* Contact Button */}
                            <Link href="/contact">
                                <Button className='blue-btn'>
                                    Plan your visit
                                </Button>
                            </Link>
                        </div>
                    </div>
                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-black hover:text-brand p-2"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 bg-white/75 bg-opacity-90">
                        {navItems.map((item, index) => (
                            <div key={index}>
                                {item.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                            className="text-black uppercase hover:text-brand block px-3 py-2 text-base w-full text-left"
                                        >
                                            {item.name}
                                        </button>
                                        {isDropdownOpen && (
                                            <div className="pl-6 space-y-1">
                                                {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                    <Link
                                                        key={dropdownIndex}
                                                        href={dropdownItem.href}
                                                        className="uppercase hover:text-black block px-3 text-base"
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false);
                                                            setIsDropdownOpen(false);
                                                        }}
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-black uppercase hover:text-brand block px-3 py-2 text-base "
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}

                        {/* Mobile Search */}
                        <div className="px-3 py-2">
                            <Link className='w-[176px]' href="/contact">
                                <button  className=' w-[100%] clear-btn'>
                                    CLUB
                                </button>
                            </Link>
                        </div>

                        {/* Mobile Contact Button */}
                        <div className="px-3 py-2">

                            <Link  className='w-[176px]'  href="/contact">
                                <button className='  w-[100%] blue-btn '>
                                    Plan your visit
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;