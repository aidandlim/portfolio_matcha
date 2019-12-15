import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { chat_current } from '../../../actions';

import Messages_P from '../../util/pull/messages';

import { IMAGE } from '../../../api';

import './index.css';

const Chatlist = () => {
    const chat = useSelector(state => state.chat);
    const dispatch = useDispatch();

    const _handleChat = (index) => {
        Messages_P(dispatch, chat.list[index].id);
        dispatch(chat_current(index));
    }

    return (
        <div className='frame-narrow'>
			<div className='frame-header'>
				<div className='frame-title'>Chat</div>
			</div>
			<div className='frame-body'>
				<div className='chatlist'>
					{
                        chat.list.map((chat, index) => 
                            <div className='chatlist-container' key={index} style={{
                                backgroundImage: `url('${IMAGE}${chat.picture1}')`
                            }} onClick={ () => _handleChat(index) }>
                                <div className='chatlist-name'>{chat.first_name} {chat.last_name}</div>
                                <div className='chatlist-icon'>N</div>
                            </div>
                        )
                    }
				</div>
			</div>
		</div>
    );
}

export default Chatlist;