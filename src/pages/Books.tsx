import { EntityPage } from './EntityPage'
import { Book } from '../data/DataTypes'

// Books list page, with book create/edit modal form embedded
export const Books: React.FC = () => {
    const item: Book = {
        title: '',
        isbn: '',
        coverUrl: '',
    };

    return <EntityPage pageName="books" emptyItem={item} oldItem={{}}>Nothing</EntityPage>
};
