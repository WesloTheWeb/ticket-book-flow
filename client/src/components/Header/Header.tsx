import { navigationConfig } from "../../config";
import classes from './Header.module.scss';

const { headerContainer } = classes;

const Header = ({ }) => {
    return (
        <header className={headerContainer}>
            <div>
                <h1>Ticket Book Flow</h1>
            </div>
            <nav>
                {
                    navigationConfig.map(({ navigationItem, path }) => {
                        return (
                            <a href={path}>{navigationItem}</a>
                        )
                    })
                }
            </nav>
        </header>
    );
};

export default Header;