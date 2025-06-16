import React from "react";
import { useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export const HeaderComponent = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="mx-auto w-full max-w-screen-2xl px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div>
            <a
              href="/"
              className="flex items-center space-x-3 text-xl font-bold text-primary hover:text-primary/80 transition-colors"
            >
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-9 w-9"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <path d="M3.3 7l8.7 5 8.7-5" />
                  <path d="M12 22V12" />
                </svg>
                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  WorkFlow
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  HR Management
                </span>
              </div>
            </a>
          </div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-1">
              {[
                { label: "Home", href: "/", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
                { label: "Employees", href: "/employees", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
                { label: "About", href: "/about", icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
              ].map((item) => (
                <NavigationMenuItem key={item.label}>
                  <a
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-primary bg-primary/10 font-medium"
                        : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={item.icon}
                      />
                    </svg>
                    <span>{item.label}</span>
                  </a>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};
