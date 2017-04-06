import React, { Component, PropTypes } from 'react'

import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentSend from 'material-ui/svg-icons/content/send';

import { Link } from 'react-router'
import { render } from 'react-dom'

const styles = {
  width: '200px'
};

export default class Menu extends Component {

  render() {
    return (
			<div style={ styles }>
				<List>
					<ListItem
						children={ <Link to='/departments'>Отделы</Link> }
						leftIcon={<ContentInbox />}/>
					<ListItem
						children={ <Link to='/projects'>Проэкты</Link> }
						leftIcon={<ContentInbox />}/>
					<ListItem
						children={ <Link to='/developers'>Сотрудники</Link> }
						leftIcon={<ContentSend />}/>
				</List>
			</div>
		)
  }
}
