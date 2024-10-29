import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';

function Features() {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Container className="mt-5">
            <h2>Features</h2>
            <p>Check out some of the amazing features below.</p>
            <Button variant="primary" onClick={() => setShowDetails(!showDetails)}>
                {showDetails ? 'Hide Details' : 'Show Details'}
            </Button>
            {showDetails && (
                <div className="mt-3">
                    <ul>
                        <li>Feature 1: Amazing functionality</li>
                        <li>Feature 2: Easy to use</li>
                        <li>Feature 3: Responsive design</li>
                    </ul>
                </div>
            )}
        </Container>
    );
}

export default Features;
