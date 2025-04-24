import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../lib/auth';
import { Button } from '../ui/Button';
import { mockDonors, mockAdmins, mockRequesters } from '../../lib/mock-data';

type UserType = 'donor' | 'admin' | 'requester';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<UserType>('donor');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    
    try {
      // Mock authentication logic
      let user;
      let token;
      
      switch (userType) {
        case 'donor':
          user = mockDonors.find(d => d.email === email);
          token = 'mock-token-donor';
          break;
        case 'admin':
          user = mockAdmins.find(a => a.email === email);
          token = 'mock-token-admin';
          break;
        case 'requester':
          user = mockRequesters.find(r => r.email === email);
          token = 'mock-token-requester';
          break;
      }

      if (user && password === 'password') { // Demo password
        login(user, token);
        
        // Redirect based on user type
        switch (user.role) {
          case 'donor':
            navigate('/donor');
            break;
          case 'admin':
            navigate('/admin');
            break;
          case 'requester':
            navigate('/request-blood');
            break;
        }
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('Failed to login. Please try again.');
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded border border-red-200">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">
          Login As
        </label>
        <select
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value as UserType)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="donor">Blood Donor</option>
          <option value="requester">Blood Requester</option>
          <option value="admin">Administrator</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your email"
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Your password"
        />
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember"
            type="checkbox"
            className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
          />
          <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        
        <a href="#" className="text-sm text-red-600 hover:text-red-700">
          Forgot password?
        </a>
      </div>
      
      <Button
        type="submit"
        className="w-full"
        disabled={loading}
      >
        {loading ? 'Signing in...' : 'Sign In'}
      </Button>
      
      <div className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="/register" className="text-red-600 hover:text-red-700">
          Register now
        </a>
      </div>

      {/* Demo account info */}
      <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm">
        <p className="font-medium mb-2">Demo Accounts:</p>
        <div className="space-y-1 text-gray-600">
          <p>Donor: donor@example.com</p>
          <p>Requester: requester@example.com</p>
          <p>Admin: admin@example.com</p>
          <p className="mt-2 text-xs">Password for all accounts: "password"</p>
        </div>
      </div>
    </form>
  );
}