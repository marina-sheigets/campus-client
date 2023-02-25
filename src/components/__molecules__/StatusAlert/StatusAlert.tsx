import React from 'react';
import { Alert } from '@mui/material';
import styled from 'styled-components';
import { AlertColor } from '../../../constants/components';

type StatusAlertProps = {
	status: string;
	severity: AlertColor;
	handleCloseStatusMessage: () => void;
};
function StatusAlert({ status, handleCloseStatusMessage, severity }: StatusAlertProps) {
	return (
		<>
			{status && status !== 'Started' && (
				<StyledAlert
					onClose={handleCloseStatusMessage}
					severity={severity}
					sx={{ width: '100%' }}>
					{status}
				</StyledAlert>
			)}
		</>
	);
}

const StyledAlert = styled(Alert)`
	.MuiPaper-root {
		width: auto !important;
	}
`;
export default StatusAlert;
