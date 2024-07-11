import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface CustomGridProps {
    columns: number;
    children: ReactNode;
}

const Grid = styled.div<{ columns: number }>`
    display: grid;
    grid-template-columns: repeat(${props => props.columns}, 1fr);
    gap: 20px;
`;

const CustomGrid: React.FC<CustomGridProps> = ({ columns, children }) => {
    return (
        <Grid columns={columns}>
            {children}
        </Grid>
    );
}

export default CustomGrid;
