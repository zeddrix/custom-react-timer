import React, { Fragment, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { addTimer, updateTimer, clearCurrent } from '../actions/timerActions';

const SetTimer = ({ current, addTimer, updateTimer, clearCurrent }) => {
	const [label, setLabel] = useState('');
	const [hours, setHours] = useState('');
	const [minutes, setMinutes] = useState('');
	const [seconds, setSeconds] = useState('');

	useEffect(() => {
		if (current) {
			setLabel(current.label);
			setHours(current.hours);
			setMinutes(current.minutes);
			setSeconds(current.seconds);
		}
	}, [current]);

	const emptyFields = () => {
		setLabel('');
		setHours('');
		setMinutes('');
		setSeconds('');
	};

	const onAddTimer = () => {
		if (hours === '' && minutes === '' && seconds === '') {
			alert('Please add time');
		} else {
			const newTimer = {
				label,
				hours,
				minutes,
				seconds,
				id: uuid(),
			};
			addTimer(newTimer);
			emptyFields();
		}
	};

	const onUpdateTimer = () => {
		if (hours === '' && minutes === '' && seconds === '') {
			alert('Please add time');
		} else {
			const updTimer = {
				label,
				hours,
				minutes,
				seconds,
				id: current.id,
			};
			console.log(updTimer);

			updateTimer(updTimer);

			emptyFields();
			clearCurrent();
		}
	};

	return (
		<Fragment>
			<div className='grid-inputs'>
				<div>
					<label htmlFor='hours'>Hours</label>
					<input
						className='time-input'
						name='hours'
						type='number'
						min='0'
						max='99'
						value={hours.padStart(2, '0')}
						onChange={(e) => setHours(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='minutes'>Minutes</label>
					<input
						className='time-input'
						name='minutes'
						type='number'
						min='0'
						max='59'
						value={minutes.padStart(2, '0')}
						onChange={(e) => setMinutes(e.target.value)}
					/>
				</div>
				<div>
					<label htmlFor='seconds'>Seconds</label>
					<input
						className='time-input'
						name='seconds'
						type='number'
						min='0'
						max='59'
						value={seconds.padStart(2, '0')}
						onChange={(e) => setSeconds(e.target.value)}
					/>
				</div>
			</div>
			<label htmlFor='timer-label-input'>Timer Label: </label>
			<input
				type='text'
				name='timer-label-input'
				className='timer-label-input'
				placeholder='Enter timer label...'
				value={label}
				onChange={(e) => setLabel(e.target.value)}
			/>
			<br />
			<button onClick={onAddTimer}>ADD TIMER</button>
			<button onClick={onUpdateTimer}>UPDATE TIMER</button>
			<button onClick={emptyFields}>RESET</button>
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	current: state.timersState.current,
});

export default connect(mapStateToProps, {
	addTimer,
	updateTimer,
	clearCurrent,
})(SetTimer);
