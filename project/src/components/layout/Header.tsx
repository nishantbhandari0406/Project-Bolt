import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Droplet, UserCircle, LogOut } from 'lucide-react';
import { Button } from '../ui/Button';
import { useAuth } from '../../lib/auth';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Droplet className="h-8 w-8 text-red-600" />
          <span className="font-bold text-lg sm:text-xl">
            <span className="text-red-600">Blood</span>Link Nepal
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-700 hover:text-red-600">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-600">About</Link>
          <Link to="/request-blood" className="text-gray-700 hover:text-red-600">Request Blood</Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-600">Contact</Link>
          
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              {isAdmin ? (
                <Link to="/admin" className="text-gray-700 hover:text-red-600">
                  Admin Dashboard
                </Link>
              ) : (
                <Link to="/donor" className="text-gray-700 hover:text-red-600">
                  Donor Dashboard
                </Link>
              )}
              <div className="flex items-center gap-2">
                <UserCircle className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">{user?.name}</span>
              </div>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={handleLogout}
                className="flex items-center gap-1"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" onClick={() => navigate('/login')}>
                Login
              </Button>
              <Button onClick={() => navigate('/register')}>
                Register
              </Button>
            </div>
          )}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 border-t border-gray-200 bg-white">
          <nav className="flex flex-col gap-3">
            <Link 
              to="/" 
              className="px-2 py-1 text-gray-700 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-2 py-1 text-gray-700 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/request-blood" 
              className="px-2 py-1 text-gray-700 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Blood
            </Link>
            <Link 
              to="/contact" 
              className="px-2 py-1 text-gray-700 hover:text-red-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            
            {isAuthenticated ? (
              <>
                {isAdmin ? (
                  <Link 
                    to="/admin" 
                    className="px-2 py-1 text-gray-700 hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                ) : (
                  <Link 
                    to="/donor" 
                    className="px-2 py-1 text-gray-700 hover:text-red-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Donor Dashboard
                  </Link>
                )}
                <button 
                  className="px-2 py-1 text-left text-gray-700 hover:text-red-600 flex items-center gap-2"
                  onClick={handleLogout}
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </>
            ) : (
              <div className="flex flex-col gap-2 mt-2">
                <Button 
                  variant="ghost" 
                  onClick={() => {
                    navigate('/login');
                    setIsMenuOpen(false);
                  }}
                >
                  Login
                </Button>
                <Button 
                  onClick={() => {
                    navigate('/register');
                    setIsMenuOpen(false);
                  }}
                >
                  Register
                </Button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}