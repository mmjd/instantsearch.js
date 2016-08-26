import connect from './connect';
import Menu from './Menu';
import MenuSelect from './MenuSelect';

const Connected = connect(Menu);
Menu.Select = connect(MenuSelect);
Connected.connect = connect;
export default Connected;