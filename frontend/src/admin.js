import React, { useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import AddTeluguMovie from './addTelugu';
import AddHindiMovie from './addHindi';
import AddEnglishMovie from './addEnglish';

import UpdateTeluguMovie from './putTelugu';
import UpdateHindiMovie from './putHindi';
import UpdateEnglishMovie from './putEnglish';

import DeleteEnglishMovie from './delEnglish';
import DeleteTeluguMovie from './delTelugu';
import DeleteHindiMovie from './delHindi';

function Admin() {
    const [showForm, setShowForm] = useState(false);
    const [currentAction, setCurrentAction] = useState('');

    const actions = [
        { label: "Add New English Movie", type: "addEnglish" },
        { label: "Add New Hindi Movie", type: "addHindi" },
        { label: "Add New Telugu Movie", type: "addTelugu" },
        { label: "Update English Movie", type: "updateEnglish" },
        { label: "Update Hindi Movie", type: "updateHindi" },
        { label: "Update Telugu Movie", type: "updateTelugu" },
        { label: "Delete English Movie", type: "deleteEnglish" },
        { label: "Delete Hindi Movie", type: "deleteHindi" },
        { label: "Delete Telugu Movie", type: "deleteTelugu" }
    ];

    const handleActionClick = (actionType) => {
        setCurrentAction(actionType);
        setShowForm(true);
    };

    const renderForm = () => {
        if (currentAction === 'addTelugu') {
            return <AddTeluguMovie />;
        } else if (currentAction === 'addHindi') {
            return <AddHindiMovie />;
        } else if (currentAction === 'addEnglish') {
            return <AddEnglishMovie />;
        } else if (currentAction === 'updateTelugu') {
            return <UpdateTeluguMovie />;
        } else if (currentAction === 'updateHindi') {
            return <UpdateHindiMovie />;
        } else if (currentAction === 'updateEnglish') {
            return <UpdateEnglishMovie />;
        } else if (currentAction === 'deleteTelugu') {
            return <DeleteTeluguMovie />;
        } else if (currentAction === 'deleteHindi') {
            return <DeleteHindiMovie />;
        } else if (currentAction === 'deleteEnglish') {
            return <DeleteEnglishMovie />;
        } 
    };

    return (
        <Container>
            <Row>
                {actions.map((action, idx) => (
                    <Col key={idx} md={4} className="mb-3">
                        <Button variant="primary" onClick={() => handleActionClick(action.type)}>
                            {action.label}
                        </Button>
                    </Col>
                ))}
            </Row>
            {renderForm()}
        </Container>
    );
}

export default Admin;
