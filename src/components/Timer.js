import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { deleteTimer, setCurrent } from '../actions/timerActions';

const Timer = ({
	timer: { label, hours, minutes, seconds, id },
	timer,
	deleteTimer,
	setCurrent,
}) => {
	const [time, setTime] = useState({
		h: hours,
		m: minutes === '' ? 0 : minutes,
		s: seconds === '' ? 0 : seconds,
	});

	const [timerSet, setTimerSet] = useState(null);
	const [isStart, setIsStart] = useState(false);
	const [isPaused, setIsPaused] = useState(false);

	const startTimer = () => {
		setIsStart(true);
		setIsPaused(false);
		let myInterval = setInterval(() => {
			setTime((time) => {
				const updatedTime = { ...time };
				if (time.s > 0) {
					updatedTime.s--;
				}

				if (time.s === 0) {
					if (time.h === 0 && time.m === 0) {
						clearInterval(myInterval);
					} else if (time.m > 0) {
						updatedTime.m--;
						updatedTime.s = 59;
					} else if (updatedTime.h > 0) {
						updatedTime.h--;
						updatedTime.m = 59;
						updatedTime.s = 59;
					}
				}

				return updatedTime;
			});
		}, 1000);
		setTimerSet(myInterval);
	};

	const pauseTimer = () => {
		setIsPaused(true);
		clearInterval(timerSet);
	};

	const cancelTimer = () => {
		setIsStart(false);
		setIsPaused(true);
		clearInterval(timerSet);
		setTime({
			h: hours,
			m: minutes === '' ? 0 : minutes,
			s: seconds === '' ? 0 : seconds,
		});
	};

	const onDelete = () => {
		deleteTimer(id);
	};

	return (
		<Fragment>
			<p className='timer-label'>{label}</p>
			<br />

			<div className='flex'>
				<h1 className='timer'>
					{time.h < 10 && time.h !== 0 && time.h !== ''
						? `0${time.h}:`
						: time.h >= 10 && `${time.h}:`}
					{time.m < 10 ? `0${time.m}` : time.m}:
					{time.s < 10 ? `0${time.s}` : time.s}
				</h1>

				<div className='side-buttons'>
					<i className='fas fa-trash-alt' onClick={onDelete}></i>
					<i
						className='fas fa-pencil-alt'
						onClick={() => setCurrent(timer)}></i>
				</div>
			</div>

			{isStart ? (
				<div>
					{isPaused ? (
						<button onClick={startTimer}>RESUME</button>
					) : (
						<button onClick={pauseTimer}>PAUSE</button>
					)}
					<button onClick={cancelTimer}>CANCEL</button>
				</div>
			) : (
				<button onClick={startTimer}>START</button>
			)}
		</Fragment>
	);
};

export default connect(null, { deleteTimer, setCurrent })(Timer);
