import Head from '../components/head';
import Header from '../components/header';
import Home from '../components/home';
import OQueFaco from '../components/oquefaco';
import QuemSou from '../components/quemSou';

const MarcelSussai = () => (
  <main className="main">
    <Head title="Home" />
    <Header />
    <a name="home" id="home" />
    <Home />
    <a name="oquefaco" id="oquefaco" />
    <OQueFaco />
    <a name="quemsou" id="quemsou" />
    <QuemSou />

    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
  </main>
);

export default MarcelSussai;