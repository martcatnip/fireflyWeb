import './Help.css';
import MainTemplate from "../components/MainTemplate";

// Temporary name.  Change to something more appropriate when it's clear what that would be.
const Help: React.FC = () => {
    return (
        <MainTemplate name="help" nameDisplay="帮助">
            <a href="/firefly.apk">Download Android App</a>
        </MainTemplate>
    );
};

export default Help;

