import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Timer from './Timer';

const AllTimers = ({ timersState: { timers } }) => {
	return (
		<Fragment>
			{timers.length === 0 ? (
				<p>No timer sets to show... Add a timer.</p>
			) : (
				<div className='all-timers'>
					{timers.map((timer) => (
						<Timer timer={timer} key={timer.id} />
					))}
				</div>
			)}
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	timersState: state.timersState,
});

export default connect(mapStateToProps)(AllTimers);
