
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
const { Header, Content } = Layout;
import "./navbar.css"

const Navbaritems = ["home", "products", "cart"]

const finalNavItems = Navbaritems.map((items) => {
    return {
        key: items,
        label: <Link to={`${items === "home" ? "/" : items}`}>{items}</Link>
    }
})


const MainLayout = () => {


    return (
        <Layout style={{ height: "100vh", width: "100vw" }}>
            <Header
                style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="container mx-auto">
                    <div className='flex items-center justify-between'>
                        <div className="flex-1">
                            <Link to="/"> <h2 className='font-bold text-sm sm:text-xl md:text-2xl text-white'>Key<span className='text-primary'>B</span>oardHub</h2></Link>
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            items={finalNavItems}
                            style={{ flex: 1, textTransform: "capitalize", alignItems: 'center' }}
                        />
                    </div>
                </div>
            </Header>
            <Content style={{}}>
                <div
                    style={{}}>
                    <Outlet></Outlet>
                </div>
            </Content>
            {/* <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer> */}
        </Layout >
    );
}

export default MainLayout