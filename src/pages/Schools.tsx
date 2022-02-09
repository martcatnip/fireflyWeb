import { EntityPage } from './EntityPage'
import { School } from '../data/DataTypes'

// Books list page, with book create/edit modal form embedded
export const Schools: React.FC = () => {
    const item: School = {
        name: '',
        province: '',
    };

    return <EntityPage pageName="schools" emptyItem={item} oldItem={{}}>Nothing</EntityPage>
};
