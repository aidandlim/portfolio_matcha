import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { chatbot_message, chatbot_reflection } from '../../../actions';

import { FiActivity } from "react-icons/fi";
import './index.css';

const Signin = () => {
	let chatbot = useSelector(state => state.chatbot);
	const dispatch = useDispatch();

	if(chatbot.message.length === 0) {
		dispatch(chatbot_message(
			[{
				direction: 0,
				content: 'Hey there! Good to see you! Anyway, Do you have an account?',
				process: 0,
			}]
		));
		dispatch(chatbot_reflection(
			['Yes, I do', 'No, I don\'t']
		));
	}

	const _handleReflection = (reflection) => {
		let process = chatbot.message[chatbot.message.length - 1].process;
		if(process === 0) {
			if(reflection)
			dispatch(chatbot_message(
				chatbot.message.concat([{
					direction: 1,
					content: reflection,
				},{
					direction: 0,
					content: 'Alright, please tell me your email address.',
					process: 1,
				}])
			));
			dispatch(chatbot_reflection(
				[]
			));
		}
	}

	return (
		<div className='signin'>
			<div className='title'>M@TCH@</div>
			<div className='chatbot'>
				<div className='chatbot-header'>
					<FiActivity className='chatbot-header-profile' />
					<div className='chatbot-header-nickname'>M@TCH@</div>
				</div>
				<div className='chatbot-body'>
					{ chatbot.message.map((msg, index) =>
						<div className={ msg.direction ? 'chatbot-message-right' : 'chatbot-message-left' } key={index}>
							{msg.content}
						</div>
					)}			
				</div>
				<div className='chatbot-footer'>
					{ chatbot.reflection.length === 1 ?
						<input type='text' />
					:
						(chatbot.reflection.map((reflection, index) =>
							<div className='chatbot-reflection' key={index} onClick={ () => _handleReflection(reflection) }>
								{reflection}
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
}

export default Signin;
