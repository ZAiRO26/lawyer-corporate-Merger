"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
             <Link href="/" className="block mb-6">
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                Merger <span className="text-gold-500">&</span> Co.
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              A boutique law firm dedicated to excellence in corporate mergers and acquisitions.
            </p>
            <div className="text-slate-400 text-sm">
              <p>123 Financial District</p>
              <p>New York, NY 10005</p>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Cross-border M&A</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Private Equity</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Restructuring</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Corporate Governance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Firm</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-gold-500 transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">People</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Insights</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Latest Articles</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-gold-500 transition-colors">Press Releases</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Merger & Co. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
            <Link href="#" className="hover:text-slate-300">Terms of Use</Link>
            <Link href="#" className="hover:text-slate-300">Disclaimer</Link>
          </div>
        </div>
        
        <div className="mt-8 text-[10px] text-slate-600 leading-relaxed text-justify">
          Disclaimer: The content of this website is for informational purposes only and should not be interpreted as soliciting or advertisement. No material/information provided on this website should be construed as legal advice. Merger & Co. shall not be liable for consequences of any action taken by relying on the material/information provided on this website.
        </div>
      </div>
    </footer>
  );
}
