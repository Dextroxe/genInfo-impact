import style from "../styles/Home.module.css"

const Layout = ({children}) => {
    return (
        <div className={style.container}>
            <main className={style.main}>
                {children}
            </main>
        </div>
    );
}

export default Layout;