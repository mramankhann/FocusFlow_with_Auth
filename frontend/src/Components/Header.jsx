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
 <header className="w-screen bg-white/80 backdrop-blur-sm py-4 items-center border-1 border-gray-200 shadow-sm">
        <div className="container items-center mx-auto ">
          <div className="flex items-center justify-between">
            <div className="max-md:ml-3 flex items-center space-x-3 ">
              <Target className="h-8 w-8 logo text-primary max-md:w-6 max-md:h-4 max-md:m-0" />
              <h1 className="text-2xl font-bold text-foreground logo max-md:m-0 max-md:text-sm">FocusFlow</h1>
            </div>
            <div className="flex gap-10">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4  max-md:h-2 max-md:w-2 " />
                <span className=' max-md:text-[9px]'>{new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className='flex gap-1 items-center'> <User className="h-4 w-4 mr-2 max-md:h-3" />
               <button 
                variant="ghost" 
                size="sm"
                className='cursor-pointer logout rounded-xl text-white max-md:mr-5'
                onClick={handleLogout}
              >
               
                Logout
              </button>
              </div>
             
            </div>
          </div>
        </div>
      </header>
    )
}

export default Header