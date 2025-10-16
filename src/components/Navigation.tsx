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
    <nav id="navigation" className="border-b border-border/50 bg-background/60 backdrop-blur-xl sticky top-0 z-10 shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent tracking-tight"
        >
          Quantum
        </motion.h1>
        <div className="flex gap-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-6 py-2.5 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                      isActive
                        ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.5)] scale-[1.02]"
                        : "bg-card/40 backdrop-blur-sm text-foreground/80 hover:bg-card/60 hover:text-foreground hover:scale-[1.02] border border-border/50"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon className={`w-4 h-4 ${isActive ? 'animate-glow' : ''}`} />
                      <span>{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full -z-10"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
