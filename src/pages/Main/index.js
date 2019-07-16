import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PodcastsAction from '~/store/ducks/podcasts';

import {
  Container, PodcastList, Podcast, Cover, Info, Title, Count, PageTitle,
} from './styles';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { loadRequest } = this.props;

    loadRequest();
  }

  handlePodcastPress = (podcast) => {
    const { navigation } = this.props;

    navigation.navigate('Podcast', { podcast });
  };

  render() {
    const { podcasts } = this.props;
    return (
      <Container>
        <PodcastList
          ListHeaderComponent={() => <PageTitle>Podcasts</PageTitle>}
          data={podcasts.data}
          keyExtractor={podcast => String(podcast.id)}
          renderItem={({ item: podcast }) => (
            <Podcast onPress={() => this.handlePodcastPress(podcast)}>
              <Cover source={{ uri: podcast.cover }} />
              <Info>
                <Title>{podcast.title}</Title>
                <Count>{`${podcast.tracks.length} episódios`}</Count>
              </Info>
            </Podcast>
          )}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  podcasts: state.podcasts,
});

const mapDispatchToProps = dispatch => bindActionCreators(PodcastsAction, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
