import React from 'react';
import { Alert } from '@mui/material';
import styled from 'styled-components';
import type { AlertColor } from '../../../constants/components';

interface StatusAlertProps {
    status: string;
    severity: AlertColor;
    handleCloseStatusMessage: () => void;
}
function StatusAlert({
    status,
    handleCloseStatusMessage,
    severity,
}: StatusAlertProps) {
    return (
        <Wrapper>
            {status && status !== 'Started' && (
                <Alert
                    onClose={handleCloseStatusMessage}
                    severity={severity}
                    sx={{ width: '100%' }}
                >
                    {status}
                </Alert>
            )}
        </Wrapper>
    );
}

const Wrapper = styled('div')`
    .MuiPaper-root {
        width: auto !important;
    }
    .MuiAlert-message {
        min-width: 300px;
    }
`;
export default StatusAlert;
