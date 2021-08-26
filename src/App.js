import './index.css'
import 'bootstrap/dist/js/bootstrap'
import { Home } from './components/Home'
import { NavBar } from './components/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Interview } from 'components/Interview'
import { Container } from './components/Container'
import { Temporality } from 'components/Temporality'
import { SafetyStudy } from 'components/SafetyStudy'
import { MedicalExams } from 'components/MedicalExams'
import { InfoService } from './components/InfoService'
import { LegalAdvisory } from 'components/LegalAdvisory'
import { ServicesCards } from './components/ServicesCards'
import { FooterContact } from './components/FooterContact'
import { OutsorcingOfPayroll } from 'components/OutsorcingOfPayroll'
import { OccupationalMedicine } from 'components/OccupationalMedicine'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { TrivutaryConsultancies } from 'components/TrivutaryConsultancies'
import { PersonnelSelectionProcesses } from 'components/PersonnelSelectionProcesses'
import { SocialSecurityAdministration } from 'components/SocialSecurityAdministration'

function App() {
	return (
		<div className='App'>
			<Router>
				<Container styled={'fixed'}>
					<NavBar />
				</Container>
				<Switch>
					<Route exact path='/'>
						<Container color='#FEF9E7'>
							<Home />
						</Container>
						<Container color='#E8F8F5'>
							<ServicesCards />
						</Container>
						<Container>
							<InfoService />
						</Container>
					</Route>
					<Route
						exact
						path='/procesos'
						component={PersonnelSelectionProcesses}
					/>
					<Route exact path='/entrevista' component={Interview} />
					<Route
						exact
						path='/estudiodeseguridad'
						component={SafetyStudy}
					/>
					<Route
						exact
						path='/examenesmedicos'
						component={MedicalExams}
					/>
					<Route exact path='/temporalidad' component={Temporality} />
					<Route
						exact
						path='/ocupacionalmedicine'
						component={OccupationalMedicine}
					/>
					<Route
						exact
						path='/outsorcing'
						component={OutsorcingOfPayroll}
					/>
					<Route
						exact
						path='/legaladvisory'
						component={LegalAdvisory}
					/>
					<Route
						exact
						path='/trivutary'
						component={TrivutaryConsultancies}
					/>
					<Route
						exact
						path='/socialsecurity'
						component={SocialSecurityAdministration}
					/>
				</Switch>
				<Container color='#5347FF'>
					<FooterContact />
				</Container>
			</Router>
		</div>
	)
}

export default App
