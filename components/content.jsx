import { styled } from '../stitches.config';
import { Box } from '../components/box';
import { Card } from '../components/card';


const StyledContent = styled(Box, {
    position: 'absolute',
    display: 'flex',
    margin: '80px 250px',
    padding: '50px 200px',
    flexDirection: 'column',
    width: '80%',
    height: '100vh',
    overflow: 'none',
    zIndex: '0',
});

const Content = ({ children }) => {
    return (
        <StyledContent>
            <Card/>
        </StyledContent>
    );
}

export default Content;