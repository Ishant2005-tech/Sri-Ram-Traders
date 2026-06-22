import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-150 text-neutral-800 pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-extrabold text-neutral-900 mb-4">Sri Ram Traders</h3>
            <p className="text-gray-500 max-w-sm mb-6 leading-relaxed">
              Trusted cement and steel supply solutions for modern homes, commercial complexes, contractors, and public infrastructure projects.
            </p>
          </div>
          
          <div>
            <div className="flex flex-col gap-3 font-semibold text-sm">
              <Link to="/products" className="text-neutral-600 hover:text-amber-600 transition-colors">Products Catalog</Link>
              <Link to="/projects" className="text-neutral-600 hover:text-amber-600 transition-colors">Projects We Supply</Link>
              <Link to="/contractors" className="text-neutral-600 hover:text-amber-600 transition-colors">Contractors & Builders</Link>
              <Link to="/contact" className="text-neutral-600 hover:text-amber-600 transition-colors">Contact Us</Link>
            </div>
          </div>
          
          <div>
            <div className="flex flex-col gap-3.5 text-xs text-neutral-600">
              <p className="font-bold text-neutral-800 text-sm">
                Phone: <span className="font-extrabold text-[#111]">+91 8539914204</span>
              </p>
              <p className="font-bold text-neutral-800 text-sm">
                Email: <span className="font-bold text-[#111]">support.sriramtraders@gmail.com</span>
              </p>
              <div className="mt-2 border-t border-gray-100 pt-2.5">
                <span className="font-black text-neutral-900 block text-[10px] uppercase tracking-wider mb-1">Office Location</span>
                <p className="text-gray-500 leading-relaxed">
                  Near Station Road, Muraura, Bihar Sharif, District Nalanda, Bihar – 803101
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-neutral-500">
            &copy; {new Date().getFullYear()} Sri Ram Traders. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
