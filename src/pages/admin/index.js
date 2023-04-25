import { useEffect } from 'react';

export default function AdminPage() {
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      // Redirect the user to the login page
      window.location.href = '/login';
    }
  }, []);

  return (
    <div>
      <h1>Admin Page</h1>
      {/* Add your admin-only content here */}
    </div>
  );
}
