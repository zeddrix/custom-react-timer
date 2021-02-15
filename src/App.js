import AllTimers from './components/AllTimers';
import SetTimer from './components/SetTimer';

import './App.css';

function App() {
	return (
		<div className='container'>
			<h1 className='title'>ChunkedTimer</h1>
			<SetTimer />
			<AllTimers />
		</div>
	);
}

export default App;
