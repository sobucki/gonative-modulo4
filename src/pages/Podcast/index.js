import React, { Component } from 'react';
import { Text } from 'react-native';

import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Episode,
  Title,
  Author,
} from './styles';

export default class Podcast extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const podcast = navigation.getParam('podcast');
    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{ uri: podcast.cover }} blurRadius={5} />
              <Cover source={{ uri: podcast.cover }} />

              <PodcastTitle>{podcast.title}</PodcastTitle>

              <PlayButton onPress={() => {}}>
                <PlayButtonText>Reproduzir</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          data={podcast.tracks}
          keyExtractor={episode => String(episode.id)}
          renderItem={({ item: episode }) => (
            <Episode>
              <Title>{episode.title}</Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}
