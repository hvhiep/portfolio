import styles from './Home.module.scss';
import clsx from 'clsx';
import Header from '../../components/Header';
import Content from '../../components/Content';
import Footer from '../../components/Footer';
function Home() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Home;
