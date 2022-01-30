import { IonCard, isPlatform } from '@ionic/react';
import './About.css';
import MainTemplate from "../components/MainTemplate";

const pages = [
    {
        title: '录入打卡数据',
        url: '/page/punch-card-data-entry',
    },
    {
        title: '录入朗读数据',
        url: '/page/reading-data-entry',
    },
    {
        title: '录入游戏数据',
        url: '/page/game-data-entry',
    },
    {
        title: '输出游戏数据',
        url: '/page/game-data-display',
    },
    {
        title: '学生整体进展',
        url: '/page/overall-progress',
    },
    {
        title: '学生个人进展',
        url: '/page/individual-progress',
    },
    {
        title: 'People (temporary)',
        url: '/page/people',
    },
]

// Temporary name.  Change to something more appropriate when it's clear what that would be.
const About: React.FC = () =>
    <MainTemplate name="about" nameDisplay="项目介绍">
        <div className="ion-padding">
            <div>萤火虫读书项目介绍</div>

            {isPlatform('android') && isPlatform('mobileweb') ? (
                <div className="ion-margin-top" style={{ paddingTop: '15px', borderTop: '1px solid lightgrey' }}>
                    <a href="/firefly.apk">Download Android App</a>
                </div>
            ) : ''}


            <div className="ion-margin-top" style={{ borderTop: '1px solid lightgrey' }}>
                <p><i>Hidden Pages (under construction or to be consolidated)</i></p>
                <ul>
                {
                    pages.map((page, index) =>
                        <li key={index}>
                            <a href={page.url}>{page.title}</a>
                        </li>
                    )
                }
                </ul>
            </div>
        </div>
    </MainTemplate>

export default About;

