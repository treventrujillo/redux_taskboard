import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTasks } from '../actions/tasks';
import { Container, Grid, Header, Card, Dropdown, Divider, Button } from 'semantic-ui-react';

class Tasks extends React.Component {

  state = { category: '' }

  componentDidMount() {
    this.props.dispatch(getTasks())
  }

  tasks = () => {
    let { tasks } = this.props;
    let { category } = this.state;
    let visible = tasks;
    if(category)
      visible = tasks.filter( t => t.category === category )

    return visible.map( task =>
      <Grid.Column computer={4}>
        <Card>
          <Card.Content>
            <Card.Header>
              {task.name}
            </Card.Header>
            <Card.Description>
              {task.description}
            </Card.Description>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }

  render() {
    let { category } = this.state;
    return (
      <Container>
        <Header as="h3" textAlign="center">Tasks</Header>
        <Dropdown
          placeholder="Filter by category"
          fluid
          selection
          options={this.categoryOptions()}
          onChange={ (e, data) => this.setState({ category: data.value }) }
          value={category}
        />
        { category && <Button fluid basic onClick={ () => this.setState({ 
        category: '' }) }>Clear Filter: {category}</Button> }
        <Divider />
          <Grid columns={16}>
            <Grid.Row>
              { this.tasks() }
            </Grid.Row>
          </Grid>
        </Container>
    )
  }
}

  const mapStateToProps = (state) => {
    const tasks = state.tasks;
    const categories = [...new Set(tasks.map( t => t.category ))]
    return { tasks, categories }
  }
  
export default connect(mapStateToProps)(Tasks);