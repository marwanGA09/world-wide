import Sidebar from '../Component/Sidebar';
// import Map from '../Component/Map';
import styles from './AppLayout.module.css';
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      {/* <Map /> */}
    </div>
  );
}

export default AppLayout;
