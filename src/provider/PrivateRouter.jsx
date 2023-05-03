import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useDataGlobally } from '../context/Context';
import Loading from '../components/Loading';


const PrivateRouter = ({ children }) => {
    const { loading, user } = useDataGlobally()
    const location = useLocation()
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }
    return <Navigate to="/login" state={{ form: location }} replace />;
};

export default PrivateRouter;