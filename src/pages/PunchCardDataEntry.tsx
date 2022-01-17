import './PunchCardDataEntry.css';
import MainTemplate from "../components/MainTemplate";

// Temporary name.  Change to something more appropriate when it's clear what that would be.
const PunchCardDataEntry: React.FC = () => {
    const buttonClicked = () => {
        alert('clicked me')
    }
    return (
        <MainTemplate name="punch-card" nameDisplay="录入打卡数据">
            <button onClick={buttonClicked}>Click </button>
        </MainTemplate>
    );
};

export default PunchCardDataEntry;
