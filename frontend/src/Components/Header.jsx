import react from 'react'
 import { Target, Calendar, User } from 'lucide-react';
 import { useNavigate } from "react-router-dom";

function Header (){

  const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

    const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
    return(
 <header className="w-screen bg-white/80 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Target className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">FocusFlow</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <button 
                variant="ghost" 
                size="sm"
                onClick={handleLogout}
              >
                <User className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header