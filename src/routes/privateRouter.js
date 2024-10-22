import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children, role }) {
    const navigate = useNavigate();
    const [isAuthorized, setIsAuthorized] = useState(false);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (!user) {
            navigate('/login');
        } else {
            try {
                if (user.role === role) {
                    setIsAuthorized(true);
                } else {
                    navigate('/PageNotFound');
                }
            } catch (error) {
                console.error(error);
                navigate('/login');
            }
        }
    }, [navigate, role]);

    return isAuthorized ? children : null;
}

export default PrivateRoute;