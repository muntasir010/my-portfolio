/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Resume Download Handler
  const handleResume = () => {
    const resumeUrl = "/resume/NAEEM_MUNTASIR_ASIF.pdf";
    window.open(resumeUrl, "_blank");
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "/resume/Naeem_Muntasir_Asif.pdf";
    link.click();
  };

  const navItems = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-1/2 z-[100] w-full  mx-auto -translate-x-1/2 rounded-2xl border border-white/10 bg-glass backdrop-blur-xl shadow-lg shadow-black/30">
      <div className="w-full max-w-6xl mx-auto px-2 sm:px-3 md:px-2 lg:px-10">
        <div className="flex items-center justify-between py-3">
          {/* Responsive Logo & Name */}
          <motion.div
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            {/* Logo Placeholder - You can use your 3D generated image here */}
            <a href="#" className="flex items-center gap-2 cursor-pointer">
              <div className="h-14 w-14 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center shadow-neon">
                <span className="text-neon font-black text-xl">
                  <img src={logo} alt="" />
                </span>
              </div>
              <h1 className="text-xl font-bold tracking-tighter text-white">
                <span className="text-xl">Naeem </span>
                <span className="text-neon">Muntasir </span>Asif
                <span className="text-neon">.</span>
              </h1>
            </a>
          </motion.div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center md: gap-4 lg:gap-8 text-xs font-semibold uppercase tracking-widest text-white/70">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="relative transition hover:text-neon group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-neon transition-all group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleResume}
              className="hidden md:block rounded-xl border border-neon/40 bg-neon/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-neon transition hover:bg-neon hover:text-black hover:shadow-neon"
            >
              Resume
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Animation */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-white/10 bg-black/20 backdrop-blur-2xl rounded-b-2xl"
            >
              <ul className="flex flex-col gap-2 p-6">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block py-2 text-sm font-medium text-white/80 hover:text-neon"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <button
                  onClick={handleResume}
                  className="mt-4 w-full rounded-xl bg-neon py-3 text-sm font-bold text-black"
                >
                  Download Resume
                </button>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

// /* eslint-disable no-unused-vars */
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Moon, Sun } from "lucide-react";
// import { useTheme } from "../context/ThemeContext";
// import logo from "../assets/logo.png";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const { theme, toggleTheme } = useTheme();

//   const handleResume = () => {
//     const resumeUrl = "/resume/NAEEM_MUNTASIR_ASIF.pdf";
//     window.open(resumeUrl, "_blank");
//     const link = document.createElement("a");
//     link.href = resumeUrl;
//     link.download = "Naeem_Muntasir_Asif.pdf";
//     link.click();
//   };

//   const navItems = [
//     { name: "Home", href: "#home" },
//     { name: "About", href: "#about" },
//     { name: "Skills", href: "#skills" },
//     { name: "Projects", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-1/2 z-[100] w-full  mx-auto -translate-x-1/2 rounded-2xl border border-white/10 bg-glass backdrop-blur-xl shadow-lg shadow-black/30">
//       <div
//         className="
//         w-full max-w-6xl mx-auto px-2 sm:px-3 md:px-2 lg:px-10
//         shadow-lg shadow-black/20
//       "
//       >
//         <div className="flex items-center justify-between px-5 py-3">
//           {/* Logo */}
//           <motion.a
//             href="#home"
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             className="flex items-center gap-2"
//           >
//             <div className="h-12 w-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center shadow-neon">
//               <img src={logo} alt="Logo" className="h-8 w-8" />
//             </div>
//             <h1 className="text-lg font-bold tracking-tight text-black dark:text-white">
//               Naeem <span className="text-neon">Muntasir</span> Asif
//             </h1>
//           </motion.a>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-black/70 dark:text-white/70">
//             {navItems.map((item) => (
//               <li key={item.name}>
//                 <a
//                   href={item.href}
//                   className="relative transition hover:text-neon group"
//                 >
//                   {item.name}
//                   <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-neon transition-all group-hover:w-full" />
//                 </a>
//               </li>
//             ))}
//           </ul>

//           {/* Actions */}
//           <div className="flex items-center gap-3">
//             {/* Theme Toggle */}
//             <button
//               onClick={toggleTheme}
//               aria-label="Toggle theme"
//               className="
//                 h-10 w-10 rounded-xl
//                 border border-black/10 dark:border-white/10
//                 bg-white/60 dark:bg-white/5
//                 flex items-center justify-center
//                 text-black/70 dark:text-white/70
//                 transition-all duration-300
//                 hover:border-neon hover:text-neon
//                 hover:shadow-[0_0_12px_rgba(0,243,255,0.35)]
//               "
//             >
//               {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Resume */}
//             <button
//               onClick={handleResume}
//               className="hidden md:block rounded-xl border border-neon/40 bg-neon/10 px-5 py-2 text-xs font-bold uppercase tracking-wider text-neon transition hover:bg-neon hover:text-black hover:shadow-neon"
//             >
//               Resume
//             </button>

//             {/* Mobile Menu */}
//             <button
//               onClick={() => setOpen(!open)}
//               className="md:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 dark:border-white/10 text-black dark:text-white"
//             >
//               {open ? "✕" : "☰"}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {open && (
//             <motion.div
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               className="md:hidden border-t border-black/10 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-b-2xl"
//             >
//               <ul className="flex flex-col gap-3 p-6">
//                 {navItems.map((item) => (
//                   <li key={item.name}>
//                     <a
//                       href={item.href}
//                       onClick={() => setOpen(false)}
//                       className="block py-2 text-sm font-medium text-black/80 dark:text-white/80 hover:text-neon"
//                     >
//                       {item.name}
//                     </a>
//                   </li>
//                 ))}

//                 <button
//                   onClick={handleResume}
//                   className="mt-4 w-full rounded-xl bg-neon py-3 text-sm font-bold text-black"
//                 >
//                   Download Resume
//                 </button>
//               </ul>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
