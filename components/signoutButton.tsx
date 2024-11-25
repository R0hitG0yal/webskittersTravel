import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../context/authUserContext';

import { Container, Row, Col, Button } from 'reactstrap';

const LoggedIn = () => {
    const { authUser, loading, signOut } = useAuth();
    const router = useRouter();

    // Listen for changes on loading and authUser, redirect if needed
    useEffect(() => {
        if (!authUser) router.push('/');
    }, [authUser]);

    return (
        <Container>
            {/* Other content here */}
            <Button onClick={signOut}>Sign out</Button>
            {/* Other content here */}
        </Container>
    );
};

export default LoggedIn;