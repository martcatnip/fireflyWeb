import { IonCard, isPlatform } from '@ionic/react';
import { MainLayout } from "../layouts/MainLayout";

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
]

// Temporary name.  Change to something more appropriate when it's clear what that would be.
export const About: React.FC = () =>
    <MainLayout pageName="about" pageNameDisplay="项目介绍">
        <div className="ion-padding">
            <div>萤火虫读书项目介绍 (2022-02-8 11:00 am ET)</div>

            {isPlatform('android') && isPlatform('mobileweb') ? (
                <div className="ion-margin-top" style={{ paddingTop: '15px', borderTop: '1px solid lightgrey' }}>
                    <a href={'/firefly.apk?' + Math.random() }>Download Android App</a>
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
    </MainLayout>


