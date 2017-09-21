import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Tasks from './Tasks';
import TaskView from './TaskView';
import { getTasks } from '../actions/tasks';
import { Loader, Segment, Dimmer } from 'semantic-ui-react';

class FetchTasks extends React.Component {
  state = { loaded: false }

  componentDidMount() {
    this.props.dispatch(getTasks(this.setLoaded))
  }

  setLoad = () => {
    this.setState({ loaded: true })
  }

  render() {
    let { loaded } = this.state;
    if (loaded) {
      return (
        <div>
          <Route exact path="/tasks" components={Tasks} />
          <Route exact path="/tasks/:id" component={TaskView} />
        </div>
      )
    } else {
      return (
        <Segment>
          <Dimmer active>
            <Loader />
          </Dimmer>
        </Segment>
      )
    }
  }
}

export default connect()(FetchTasks);