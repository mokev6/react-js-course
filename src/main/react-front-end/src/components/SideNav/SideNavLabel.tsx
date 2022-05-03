import '../../translations/i18n';
import { useTranslation } from 'react-i18next';

const SideNavLabel : React.FC<{name: string}> = ({name}) => {

    const { t } = useTranslation('sideNav');
    console.log(name);
    const sideNav  = `sideNav.${name}` as const;
    return <><i className="bi bi-circle" /><span>a corriger</span></>;
}

export default SideNavLabel;