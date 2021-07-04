import React from 'react';
// import PropTypes from 'prop-types';
import { Card, Header, Button } from 'semantic-ui-react';
import GameCard from './GameCard';
import './style.scss';

const MainPage = ({ viewAllGamesButton }) => (
  <div className="main mt-5">
    <div className="main-card-category">
      <Header as='h2'>Most Popular</Header>
      <Button  className="view-all-button" onClick={viewAllGamesButton}>View All<span className="button-span">+</span></Button>
    </div>
    <div>
      <Card.Group className="" itemsPerRow={2}>
        <GameCard />
        <GameCard />
      </Card.Group>
    </div>
    <div className="main-card-category">
      <Header as='h2'>Top Rated</Header>
      <Button className="view-all-button" onClick={viewAllGamesButton}>View All <span className="button-span">+</span></Button>
    </div>
    <div>
      <Card.Group itemsPerRow={2}>
        <GameCard />
        <GameCard />
      </Card.Group>
    </div>
    <div className="main-card-category">
      <Header as='h2'>New Releases</Header>
      <Button className="view-all-button" onClick={viewAllGamesButton}>View All <span className="button-span">+</span></Button>
    </div>
    <div>
      <Card.Group itemsPerRow={2}>
        <GameCard />
        <GameCard />
      </Card.Group>
    </div>
  </div>
);

export default MainPage;