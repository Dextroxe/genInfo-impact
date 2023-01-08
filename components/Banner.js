import Style from '../styles/banner.module.css'
import Container from 'react-bootstrap/Container';
const Banner = () => {
    return (
        <Container>
            <div className={Style.banner}>
                <div className={Style.headerBox}>
                    <h1 className={Style.headerText}>
                        Genshin Impact
                    </h1>
                </div>

            </div>
        </Container>
    );
}

export default Banner;