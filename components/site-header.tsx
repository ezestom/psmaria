import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import logo from "@/public/logo-azul.png"
import Image from "next/image";
import {
  ShoppingCartIcon,
  MenuIcon,
  XIcon
} from "lucide-react";
import { MyDrawer } from './MyDrawer/MyDrawer';

//@ts-ignore
const Header = ({ setCurrentPage, cart, setCart, isCartOpen, setIsCartOpen }) => {
  //@ts-ignore
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //@ts-ignore
  const addToCart = (product) => {
    //@ts-ignore
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      //@ts-ignore
      setCart(cart.map((item) =>
        //@ts-ignore
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      //@ts-ignore
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  //@ts-ignore
  const removeFromCart = (productId) => {
    //@ts-ignore
    setCart(cart.filter((item) => item.id !== productId));
  };

  //@ts-ignore
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      //@ts-ignore
      removeFromCart(productId);
    } else {
      //@ts-ignore
      setCart(cart.map((item) =>
        //@ts-ignore
        item.id === productId ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  //@ts-ignore
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  //@ts-ignore
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);


  return (

    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" id='navbar'>
      <div className="container px-0 flex h-14 items-center relative">

        <div className="mr-4 hidden md:flex">
          <a
            className="mr-6 flex items-center space-x-2"
            href="/#"
            onClick={() => setCurrentPage("landing")}
          >
            <Image src={logo} className="h-12 w-12" alt='logo image' />

            <div className="hidden flex-col-reverse text-base items-start sm:flex font-black leading-3 text-[#046db5]">
              Santa María <span className='text-xs text-black'>
                Plásticos
              </span>
            </div>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a
              className="transition-colors shadow hover:bg-foreground/5 px-4 py-2 rounded-md hover:text-foreground/80 text-foreground/60"
              href="/#deals"
            >
              Ofertas
            </a>
            <a
              className="transition-colors shadow hover:bg-foreground/5 px-4 py-2 rounded-md hover:text-foreground/80 text-foreground/60"
              href="#categories-section"
            >
              Categorias
            </a>
            <a
              className="transition-colors shadow hover:bg-foreground/5 px-4 py-2 rounded-md hover:text-foreground/80 text-foreground/60"
              href="#"
              onClick={() => setCurrentPage("products")}
            >
              Productos
            </a>

         
            <a
              className="transition-colors shadow hover:bg-foreground/5 px-4 py-2 rounded-md hover:text-foreground/80 text-foreground/60"
              href="/about"
            >
              Nosotros
            </a>
          </nav>
        </div>
        <button
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:text-accent-foreground h-9 py-2 mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          type="button"
          aria-haspopup="dialog"
          aria-expanded={isMenuOpen}
          aria-controls="radix-:R1mcq:"
          data-state={isMenuOpen ? "open" : "closed"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
        </button>
        <div className="block md:hidden z-[100] fixed top-3 right-3">
          <MyDrawer />
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="sm:flex hidden items-center">
            <Button
              variant="ghost"
              className="mr-6 text-base hover:bg-transparent focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <span className="sr-only">Home</span>
            </Button>
          </nav>
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div>
              <Button
                variant="outline"
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingCartIcon className="h-4 w-4" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;