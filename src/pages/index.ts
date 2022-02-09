import { About } from './About'
import { Books } from './Books'
import { IndividualProgress } from './IndividualProgress'
import { OverallProgress } from './OverallProgress'
import { People } from './People'
import { ReadingActivities } from './ReadingActivities'
import { ReadingLogs } from './ReadingLogs'
import { Schools } from './Schools'
import { BookCard, BookFormFields, SchoolCard, SchoolFormFields } from '../components'

export const Pages: any = {
    books: {
        itemType: 'book',
        pageName: 'books',
        pageNameDisplay: '图书',
        url: '/books',
        component: Books,
        formFieldsComponent: BookFormFields,
        itemCardComponent: BookCard,
        visible: true,
        // mobileAppOnly: true,
    },
    about: {
        pageName: 'about',
        pageNameDisplay: '项目介绍',
        url: '/about',
        component: About,
        visible: true,
    },
    individualProgress: {
        pageName: 'individualProgress',
        pageNameDisplay: '学生个人进展',
        url: '/individual-progress',
        component: OverallProgress,
    },
    overallProgress: {
        pageName: 'overallProgress',
        pageNameDisplay: '学生整体进展',
        url: '/overall-progress',
        component: OverallProgress,
    },
    people: {
        pageName: 'people',
        pageNameDisplay: '项目人员',
        url: '/people',
        component: People,
    },
    readingActivities: {
        pageName: 'readingActivites',
        pageNameDisplay: '阅读活动',
        url: '/reading-activities',
        component: ReadingActivities,
    },
    readingLogs: {
        pageName: 'readingLogs',
        pageNameDisplay: '打卡记录',
        url: '/reading-logs',
        component: ReadingLogs,
    },
    schools: {
        itemType: 'school',
        pageName: 'schools',
        pageNameDisplay: '学校',
        url: '/schools',
        component: Schools,
        formFieldsComponent: SchoolFormFields,
        itemCardComponent: SchoolCard,
        visible: true,
        // mobileAppOnly: true,
    },
}
