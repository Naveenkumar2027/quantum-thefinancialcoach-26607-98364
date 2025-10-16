import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Wallet, Users, User } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: Wallet },
    { path: "/groups", label: "Groups", icon: Users },
    { path: "/profile", label: "Profile", icon: User },
  ];

  return (
    <nav id="navigation" className="border-b bg-gradient-to-r from-card/80 via-card to-primary/5 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Quantum
        </h1>
        <div className="flex gap-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-6 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-secondary/50 text-secondary-foreground hover:bg-secondary hover:shadow-md"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
